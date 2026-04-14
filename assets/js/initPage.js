  console.log("JS running!");
  let cheeseInterval, typeitInstance, threeRAF, threeRenderer, threeCamera, threeScene;
  let cheese = Math.floor(Date.now() * 0.000001); // init once, never reset

  function updateCheese() {
    const main = document.getElementById('cheeseCount');
    const sidebar = document.getElementById('sidebarCheeseCount');
    if (main) main.textContent = cheese;
    if (sidebar) sidebar.textContent = cheese;
  }

  function injectSidebarCheese() {
    const nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    const existing = document.getElementById('sidebar-cheese');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.id = 'sidebar-cheese';
    el.style.cssText = 'padding: 0.75rem 1.5rem 0.5rem; text-align: center; color: white; opacity: 0.85;';
    el.innerHTML = '<div id="sidebarCheeseCount" style="font-size:1.4rem;font-weight:bold;color:inherit">' + cheese + '</div><div style="font-size:0.75rem;margin-top:0.25rem">🧀 cheese blocks consumed while developing</div>';
    nav.after(el);
  }

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

    // Sidebar cheese injection + counter
    injectSidebarCheese();
    updateCheese();
    cheeseInterval = setInterval(() => { ++cheese; updateCheese(); }, 2000);

    // Sticky navbar — add .scrolled class when user scrolls past hero
    const navbar = document.getElementById('_navbar');
    if (navbar) {
      const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // About blurb scroll reveal — reset then observe
    const aboutBlurb = document.getElementById('about-blurb');
    if (aboutBlurb) {
      aboutBlurb.classList.remove('visible');
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          aboutBlurb.classList.add('visible');
          observer.disconnect();
        }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      observer.observe(aboutBlurb);
    }

    // AOS
    AOS.init({ duration: 800, offset: 100 });
  }
  document.addEventListener('DOMContentLoaded', initPage);
  window.addEventListener('load', initPage);
  window.addEventListener('pageshow', initPage);