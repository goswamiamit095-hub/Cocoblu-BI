/*==================================================
    COCOBLU BI ENTERPRISE
    BOOTSTRAP.JS
==================================================*/

const Bootstrap = {

    async init() {

        console.log("==================================");
        console.log("COCOBLU BI ENTERPRISE");
        console.log("Application Starting...");
        console.log("==================================");

        try {

            await this.loadLayouts();

            this.initializeModules();

            this.registerEvents();

            console.log("Application Ready");

        }

        catch (error) {

            console.error("Bootstrap Error :", error);

        }

    },

    /*==================================
        LOAD STATIC LAYOUTS
    ==================================*/

    async loadLayouts() {

        if (window.Loader) {
            await Loader.render();
        }

        if (window.Sidebar) {
            await Sidebar.render();
        }

        if (window.Topbar) {
            await Topbar.render();
        }

        if (window.Footer) {
            await Footer.render();
        }

        if (window.Toast) {
            await Toast.render();
        }

        if (window.Modal) {
            await Modal.render();
        }

    },

    /*==================================
        INITIALIZE MODULES
    ==================================*/

    initializeModules() {

        if (window.Router) {

            Router.init();

        }

    },

    /*==================================
        GLOBAL EVENTS
    ==================================*/

    registerEvents() {

        window.addEventListener("online", () => {

            console.log("Internet Connected");

        });

        window.addEventListener("offline", () => {

            console.log("Internet Disconnected");

        });

    }

};

/*==================================
        APPLICATION START
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    Bootstrap.init();

});

/*==================================
        GLOBAL ACCESS
==================================*/

window.Bootstrap = Bootstrap;

/*==================================================
            END OF FILE
==================================================*/
