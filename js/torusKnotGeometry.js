var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotBufferGeometry(10, 3, 100, 10);
var material = new THREE.MeshPhongMaterial({
  color: 0x6b0202,
  wireframe: true,
  transparent: true
});
var torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

var geometry = new THREE.SphereGeometry(2, 32, 32);
var material = new THREE.MeshPhongMaterial({
  color: 0x03122d,
  wireframe: true,
  transparent: true
});
var sphereFrame = new THREE.Mesh(geometry, material);
scene.add(sphereFrame);

var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.02;
  torusKnot.rotation.y += 0.02;
  sphereFrame.rotation.x -= 0.01;
  sphereFrame.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();
