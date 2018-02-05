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
        const event = new CustomEvent('onConnected', { detail: Date.now() })
        this.dispatchEvent(event);
    }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="3"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="4"></div>
<h4 style="text-align: left;">Listen</h4>
<pre style="font-size: 75%"><code class="js" data-trim>
$myComponent.addEventListener('onConnected', e => {
    console.log('Init at', e.detail)
});
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="2"></div>
    <aside class="notes">
        <b>To finish on custom elements, we need to learn how to dispatch events.</b>
        <ul>
            <li>First we need to create a custom event with a name, and detail if we want to add data to the event</li>
            <li>Then we can dispatch this event using the internal dispatchEvent method</li>
            <li>to get this event from outside the component we need to add an event listener to it</li>
            <li>Then when it is triggered we can get the event detail, here the date</li>
        </ul>
        <b>We are done talking about custom elements, let's talk about shadow DOM</b>
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
        <b>Shadow DOM is a ways to encapsulate your DOM and CSS so nothing leaks out of your component</b>
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
    <div class="fragment current-only" data-code-block="2" data-code-focus="4"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="4,10"></div>
    <aside class="notes">
        <b>We are going to add the shadow DOM to the component MyNameIs that we saw earlier.</b>
        <ul>
            <li>First we attach the shadow DOM to our component in an opened mode.</li>
            <li>There are two modes, opened and closed. In the open mode you can access the shadow root from the outside. The shadow root is the node that encapsulates your component</li>
            <li>Then when we refer to the dom, we need to refer to the shadow root but the rest is the same</li>
        </ul>
        <b>Let's see a demo</b>
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
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Emulated (default)</td>
        <td align="left"  style="font-weight: bold;">Shadow DOM emulation</td>
        </tr>
        <tr class="fragment">
        <td align="left" style="font-weight: bold;">ViewEncapsulation.None</td>
        <td align="left" style="font-weight: bold;">No Shadow DOM at all</td>
        </tr>
        <tr class="fragment">
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Native</td>
        <td align="left"  style="font-weight: bold;">Shadow DOM</td>
        </tr>
    </tbody>
</table>
<pre class="fragment" style="font-size: 80%"><code class="js" data-trim>
@Component({
  encapsulation: ViewEncapsulation.Native
})
class MyComponent {}
</code></pre>
    <div class="fragment current-only" data-code-block="2" data-code-focus="2"></div>
    <aside class="notes">
        <b>We can add the shadow DOM to Angular components pretty easily with ViewEncapsulation</b>
        <ul>
            <li>ViewEncapsulation has three values, the default is Emulated. All the style that you add to your component will be prefixed by a unique ID</li>
            <li>Then we have None, your CSS remains untouched, there is no prefix added to it</li>
            <li>The last value is Native, native means that the shadow is enabled</li>
            <li>To use the encapsulation that you want, we need to use the encapsulation property of the AtComponent decorator.</li>
        </ul>
        <b>Pretty easy right?!</b>
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
<pre style="font-size: 75%; width: 70% !important;"><code class="html" data-trim>
<template><!-- children --></template>
</code></pre>
     <blockquote>
        "Give the ability to create reusable piece of HTML that can be used at runtime"
    </blockquote>
    <aside class="notes">
        <b>Let's talk about HTML templates now. the template tag is really powerful, it never renders children unless you ask for it</b>
    </aside>
</section>

<section data-state="html-templates">
<h3>HTML templates</h3>
<pre style="font-size: 75%"><code class="html" data-trim>
<img src="path/to/your/image.png" />
</code></pre>
<pre class="fragment" style="font-size: 75%"><code class="html" data-trim>
<template>
    <img src="path/to/your/image.png" />
</template>
</code></pre>
<pre class="fragment" style="font-size: 65%"><code class="js" data-trim>
// Get the template element
const $template = document.querySelector('template');
// Deep clone the template content
const $clone = document.importNode($template.content, true);
// Apppend it to the page
document.body.appendChild($clone);
&nbsp;
</code></pre>
<div class="fragment current-only" data-code-block="3" data-code-focus="1-2"></div>
<div class="fragment current-only" data-code-block="3" data-code-focus="3-4"></div>
<div class="fragment current-only" data-code-block="3" data-code-focus="5-6"></div>
    <aside class="notes">
        <b>What is the problem with this line here? The problem is that even if your image is outside of the viewport, the browser will fetch the image anyway. It is a waste of resource.</b>
        <ul>
            <li>Now if we wrap the same image inside a template tag, then nothing happens. The browser will not fetch the resource.</li>
            <li>To include the image on the page we first need to get the template node reference</li>
            <li>Then we can clone the content of our templace</li>
            <li>To finish we can append the clone anywhere in the page.</li>
            <li>At this point the image will be loaded by the browser</li>
        </ul>
        <b></b>
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
    <div class="fragment" data-fragment-index="2" layout="column" flex="10" layout-align="center center">
        <i class="fa fa-arrow-circle-right"></i>
    </div>
    <div class="fragment" data-fragment-index="2" layout="column" flex="45" layout-align="center center">
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
        <ul>
            <li>The ngIf directive here wraps the element inside a template tag so it is not rendered by the browser.</li>
            <li>It is the same for *ngFor & *ngSwitch</li>
        </ul>
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
    <table style="zoom:0.8; margin-bottom: 60px" data-fragment-index="1" class="fragment table table-striped table-dark">
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
    <table style="zoom:0.6; margin-bottom: 60px" class="fragment" data-fragment-index="1">
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
        <b>We are now done the specs, let's talk about Browser support</b>
        <ul>
            <li>Basically Web components only work natively on Chrome</li>
        </ul>
        <b>But that's not something you should worried about. Things are now evolving really fast with the current adoption of Web components by developers and also because we have Polyfills</b>
    </aside>
</section>

<section>
    <h3>Polyfill support</h3>
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
    <p>github.com/webcomponents/webcomponentsjs</p>

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
        <b>We now have polyfills that cover all the latest browsers so your components will work everywhere.</b>
        <ul>
            <li>If you are worried about the polyfill size, you can use a loader that you can find on github and that only loads the required polyfill at runtime for the browser you use.</li>
        </ul>
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
<div class="fragment current-only" data-code-block="1" data-code-focus="3,7"></div>
    <aside class="notes">
        <b>Ok great, but can we use Web components in Angular?</b>
        <ul>
            <li>The answer is YES, with CUSTOM_ELEMENTS_SCHEMA, Web Components become first-class citizens in the Angular ecosystem.</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Pros</h3>
    <ol>
        <li class="fragment">Reusable piece of code</li>
        <li class="fragment">Style encapsulation</li>
        <li class="fragment">No dependencies `#useThePlatform`</li>
        <li class="fragment">Framework Agnostic</li>
        <li class="fragment">Works in all major browsers `(with polyfills)`</li>
    </ol>
    <aside class="notes">
        <b>Let's recap why Web Components are something worth checking out</b>
    </aside>
</section>

<section>
    <h3>Cons</h3>
    <ol>
        <li class="fragment">Manual data binding `(innerHTML vs appendChild?)`</li>
        <li class="fragment">No declarative Event Bindings `(onSomething)=""`</li>
        <li class="fragment">Attributes and Properties difference</li>
        <li class="fragment">Can be a bit verbose</li>
    </ol>
    <aside class="notes">
        <b>Let's recap why Web Components are something worth checking out</b>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li>And Since we do a lot of things manually, the code can be a bit verbose, and we are going to see that later on.</li>
            <li></li>
        </ul>
        <b>One solution to fix all of these limitations is to use StencilJS</b>
    </aside>
</section>
