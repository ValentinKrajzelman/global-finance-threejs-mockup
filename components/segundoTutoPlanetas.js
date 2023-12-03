import * as three from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const escena = new three.Scene();
const raycaster = new three.Raycaster();
const ambientLight = new three.AmbientLight(0xfffffff);
const gui = new dat.GUI();
const options = {};

const camera = new PerspectiveCamera(75, 1.7, 0.1, 1000);
camera.position.set(0, 2, 5);

const mousePosition = new three.Vector2();
window.addEventListener("mousemove", function (e) {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = (e.clientY / window.innerHeight) * -2 + 1;
});


escena.add(cube, helper, spotLight, plano);