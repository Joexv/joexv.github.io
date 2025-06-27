  console.log("JS running!");
  let cheeseInterval, typeitInstance, threeRAF, threeRenderer, threeCamera, threeScene;

  function initPage() {
    console.log("InitPage Triggered");
    if (cheeseInterval) { clearInterval(cheeseInterval); }
    if (typeitInstance) { typeitInstance.destroy(); }
    if (threeRAF) { cancelAnimationFrame(threeRAF); }

    // THREE.js background
    const canvas = document.getElementById('bgCanvas');
    if (!threeRenderer) {
      threeRenderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      threeCamera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, .1, 1000);
      threeCamera.position.z = 5;
      threeScene = new THREE.Scene();
      const geo = new THREE.BufferGeometry(),
        pts = 5000,
        arr = new Float32Array(pts * 3);
      for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - .5) * 20;
      geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
      threeScene.add(new THREE.Points(
        geo,
        new THREE.PointsMaterial({ color: 0x00ff00, size: 0.05 })
      ));
      window.addEventListener('resize', onResize);
    }

    threeRenderer.setSize(innerWidth, innerHeight);

    function renderLoop() {
      threeRAF = requestAnimationFrame(renderLoop);
      threeScene.children[0].rotation.y += .0005;
      threeRenderer.render(threeScene, threeCamera);
    }
    renderLoop();

    function onResize() {
      threeRenderer.setSize(innerWidth, innerHeight);
      threeCamera.aspect = innerWidth / innerHeight;
      threeCamera.updateProjectionMatrix();
    }

    // TypeIt headline
    document.getElementById('typewriter').textContent = '';
    typeitInstance = new TypeIt('#typewriter', {
      strings: [
        'Game Designer',
        'Systems Designer',
        'Rapid Prototyper',
        'Level Designer',
        'Combat Systems Architect',
        'Prototype Developer'
      ],
      speed: 100,
      breakLines: false,
      loop: true
    }).go();

    // Cheese counter
    const cheeseEl = document.getElementById('cheeseCount');
    let cheese = Math.floor(Date.now() * 0.000001);
    cheeseEl.textContent = cheese;
    cheeseInterval = setInterval(() => cheeseEl.textContent = ++cheese, 2000);

    // AOS
    AOS.init({ duration: 800, offset: 100 });
  }
  document.addEventListener('DOMContentLoaded', initPage);
  window.addEventListener('load', initPage);
  window.addEventListener('pageshow', initPage);