import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 地球
const Earth = () => {

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
  camera.position.set(0,10,15)


  // 實例化渲染器
  const renderer = new THREE.WebGLRenderer()

 // 渲染器負責投影畫面在螢幕上，會需要寬高
  renderer.setSize(window.innerWidth, window.innerHeight) //場景大小

  // 渲染器會產生canvas物件，我們在html的body放置它
  document.body.appendChild(renderer.domElement)

  // 改成球體: 參數帶入半徑、水平面數、垂直面數
  const geometry = new THREE.SphereGeometry(100,50,50)
  // 匯入背景材質(jpg 可以顯示, png 不能顯示)
  const texture = new THREE.TextureLoader().load('/img/free_star_sky_hdri_spherical_map_by_kirriaa_dbw8p0w-fullview.jpg')
  // 建立一個材質
  const material = new THREE.MeshStandardMaterial( { 
    color: 0xffffff,
    map: texture,
    side:THREE.DoubleSide
  })


 

 




  
  //建立光源
  const light =  new THREE.AmbientLight(0xffffff, 2)
  scene.add(light)

  const sphere  = new THREE.Mesh(geometry, material)

  scene.add(sphere);


 // AxesHelper:顯示XYZ軸
//  const axesHelper = new THREE.AxesHelper( 5 );
//  scene.add( axesHelper );

  // arrowHelper:一個箭頭
  // const dir = new THREE.Vector3(-2.49, 4.74, -3.01).normalize();
  // const origin = new THREE.Vector3( 0, 0, 0 );
  // const length = 10;
  // const hex = 0xffff00;
  // const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
  // scene.add( arrowHelper );


  // 設定軌道控制器, 讓相機可以環繞觀察場景
  const controls = new OrbitControls(camera, renderer.domElement)



  // 球體
  const earthGeometry = new THREE.SphereGeometry(5,50,50)

  //匯入材質
  const earthTexture = new THREE.TextureLoader().load('/img/2k_earth_daymap.jpg')
  
  //帶入材質,設定內外面
  const earthMaterial = new THREE.MeshStandardMaterial({
    map:earthTexture,
    side:THREE.DoubleSide,
  })

  const earth = new THREE.Mesh(earthGeometry, earthMaterial)

  scene.add(earth)

  // 建立四元數
  // let quaternion = new THREE.Quaternion()
  // 即將旋轉的弧度
  // let rotation = 0
  //setFromAxisAngle: 設置四元素的旋轉角度(由dir為軸心，rotation為旋轉弧度)
  // quaternion.setFromAxisAngle( dir, rotation );


  // 建立一個向量, 以儲存鏡頭方向
  const cameraLookAt = new THREE.Vector3(0,0,0)


  let rotation = 0



  //設定動畫(很像setInterval的函式。每一幀都會執行這個函式)
  const animate = ()=>{
    // 循環觸發
    // 它每一幀執行animate()
    requestAnimationFrame(animate)

    	// 不斷增加弧度
      // rotation += 0.05

      controls.target.set(10,0,0)
      controls.update()
      // 更新到位置
      // camera.position.set(0,10 + Math.cos(rotation), 15)
      //  cameraLookAt.set(10,0,0)
      // camera.lookAt(cameraLookAt)
      // cameraLookAt.set(0,0 + Math.cos(rotation), 0)
      // camera.lookAt(cameraLookAt)
      // 更新四元數
      // quaternion.setFromAxisAngle(dir, rotation)
      // 增加的弧度，要更新在天球上
      // sphere.rotation.setFromQuaternion(quaternion)


	  // 每一幀，場景物件都會被鏡頭捕捉
    renderer.render(scene, camera)
  }
  animate()
};

export default Earth;
