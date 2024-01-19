import * as THREE from 'three'


// 正方形:建立child → parent → scene樹狀結構
const CubeParentChild = () => {

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
  camera.position.set(0,5,15)


  // 實例化渲染器
  const renderer = new THREE.WebGLRenderer()

 // 渲染器負責投影畫面在螢幕上，會需要寬高
  renderer.setSize(window.innerWidth, window.innerHeight) //場景大小

  // 渲染器會產生canvas物件，我們在html的body放置它
  document.body.appendChild(renderer.domElement)

 // 建立一個形狀，用來定義物體的形狀為長寬高為1的正方體
  const geometry = new THREE.BoxGeometry(1,1,1)
  // 建立一個材質，可想像成一個物體所穿的衣服，設定材質為藍色
  const material = new THREE.MeshNormalMaterial({color: 0x0000ff})


  const parent = new THREE.Mesh(geometry, material)
  const child = new THREE.Mesh(geometry, material)


  // 接著，把parent加到世界裡，把child加到parent裡
  scene.add(parent);
  parent.add(child);

  // 依據前面的說明，把parent位置改成10，child位置改成5
  parent.position.x = 10
  child.position.x = 5






  //設定動畫(很像setInterval的函式。每一幀都會執行這個函式)
  const animate = ()=>{
    // 循環觸發
    // 它每一幀執行animate()
    requestAnimationFrame(animate)

    //parent自轉
    parent.rotation.y += 0.01
	  // 每一幀，場景物件都會被鏡頭捕捉
    renderer.render(scene, camera)
  }
  animate()
};

export default CubeParentChild;
