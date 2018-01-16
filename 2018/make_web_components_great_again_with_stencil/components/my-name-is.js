class MyNameIs extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = `<h2>Hello my name is ${newValue}</h2>`
    }
}

window.customElements.define('my-name-is', MyNameIs);