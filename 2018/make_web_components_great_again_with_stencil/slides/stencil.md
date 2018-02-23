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
            <li>And it outputs Custom Elements</li>
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
            <li>it uses a dynamic loader to load the missing polyfills on browsers that need it.</li>
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
            <li>Stencil uses dynamic imports to load components so you load only what's necessary</li>
        </ul>
    </aside>
</section>

<section>
    <h3 class="no-margin">Tooling you get out of the box</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
        <tr>
        <th></th>
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
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Async Rendering</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>TypeScript</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Decorators</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Server side rendering</td>
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
            <!-- <li>Async rendering which is new in React 16 and aims to prioritize UI updates. High priority updates are ran first, then low priority updates.</li> -->
            <li>TypeScript & Decorators come from the Angular Ecosystem</li>
            <li>And Server side rendering that is common to both React and Angular</li>
        </ol>
        <br/>
        <b>To me it is a really cool combo</b>
    </aside>
</section>

<section>
    <h3>Decorators inspired by Angular</h3>
    <table style="zoom:0.9; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
    <tr>
    <th align="center">
        <img src="../../img/angular-logo.png" width="130" class="img-plain"/>
    </th>
    <th align="center">
        <img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
    </th>
    <th align="center"></th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--angular)">@Component</span>
        </td>
        <td align="left">@Component</td>
        <td align="left">Decorate a class</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--angular)">@Input</span>
        </td>
        <td align="left">@Prop</td>
        <td align="left">Class prop as element prop</td>
    </tr>
    <tr>
        <td align="left"></td>
        <td align="left">@State</td>
        <td align="left">Internal data</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--angular)">@Event</span>
        </td>
        <td align="left">@Output</td>
        <td align="left">Custom event</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--angular)">@HostListener</span>
        </td>
        <td align="left">@Listen</td>
        <td align="left">Listen to custom events</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--angular)">@ElementRef</span>
        </td>
        <td align="left">@Element</td>
        <td align="left">DOM ref to current component</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>All the Angular decorators that you already know about have an equivalent with Stencil</b>
        <b>The only exception is the State decorator. State represente the internal state of the component and it is inspired by React</b>
    </aside>
</section>

<section>
    <h3 style="margin-bottom: 0;">Same Lifecycle hooks as React</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
    <tr>
    <th align="center" colspan="2">
        <img src="../../img/react-logo.png" width="130" class="img-plain"/>
        <img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--react)">componentDidLoad</span>
        </td>
        <td align="left">Loaded and has rendered</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--react)">componentDidUnload</span>
        </td>
        <td align="left">Removed from the DOM</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--react)">componentDidUpdate</span>
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
            <span style="color: var(--react)">componentWillLoad</span>
        </td>
        <td align="left">Will load but has not rendered yet</td>
    </tr>
    <tr>
        <td align="left" style="font-weight: bold;">
            <span style="color: var(--react)">componentWillUpdate</span>
        </td>
        <td align="left">Will update and re-render</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>Stencil has the exact same life cycle hooks as React. 2 more than the native implementation to be more flexible</b>
    </aside>
</section>

<section>
    <h2>Let's see some code!</h2>
    <aside class="notes">
    </aside>
</section>

<section>
    <h4>MyNameIs Component created with Stencil</h4>
<pre style="font-size: 85%;"><code class="typescript" data-trim>
import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-name-is',
  styleUrl: 'my-name-is.css'
})
export class MyNameIs {
  @Prop() name: string;

