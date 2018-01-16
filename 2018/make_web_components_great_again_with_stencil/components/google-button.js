class VikingsButton extends HTMLButtonElement {
    connectedCallback() {
        this.addEventListener('click', () =>
            window.open('https://ngvikings.org/', '_blank')
        );
    }
}

window.customElements
    .define('vikings-button', VikingsButton, { extends: 'button' });