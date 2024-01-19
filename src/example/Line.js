import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// 載入3D 模型:dog
// 用free3D 
const Line = () => {

  // 產生一個場景
  const scene = new THREE.Scene()

  // 產生一個相機 PerspectiveCamera (透視相機)
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )

  // 設定相機位置
  camera.position.set(0,0,90)



  // 選定渲染器
  const renderer = new THREE.WebGLRenderer()

  // 初始化渲染畫面尺寸
  renderer.setSize(window.innerWidth, window.innerHeight) //場景大小

  // 預設背景顏色
  // renderer.setClearColor(0x7B7B7B, 1.0) 
  // 陰影效果 (之後在物體與光源的互動才有辦法產生影子)
  // renderer.shadowMap.enabled = true


  // 將渲染器的DOM 綁到網頁上
  document.body.appendChild(renderer.domElement)


  // 設定軌道控制器, 讓相機可以環繞觀察場景
  const controls = new OrbitControls(camera, renderer.domElement)
  
  controls.update()

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff})

  const points = []

  points.push( new THREE.Vector3(-10,0,0))
  points.push( new THREE.Vector3(0,10,0))
  points.push( new THREE.Vector3(10,0,0))


  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const line = new THREE.Line(geometry, material)


  scene.add(line)




  const animate = ()=>{
    // 循環觸發
    requestAnimationFrame(animate)

    // 設定dog轉動效果
    // model.rotation.y += 0.01;
    // model.rotation.x += 0.01;

    renderer.render(scene, camera)
  }
 
  animate();
 //設定動畫

 
};

export default Line;
