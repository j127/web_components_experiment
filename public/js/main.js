class Cat extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");

        // Create the header
        const header = document.createElement("h2");
        header.setAttribute("class", "header");
        header.textContent = this.getAttribute("name");

        // Create the image
        const img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = this.hasAttribute("img")
            ? this.getAttribute("img")
            : "https://placekitten.com/250/250";

        // Create the styles
        const style = document.createElement("style");
        style.textContent = `
            .wrapper {
                border: solid 1px #eee;
                box-shadow: 0 0 7px 1px #eee;
                border-radius: 5px;
                padding: 21px;
            }
            .img {
                border-radius: 5px;
                margin: 0 auto;
            }
        `;

        // Add to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(header);
        wrapper.appendChild(img);
        console.log("wrapper", wrapper.outerHTML);
    }
}

// Element names require a dash.
customElements.define("cat-card", Cat);
