/*==================================================
    COCOBLU BI
    MENU CONFIGURATION
==================================================*/

const MENU = [

{
    title:"Dashboard",

    icon:"fa-solid fa-house",

    open:true,

    children:[

        {
            id:"home",
            label:"Business Overview"
        }

    ]
},

{
    title:"Sales",

    icon:"fa-solid fa-chart-column",

    children:[

        {
            id:"monthly-summary",
            label:"Monthly Summary"
        },

        {
            id:"daily-summary",
            label:"Daily Summary"
        },

        {
            id:"asin-sales",
            label:"ASIN Sales"
        },

        {
            id:"monthly-brand",
            label:"Monthly Brand Metrics"
        },

        {
            id:"daily-brand",
            label:"Daily Brand Metrics"
        },

        {
            id:"category",
            label:"Category"
        },

        {
            id:"status",
            label:"Status"
        }

    ]
},

{
    title:"Growth",

    icon:"fa-solid fa-chart-line",

    children:[

        {
            id:"growth",
            label:"Growth / DeGrowth"
        }

    ]
},

{
    title:"Ads",

    icon:"fa-solid fa-bullhorn",

    children:[

        {
            id:"monthly-ads",
            label:"Monthly Ads"
        },

        {
            id:"daily-ads",
            label:"Daily Ads"
        },

        {
            id:"campaign",
            label:"Campaign Performance"
        },

        {
            id:"asin-ads",
            label:"ASIN Performance"
        },

        {
            id:"search-term",
            label:"Search Term"
        },

        {
            id:"analysis",
            label:"Analysis"
        }

    ]
},

{
    title:"Purchase Order",

    icon:"fa-solid fa-box-open",

    children:[

        {
            id:"po-recommendation",
            label:"PO Recommendation"
        },

        {
            id:"recall-recommendation",
            label:"Recall Recommendation"
        }

    ]
},

{
    title:"Projection",

    icon:"fa-solid fa-file-invoice",

    children:[

        {
            id:"projection",
            label:"Manual Projection"
        }

    ]
},

{
    title:"Stock",

    icon:"fa-solid fa-boxes-stacked",

    children:[

        {
            id:"daily-stock",
            label:"Daily Stock"
        }

    ]
},

{
    title:"Payment",

    icon:"fa-solid fa-wallet",

    children:[

        {
            id:"invoice",
            label:"Invoice Summary"
        },

        {
            id:"payment",
            label:"Payment Received"
        },

        {
            id:"deduction",
            label:"Return Deduction"
        }

    ]
},

{
    title:"Returns",

    icon:"fa-solid fa-arrow-rotate-left",

    children:[

        {
            id:"monthly-return",
            label:"Monthly Return"
        },

        {
            id:"daily-return",
            label:"Daily Return"
        },

        {
            id:"asin-return",
            label:"ASIN Return"
        },

        {
            id:"brand-return",
            label:"Brand Return"
        },

        {
            id:"category-return",
            label:"Category Return"
        }

    ]
},

{
    title:"Settings",

    icon:"fa-solid fa-gear",

    children:[

        {
            id:"settings",
            label:"Application Settings"
        },

        {
            id:"user-management",
            label:"User Management"
        },

        {
            id:"role-management",
            label:"Role Management"
        }

    ]
}

];

window.MENU = MENU;
