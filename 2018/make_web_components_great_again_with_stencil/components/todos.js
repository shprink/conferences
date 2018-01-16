class MyTodos extends HTMLElement {
    constructor() {
        super();
        this._list = [];
        this._$list = null;
    }

    connectedCallback() {
        this.innerHTML = '<ul id="list"></ul>';
        this._$list = this.querySelector('#list');
        this._render();
    }

    set list(data) {
        this._list = data;
        this._render();
    }

    get list() { return this._list; }

    _render() {
        this._$list.innerHTML = '';
        this.list.forEach(item => {
            const $li = document.createElement('li');
            $li.innerHTML = item;
            this._$list.appendChild($li);
        });
    }
}

window.customElements.define('my-todos', MyTodos);