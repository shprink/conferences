<section>
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <h2>Web Components <br/>Specifications</h2>
    <!-- <img src="../../img/meme/trump/web_components_specs.gif" style="margin: 0" width="100%" class="img-plain"/> -->
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
        <b>Custom Elements allow you to create your own HTML elements</b>
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
        <b>This is a Custom Element, all you need to do is to use a ES2015 Class and extends HTMLElement.</b>
        <ul>
            <li>To be able to use this Custom Element we need to use the customElements API and the define method. It takes the tag name and the Class reference as arguments</li>
            <li>Then we can insert this new component inside the DOM</li>
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
        <b>Custom Elements have three lifecycle hooks</b>
        <ul>
            <li>connectedCallback is called when the component is inserted in the DOM</li>
            <li>disconnectedCallback is called when it is removed from the DOM</li>
            <li>and attributeChangedCallback is called when an attribute value has changed</li>
            <li>And here is the equivalent in Angular.</li>
        </ul>
    </aside>
</section>

<section data-state="custom-elements">
<h4>Observing Attributes needs to be explicit</h4>
<pre style="font-size: 80%"><code class="html" data-trim>
<my-name-is name="Julien"></my-name-is>
// Hello my name is Julien
</code></pre>
<pre  class="fragment" style="font-size: 65%"><code class="js" data-trim>
class MyNameIs extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'another-attr'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        this.innerHTML = \`Hello my name is ${newValue}\`;
      case 'another-attr':
        // another-attr changed
    }
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="2-4"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="5"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="7-8"></div>
    <aside class="notes">
        <b>Unfortunetly, Observing Attributes changes is not a feature that is out of the box with the native spec.</b>
        <br/>
        <b>If we have a custom element like this one. how do we listen to the `name` attribute changes?</b>
        <br/>
        <ul>
            <li>All you need to do is to use the observedAttributes getter which shoud return an array of attributes names that you want to listen to.</li>
            <li>Everytime one of those attribute changes attributeChangedCallback will be called with the name, the old and new value</li>
            <li>Then we can do something with this data, here we update the DOM</li>
        </ul>
    </aside>
</section>

<!-- <section data-background-video="./videos/my-name-is.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b></b>
    </aside>
</section> -->

<section data-state="custom-elements">
<i style="font-size: 200px; color: yellow" class="fa fa-exclamation-triangle"></i>
<h3>Attributes can only be strings!</h3>
    <aside class="notes">
        <ul>
            <li>Be careful, attributes can only be strings</li>
        </ul>
        <b>But how do we pass complex data such as arrays or ojects to our components then?</b>
    </aside>
</section>

<section data-state="custom-elements">
<h3>Properties</h3>
<pre style="font-size: 55%"><code class="js" data-trim>
class MyList extends HTMLElement {
    constructor() {
        this.\_list = [];
    }
    get list() {
        return this.\_list;
    }
    set list(data) {
        this.\_list = data;
        this.customRender(); // Update the DOM
    }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="2-4"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="5-7"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="8-11"></div>

<pre  class="fragment" style="font-size: 65%"><code class="js" data-trim>
const $MyList = document.querySelector('my-list');
// Get the list
console.log($MyList.list); // []
// Set the list
$MyList.list = ['first item', 'second item'];
&nbsp;
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="3"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="5"></div>
    <aside class="notes">
        <b>We need to use properties</b>
        <br/>
        <b>Let's say that we have a component that displays a list of things</b>
        <ul>
            <li>First thing is to initiate a private list in the constructor</li>
            <li>To get this private list from the outside we can use a Getter with the name that you want. Here List</li>
            <li>To set the list from the outside we can use a Setter List then we can update the DOM if we need to.</li>
        </ul>
        <br/>
        <b>let's see an example on how to use that now</b>
        <br/>
        <ul>
            <li>First we need to get a reference to the component</li>
            <li>To get the current list we use the list getter.</li>
            <li>To set the current list we use the list setter.</li>
        </ul>
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

<!-- <section data-background-video="./videos/todos.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <ul>
            <li>set</li>
            <li>get</li>
            <li>reset</li>
        </ul>
    </aside>
</section> -->

<section data-state="custom-elements">
<h3>Events</h3>
<h4 style="text-align: left;">Dispatch</h4>
<pre style="font-size: 58%"><code class="js" data-trim>
class MyComponent extends HTMLElement {
    connectedCallback() {
        const e = new CustomEvent('onConnected', { detail: Date.now() })
        this.dispatchEvent(e);
    }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="3"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="4"></div>
<h4 style="text-align: left;">Listen</h4>
<pre style="font-size: 75%"><code class="js" data-trim>
$myComponent.addEventListener('onConnected', e => {
    console.log('Connected at', e.detail)
});
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="2"></div>
    <aside class="notes">
        <b>To finish on custom elements, we need to learn how to dispatch events.</b>
        <ul>
            <li>First of all we need an event to dispatch. It could be a mouse Event, a Keyboard or a custom event.</li>
            <li>Then we dispatch this event at a given time. Here when the element is inserted into the DOM</li>
        </ul>
        <ul>
            <li>to get this event from outside the component we need to add an event listener to it</li>
            <li>Then we can do something when the event is triggered.</li>
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
        <b>Shadow DOM is basically a Node that encapsulate your whole component</b>
        <br/>
        <b>How to enable Shadow DOM</b>
    </aside>
</section>

<section data-state="shadow-dom">
<h3>Enable Shadow DOM</h3>
<pre style="font-size: 60%"><code class="js" data-trim>
class MyNameIs extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = \`<h2>Hello my name is ${newValue}</h2>\`
    }
}
</code></pre>
<pre style="font-size: 55%" class="fragment"><code class="js" data-trim>
class MyNameIsShadow extends HTMLElement {
    constructor() {
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
    <div class="fragment current-only" data-code-block="2" data-code-focus="3"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="3,9"></div>
    <aside class="notes"
        <b>We are going to add the shadow DOM to the component MyNameIs that we saw earlier and that is really simple.</b>
        <ul>
            <li>First we use attachShadow method to create the shadowRoot, which is the node that encapsulates your component. There are two modes, opened and closed. In the open mode you can access the shadow root from the outside, in the closed mode you cannot.</li>
            <li>Then when we refer to the dom, we need to refer to the shadowroot instead of just innerHTML but the rest is the same</li>
        </ul>
        <b>Let's see a demo</b>
    </aside>
</section>

<section data-background-video="./videos/shadow-dom-color.mp4" data-background-video-loop data-background-color="#fff" data-background-video-playbackRate="0.7" data-background-style="cover">
    <aside class="notes">
        <b>We have two components, my-name-is without shadowDOM, and my-name-is with shadowDOM.</b>
        <ul>
            <li>When we apply a document style change, such as a color of a title, it applies only to the component without shadow DOM, the other one is protected.</li>
        </ul>
    </aside>
</section>

<section data-state="shadow-dom">
<h3>Adding Shadow DOM to Angular</h3>
<pre style="font-size: 80%"><code class="js" data-trim>
import { ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native
})
class MyComponent {}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="1,4"></div>
<table style="zoom:0.85; " class="fragment table table-striped table-dark">
    <tbody>
        <tr>
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Emulated (default)</td>
        <td align="left"  style="font-weight: bold;">Shadow DOM emulation</td>
        </tr>
        <tr class="fragment">
        <td align="left"  style="font-weight: bold;">ViewEncapsulation.Native</td>
        <td align="left"  style="font-weight: bold;">Shadow DOM</td>
        </tr>
        <tr class="fragment">
        <td align="left" style="font-weight: bold;">ViewEncapsulation.None</td>
        <td align="left" style="font-weight: bold;">No Shadow DOM at all</td>
        </tr>
    </tbody>
</table>
    <aside class="notes">
        <b>We can add the shadow DOM to Angular components pretty easily with ViewEncapsulation</b>
        <ul>
            <li>ViewEncapsulation has three values, the default is Emulated. All the style that you add to your component will be prefixed by a unique ID</li>
            <li>Native for the Native shadow DOM</li>
            <li>Last value is None, your CSS remains untouched</li>
        </ul>
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
        <b>The last spec is HTML templates. this template tag is really powerful, it never renders children unless you ask for it</b>
        <br/>
        <b>Let's see an example</b>
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
        <b>We have an image, the problem is that even if your image is outside of the viewport, the browser will fetch the image anyway. It is a waste of resource.</b>
        <ul>
            <li>Now if we wrap the same image inside a template tag, then nothing happens. The browser will not fetch the resource.</li>
            <li>To include the image on the page we first need to get the template node reference</li>
            <li>Then we deep clone the content</li>
            <li>To finish we can append the clone anywhere in the page.</li>
            <li>At this point the image will be fetched by the browser</li>
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
    <div layout="column" flex="10" layout-align="center center">
        <i class="fa fa-arrow-circle-right"></i>
    </div>
    <div layout="column" flex="45" layout-align="center center">
<pre style="font-size: 55%"><code class="html" data-trim>
<ng-template [ngIf]="isActive">
  <p>Hello</p>
</ng-template>
</code></pre>
    </div>
</div>
<div class="fragment">
    Same for <code style="color: var(--primary)">\*ngFor</code> & <code style="color: var(--primary)">\*ngSwitch</code>
</div>
    <aside class="notes">
        <b>As Angular developers we use the template tag all the time without knowing it.</b>
        <ul>
            <li>The ngIf directive here wraps the element inside a ng-template tag which is Angular own implementation of the template tag so it is not rendered by the browser by default.</li>
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
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
    <tr>
    <th></th>
    <th align="center">IE</th>
    <th align="center">Edge</th>
    <th align="center">Firefox</th>
    <th align="center">Chrome</th>
    <th align="center">Safari 9+</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Custom Elements v1</td>
    <td align="center" style="background-color: #bc392a;">v11</td>
    <td align="center" style="background-color: #bc392a;">v16</td>
    <td align="center" style="background-color: #bc392a;">v57</td>
    <td align="center" style="background-color: #9eb40b;">v63</td>
    <td align="center" style="background-color: #9eb40b;">v11</td>
    </tr>
    <tr>
    <td>Shadow DOM v1</td>
    <td align="center" style="background-color: #bc392a;">v11</td>
    <td align="center" style="background-color: #bc392a;">v16</td>
    <td align="center" style="background-color: #bc392a;">v57</td>
    <td align="center" style="background-color: #32ac41;">v63</td>
    <td align="center" style="background-color: #9eb40b;">v11</td>
    </tr>
    <tr>
    <td>HTML Templates</td>
    <td align="center" style="background-color: #bc392a;">v11</td>
    <td align="center" style="background-color: #9eb40b;">v16</td>
    <td align="center" style="background-color: #32ac41;">v57</td>
    <td align="center" style="background-color: #32ac41;">v63</td>
    <td align="center" style="background-color: #32ac41;">v11</td>
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
        <b>Let's talk about Browser support: Basically your web components only work natively on Chrome. 
        <br/> But that's not something you should worried about for two reasons:</b>
        <ul>
            <li>First of all all major browsers are commited to support Web Components. And things are accelerating on firefox and safari lately</li>
            <li>the second reason is because we have Polyfills for everything nowadays</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Polyfill support</h3>
    <p>github.com/webcomponents/webcomponentsjs</p>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
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
    <td>Custom Elements v1</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
    <td>Shadow DOM v1</td>
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
<!-- <div class="fragment">
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
</div> -->
    <aside class="notes">
        <b>With the right Polyfills Web components work everywhere.</b>
        <!-- <ul>
            <li>If you are worried about the polyfill size, you can use a loader that you can find on github and that only loads the required polyfill at runtime for the browser you use.</li>
        </ul> -->
    </aside>
</section>

<section>
<div style="display:flex; flex-direction:row;align-items: center;justify-content: center;">
    <img src="../../img/web_component-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">+</span>
    <img src="../../img/angular-logo.png" class="img-plain"/>
    <span style="font-size: 80px; margin: 0px 25px;">?</span>
</div>
<pre class="fragment" data-fragment-index="1" style="font-size: 75%"><code class="typescript" data-trim>
import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
</code></pre>
<h3 class="fragment" data-fragment-index="1">Seamless integration!</h3>
<div class="fragment current-only" data-code-block="1" data-code-focus="3,7"></div>
    <aside class="notes">
        <b>Now you might wonder if you can use Web components in Angular?</b>
        <ul>
            <li>The answer is YES, with CUSTOM_ELEMENTS_SCHEMA, we can use Web Components as if they were angular's components. It is a seamless integration</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Pros</h3>
    <ol>
        <li class="fragment">Reusable piece of code</li>
        <li class="fragment">Style encapsulation</li>
        <li class="fragment">No dependencies `#UseThePlatform`</li>
        <li class="fragment">Works in all major browsers `(with polyfills)`</li>
    </ol>
    <aside class="notes">
        <b>Let's recap why Web Components are something worth checking out</b>
        <ul>
            <li>Custom elements are reusable pieces of code</li>
            <li>With Shadow Dom you style do not leak</li>
            <li>There is No dependencies whatsoever</li>
            <li>With Polyfills your components run everywhere</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Cons</h3>
    <ol>
        <li class="fragment">Manual data binding</li>
        <li class="fragment">No Custom Event bindings `onSomething=""`</li>
        <li class="fragment">Attributes/Properties complexity</li>
        <li class="fragment">Can be a bit verbose</li>
    </ol>
    <aside class="notes">
        <b>The cons are</b>
        <ul>
            <li>We need to apply the DOM updates manually with innerHTML for instance.</li>
            <li>We cannot use directly on our components something like onSomething equal a function, we need to use event listeners</li>
            <li>Attributes and Properties differences adds complexity</li>
            <li>And Since we do a lot of things manually, the code can be a bit verbose.</li>
        </ul>
        <b>One solution to fix all of these limitations is to use StencilJS</b>
    </aside>
</section>
