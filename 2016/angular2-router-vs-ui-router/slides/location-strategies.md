<section>
    <h1>Location strategies</h1>
</section>


<section>
    <h2>Location strategies</h2>
    <br/>
    <h4>Two posibilities: With or without hash (#)</h4>
     <aside class="notes">
        <ul>
            <li>If you are familiar with UI-Router you know that it has two location possibilities.</li>
            <li>With or without the # tag</li>
            <li>It is the exact same thing for Angular2 Router</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Hash based location</h2>
    <ul>
        <li>e.g: <code class="snippet">#products/18</code></li>
        <li>No server side configuration</li>
        <li>Default strategy for UI-Router</li>
    </ul>
    
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="hljs" data-trim>
// AngularJS 1.x with UI-Router
angular.module('app', ['ui.router'])
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/angular2';
import {yourApp} from 'path/to/app';
import {
    ROUTER_PROVIDERS, 
    LocationStrategy, 
    HashLocationStrategy
} from 'angular2/router';

bootstrap(yourApp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {
        useClass: HashLocationStrategy
    })
]);
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li>e.g</li>
            <li>Apache or nGinx configuration is not necessary</li>
            <li>Routing happens in the browser only</li>
            <li>It is the default strategy for UI-Router</li>
        </ul>
        code:
        <ul>
            <li>This is how you configure the UI-Router to use the hash based strategy => Just injecting the dependency</li>
            <li>On the other hand the Angular2 version is more complicated => Everything happens when bootstraping the app. We include a list of router providers and create a new provider LocationStrategy that is using another Class to overwrite the default behavior</li>
        </ul>
    </aside>
</section>


<section>
    <h2>Path based location</h2>
    <ul>
        <li>e.g: <code class="snippet">/products/18</code></li>
        <li>Server side configuration needed</li>
        <li>Need to define a relative <code class="snippet">base</code></li>
        <li>Default strategy for Angular2 Router</li>
    </ul>
    
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="hljs" data-trim>
// AngularJS 1.x with UI-Router
var app = angular.module('app', ['ui.router']);
app.config(function($locationProvider){
   $locationProvider.html5Mode(true); 
});
</code></pre>

<pre><code class="html" data-trim>
&lt;base href="/"&gt;
</code></pre>

        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router (default)
import {
    ROUTER_PROVIDERS, 
    APP_BASE_HREF
} from 'angular2/router';

bootstrap(yourApp, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {
        useValue: '/'
    })
]);
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li>e.g</li>
            <li>Apache or nGinx configuration is necessary</li>
            <li>You MUST define a base for resources</li>
            <li>It is the default strategy for Angular2 Router</li>
        </ul>
        code:
        <ul>
            <li>To use this strategy with UI-Router you need to use the locationProvider, set html5Mode to true and add a base tag in your html</li>
            <li>With Angular2 you must provide a provider for APP_BASE_HREF to a string representing the URL prefix that you want to preserved </li>
        </ul>
    </aside>
</section>