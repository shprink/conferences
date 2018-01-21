<section data-background-color="#000">
    <h2 style="text-transform: initial;">StencilJS</h2>
    <img src="../../img/stencil_logo.gif" style="margin: 0" width="300" class="img-plain"/>
    <p>https://stenciljs.com/</p>
    <aside class="notes">
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">StencilJS is <span style="color: var(--primary)">NOT ANOTHER FRAMEWORK</span></h2>
    <aside class="notes">
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">StencilJS is <span style="color: var(--blue)">A COMPILER</span> that generates <span style="color: var(--primary)">WEB COMPONENTS</span></h2>
    <aside class="notes">
    </aside>
</section>

<section>
    <h3>What you get out of the box</h3>
    <table style="zoom:0.8; margin-bottom: 60px" class="table table-striped table-dark">
    <thead>
        <tr>
        <th></th>
        <th align="center">
            <img src="../../img/web_component-logo.png" width="130" class="img-plain"/>
        </th>
        <th align="center">
            <img src="../../img/angular-logo.png" width="130" class="img-plain"/>
        </th>
        <th align="center">
            <img src="../../img/react-logo.png" width="130" class="img-plain"/>
        </th>
        <th align="center">
            <img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
        </th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>JSX</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Virtual DOM</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    <tr>
        <td>Async Rendering</td>
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
        <td>Decorator</td>
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
    <tr>
        <td>Data binding</td>
        <td align="center" style="background-color: #bc392a;">⨯</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
        <td align="center" style="background-color: #32ac41;">✓</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>Out of the box using the Web components spec none of these features or tools are available</b>
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
    <th align="center" colspan="2">
        <img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="left">@Component</td>
        <td align="left">@Component</td>
        <td align="left">Decorate a class</td>
    </tr>
    <tr>
        <td align="left">@Input</td>
        <td align="left">@Prop</td>
        <td align="left">Class prop as element prop</td>
    </tr>
    <tr>
        <td align="left"></td>
        <td align="left">@State</td>
        <td align="left">Internal data</td>
    </tr>
    <tr>
        <td align="left">@Event</td>
        <td align="left">@Output</td>
        <td align="left">Custom event</td>
    </tr>
    <tr>
        <td align="left">@HostListener</td>
        <td align="left">@Listen</td>
        <td align="left">Listen to custom events</td>
    </tr>
    <tr>
        <td align="left">@ElementRef</td>
        <td align="left">@Element</td>
        <td align="left">DOM ref to current component</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
        <b>All of those Angular decorator that you already know about have an equivalent with Stencil</b>
    </aside>
</section>

<section>
    <h3>Same Life Cycle hooks as React</h3>
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
        <td align="left">componentWillLoad</td>
        <td align="left">Will load but has not rendered yet</td>
    </tr>
    <tr>
        <td align="left">componentDidLoad</td>
        <td align="left">Loaded and has rendered</td>
    </tr>
    <tr>
        <td align="left">componentWillUpdate</td>
        <td align="left">Will update and re-render</td>
    </tr>
    <tr>
        <td align="left">componentDidUpdate</td>
        <td align="left">Finished updating.</td>
    </tr>
    <tr>
        <td align="left">componentDidUnload</td>
        <td align="left">Removed from the DOM</td>
    </tr>
    </tbody>
    </table>
    <aside class="notes">
    </aside>
</section>

<section>
    <h3>Prerendering</h3>
 
    <aside class="notes">
    </aside>
</section>

<section>
    <h2 style="text-transform: initial; display: flex; align-items: center; justify-content: center;">
        Ionic 4 is&nbsp;<span style="color: var(--blue)"> powered by</span>
        &nbsp;<img src="../../img/stencil-logo.png" width="130" class="img-plain"/>
    </h2>
        <!-- <img src="../../img/ionic-logo.png" class="img-plain" width="75%" style="margin: 0;"/> -->
    <aside class="notes">
        <b>In case you did not know Ionic 4 is powered by StencilJS!</b>
        <b>It means that we can use the Ionic components that we all love as Angular developer but use it anywhere, with any framework or none at all</b>
    </aside>
</section>

<section>
    <h3>Getting started</h3>
<h4 style="text-align: left;">Clone and Install the starter kit</h4>
<pre style="font-size: 65%"><code class="shell" data-trim>
git clone github.com/ionic-team/stencil-app-starter my-app
cd my-app
npm install
</code></pre>
<h4 style="text-align: left;">Start the web server</h4>
<pre style="font-size: 65%"><code class="shell" data-trim>
npm start
</code></pre>
<h4 style="text-align: left;">Run the tests</h4>
<pre style="font-size: 65%"><code class="shell" data-trim>
npm test
</code></pre>
    <aside class="notes">
    </aside>
</section>


<section>
    <h3>Why use StencilJS</h3>
    <ol>
        <li><span style="color: var(--blue)">Interoperability</span></li>
        <li><span style="color: var(--blue)">Write less code</span> (Decorator, JSX)</li>
        <li><span style="color: var(--blue)">Write better code</span> (Static Type-checking)</li>
        <li><span style="color: var(--blue)">DOM manipulation performance</span> (Virtual DOM)</li>
        <li><span style="color: var(--blue)">Faster time to first meaningful paint</span> (Prerendering)</li>
        <li><span style="color: var(--blue)">Better SEO</span> (Prerendering)</li>
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