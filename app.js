//variables for setup...

let container;
let camera;
let renderer;
let scene;
let virus;



function init() {
    container = document.querySelector(".scene");
    //create scene
    scene = new THREE.Scene();
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
    //camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(120, 60, 350);
    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 1, 1);
    scene.add(light);
    //renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);


    //load model
    let loader = new THREE.GLTFLoader();
    loader.load('3d/scene.gltf', function (gltf) {
        scene.add(gltf.scene);
        virus = gltf.scene.children[0];
        animate();
    });


}

function animate() {
    requestAnimationFrame(animate);
    virus.rotation.x += 0.009;
    virus.rotation.y += 0.009;
    virus.rotation.z += 0.009;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    //set the size on resize...
    renderer.setSize(container.clientWidth, container.clientHeight);
}
window.addEventListener('resize', onWindowResize);
init();