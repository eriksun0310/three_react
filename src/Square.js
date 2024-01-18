import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'

// 一個正方形
const Square = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // 將滑鼠位置映射到 [-1, 1] 的範圍
      const normalizedX = (clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(clientY / window.innerHeight) * 2 + 1;

      // 計算旋轉的角度，這裡可以根據需求進行調整
      rotationX = normalizedY * Math.PI;
      rotationY = normalizedX * Math.PI;
    };

    const initThreeScene = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGL1Renderer();
      
      containerRef.current.appendChild(renderer.domElement);

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);
      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);

        // 直接設定 cube 的旋轉角度
        cube.rotation.x = rotationX;
        cube.rotation.y = rotationY;

        //相機焦點
        camera.lookAt(scene.position);// 觀察場景固定位置

        renderer.render(scene, camera);
      };

      animate();
    };

    initThreeScene();

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div ref={containerRef} />;
};

export default Square;
