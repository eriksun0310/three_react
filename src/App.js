import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

// 正方形 以及 一個地板
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


  // 燈源
  // let pointLight  = new THREE.PointLight(0xffffff)
  // pointLight.position.set(10,10,-10)
  // scene.add(pointLight)


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


   // 產生平面物體
   const planeGeometry = new THREE.PlaneGeometry(6,6)
   const planeMaterial = new THREE.MeshBasicMaterial({
     color:'#FFF467',
     //雙面著色
     side:THREE.DoubleSide
   })
 
   const plane = new THREE.Mesh(planeGeometry,planeMaterial)
 
 
   //設定平面物體在場景的位置
   plane.position.set(0,0,0)

  //  plane.rotation.x = -0.5 * Math.PI // 使平面與 y 軸垂直，並讓正面朝上
   // 把元素加到場景中
   scene.add(plane)


  const mtlLoader = new MTLLoader()
  const objLoader = new OBJLoader() 
  let model

  let axes = new THREE.AxesHelper(20) // 參數為座標軸長度
  scene.add(axes)
  //載入模型 
  objLoader.load('/models/13466_Canaan_Dog_v1_L3.obj', (obj) => {
    model = obj;
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
        console.log('child.material ==> ', child.material);
      }
    });
  
    scene.add(model);
  
    // 設定模型的位置
    model.position.set(0, 0, 0);
    model.rotation.x = 180;
    model.rotation.y = 0;
    model.rotation.z = 180;
  
    animate();
  });
 

 //設定動畫
  const animate = ()=>{
    // 循環觸發
    requestAnimationFrame(animate)

    // 設定dog轉動效果
    // model.rotation.y += 0.01;
    // model.rotation.z += 0.01;

    renderer.render(scene, camera)
  }
 
};

export default App;
