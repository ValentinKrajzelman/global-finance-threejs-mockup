import * as three from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import stars from "../public/stars.jpg";

const doggo = new URL("../public/doggo2.glb", import.meta.url);

const escena = new three.Scene();
// const raycaster = new three.Raycaster();
const ambientLight = new three.AmbientLight(0xfffffff);
const gui = new dat.GUI();
const options = {
  rotation: 0,
  rotation2: 0,
};
gui.add(options, "rotation", 0, 6.2831);
gui.add(options, "rotation2", 0, 6.2831);
const camera = new three.PerspectiveCamera(75, 1.7, 0.1, 1000);
camera.position.set(0, 2, 5);

const mousePosition = new three.Vector2();
window.addEventListener("mousemove", function (e) {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = (e.clientY / window.innerHeight) * -2 + 1;
});

const assetLoader = new GLTFLoader();

let mixer;
assetLoader.load(
  doggo.href,
  function (gltf) {
    const model = gltf.scene;
    escena.add(model);
    mixer = new three.AnimationMixer(model);
    const clips = gltf.animations;
    //aca cargamos una animacion a la que se le dio nombre, por ejemplo en blender
    // const clip = three.AnimationClip.findByName(clips, 'HeadAction');
    // const action = mixer.clipAction(clip);
    // action.play();
    //aca cargamos todas las animaciones
    clips.forEach(function(clip){
      const action = mixer.clipAction(clip);
      action.play();
    })
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const textureLoader = new three.CubeTextureLoader();
escena.background = textureLoader.load([
  stars.src,
  stars.src,
  stars.src,
  stars.src,
  stars.src,
  stars.src,
]);

const planoGeo = new three.PlaneGeometry(30, 30);
const materialPlano = new three.MeshStandardMaterial();
const plano = new three.Mesh(planoGeo, materialPlano);
plano.rotation.x = -0.5 * Math.PI;
plano.receiveShadow = true;

const helper = new three.GridHelper(30);

escena.add(ambientLight, plano, helper);

const renderer = new three.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const container = document.getElementById("tercerTuto");
//esa linea renderiza el renderer en el elemento especificado, sino podemos
//appendearlo directamente al body del document
// document.body.appendChild(renderer.domElement);

if (container) {
  container.appendChild(renderer.domElement);
}

const clock = new three.Clock();
function animate() {
  requestAnimationFrame(animate);
  if(mixer){
    mixer.update(clock.getDelta());
  }

  renderer.render(escena, camera);
}

animate();
