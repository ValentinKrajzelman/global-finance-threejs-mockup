import * as three from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import stars from "../public/stars.jpg";

const escena = new three.Scene();
// const raycaster = new three.Raycaster();
const ambientLight = new three.AmbientLight(0xfffffff);
const gui = new dat.GUI();
const options = {
  rotation:0,
  rotation2:0
};
gui.add(options, 'rotation', 0, 6.2831);
gui.add(options, 'rotation2', 0, 6.2831);
const camera = new three.PerspectiveCamera(75, 1.7, 0.1, 1000);
camera.position.set(0, 2, 5);

const mousePosition = new three.Vector2();
window.addEventListener("mousemove", function (e) {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = (e.clientY / window.innerHeight) * -2 + 1;
});

const textureLoader = new three.CubeTextureLoader();
escena.background = textureLoader.load([
  stars.src,
  stars.src,
  stars.src,
  stars.src,
  stars.src,
  stars.src
]);

const geometry = new three.SphereGeometry();
const material = new three.MeshStandardMaterial();
const cube = new three.Mesh(geometry, material);
cube.material.color.set(0xff0066);
// cube.castShadow = true;
// cube.position.set(-3, 0, 0);

const geometry2 = new three.SphereGeometry();
const material2 = new three.MeshStandardMaterial();
const cube2 = new three.Mesh(geometry2, material2);
cube2.material.color.set(0xff0066);
cube2.position.set(-3, 0, 0);
cube.add(cube2);

escena.add(cube, ambientLight);

const renderer = new three.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const container = document.getElementById("tercerTuto");
if (container) {
  container.appendChild(renderer.domElement);
}

cube.rotation.z = 0.6;

function animate() {
  requestAnimationFrame(animate);
  cube.rotateZ(-0.004);
  cube.rotateY(0.005);
  // cube.rotation.y = options.rotation;
  // cube.rotation.z = options.rotation2;

  renderer.render(escena, camera);
}

animate();
