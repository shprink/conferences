<section>
    <h1>Routes</h1>
</section>


<section>
    <h2>Routes</h2>
    
        <div class="grid">
            <div class="unit half fragment">
                <ul>
                    <li>A <code class="snippet">State</code> in UI-Router</li>
                    <li>A <code class="snippet">State</code> is the association of a <code class="snippet">name</code>, a <code class="snippet">url</code>, a <code class="snippet">template</code> and a <code class="snippet">controller</code></li>
                </ul>
            </div>
            <div class="unit half fragment" >
                <ul>
                    <li>A <code class="snippet">Route</code> in Angular2 Router</li>
                    <li>A <code class="snippet">Route</code> is the association of a <code class="snippet">name</code>, a <code class="snippet">path</code> and a <code class="snippet">component</code></li>
                </ul>

            </div>
        </div>
     <aside class="notes">
        <ul>
            <li>A route is known as a <code class="snippet">State</code> in UI-Router</li>
        </ul>
        <ul>
            <li>Known as a <code class="snippet">Route</code> in Angular2 Router</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Declaring a Route</h2>
    
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="js" data-trim>
// AngularJS 1.x with UI-Router
app.config(function($stateProvider){
    $stateProvider.state('home', {
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

@Component({})
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
            <li>We can create a state with $stateProvider in a config phase</li>
            <li>We can register Routes on components using RouteConfig annotation</li>
        </ul>
    </aside>
</section>