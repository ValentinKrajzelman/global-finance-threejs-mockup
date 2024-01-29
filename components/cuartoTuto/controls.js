//esta es la funcion que se encarga de aplicar el efecto de cada tecla en el juego
//se llama la funcion principal en cada re-render para aplicar los efectos

export let controls = {};

//esta es la funcion que se aplica mas abajo para la velocidad del turbo
function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

//event listener para saber cuando se presiona una tecla 
window.addEventListener("keydown", (e) => {
    controls[e.key.toLowerCase()] = true;
});

//event listener para saber cuando se deja de presionar
window.addEventListener("keyup", (e) => {
  controls[e.key.toLowerCase()] = false;
});

//inicializa todos los valores por fuera de la funcion
let maxVelocity = 0.04;
let jawVelocity = 0;
let pitchVelocity = 0;
let planeSpeed = 0.006;
export let turbo = 0;
export function updatePlaneAxis(x, y, z, planePosition, camera) {
  //reduce la velocidad
  jawVelocity *= 0.95;
  pitchVelocity *= 0.95;

  //verifica que no se alcanze la vel max y si es el caso vuelve el valor a vel max
  if (Math.abs(jawVelocity) > maxVelocity) 
  //math.sign indica si es positivo o negativo y lo multiplica por velmax para obligar a quede con el valor maximo
    jawVelocity = Math.sign(jawVelocity) * maxVelocity;

    //lo mismo que arriba
  if (Math.abs(pitchVelocity) > maxVelocity) 
    pitchVelocity = Math.sign(pitchVelocity) * maxVelocity;

    //toma cada techa y le da el efecto correspondiente
  if (controls["a"]) {
    jawVelocity += 0.0025;
  }

  if (controls["d"]) {
    jawVelocity -= 0.0025;
  }

  if (controls["w"]) {
    pitchVelocity -= 0.0025;
  }

  if (controls["s"]) {
    pitchVelocity += 0.0025;
  }

  if (controls["r"]) {
    jawVelocity = 0;
    pitchVelocity = 0;
    turbo = 0;
    x.set(1, 0, 0);
    y.set(0, 1, 0);
    z.set(0, 0, 1);
    planePosition.set(0, 3, 7);
  }

  //aplica los angulos al avion mediante los ejes que se definen en el componente del avion y 
  //se pasan por argumentos de la funcion, 
  //al parecer afecta los objetos en el archivo airplane
  x.applyAxisAngle(z, jawVelocity);
  y.applyAxisAngle(z, jawVelocity);

  y.applyAxisAngle(x, pitchVelocity);
  z.applyAxisAngle(x, pitchVelocity);
  
  // console.log(x)

  //no se que hace pero normaliza los valores, applyaxisangle requiere que sean valores normalizados
  x.normalize();
  y.normalize();
  z.normalize();

  // console.log(x)

  // aplica el efecto del turbo
  if (controls.shift) {
    turbo += 0.025;
  } else {
    turbo *= 0.95;
  }
  turbo = Math.min(Math.max(turbo, 0), 1);

   //esto le da un efecto a la aplicacion del turbo "easeOut" que es una funcion 
  let turboSpeed = easeOutQuad(turbo) * 0.02;

  //le da el efecto visual de velocidad al turbo
  camera.fov = 45 + turboSpeed * 900;
  camera.updateProjectionMatrix();

  planePosition.add(z.clone().multiplyScalar(-planeSpeed -turboSpeed));
}