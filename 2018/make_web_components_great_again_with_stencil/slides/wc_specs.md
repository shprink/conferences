<section>
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <h2>Web Components <br/>Specifications</h2>
    <aside class="notes">
        <b>Let's talk about the Web Components specs</b>
    </aside>
</section>

<section>
    <ul style="list-style-type: none; margin-left: 0; display: flex; flex-direction: row; justify-content: center;" >
        <li style="margin: 0 20px; display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-code" style="font-size: 4em"></i>
            <span>Custom Elements</span>
        </li>
        <li style="margin: 0 20px; display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-user-secret" style="font-size: 4em"></i>
            <span>Shadow DOM</span>
        </li>
        <li style="margin: 0 20px; display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-cog" style="font-size: 4em"></i>
            <span>HTML templates</span>
        </li>
        <!-- <li style="display: flex; flex-direction: column; align-items: center; text-align: center; line-height: 1em;">
            <i class="fa fa-external-link" style="font-size: 4em"></i>
            <span>HTML imports</span>
        </li> -->
    </ul>
    <aside class="notes">
        <b>There are three important specs that we need to learn about today</b>
        <b>Custom Elements, Shadow DOM and HTML Templates</b>
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
        <b>Custom Elements allow you to create your own HTML elements such as a div tag or something more elaborate like the video tag</b>
    </aside>
</section>

<section data-state="custom-elements">
<h3>Creating a custom element</h3>
<pre style="font-size: 80%"><code class="js" data-trim>
class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
}
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="js" data-trim>
window.customElements
      .define('my-component', MyComponent);
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html"><my-component></my-component>
</code></pre>
    <aside class="notes">
        <b>Here is how to create a Web Component, all you need to do is to extends HTMLElement Class.</b>
        <ul>
            <li>To be able to use this Web Component we need to register it. To do this we use the custom element define method. It takes the tag name and the Class reference as arguments</li>
            <li>Then we can insert this new component in the DOM</li>
        </ul>
    </aside>
</section>

<!-- <section>
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
</section> -->

<section data-state="custom-elements">
<h3>Lifecycle hooks</h3>
<table style="zoom:0.85; margin-bottom: 60px"  class="table table-striped table-dark">
    <thead>
    <tr>
    <th align="center"><img src="../../img/web_component-logo.png" height="150" class="img-plain"/></th>
    <th align="center"><img class="fragment img-plain" data-fragment-index="4" src="../../img/angular-logo.png" height="150" /></th>
    <th align="center"></th>
    </tr>
    </thead>
    <tbody>
        <tr class="fragment" data-fragment-index="1">
        <td align="center" style="font-weight: bold;">connectedCallback</td>
        <td align="center" style="font-weight: bold;">
            <span class="fragment" data-fragment-index="4" style="color: var(--angular)">ngOnInit</span>
        </td>
        <td align="left" style="color: var(--light)">Element is inserted</td>
        </tr>
        <tr class="fragment" data-fragment-index="2">
        <td align="center"  style="font-weight: bold;">disconnectedCallback</td>
        <td align="center" style="font-weight: bold;">
            <span class="fragment" data-fragment-index="4" style="color: var(--angular)">ngOnDestroy</span>
        </td>
        <td align="left" style="color: var(--light)">Element is removed</td>
        </tr>
        <tr class="fragment" data-fragment-index="3">
        <td align="center"  style="font-weight: bold;">attributeChangedCallback</td>
        <td align="center" style="font-weight: bold;">
            <span class="fragment" data-fragment-index="4" style="color: var(--angular)">ngOnChanges</span>
        </td>
        <td align="left" style="color: var(--light)">Attribute has changed</td>
        </tr>
    </tbody>
</table>
    <aside class="notes">
        <b>Web components have three lifecycle hooks</b>
        <ul>
            <li>connectedCallback is called when the component is inserted in the DOM</li>
            <li>disconnectedCallback is called when it is removed from the DOM</li>
            <li>and attributeChangedCallback is called when an attribute that we are listening to has changed</li>
            <li>The equivalent in Angular are the following that you already know</li>
        </ul>
    </aside>
