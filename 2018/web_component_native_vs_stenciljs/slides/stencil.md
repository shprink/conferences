<section data-background-color="#000">
    <h2 style="text-transform: initial;">StencilJS</h2>
    <img src="../../img/stencil_logo.gif" style="margin: 0" width="300" class="img-plain"/>
    <p>https://stenciljs.com/</p>
    <aside class="notes">
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">StencilJS is <span style="color: var(--blue)">NOT ANOTHER FRAMEWORK</span></h2>
    <aside class="notes">
        <b>To make things clear before we start:</b>
    </aside>
</section>

<section>
    <h3>StencilJS</h3>
    <ul>
        <li class="fragment"><span style="color: var(--blue)">Open Source</span> project</li>
        <li class="fragment">Created by the <span style="color: var(--blue)">Ionic Team</span> in 2017</li>
        <li class="fragment">Outputs standards compliant <span style="color: var(--blue)">Custom Elements</span></li>
    </ul>
    <aside class="notes">
        <b>Stencil is...</b>
        <br/>
        <ol>
            <li>Open Source</li>
            <li>created by the Ionic team in late 2017</li>
            <li>And it outputs standard Custom Elements</li>
        </ol>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">StencilJS is <span style="color: var(--blue)">A COMPILER</span> that generates <span style="color: var(--blue)">WEB COMPONENTS</span></h2>
    <aside class="notes">
        <b>Stencil is basically a compiler that generates Web Components</b>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial; margin-bottom: 0.1em;">StencilJS <span style="text-transform: uppercase;  color: var(--blue);">works everywhere</span></h2>
    <h3 style="text-transform: initial; margin-bottom: 0.1em;" class="fragment">Loads polyfills on-demand</h3>
    <aside class="notes">
        <b>Stencil works everywhere! </b>
        <br/>
        <ul>
            <li>it uses a dynamic polyfill loader to load the missing polyfills only when necessary.</li>
        </ul>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial; margin-bottom: 0.1em;">StencilJS <span style="text-transform: uppercase;  color: var(--blue);">is Fast</span></h2>
    <h3 style="text-transform: initial; margin-bottom: 0.1em;" class="fragment">Dynamically loads components</h3>
    <aside class="notes">
        <b>Stencil is fast</b>
        <br/>
        <ul>
            <li>Stencil uses dynamic imports to load components, so you only load what's necessary at a given time.</li>
        </ul>
    </aside>
</section>

<!-- <section>
    <h3 class="no-margin">Tooling you get out of the box</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
        <tr>
        <th></th>
        <th align="center">
            <img src="../../img/web_component-logo.png" width="130" class="img-plain no-margin"/>
        </th>
        <th align="center">
            <img src="../../img/angular-logo.png" width="130" class="img-plain no-margin"/>
        </th>
        <th align="center">
            <img src="../../img/react-logo.png" width="130" class="img-plain no-margin"/>
        </th>
        <th align="center">
            <img src="../../img/stencil-logo.png" width="130" class="img-plain no-margin"/>
        </th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>JSX / Virtual DOM</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>TypeScript</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Decorators</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Server side rendering</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>What you get out of the box is a mix a great features and tools from Angular and React</b>
        <br/>
        <ol>
            <li>JSX, virtual DOM and Async rendering come from the React Ecosystem</li>
            <li>TypeScript & Decorators come from the Angular Ecosystem</li>
            <li>And Server side rendering that is common to both</li>
        </ol>
        <br/>
    </aside>
</section> -->

<!-- <section>
    <h3>List of decorators</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <tbody>
    <tr>
        <td align="left">@Component</td>
        <td align="left">Decorate a class</td>
    </tr>
    <tr>
        <td align="left">@Prop</td>
        <td align="left">Class prop as element prop</td>
    </tr>
    <tr>
        <td align="left">@State</td>
        <td align="left">Internal data</td>
    </tr>
    <tr>
        <td align="left">@Event</td>
        <td align="left">Custom event</td>
    </tr>
    <tr>
        <td align="left">@Listen</td>
        <td align="left">Listen to custom events</td>
    </tr>
    <tr>
        <td align="left">@Method</td>
        <td align="left">Expose methods on the public API</td>
    </tr>
    <tr>
        <td align="left">@Watch</td>
        <td align="left">Fire method when attr changes</td>
    </tr>
    <tr>
        <td align="left">@Element</td>
        <td align="left">DOM ref to current component</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>All the Angular decorators that you already know about have an equivalent with Stencil</b>
        <b>The only exception is the State decorator. State represente the internal data of the component and it is inspired by React</b>
    </aside>
</section> -->


<!-- <section>
<h3>Creating a component</h3>
<pre style="font-size: 80%"><code class="ts" data-trim>
import { Component } from '@stencil/core';

