import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeNeuralBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE & CAMERA (2D Plane with custom fragment shader for silky liquid fluid simulation)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // MOUSE & SCROLL STATE FOR FLUID PHYSICS
    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    let scrollY = 0;
    let targetScrollY = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - e.clientY / window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
      const delta = Math.abs(window.scrollY - lastScrollY);
      scrollVelocity = Math.min(scrollVelocity + delta * 0.003, 0.08);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // CUSTOM AWWWARDS-GRADE LIQUID CHROMATIC METAL SHADER
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      uniform float u_velocity;
      varying vec2 vUv;

      // Simplex-like 2D Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                           -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // Interactive mouse distortion ripple
        vec2 mouseSt = u_mouse;
        mouseSt.x *= u_resolution.x / u_resolution.y;
        float mouseDist = distance(st, mouseSt);
        float mouseWave = sin(mouseDist * 18.0 - u_time * 3.0) * exp(-mouseDist * 3.5);

        // Fluid time & scroll distortion coordinates
        float t = u_time * 0.18 + u_scroll * 0.0004;
        vec2 q = vec2(0.0);
        q.x = snoise(st + vec2(t * 0.8, t * 0.6) + mouseWave * 0.08);
        q.y = snoise(st + vec2(t * 0.5, -t * 0.7) - mouseWave * 0.08);

        vec2 r = vec2(0.0);
        r.x = snoise(st + 1.2 * q + vec2(1.7, 9.2) + 0.15 * t);
        r.y = snoise(st + 1.2 * q + vec2(8.3, 2.8) + 0.126 * t);

        float f = snoise(st + 1.5 * r + vec2(u_velocity * 2.0, 0.0));

        // Luxurious Adchitects Dark Obsidian Palette
        // Deep obsidian base -> Electric Indigo -> Cyan highlight -> Royal Purple rim
        vec3 colorBg = vec3(0.027, 0.031, 0.047);       // #07080c deep charcoal obsidian
        vec3 colorIndigo = vec3(0.12, 0.14, 0.32);     // #1f2452 rich dark indigo
        vec3 colorElectric = vec3(0.08, 0.35, 0.62);   // #14599e electric cyan-cobalt
        vec3 colorViolet = vec3(0.28, 0.11, 0.42);     // #471c6b dark royal amethyst
        vec3 colorHighlight = vec3(0.35, 0.75, 0.95);  // #59bfe3 iridescent edge

        // Smooth multi-layer color mix
        float mix1 = clamp((f * f) * 2.8, 0.0, 1.0);
        float mix2 = clamp(length(q) * 0.85, 0.0, 1.0);
        float mix3 = clamp(length(r.x) * 0.9, 0.0, 1.0);

        vec3 col = mix(colorBg, colorIndigo, mix1 * 0.85);
        col = mix(col, colorViolet, mix2 * 0.6);
        col = mix(col, colorElectric, mix3 * 0.45);

        // Subtle chromatic edge glare along wave crests
        float edge = smoothstep(0.45, 0.75, f);
        col += colorHighlight * edge * 0.18;

        // Vignette to keep text zone ultra-clean & dark
        vec2 uvCenter = vUv - 0.5;
        float vignette = 1.0 - dot(uvCenter, uvCenter) * 0.85;
        col *= vignette;

        // Subtle analog film grain for tactile agency texture
        float grain = (fract(sin(dot(vUv, vec2(12.9898, 78.233) + u_time)) * 43758.5453) - 0.5) * 0.025;
        col += grain;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_scroll: { value: 0 },
      u_velocity: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // RESIZE
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (targetMouse.x - mouse.x) * 0.06;
      mouse.y += (targetMouse.y - mouse.y) * 0.06;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.06;
      scrollVelocity *= 0.92;

      uniforms.u_time.value = elapsedTime;
      uniforms.u_mouse.value.set(mouse.x, mouse.y);
      uniforms.u_scroll.value = scrollY;
      uniforms.u_velocity.value = scrollVelocity;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Liquid Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
