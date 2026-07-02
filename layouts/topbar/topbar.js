/*==================================================
        TOPBAR
==================================================*/

const Topbar={

async render(){

const res=await fetch("layouts/topbar/topbar.html");

const html=await res.text();

document.querySelector(".main")
.insertAdjacentHTML("afterbegin",html);

this.renderLeft();

this.renderRight();

this.bindEvents();

},

renderLeft(){

document.getElementById("topbarLeft").innerHTML=`

<div class="topbar-left">

<button

id="sidebarToggle"

class="toggle-btn">

<i class="fa-solid fa-bars"></i>

</button>

<div class="page-info">

<h2 id="pageTitle">

Business Overview

</h2>

<p>

Dashboard /

<span id="breadcrumb">

Business Overview

</span>

</p>

</div>

</div>

`;

},

renderRight(){

document.getElementById("topbarRight").innerHTML=`

<div class="topbar-right">

<div class="search-box">

<i class="fa-solid fa-magnifying-glass"></i>

<input

placeholder="Search...">

</div>

<button class="icon-btn">

<i class="fa-solid fa-bell"></i>

</button>

<button

id="themeToggle"

class="icon-btn">

<i class="fa-solid fa-moon"></i>

</button>

<div class="profile">

<div class="avatar">

AG

</div>

<div class="profile-info">

<h4>

Amit Goswami

</h4>

<span>

Administrator

</span>

</div>

</div>

</div>

`;

},

bindEvents(){

document

.getElementById("sidebarToggle")

.onclick=()=>{

document

.getElementById("sidebar")

.classList.toggle("collapsed");

};

}

};

window.Topbar=Topbar;
