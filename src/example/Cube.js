import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


// 正方形 以及 一個地板
const Cube = () => {

  // 產生一個場景
  const scene = new THREE.Scene()

  // 產生一個相機 PerspectiveCamera (透視相機)
  const camera = new THREE.PerspectiveCamera(
    75, // 視角 (fov)
    window.innerWidth / window.innerHeight, // 畫面寬高比(aspect)
    0.1, // 近面距離(near)
    1000 //遠面距離(far)
  )

  // 設定相機位置
  camera.position.set(0,0,10)


  // 燈源
  let pointLight  = new THREE.PointLight(0xffffff)
  pointLight.position.set(10,10,-10)
  scene.add(pointLight)


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
  new OrbitControls(camera, renderer.domElement)
  
  // 自動旋轉 須設定 update
  // controls.update()

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
  // 把元素加到場景中
  scene.add(plane)

  // 產生一個藍色正方形物體
  //建立一個形狀, 用來定義物體的形狀為 長寬高為1 的正方體
  const cubeGeometry = new THREE.BoxGeometry(1,1,1)
  // 建立一個材質, 可想像一個物體所穿的衣服, 設定材質顏色為
  const cubeMaterial = new THREE.MeshBasicMaterial({ color:'#429ef5'})

  // Mesh(3D物件): 依據前兩者, 建立物件
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)


  // 設定正方形的位置
  cube.position.set(0,0,3)
  scene.add(cube)

  //設定動畫(很像setInterval的函式。每一幀都會執行這個函式)
  const animate = ()=>{
    // 循環觸發
    // 它每一幀執行animate()
    requestAnimationFrame(animate)

    // 設定正方形轉動效果
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
	  // 每一幀，場景物件都會被鏡頭捕捉
    renderer.render(scene, camera)
  }
  animate()
};

export default Cube;
