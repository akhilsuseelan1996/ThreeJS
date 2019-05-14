var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotBufferGeometry(10, 3, 100, 10);
var material = new THREE.MeshBasicMaterial({
  color: 0x6b0202,
  wireframe: true,
  transparent: true
});
var torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

var geometry = new THREE.SphereGeometry(2, 32, 32);
var material = new THREE.MeshBasicMaterial({
  color: 0x02116b,
  wireframe: true,
  transparent: false
});
var sphereFrame = new THREE.Mesh(geometry, material);
scene.add(sphereFrame);

camera.position.z = 40;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.02;
  torusKnot.rotation.y += 0.02;
  sphereFrame.rotation.x -= 0.01;
  sphereFrame.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();
