class MyNameIsShadow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ 'mode': 'open' });
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.innerHTML = `<h2>Hello my name is ${newValue}</h2>`
    }
}

window.customElements.define('my-name-is-shadow', MyNameIsShadow);