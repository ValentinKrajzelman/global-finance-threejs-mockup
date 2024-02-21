import { useFrame } from "@react-three/fiber";
import { useState, useMemo } from "react";
import { Quaternion, TorusGeometry, Vector3 } from "three";
import { mergeBufferGeometries } from "three-stdlib";
import { planePosition } from "./Airplane";

//genera los puntos random que usa el for de abajo
function randomPoint(scale) {
  return new Vector3(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 2 - 1
  ).multiply(scale || new Vector3(1, 1, 1));
}

const TARGET_RAD = 0.125;

export function Targets() {
  
  //en este state tenemos la coleccion de posiciones donde van a ir los circulos
  //con una posicion del centro y la direccion a la que apunta
  const [targets, setTargets] = useState(() => {
    const arr = [];
    
    for (let i = 0; i < 25; i++) {
      arr.push({
        center: randomPoint(new Vector3(4, 1, 4)).add(
          new Vector3(0, 2 + Math.random() * 2, 0)
        ),
        direction: randomPoint().normalize(),
      });
    }

    return arr;
  });


  //esta es la coleccion de circulos que se renderiza en el return, y solo se vuelve a crear este mesh si cambia la 
  //cantidad de circulos en el state
  const geometry = useMemo(() => {
    let geo;

    //por una cuestion de rendimiento en vez de crear un mesh por cada circulo se crea un solo mesh
    //que contiene todos los circulos dentro, cada vez que cambia la cantidad de circulos se vuelve a crear 
    //el mesh, es mas performate que la otra alternativa
    targets.forEach((target) => {
      //crea un nuevo circulo
      const torusGeo = new TorusGeometry(TARGET_RAD, 0.02, 8, 25);
      //aplica una direccion sobre el circulo usando un quaternion
      torusGeo.applyQuaternion(
        new Quaternion().setFromUnitVectors(
          new Vector3(0, 0, 1),
          target.direction
        )
      );
      //setea la posicion del circulo con los datos del state
      torusGeo.translate(target.center.x, target.center.y, target.center.z);
      //pone el nuevo circulo en la variable que se renderiza en el mesh
      if (!geo) geo = torusGeo;
      else geo = mergeBufferGeometries([geo, torusGeo]);
    });

    return geo;
  }, [targets]);

  //este useFrame se usa para buscar colisiones del avion con el interior de los circulos,
  //especificamente lo que hace es medir una zona con forma esfera desde el punto del circulo
  //que esta en el medio del mismo, asi que tecnicamente no hay que pasar por el medio 
  useFrame(() => {
    //por cada aro toma la posicion del aro y la posicion del avion y mide la diferencia entre los dos
    targets.forEach((target, i) => {
      //v es la diferencia entre los dos
      const v = planePosition.clone().sub(target.center);
      //no estoy seguro que hacen estas dos lineas
      const dist = target.direction.dot(v);
      const projected = planePosition
        .clone()
        .sub(target.direction.clone().multiplyScalar(dist));

        //aca mide la distancia usando las variables de arriba y un radio que es una esfera alrededor del centro
      const hitDist = projected.distanceTo(target.center);
      if (hitDist < TARGET_RAD && Math.abs(dist) < 0.05) {
        target.hit = true;
      }
    });
    //pregunta si hubo un hit, y saca el circulo correspondiente
    const atLeastOneHit = targets.find((target) => target.hit);
    if (atLeastOneHit) {
      setTargets(targets.filter((target) => !target.hit));
    }
  });

  //retorna el mesh creado arriba
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial roughness={0.5} metalness={0.5} />
    </mesh>
  );
}