</section>

<section data-state="custom-elements">
<h3>Listening to Attributes changes</h3>
<pre style="font-size: 80%"><code class="html" data-trim>
<my-name-is name="Julien"></my-name-is>
</code></pre>
<pre  class="fragment" style="font-size: 60%"><code class="js" data-trim>
class MyNameIs extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = \`Hello my name is ${newValue}\`
    }
}
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="2-4"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="5-7"></div>
    <aside class="notes">
        <b>If we have a custom element that has a `name` attribute, how to we listen to changes?</b>
        <ul>
            <li>All you need to do is to use the observedAttributes getter which shoud return an array of attributes names.</li>
            <li>Then using the attributeChangedCallback we can update the data in the DOM manually</li>
        </ul>
        <b>Here is a demo of that custom element</b>
    </aside>
</section>

<section data-background-video="./videos/my-name-is.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-state="custom-elements">
<i style="font-size: 200px; color: yellow" class="fa fa-exclamation-triangle"></i>
<h3>Attributes can only be strings!</h3>
    <aside class="notes">
        <b>Be careful, attributes can only be strings. How do we pass complex data such as arrays or ojects to our components then?</b>
    </aside>
</section>

<section data-state="custom-elements">
<h3>Properties</h3>
<pre style="font-size: 55%"><code class="js" data-trim>
class MyTodos extends HTMLElement {
    constructor() {
        super();
        this.\_list = [];
    }
    set list(data) {
        this.\_list = data;
    }
    get list() {
        return this.\_list;
    }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="4"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="6-8"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="9-11"></div>
<div class="fragment">
    <h4>Set</h4>
<pre style="font-size: 55%"><code class="js" data-trim>
document.querySelector('my-todo').list = ['first item', 'second item'];
</code></pre>
</div>
<div class="fragment">
    <h4>Get</h4>
<pre style="font-size: 75%"><code class="js" data-trim>
document.querySelector('my-todo').list;
// ['first item', second item]
</code></pre>
</div>
    <aside class="notes">
        <b>To pass complexe data into a Web component we need to use properties</b>
        <b>Let's say that we have a todo list component</b>
        <ul>
            <li>First thing is to initiate our list in the constructor</li>
            <li>To set the list from the outside we can use a Setter List</li>
            <li>To get the internal list from the outside we can use a Getter List</li>
            <li>Then setting data is as easy as getting the element reference and use the setter list</li>
            <li>We can do the same to get the inernal list</li>
        </ul>
        <b>Let's see a demo</b>
    </aside>
</section>

<!--
<section>
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
-->

<section data-background-video="./videos/todos.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-state="custom-elements">
<h3>Events</h3>
<h4 style="text-align: left;">Dispatch</h4>
<pre style="font-size: 50%"><code class="js" data-trim>
class MyComponent extends HTMLElement {
    connectedCallback() {
        const event = new CustomEvent('onSomething', { detail: Date.now() })
        this.dispatchEvent(event);
    }
}
</code></pre>
<h4 style="text-align: left;">Listen</h4>
<pre style="font-size: 75%"><code class="js" data-trim>
$myComponent.addEventListener('onSomething', e => {
    console.log('Init at', e.detail)
});
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

<section data-state="shadow-dom">
<h3>Adding a shadowRoot</h3>
<pre style="font-size: 50%"><code class="js" data-trim>
class MyNameIs extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = \`<h2>Hello my name is ${newValue}</h2>\`
    }
}
</code></pre>
<pre style="font-size: 50%" class="fragment"><code class="js" data-trim>
class MyNameIsShadow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ 'mode': 'open' });
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.innerHTML = \`<h2>Hello my name is ${newValue}</h2>\`
    }
}
</code></pre>
    <div class="fragment current-only" data-code-block="2" data-code-focus="4,10"></div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./videos/shadow-dom-color.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b>We have two components, one without shadowDOM, one with shadowDOM. Changes in the document style applies only to the component without shadow DOM. the other one is encapsulated.</b>
    </aside>
</section>

<section data-state="shadow-dom">
<h3>Adding Shadow DOM to Angular</h3>
<pre style="font-size: 80%"><code class="js" data-trim>
import { ViewEncapsulation } from '@angular/core';
</code></pre>
<table style="zoom:0.65; " class="fragment table table-striped table-dark">
    <tbody>
        <tr>
        <td align="left" style="font-weight: bold;">ViewEncapsulation.None</td>
        <td align="left" style="font-weight: bold;">No Shadow DOM at all</td>
        </tr>
        <tr>
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Emulated (default)</td>
        <td align="left"  style="font-weight: bold;">Style encapsulation emulation</td>
        </tr>
        <tr>
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Native</td>
        <td align="left"  style="font-weight: bold;">Native Shadow DOM</td>
        </tr>
    </tbody>
</table>
<pre class="fragment" style="font-size: 80%"><code class="js" data-trim>
@Component({
  encapsulation: ViewEncapsulation.Native
})
class MyComponent {}
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<!-- <section data-background-video="./videos/shadow-dom-query.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section> -->

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
        <b>the template element allow us to make </b>
    </aside>
</section>

<section data-state="html-templates">
<h3>HTML templates</h3>
<pre style="font-size: 75%"><code class="html" data-trim>
<template>
    <img src="path/to/your/image.png" />
</template>
</code></pre>
<pre class="fragment" style="font-size: 65%"><code class="js" data-trim>
// Get the template element
const template = document.querySelector('template');
// Clone the template content
const $clone = document.importNode(template.content, true);
// Apppend it to the page
document.body.appendChild($clone);
&nbsp;
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1-2"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="3-4"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="5-6"></div>
    <aside class="notes">
        <b>If we insert this html into a page, we won't see Hello World on screen!</b>
    </aside>
</section>

<section data-state="html-templates">
<img src="../../img/angular-logo.png" class="img-plain"/>
<h4>We use HTML templates all the time</h4>
<div layout="row" layout-align="center center">
    <div layout="column" flex="45" layout-align="center center">
<pre style="font-size: 60%"><code class="html" data-trim>
<p *ngIf="isActive">Hello</p>
</code></pre>
    </div>
    <div layout="column" flex="10" layout-align="center center">
        <i class="fa fa-arrow-circle-right"></i>
    </div>
    <div layout="column" flex="45" layout-align="center center">
<pre style="font-size: 55%"><code class="html" data-trim>
<template [ngIf]="isActive">
  <p>Hello</p>
</template>
</code></pre>
    </div>
</div>
<div class="fragment">
    Same for <code style="color: var(--primary)">\*ngFor</code> & <code style="color: var(--primary)">\*ngSwitch</code>
</div>
    <aside class="notes">
        <b>As Angular developers we use the template tag all the time without knowing it.</b>
        <b>The ngIf directive here wraps the element inside a template tag so it is not rendered by the browser.</b>
        <b>If you think about the previous image example, it is pretty handy!</b>
    </aside>
</section>

<!-- <section>
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
</section> -->

<!-- <section>

<pre style="font-size: 80%"><code class="html"><link rel="import" href="google-map.html">
</code></pre>
<pre class="fragment" style="font-size: 80%"><code class="html"><google-map></google-map>
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section> -->


<section>
    <h3>Browser support</h3>
    <!-- <img src="./img/caniuse/browser_support_january_2018.png" class="img-plain fragment"/> -->
    <table style="zoom:0.8; margin-bottom: 60px"  class="table table-striped table-dark">
    <thead>
    <tr>
    <th></th>
    <th align="center">IE11</th>
    <th align="center">Edge</th>
    <th align="center">Firefox</th>
    <th align="center">Chrome</th>
    <th align="center">Safari 9+</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Custom Elements</td>
    <td align="center" style="background-color: #bc392a;">11</td>
    <td align="center" style="background-color: #bc392a;">16</td>
    <td align="center" style="background-color: #bc392a;">57</td>
    <td align="center" style="background-color: #9eb40b;">63</td>
    <td align="center" style="background-color: #9eb40b;">11</td>
    </tr>
    <tr>
    <td>Shadow DOM</td>
    <td align="center" style="background-color: #bc392a;">11</td>
    <td align="center" style="background-color: #bc392a;">16</td>
    <td align="center" style="background-color: #bc392a;">57</td>
    <td align="center" style="background-color: #32ac41;">63</td>
    <td align="center" style="background-color: #9eb40b;">11</td>
    </tr>
    <tr>
    <td>HTML Templates</td>
    <td align="center" style="background-color: #bc392a;">11</td>
    <td align="center" style="background-color: #9eb40b;">16</td>
    <td align="center" style="background-color: #32ac41;">57</td>
    <td align="center" style="background-color: #32ac41;">63</td>
    <td align="center" style="background-color: #32ac41;">11</td>
    </tr></tbody>
    </table>
    <table style="zoom:0.6; margin-bottom: 60px">
    <tbody>
    <tr>
    <td align="center" style="background-color: #32ac41;">Supported</td>
    <td align="center" style="background-color: #9eb40b;">Partial Support</td>
    <td align="center" style="background-color: #bc392a;">Not Supported</td>
    </tr>
    </tbody>
    </table>
    </ul>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Polyfill support</h3>
    <p>github.com/webcomponents/webcomponentsjs</p>
    <table style="zoom:0.7; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
    <tr>
    <th></th>
    <th align="center">IE11</th>
    <th align="center">Edge</th>
    <th align="center">Firefox</th>
    <th align="center">Chrome</th>
    <th align="center">Safari 9+</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Custom Elements</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
    <td>Shadow DOM</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
    <td>HTML Templates</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    </tr></tbody>
    </table>
<div class="fragment">
    <h4>Only load what's needed on the platform</h4>

<pre style="font-size: 55%"><code class="html" data-trim>
<script src="./webcomponents-loader.js"></script>
<script>
  window.addEventListener('WebComponentsReady', function() {
    // All required polyfills have loaded
  });
</script>
</code></pre>
</div>
    <aside class="notes">
        <b>Alternatively, this repo also comes with webcomponents-loader.js, a client-side loader that dynamically loads the minimum polyfill bundle, using feature detection.</b>
    </aside>
</section>

<section>
<div style="display:flex; flex-direction:row;align-items: center;justify-content: center;">
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">+</span>
    <img src="../../img/angular-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">?</span>
</div>
<pre class="fragment" style="font-size: 75%"><code class="typescript" data-trim>
import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="3"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="3,7"></div>

    <aside class="notes">
        <b>This tells Angular’s template compiler to allow web components and their attributes. Web Components are first-class citizens in the Angular ecosystem</b>
    </aside>
</section>

<section>
    <h3>Why use Web Components</h3>
    <ol>
        <li class="fragment">Reusable components</li>
        <li class="fragment">Style encapsulation</li>
        <li class="fragment">No dependencies #useThePlatform</li>
        <li class="fragment">Framework Agnostic</li>
        <li class="fragment">Works in all major browsers (with polyfills)</li>
    </ol>
    <!-- <h3 class="fragment" style="margin: 20px 0">Cons</h3>
    <ol>
        <li class="fragment">Manual DOM manipulation</li>
        <li class="fragment">Manual event listeners</li>
        <li class="fragment">Manual transpiling to ES5 (babel)</li>
    </ol> -->
    <aside class="notes">
        <b></b>
    </aside>
</section>
