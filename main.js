import "./style.css";
import Experience from "./Experience/Experience.js";
import * as THREE from 'three';


// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfaf4e5);

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a spinning cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xe5a1aa });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0x7ad0ac, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Responsive resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

const experience = new Experience(document.querySelector(".experience-canvas"));
