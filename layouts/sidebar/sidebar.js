/*==================================================
    SIDEBAR
==================================================*/

const Sidebar={

container:null,

async render(){

const res=await fetch("layouts/sidebar/sidebar.html");

const html=await res.text();

document.getElementById("app").insertAdjacentHTML("afterbegin",html);

this.container=document.getElementById("sidebar");

this.renderLogo();

this.renderMenu();

this.renderFooter();

this.bindEvents();

},

renderLogo(){

document.getElementById("sidebarLogo").innerHTML=`

<div class="sidebar-logo">

<img src="assets/logo/logo.png">

<div>

<h2>Cocoblu BI</h2>

<span>Enterprise Dashboard</span>

</div>

</div>

`;

},

renderMenu(){

let html=`<div class="sidebar-menu">`;

MENU.forEach(group=>{

html+=`

<div class="menu-group ${group.open?'open':''}">

<button class="menu-btn">

<div class="menu-left">

<i class="${group.icon}"></i>

<span>${group.title}</span>

</div>

<i class="fa-solid fa-angle-down"></i>

</button>

<div class="submenu">

`;

group.children.forEach(item=>{

html+=`

<a

href="#${item.id}"

data-page="${item.id}"

>

${item.label}

</a>

`;

});

html+=`

</div>

</div>

`;

});

html+=`</div>`;

document.getElementById("sidebarMenu").innerHTML=html;

},

renderFooter(){

document.getElementById("sidebarFooter").innerHTML=`

<div class="sidebar-footer">

Version 2.0 Enterprise

</div>

`;

},

bindEvents(){

document

.querySelectorAll(".menu-btn")

.forEach(btn=>{

btn.onclick=()=>{

btn.parentElement.classList.toggle("open");

};

});

document

.querySelectorAll(".submenu a")

.forEach(link=>{

link.onclick=(e)=>{

e.preventDefault();

document

.querySelectorAll(".submenu a")

.forEach(a=>a.classList.remove("active"));

link.classList.add("active");

Router.navigate(

link.dataset.page

);

};

});

}

};

window.Sidebar=Sidebar;
