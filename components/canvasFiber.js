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

import * as three from "three"
import * as dat from "dat.gui"

import playa from "../public/playa.png"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const gui = new dat.GUI();

const options = {
  sphereColor: '#ffea00',
  wireframe: false,
  speed: 0.01,
  angle: 1,
  penumbra: 1,
  intensity: 1
}

const scene = new Scene();
//luz ambiente ilumina todos lados por igual
// const ambientLight = new three.AmbientLight(0xFFFFFFF);

//sacamos la posicion normalizada del mouse
const mousePosition = new three.Vector2;
window.addEventListener('mousemove', function(e){
  mousePosition.x = (e.clientX / window.innerWidth) * 2 -1;
  mousePosition.y = (e.clientY / window.innerHeight) * 2 -1;
})

//declaramos un raycaster
const raycaster = new three.Raycaster();

//luz direccional, apunta a todos lados desde su punto de partida
const directionalLight = new three.DirectionalLight(0xFFFFFFF, 0.8);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;

const dlightHelper = new three.DirectionalLightHelper(directionalLight, 1);
//nuevo objeto de lineas helper para la camara de las directional lights, para 
//ver a que altura del plano se proyecta la sombra
const dlightShadowHelper = new three.CameraHelper(directionalLight.shadow.camera);

//luz spotlight, tiene un area de efecto limitado por un angulo
const spotLight = new three.SpotLight(0xFFFFFFF);
//decay es la medida por la que la luz pierde intensidad con la distancia
spotLight.decay = 0;
spotLight.position.set(-10, 15, 0);
spotLight.castShadow = true;
//por la distancia de la spotlight a menos que se le reduzca el angulo de efecto, la sombra
//proyectada se va a ver borrosa probablemente por que utiliza los rayos simulados de una manera mas 
//concentrada
// spotLight.angle = 0.2;

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;

// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;

const slighthelper = new three.SpotLightHelper(spotLight);
scene.add(slighthelper)

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
// camera.position.z = 5;
camera.position.set(0, 2, 5)



//creamos las variables que contienen la geometria y el material del mesh
const geometry = new BoxGeometry();
const material = new three.MeshStandardMaterial();
//creamos un mesh
const cube = new Mesh(geometry, material);
cube.castShadow = true;
cube.position.set(-3, 0, 0);

const planoGeo = new three.PlaneGeometry(30, 30);
const materialPlano = new three.MeshStandardMaterial();
const plano = new Mesh(planoGeo, materialPlano);
plano.rotation.x = -0.5 * Math.PI;
plano.receiveShadow = true;

//asignamos las variables a nuestro mesh, lo hacemos un cubo
// cube.geometry = geometry;
// cube.material = material;

//una grilla de referencia
const helper = new three.GridHelper(30)

//agregamos todos los componentes se agregan a escena
scene.add(cube, helper, spotLight, plano);
// scene.add(cube, helper, spotLight, directionalLight, dlightHelper, dlightShadowHelper, plano);



//render, el webglrenderer es el mas comun, hay que especificar
//alpha true para que el canvas sea transparente sino
//va a mostrar un background en negro solido
const renderer = new WebGLRenderer({ alpha: true });
//le damos al canvas el tamaño de la pantalla
renderer.setSize(1000 * 1.7, 1000);
renderer.shadowMap.enabled = true;

//pone un color de background
// renderer.setClearColor(0xFFEA0);
//pone una imagen plana de background
const textureLoader = new three.TextureLoader();
scene.background = textureLoader.load(playa.src);

//inicializamos otra caja y le ponemos una imagen como textura (para todas las caras)
const box2Geo = new three.BoxGeometry(2, 2, 2);
const box2Mat = new three.MeshStandardMaterial({
  map: textureLoader.load(playa.src)
})

//un array de materiales para definir el de cada cara
// const box2MulMat = [
//   new three.MeshStandardMaterial({ color: 0x00ff00 }),
//   new three.MeshStandardMaterial({ color: 0x00ff00 }),
//   new three.MeshStandardMaterial({ color: 0x00ff00 }),
//   new three.MeshStandardMaterial({ color: 0x00ff00 }),
//   new three.MeshStandardMaterial({map: textureLoader.load(playa.src)}),
//   si sacas uno de estos materiales, se va a renderizar esa cara sin ningun material
//   new three.MeshStandardMaterial({map: textureLoader.load(playa.src)}),
// ]

//hacemos un mesh con un solo material para cada cara
const box2 = new three.Mesh(box2Geo, box2Mat);
//hacemos un mesh definiendo el material de cada cara
// const box2 = new three.Mesh(box2Geo, box2MulMat);
scene.add(box2);
box2.position.set(5, 5, 5);
const sphereId = box2.id;
console.log(box2.id);

//fog deja de mostrar los mesh a medida que te alejas de ellos
//esta primera opcion de implementacion hace que se sobreponga linealmente sobre los mesh 
// scene.fog = new three.Fog(0xFF0066,0,200);
//esta segunda opcion de implementacion hace que se sobreponga exponencialmente sobre los mesh 
// scene.fog = new three.Fog(0xFF0066,0,200);

//buscamos el lugar en la app donde queremos renderizar el canvas
const container = document.getElementById("asdf");

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
//si existe el elemento renderizamos el canvas ahi
if (container) {
  container.appendChild(renderer.domElement);
}

//gui es un grupo de herramientas que nos permite cambiar en tiempo real una serie de variables definidas en 
//un objeto options, en este caso lo usamos para modificar colores, si es o no wireframe, y la velocidad del cubo
gui.addColor(options, 'sphereColor').onChange(function (e) {
  cube.material.color.set(e);
});
gui.add(options, 'wireframe').onChange(function (e) {
  cube.material.wireframe = e;
});
gui.add(options, 'speed', 0, 0.1);

//opciones para la spotlight
gui.add(options, 'angle', 0, 1);
gui.add(options, 'penumbra', 0, 1);
gui.add(options, 'intensity', 0, 1);

//animate es una funcion que se llama por cada frame de la escena
let step = 0;
function animate() {
  requestAnimationFrame(animate);
  
  //animamos el movimiento del cubo
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;
  
  //actualizamos la posicion de la spotlight asi se aplican los cambios que hagamos en el gui
  spotLight.angle = options.angle;
  spotLight.penumbra = options.penumbra;
  spotLight.intensity = options.intensity;
  slighthelper.update();
  
  raycaster.setFromCamera(mousePosition, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  console.log(intersects);
  
  for(let i=0;i<intersects.length;i++){
    if(intersects[i].object.id === sphereId){
      // intersects[i].object.material.color.set(0xFF0066);
      intersects[i].object.rotation.y += 0.01;
      intersects[i].object.rotation.x += 0.01; 
    }
  }
  
  
  step += options.speed;
  cube.position.y = 10 * Math.abs(Math.sin(step));

  renderer.render(scene, camera);
}

animate();