/*==================================================
    COCOBLU BI
    ROUTER
==================================================*/

const Router = {

    currentPage: "home",

    container: null,

    init() {

        this.container = document.getElementById("pageContainer");

        this.loadFromHash();

        window.addEventListener(

            "hashchange",

            () => this.loadFromHash()

        );

    },

    navigate(page) {

        window.location.hash = page;

    },

    loadFromHash() {

        let page = location.hash.replace("#", "");

        if (!page) {

            page = "home";

        }

        this.load(page);

    },

    async load(page) {

        const route = ROUTES[page];

        if (!route) {

            this.show404(page);

            return;

        }

        Loader.show();

        try {

            const response = await fetch(route.file);

            const html = await response.text();

            this.container.innerHTML = html;

            this.currentPage = page;

            this.updateTitle(route.title);

        }

        catch (e) {

            this.show404(page);

        }

        finally {

            Loader.hide();

        }

    },

    updateTitle(title) {

        document.title = title + " | Cocoblu BI";

        const pageTitle =

            document.getElementById("pageTitle");

        const breadcrumb =

            document.getElementById("breadcrumb");

        if (pageTitle)

            pageTitle.textContent = title;

        if (breadcrumb)

            breadcrumb.textContent = title;

    },

    show404(page) {

        this.container.innerHTML = `

        <div class="page-404">

            <h2>404</h2>

            <p>${page} not found.</p>

        </div>

        `;

    }

};

window.Router = Router;