  render() {
    return (<p>My name is {this.name}</p>);
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="3-6"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="8"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="8,10-13"></div>
    <aside class="notes">
        <b>Let's see an example of a Stencil Component. I re implemented the MyNameIs component</b>
        <ul>
            <li>First of all we decorate our Class with the At Component decorator, we give it a tag name and a styleURL exactly how you would do in Angular</li>
            <li>Then we use the At Prop decorator to let the component know that we want to listen to the prop name changes.</li>
            <li>To finish we need to implement the render method that return JSX. Everytime the prop name changes, the component will update by calling the render method again.</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Component created with Stencil</h3>
<pre style="font-size: 65%;"><code class="typescript" data-trim>
@Component({
  tag: 'counter',
  styleUrl: 'counter.scss'
})
export class Counter {
  @State() count: number = 1;

  componentDidLoad() {
    setInterval(
      () => this.count = this.count + 1,
    1000);
  }

  render() {
    return (
      <p>Counter: {this.count}</p>
    );
  }
}
</code></pre>
<div class="fragment current-only" data-code-block="1" data-code-focus="6"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="8-12"></div>
<div class="fragment current-only" data-code-block="1" data-code-focus="14-19"></div>
    <aside class="notes">
        <b>Now another example of a counter that increment itself by one at every second.</b>
        <ul>
            <li>First of all we declare `count` here as an internal state. The data is not something that comes from the outside of the component but rather live inside of it</li>
            <li>In the componentDidLoad hook, we start incrementing the counter by one every second</li>
            <li>To finish in the render method we return the current state. Everytime `count` changes the render method is called again.</li>
        </ul>
    </aside>
</section>

<!-- <section>
    <h3>Native ES Module support</h3>
<pre style="font-size: 65%;"><code class="typescript" data-trim>
import { MyLib } from './my-lib.js';
</code></pre>
    <img src="./img/es_modules.png" class="img-plain"/>
    <aside class="notes">
        <b>Rather than combining all of your source files together, Stencil uses native ES modules to load asynchronously</b>
        <ul>
            <li>Internally the compiler is using rollup to group common modules together</li>
            <li>the browser makes the final decision of exactly which modules to load</li>
        </ul>
    </aside>
</section> -->

<section>
    <h2 style="text-transform: initial; display: flex; align-items: center; justify-content: center;">
        Ionic 4 is&nbsp;<span style="color: var(--blue)"> powered by</span>
        &nbsp;<img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
    </h2>
    <ul>
        <li class="fragment">`<ion-card>` is now a Web Component</li>
        <li class="fragment">Framework Agnostic</li>
        <li class="fragment">Smaller ionic-angular package</li>
    </ul>
        <!-- <img src="../../img/ionic-logo.png" class="img-plain" width="75%" style="margin: 0;"/> -->
    <aside class="notes">
        <b>In case you lived under a rock for the past few months, Ionic 4 is powered by StencilJS!</b>
        <b>What does it mean exactly?</b>
        <ul>
            <li>ALl the Ionic components are now Web Components</li>
            <li>Ionic is now Framework agnostic, we can use Ionic Everywhere</li>
            <li>And if you use Ionic with Angular, it means a smaller bundle</li>
        </ul>
        <b>Sounds amazing right? let's see how to get started with </b>
    </aside>
</section>

<!-- <section>
    <img src="./img/stencil_ecosystem.jpg" width="70%" class="img-plain"/>
    <aside class="notes">
        <b></b>
    </aside>
</section> -->

<section>
    <h3>Getting started</h3>
<h4 style="text-align: left;">Clone and Install the starter kit</h4>
<pre style="font-size: 65%"><code class="shell" data-trim>
git clone github.com/ionic-team/stencil-app-starter my-app
cd my-app
npm install
</code></pre>
<h4 style="text-align: left;">Start the web server</h4>
<pre style="font-size: 90%"><code class="shell" data-trim>
npm start
</code></pre>
    <aside class="notes">
        <b>To start using Stencil all you need to do is to clone and install the starter app</b>
        <b>Then if you run `npm start` the dev server will start and you will get this:</b>
    </aside>
</section>

<section class="stretch" data-background-color="#fff">
    <img src="./img/stencil_starter.gif"  class="img-plain"/>
    <aside class="notes">
        <b>The starter app has only two pages.</b>
        <b>You get an example on how to create components and how to use Stencil router</b>
        <b>Now that we know about Stencil, let's see some numbers to get you excited</b>
    </aside>
</section>