/*==================================================
    COCOBLU BI
    CARD COMPONENT
==================================================*/

const Card = {

    create(options = {}) {

        return `

        <div class="cb-card">

            <div class="cb-card-header">

                <div>

                    <h3 class="cb-card-title">

                        ${options.title || ""}

                    </h3>

                    <p class="cb-card-subtitle">

                        ${options.subtitle || ""}

                    </p>

                </div>

                <div>

                    ${options.actions || ""}

                </div>

            </div>

            <div class="cb-card-body">

                ${options.body || ""}

            </div>

            <div class="cb-card-footer">

                ${options.footer || ""}

            </div>

        </div>

        `;

    }

};

window.Card = Card;
