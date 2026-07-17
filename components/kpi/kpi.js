/*==================================================
    COCOBLU BI
    KPI COMPONENT
==================================================*/

const KPI={

create(data={}){

return`

${Card.create({

title:data.title,

subtitle:data.subtitle,

body:`

<div class="cb-kpi">

<div class="cb-kpi-icon">

<i class="${data.icon}"></i>

</div>

<div class="cb-kpi-content">

<p class="cb-kpi-title">

${data.label}

</p>

<h2 class="cb-kpi-value">

${data.value}

</h2>

<div class="cb-kpi-footer">

<span class="${data.change>=0
?'cb-kpi-change cb-kpi-positive'
:'cb-kpi-change cb-kpi-negative'}">

${data.change}%

</span>

</div>

</div>

</div>

`

})}

`;

}

};

window.KPI=KPI;
