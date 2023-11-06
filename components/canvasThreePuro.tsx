//este es fiber actually 
//esta library es un wrapper del three que se encarga de transformar la sintaxis de clases de three 
//en una de componentes para el jsx de react, ademas vienen con varias pre-configuraciones que lo 
//hacen bastante menos verboso pero tiene las mismas capacidades de three, todo lo configurable en 
//three lo es tambien en fiber, al ser un wrapper es simplemente una modificacion de sintaxis en compilacion 

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

export default function Cuadrado() {
  return (
    <Canvas >
      
      {/* esta es una camara importada de drei que es compatible con hot reload */}
      {/* <PerspectiveCamera makeDefault fov={75} position={[0,0,5]}/> */}
      <mesh>
        {/* normalmente en fiber un componente child de otro esta nestedado (.add(componente)) pero en el caso especial de 
        los dos componentes de abajo son tratados como propiedades del objeto mesh una vez compiladas
        a three por que por default se les asigna la propiedad attach que triggerea ese comportamiento*/}
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
    </Canvas>
  );
}
