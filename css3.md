# CSS3 练习
<link href="./css/style.css" rel="stylesheet"></link>

<ol>
 <li>垂直条纹</li>
 <div class="content-ver"></div>

 ```html
<!-- coding -->
<div class="content-ver"></div>
<style>
 .content-ver {
	width: 200px;
	height: 100px;
	margin-top:20px;
	background: linear-gradient(
		to right,
		rgb(100,5,34) 33.3%,
		gray 0,
		gray 66.6%,
		rgb(152, 110,45) 0
	);
 }
</style>
```
 <li>水平条纹</li>
 <div class="content-ali"></div>
    
 ```html
<!-- coding -->
<div class="content-ali"></div>
<style>
  .content-ali {
	width: 200px;
	height: 100px;
	margin-top:20px;
	background: linear-gradient(
		rgb(100,5,34) 33.3%,
		gray 0,
		gray 66.6%,
		rgb(152, 110,45) 0
	);
 }
</style>
 ```
 <li>斜条纹</li>
 <div class="content-bevel"></div>

  ```html
<!-- coding -->
<div class="content-bevel"></div>
<style>
.content-bevel {
	width: 200px;
	height: 100px;
	margin-top:20px;
	background: linear-gradient(
		45deg,
		rgb(152, 110,45) 25%,
		rgb(85, 136, 187) 0,
		rgb(85, 136, 187) 50%,
		rgb(152, 110, 45) 0,
		rgb(152, 110,45) 75%,
		rgb(85, 136, 187) 0
	);
	background-size: 50px 50px;
}
</style>
 ```

 <li>使用border实现三角形</li>
 <div class="triangle"></div>

  ``` html
<!-- coding -->
   <div class="triangle"></div>
	<style>
.triangle {
	width:0;
	height:0;
	border:20px solid;
	border-color:transparent transparent red transparent;
 }
	</style>
```

 <li>使用border实现梯形</li>
 <div class="trapezoid"></div>

  ```html
  <!-- coding -->
   <div class="trapezoid"></div>
	<style>
.trapezoid {
	height:15px;
	width:15px;
	border:20px solid;
	border-color:transparent transparent yellow transparent;
}
	</style>
```

</ol>

