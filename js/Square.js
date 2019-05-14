//Core three concept to set a scene -> scene, camera and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

//Basic Cube
var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshPhongMaterial(
  { color: 0x03122d },
  { flatShading: true },
  { metalness: 0 },
  { roughness: 1 }
);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//wireFrame
var geometry = new THREE.BoxGeometry(5, 5, 5, 5, 5);
var material = new THREE.MeshPhongMaterial({
  color: 0x6b0202,
  wireframe: true,
  transparent: true
});
var wireframeCube = new THREE.Mesh(geometry, material);
scene.add(wireframeCube);

camera.position.z = 8;

// To render anything call animate loop or render function
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.04;
  cube.rotation.y += 0.04;
  wireframeCube.rotation.x -= 0.01;
  wireframeCube.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();

//Adding light to render the 3D object
var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);
