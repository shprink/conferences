<section>
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <h2>Web Components <br/>Specifications</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0; display: flex; flex-direction: row;" >
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-code" style="font-size: 4em"></i>
            <span>Custom Elements</span>
        </li>
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-user-secret" style="font-size: 4em"></i>
            <span>Shadow DOM</span>
        </li>
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-cog" style="font-size: 4em"></i>
            <span>HTML templates</span>
        </li>
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-external-link" style="font-size: 4em"></i>
            <span>HTML imports</span>
        </li>
    </ul>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0;" >
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-code" style="font-size: 4em"></i>
            <span>Custom Elements</span>
        </li>
    </ul>
     <blockquote>
        "Custom Elements is a capability for creating your own custom HTML elements with its own methods and properties"
    </blockquote>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>Creating a custom element</h3>
<pre style="font-size: 80%"><code class="js" data-trim>
class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
}
window.customElements
      .define('my-component', MyComponent);
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html"><my-component></my-component>
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>Extending native HTML elements</h3>
<p>Polyfill: WebReflection/document-register-element</p>
<pre style="font-size: 60%"><code class="js" data-trim>
class VikingsButton extends HTMLButtonElement {
    connectedCallback() {
        this.addEventListener('click', () =>
            window.open('ngvikings.org', '_blank')
        );
    }
}

window.customElements
    .define('vikings-button', VikingsButton, { extends: 'button' });
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html"><button is="vikings-button">Vikings button!</button>
</code></pre>
<button class="fragment" is="vikings-button">Vikings button!</button>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>WC Lifecycle hooks</h3>
<img src="../../img/web_component-logo.png" height="150" class="img-plain"/>
<table style="zoom:0.85; margin-bottom: 60px">
    <tbody>
        <tr>
        <td style="font-weight: bold;">connectedCallback</td>
        <td align="left">Called when the <span style="color: #5c8dfc">element is inserted</span></td>
        </tr>
        <tr>
        <td style="font-weight: bold;">disconnectedCallback</td>
        <td align="left">Called when the <span style="color: #5c8dfc">element is removed</span></td>
        </tr>
        <tr>
        <td style="font-weight: bold;">attributeChangedCallback</td>
        <td align="left">Called when an <span style="color: #5c8dfc">attribute has changed</span></td>
        </tr>
    </tbody>
</table>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>Lifecycle hooks</h3>
<table style="zoom:0.85; margin-bottom: 60px">
    <thead>
    <tr>
    <th align="center"><img src="../../img/web_component-logo.png" height="150" class="img-plain"/></th>
    <th align="center"><img src="../../img/angular-logo.png" height="150" class="img-plain"/></th>
    </tr>
    </thead>
    <tbody>
        <tr>
        <td align="center" style="font-weight: bold;">connectedCallback</td>
        <td align="center" style="font-weight: bold;">ngOnInit</td>
        </tr>
        <tr>
        <td align="center"  style="font-weight: bold;">disconnectedCallback</td>
        <td align="center"  style="font-weight: bold;">ngOnDestroy</td>
        </tr>
        <tr>
        <td align="center"  style="font-weight: bold;">attributeChangedCallback</td>
        <td align="center"  style="font-weight: bold;">ngOnChanges</td>
        </tr>
    </tbody>
