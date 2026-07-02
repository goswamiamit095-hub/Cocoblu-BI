/*==================================================
    LOADER
==================================================*/

const Loader = {

    element: null,

    async render() {

        const response = await fetch(
            "layouts/loader/loader.html"
        );

        const html = await response.text();

        document.body.insertAdjacentHTML(
            "beforeend",
            html
        );

        this.element =
            document.getElementById("appLoader");

    },

    show() {

        if (!this.element) return;

        this.element.classList.remove("hide");

    },

    hide() {

        if (!this.element) return;

        this.element.classList.add("hide");

    }

};

window.Loader = Loader;
