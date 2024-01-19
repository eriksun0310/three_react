# Three.js 簡介

1. 場景（Scene）：

容納 3D 物體的容器，包含了幾何形狀組成的物體、光源和相機，作為場景圖 (Scene Graph)樹狀結構的根結點，描述該 Scene 所有物體的

2. 相機（Camera）：

相機是場景中的眼睛，定義了場景的觀察位置和方向。3D 場景比較常用的相機叫做 PerspectiveCamera (透視相機)，它會模擬人的視覺方式，當物體距離相機較近時物體會變大，距離變遠時物體則變小。
以相機為出發點，根據視角(fov)、 畫面長寬比（aspect）以及遠(far)近(near)平面之間的比較，產出「視錐」模型，用來判斷當前視線範圍內可視的物體以及視線遮擋因素，以此決定要渲染場景裡的哪些物體。


3. 渲染器（Renderer）：

渲染器負責將 Scene 和 Camera 結合渲染成最終的圖像，它會將 Camera 視錐中的三維場景渲染成一個二維圖片顯示在畫布上。

### 場景（Scene）包含的元素：

1. 幾何體（Geometry）：

描述物體的形狀，例如球體、立方體、平面等等。

2. 材質（Material）：

材質決定了物體的表面外觀，例如顏色以及反射，也可以搭配紋理(Texture) 將圖片貼附在物體的表面。

3. 網格 (Mesh) ：

Geometry 加上 Material 所結合出的物體，多個 Mesh 可能會使用相同的 Geometry 跟 Material 的資料。

4. 光源（Light）：
1. AmbientLight 環境光: new THREE.AmbientLight(0xffffff, 2)
(光的顏色, 光的強度)

可以影響物體的顏色、陰影和反射等效果，讓場景更加真實。

座標定位
Three.js 使用右手座標系(Right-Handed Coordinate Systems)


# 欧拉角（Euler Angles）: rotation即是一個歐拉角物件
setFromVector3() ：向量轉成歐拉角。
setFromQuaternion() ：歐拉角轉四元數。
set() ：給定XYZ來轉歐拉角。
setFromRotationMatrix() ：矩陣轉歐拉角 。


# 四元数（Quaternion）:
setFromAxisAngle：給定一個方向跟角度，它將依據方向為軸心，旋轉角度
setFromEuler：由歐拉角轉成四元數。這讓任何Mesh都可以轉成四元數
setFromRotationMatrix：由旋轉矩陣轉成四元數
set：由x,y,z轉成四元數

# Vector3 三维向量的类:
new THREE.Vector3(-2.49, 4.74, -3.01).normalize()
1. normalize(): 歸一化
歸一化是一種常見的數學操作，有助於簡化計算、確保方向的一致性,
如果不使用 normalize 對四元數進行歸一化，可能會導致旋轉方向不正確，尤其是當連續進行多次旋轉時。


### position vs rotation 的差別
# position:
用於設置物體的位置，即在三維空間中的坐標位置。這影響物體的整體位置，以 X、Y 和 Z 軸的坐標表示。

// 設定正方形的位置
cube.position.set(0,0,3)

# rotation:
用於設置物體的旋轉。它影響物體的朝向，以弧度或歐拉角（Euler angles）的形式表示。旋轉通常包括繞 X、Y 和 Z 軸的旋轉。








# 可參考這篇文章
https://blog.twjoin.com/%E8%AA%8D%E8%AD%98-three-js-6eb329e16c97

https://ithelp.ithome.com.tw/articles/10199699

https://ithelp.ithome.com.tw/articles/10293480