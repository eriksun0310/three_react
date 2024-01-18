import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 用 Sketchfab 來載入載入3D 模型:菜市場(不知道為甚麼模型出不來)
const App = () => {

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
  renderer.setClearColor(0x7B7B7B, 1.0) 
  // 陰影效果 (之後在物體與光源的互動才有辦法產生影子)
  renderer.shadowMap.enabled = true


  // 將渲染器的DOM 綁到網頁上
  document.body.appendChild(renderer.domElement)


  // 設定軌道控制器, 讓相機可以環繞觀察場景
  const controls = new OrbitControls(camera, renderer.domElement)
  
  controls.update()




  const objLoader = new GLTFLoader() 


  // 座標軸助手 (X 軸為紅色。Y 軸為綠色。Z 軸是藍色的)
  let axes = new THREE.AxesHelper(20) // 參數為座標軸長度
  scene.add(axes)
  //載入模型 
  objLoader.load('/models/scene.gltf', (gltf) => {
    scene.add( gltf.scene );
    animate();
  });
 

 //設定動畫
  const animate = ()=>{
    // 循環觸發
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
 
};

export default App;
