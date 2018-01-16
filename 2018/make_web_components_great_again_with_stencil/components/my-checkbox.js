class MyCheckbox extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<input type="checkbox"/>';
        this.$checkbox = this.querySelector('input');
        this.$checkbox.addEventListener('click', (e) => {
            const event = new CustomEvent('onToggle', { detail: e.target.checked });
            this.dispatchEvent(event);
        });
    }
}

window.customElements.define('my-checkbox', MyCheckbox);