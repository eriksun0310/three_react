import * as THREE from 'three'


// 正方形
const Cube2 = () => {

  // 產生一個場景
  const scene = new THREE.Scene()

  // 產生一個相機 PerspectiveCamera (透視相機)
  const camera = new THREE.PerspectiveCamera(
    75, // 視角 (fov)
    window.innerWidth / window.innerHeight, // 畫面寬高比(aspect)
    0.1, // 近面距離(near)
    1000 //遠面距離(far)
  )

 // Camera 身為鏡頭，有位置屬性，設定在Z軸即可。
  camera.position.set(0,0,15)


  // 實例化渲染器
  const renderer = new THREE.WebGLRenderer()

 // 渲染器負責投影畫面在螢幕上，會需要寬高
  renderer.setSize(window.innerWidth, window.innerHeight) //場景大小

  // 渲染器會產生canvas物件，我們在html的body放置它
  document.body.appendChild(renderer.domElement)

 // 建立一個形狀，用來定義物體的形狀為長寬高為1的正方體
  const geometry = new THREE.BoxGeometry(1,1,1)
  // 建立一個材質，可想像成一個物體所穿的衣服，設定材質為藍色
  const material = new THREE.MeshBasicMaterial({color: 0x0000ff})
  // 依據前兩者，建立物體
  const cube = new THREE.Mesh(geometry, material);
  // 放到場景裡，預設位置會是(0,0,0)
  scene.add(cube);




  //設定動畫(很像setInterval的函式。每一幀都會執行這個函式)
  const animate = ()=>{
    // 循環觸發
    // 它每一幀執行animate()
    requestAnimationFrame(animate)

    // 設定正方形轉動效果
    cube.rotation.x += 0.01
    // cube.scale.x += 0.01 // 縮放 
    // cube.position.x += 0.01// 指定位置
    cube.rotation.y += 0.01
	  // 每一幀，場景物件都會被鏡頭捕捉
    renderer.render(scene, camera)
  }
  animate()
};

export default Cube2;
