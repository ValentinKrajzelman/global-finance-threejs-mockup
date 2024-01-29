/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/assets/models/airplane.glb
*/

// este componente carga el modelo del avion esta generado automaticamente, ademas aplica la logica que pongamos dentro de useFrame
// en cada re-render

//en este proyecto se usa un modo alternativo de mover los mesh en la escena, donde lo normal seria usar position y manipular eso
//aca usamos un sistema de matrix4 donde

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Matrix4, Vector3, Quaternion } from "three";
import { useFrame } from "@react-three/fiber";
import { updatePlaneAxis } from "./controls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//posicion original de los vectores que se usan para marcar la rotacion
//del mesh
const x = new Vector3(1, 0, 0);
const y = new Vector3(0, 1, 0);
const z = new Vector3(0, 0, 1);
//posicion original del avion
export const planePosition = new Vector3(0, 3, 7);

//esto se usa para el efecto retardante del giro de la camara
//es decir que la camara gira despues del avion
const delayedRotMatrix = new Matrix4();
//lo de abajo se usa para algo llamado interpolacion esferica(spherical interpolation)
const delayedQuaternion = new Quaternion();

export function Airplane(props) {
  // thanks to:
  // https://sketchfab.com/3d-models/vintage-toy-airplane-7de2ecbc0acb4b1886c3df3d196c366b

  // useGlTF devuelve un elemento con nodes y materials
  const { nodes, materials } = useGLTF("airplane.glb");
  //los ref que utilizamos para aplicar a los modelos las propiedades
  const groupRef = useRef();
  const helixMeshRef = useRef();

  // esto se ejecuta en cada re-render, le pedimos en las props los elementos de la escena que vamos a usar
  //camera toma sea cual sea la default
  useFrame(({ camera }) => {
    //desplazamiento automatico del avion en cada frame
    // planePosition.add(new Vector3(0, 0, -0.005));

    //la funcion del archivo controls, sirve para recibir el input del user y modifica la posicion 
    updatePlaneAxis(x, y, z, planePosition, camera);

    //la matrix de rotacion para el avion
    const rotMatrix = new Matrix4().makeBasis(x, y, z);

    //aca esta declarando una matrix4 por cada render, que a su vez se multiply con otras matrix
    //que es como aplicar el contenido de una en la otra para eso se declara una nueva matrix
    const matrix = new Matrix4()
      .multiply(
        new Matrix4().makeTranslation(
          planePosition.x,
          planePosition.y,
          planePosition.z
        )
      )
      .multiply(rotMatrix);

    //aca le indica a three que no caiga en un par comportamientos default con respecto al avion
    groupRef.current.matrixAutoUpdate = false;
    groupRef.current.matrix.copy(matrix);
    groupRef.current.matrixWorldNeedsUpdate = true;

    //aca tenemos dos quaternion que representan cada uno la rotacion de la camara(a) y del avion(b)
    var quaternionA = new Quaternion().copy(delayedQuaternion);
    var quaternionB = new Quaternion();
    quaternionB.setFromRotationMatrix(rotMatrix);

    var interpolationFactor = 0.175;
    var interpolatedQuaternion = new Quaternion().copy(quaternionA);
    interpolatedQuaternion.slerp(quaternionB, interpolationFactor);
    delayedQuaternion.copy(interpolatedQuaternion);
 
    delayedRotMatrix.identity();
    delayedRotMatrix.makeRotationFromQuaternion(delayedQuaternion);

    //aca manejamos la posicion de la camara, se mueve junto con el avion en una posicion y angulo fijo
    const cameraMatrix = new Matrix4()
    //esto hace que siga el avion
      .multiply(
        new Matrix4().makeTranslation(
          planePosition.x,
          planePosition.y,
          planePosition.z
        )
      )
      //esto rota la camara
      .multiply(new Matrix4().makeRotationX(-0.2))
      //esto no solo hace girar la camara junto con el avion sino que retrasa el movimiento un poco para darle un mejor efecto
      .multiply(delayedRotMatrix)
      //esto pone la camara atras del avion
      .multiply(new Matrix4().makeTranslation(0, 0.015, 0.3));
    //lo mismo con respecto a la camara
    camera.matrixAutoUpdate = false;
    camera.matrix.copy(cameraMatrix);
    camera.matrixWorldNeedsUpdate = true;

    helixMeshRef.current.rotation.z -= 1;
  });

  return (
    <>
      <group ref={groupRef}>
        <group {...props} dispose={null} scale={0.01} rotation-y={Math.PI}>
          <mesh
            geometry={nodes.supports.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.chassis.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.helix.geometry}
            material={materials["Material.005"]}
            ref={helixMeshRef}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("assets/models/airplane.glb");