@Component({
  tag: 'my-component'
})
export class MyComponent {
  render() {
    return "Hello World";
  }
}
</code></pre>
<div class="fragment current-only" data-code-focus="1"></div>
<div class="fragment current-only" data-code-focus="3"></div>
<div class="fragment current-only" data-code-focus="6"></div>
<div class="fragment current-only" data-code-focus="7"></div>
    <aside class="notes">
    </aside>
</section> -->

<!-- 
<section>
    <h3>LIFECYCLE HOOKS</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <tbody>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span>componentDidLoad</span>
        </td>
        <td align="left">Element inserted and rendered</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span>componentDidUnload</span>
        </td>
        <td align="left">Element removed</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span>componentDidUpdate</span>
        </td>
        <td align="left">Finished updating.</td>
    </tr>
    </tbody>
    </table>
    <h5>New Hooks compared to custom elements:</h5>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <tbody>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span>componentWillLoad</span>
        </td>
        <td align="left">Will load but has not rendered yet</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span>componentWillUpdate</span>
        </td>
        <td align="left">Will update and re-render</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>Stencil has the exact same life cycle hooks as React. which is two more than the native implementation</b>
    </aside>
</section> -->


<!-- <section>
    <h4>Observing Attributes changes</h4>
<pre style="font-size: 80%"><code class="html" data-trim>
<my-name-is name="Julien"></my-name-is>
// Hello my name is Julien
</code></pre>
<pre style="font-size: 70%;"><code class="typescript" data-trim>
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-name-is'
})
export class MyNameIs {
  @Prop() name: string;

  render() {
    return (<p>My name is {this.name}</p>);
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="7"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="10"></div>
    <aside class="notes">
    </aside>
</section> -->


<!-- <section>
<i style="font-size: 200px; color: yellow" class="fa fa-exclamation-triangle"></i>
<h3>@Prop supports primitive & complex types</h3>
    <aside class="notes">
    </aside>
</section> -->


<!-- <section>
<h3>Events</h3>
<h4 style="text-align: left;">Dispatch</h4>
<pre style="font-size: 58%"><code class="js" data-trim>
import { Event, EventEmitter } from '@stencil/core';

export class TodoList {
  @Event() todoCompleted: EventEmitter;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="4"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="7"></div>
<h4 style="text-align: left;">Listen</h4>
<pre style="font-size: 58%"><code class="js" data-trim>
import { Listen } from '@stencil/core';

export class TodoApp {
  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent) {
    console.log('Received: ', event.detail);
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="2" data-code-focus="1"></div>
<div class="fragment current-only" data-code-block="2" data-code-focus="4,5"></div>
    <aside class="notes"> </aside>
</section> -->

<!-- <section>
<h3>Enabling Shadow DOM</h3>
<pre style="font-size: 80%"><code class="ts" data-trim>
import { Component } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  render() {
    return "Hello World";
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="5"></div>
</section> -->


<section>
    <h2 style="text-transform: initial;"> <span style="color: var(--blue)">Prerendering</span> comes <span style="color: var(--blue)">out of the box</span></h2>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="30" layout-align="center center">
<pre style="font-size: 60%;text-align:left;"><code class="html" data-trim>
&lt;body&gt;
  <my-app></my-app>
&lt;/body&gt;
</code></pre>
        </div>
        <div class="fragment" data-fragment-index="1" layout="column" flex="5" layout-align="center center">
            <i class="fa fa-arrow-circle-right"></i>
        </div>
        <div class="fragment" data-fragment-index="1" layout="column" flex="60" layout-align="center center">
            <img src="./img/prerendering.png" class="img-plain"/>
        </div>
    </div>
    <ul>
        <li class="fragment">🚀 Blazing fast First Meaningful Paint</li>
        <li class="fragment">Better SEO</li>
    </ul>
    <aside class="notes">
        <b>Prerendering comes out of the box with Stencil!</b>
        <br/>
        <b>With modern frameworks we are used to have only one component in our index.html exactly as on the left side here</b>
        <br/>
        <ul>
            <li>Stencil uses it server side rendering capability to prerender your app in production mode</li>
        </ul>
        <ul>
            <li>The benefits are a Blazing fast First meaningful paint. Your users will see your application as fast as possible</li>
            <li>Better Search Engine Optimization</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Stencil Syntax is short</h3>
    <img src="./img/stencil_vs_wc.png" class="img-plain no-margin"/>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Getting started</h3>
<pre style="font-size: 65%"><code class="shell" data-trim>
$ npm init stencil
</code></pre>
<pre style="font-size: 55%"><code class="shell" data-trim>
? Pick a starter › - Use arrow-keys. Return to submit.

❯  ionic-pwa     Everything you need to build fast, production ready PWAs
   app           Minimal starter for building a Stencil app or website
   component     Collection of web components that can be used anywhere

</code></pre>
    <aside class="notes">
        <b>To start using Stencil all you need to do is to clone and install the starter app that is available on github</b>
        <br/>
        <b>Then if you run `npm start` the dev server will start and you will get the following app:</b>
    </aside>
</section>