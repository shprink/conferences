<section>
    <h1>Location strategies</h1>
</section>


<section>
    <h2>Location strategies</h2>
    <ul>
        <li>Two posibilities: With or without hash (#)</li>
    </ul>
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
            <li></li>
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
            <li></li>
        </ul>
    </aside>
</section>