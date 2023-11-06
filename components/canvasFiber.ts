//puse al reves los nombres lmao

//three.js renderiza el contentenido como una serie de clases a
//las que les declaramos sus propiedades
//para manipular su comportamiento

import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";


  const scene = new Scene();
  
  //declaramos una camara, field of view, ratio de aspecto, distacia
  //inicia de vista y distancia final
  const camera = new PerspectiveCamera(
    75,
    1.7,
    0.1,
    1000
    );
    
    //movemos la camara para que se vea nuestro mesh, por que el default 
    //tanto de la camara como del cubo es (0,0,0)
    camera.position.z = 5;
    
    //creamos un mesh
    const cube = new Mesh();
    
    //creamos las variables que contienen la geometria y el material del mesh
    const geometry = new BoxGeometry();
    const material = new MeshStandardMaterial();
    
    //asignamos las variables a nuestro mesh, lo hacemos un cubo
    cube.geometry = geometry;
    cube.material = material;
    
    scene.add(cube);
    
    //render, el webglrenderer es el mas comun, hay que especificar
    //alpha true para que el canvas sea transparente sino
    //va a mostrar un background en negro solido
    const renderer = new WebGLRenderer({ alpha: true });
    //le damos al canvas el tamaño de la pantalla
    renderer.setSize(1000*1.7, 1000);
    
    //buscamos el lugar en la app donde queremos renderizar el canvas
    const container = document.getElementById("asdf");
    
    //si existe el elemento renderizamos el canvas ahi
    if (container) {
      container.appendChild(renderer.domElement);
    }
  
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      cube.rotation.y += 0.01;
      cube.rotation.x += 0.01;

    }
    
    animate();