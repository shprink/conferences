<section>
    <h1>Routes</h1>
</section>


<section>
    <h2>Routes</h2>
    <ul>
        <li>Known as <code class="snippet">State</code> with UI-Router</li>
        <li>Known as <code class="snippet">Route</code> with Angular2 Router</li>
        <li>A route is a <code class="snippet">name</code>, a <code class="snippet">url</code> and a <code class="snippet">component</code></li>
    </ul>
</section>

<section>
    <h2>Declare a Route</h2>
    
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="js" data-trim>
// AngularJS 1.x with UI-Router
app.config(function($locationProvider){
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    })
});
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {
    RouteConfig,
    Route
} from 'angular2/router';
import {MyComponentHome} from './myComponents';

@Component({
    selector: "app"
})
@RouteConfig([
    new Route({ 
        path: '/', 
        component: MyComponentHome, 
        name: 'Home'
    })
])
export class App {...}
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li></li>
        </ul>
    </aside>
</section>