</table>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>Attributes</h3>
<pre style="font-size: 60%"><code class="js" data-trim>
class MyNameIs extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = \`Hello my name is ${newValue}\`
    }
}

window.customElements.define('my-name-is', MyNameIs);
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html" data-trim>
<my-name-is name="Julien"></my-name-is>
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./videos/my-name-is.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<h3>Attributes can only be strings!</h3>
    <aside class="notes">
        <b>How to pass complex data such as arrays or ojects to our components then?</b>
    </aside>
</section>

<section class="strech">
<h3>Properties</h3>
<pre style="font-size: 45%"><code class="js" data-trim>
class MyTodos extends HTMLElement {
    constructor() {
        super();
        this.\_list = [];
        this.\_$list = null;
    }
    connectedCallback() {
        this.innerHTML = '<ul id="list"></ul>';
        this.\_$list = this.querySelector('#list');
        this.\_render();
    }
    set list(data) {
        this.\_list = data;
        this.\_render();
    }
    get list() { return this.\_list; }

    \_render() {
        this.\_$list.innerHTML = '';
        this.list.forEach(item => {
            const $li = document.createElement('li');
            $li.innerHTML = item;
            this._$list.appendChild($li);
        });
    }
}
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./videos/todos.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section class="strech">
<h3>Events</h3>
<pre style="font-size: 50%"><code class="js" data-trim>
class MyCheckbox extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<input type="checkbox"/>';
        this.$checkbox = this.querySelector('input');
        this.$checkbox.addEventListener('click', (e) => {
            const event = new CustomEvent('onToggle', { detail: e.target.checked })
            this.dispatchEvent(event);
        });
    }
}

window.customElements.define('my-checkbox', MyCheckbox);
</code></pre>
<pre style="font-size: 65%"><code class="js" data-trim>
const $checkbox = document.createElement('my-checkbox');
$checkbox.addEventListener('onToggle', e => {
    console.log('Is it checked?', e.detail)
});
document.body.appendChild($checkbox);
</code></pre>
    <aside class="notes">
        <b>To finish on custom elements, we need to learn how to dispatch events.</b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0;" >
         <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-user-secret" style="font-size: 4em"></i>
            <span>Shadow DOM</span>
        </li>
    </ul>
     <blockquote>
        "Shadow DOM provides encapsulation for DOM and CSS"
    </blockquote>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0;" >
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-cog" style="font-size: 4em"></i>
            <span>HTML templates</span>
        </li>
    </ul>
     <blockquote>
        "Give the ability to create reusable piece of HTML that can be used at runtime"
    </blockquote>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0;" >
        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-external-link" style="font-size: 4em"></i>
            <span>HTML imports</span>
        </li>
    </ul>
     <blockquote>
        "HTML Imports is intended to be the packaging mechanism for web components"
    </blockquote>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>

<pre style="font-size: 80%"><code class="html"><link rel="import" href="google-map.html">
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html"><google-map></google-map>
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Polyfill support</h3>
    <table style="zoom:0.6; margin-bottom: 60px">
    <thead>
    <tr>
    <th>Polyfill</th>
    <th align="center">IE11+</th>
    <th align="center">Chrome</th>
    <th align="center">Firefox</th>
    <th align="center">Safari 9+</th>
    <th align="center">Chrome Android</th>
    <th align="center">Mobile Safari</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Custom Elements</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td>HTML Imports</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr>
    <tr>
    <td>Shady CSS/DOM</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    <td align="center">✓</td>
    </tr></tbody>
    </table>
    https://github.com/webcomponents/webcomponentsjs
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
<div style="display:flex; flex-direction:row;align-items: center;justify-content: center;">
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">+</span>
    <img src="../../img/angular-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">?</span>
</div>
<pre class="fragment" style="font-size: 50%"><code class="typescript" data-trim>
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="1,4"></div>

    <aside class="notes">
        <b>This tells Angular’s template compiler to allow web components and their attributes. Web Components are first-class citizens in the Angular ecosystem</b>
    </aside>
</section>

<section>
    <h3>Pros of Web Components</h3>
    <ol>
        <li class="fragment">Extend existing elements</li>
        <li class="fragment">Style encapsulation</li>
        <li class="fragment">No dependencies #useThePlatform</li>
        <li class="fragment">Run with any modern Framework</li>
        <li class="fragment">Works in all major browsers (with polyfills)</li>
    </ol>
    <h3 class="fragment" style="margin: 20px 0">Cons</h3>
    <ol>
        <li class="fragment">Manual DOM manipulation</li>
        <li class="fragment">Manual event listeners</li>
        <li class="fragment">Manual transpiling to ES5 (babel)</li>
    </ol>
    <aside class="notes">
        <b></b>
    </aside>
</section>
