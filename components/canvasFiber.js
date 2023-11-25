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

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const gui = new dat.GUI();

const options = {
  sphereColor: '#ffea00',
  wireframe: false,
  speed: 0.01
}

const scene = new Scene();
//luz ambiente ilumina todos lados por igual
// const ambientLight = new three.AmbientLight(0xFFFFFFF);

//luz direccional, apunta a todos lados desde su punto de partida
const directionalLight = new three.DirectionalLight(0xFFFFFFF, 0.8);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;

const dlightHelper = new three.DirectionalLightHelper(directionalLight, 1);
//nuevo objeto de lineas helper para la camara de las directional lights, para 
//ver a que altura del plano se proyecta la sombra
const dlightShadowHelper = new three.CameraHelper(directionalLight.shadow.camera);

const spotLight = new three.SpotLight(0xFFFFFFF);
spotLight.decay = 0;

spotLight.position.set(0, 5, 0);
// spotLight.castShadow = true;
// spotLight.angle = 0.2;

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;

// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;

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

//animate es una funcion que se llama por cada frame de la escena
let step = 0;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;

  step += options.speed;
  cube.position.y = 10 * Math.abs(Math.sin(step));
}

animate();