<section>
    <h1>Template integration</h1>
</section>


<section>
    <h2>Template integration</h2>
    <ul>
        <li>Defines where the current content must be loaded</li>
        <li>Can be nested</li>
    </ul>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="html" data-trim>
<!-- AngularJS 1.x with UI-Router -->
<ui-view>
<!-- Current state content will load here! -->
</ui-view>
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {RouterOutlet} from 'angular2/router';
@Component({
    selector: "app"
})
@View({
    directives: [RouterOutlet]
    template: '<router-outlet></router-outlet>'
})
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
    <h2>Nested views</h2>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="html" data-trim>
<!-- AngularJS 1.x with UI-Router -->
<ui-view></ui-view>
</code></pre>

<pre><code class="js" data-trim>
$stateProvider.state('app', {
    abstract: true,
    template: \`
        <ui-view name="header"></ui-view>
        <ui-view name="content"></ui-view>
    \`
})
.state('app.profile', {
    url: '/profile',
    views: {
        'header': {
            templateUrl: "./profileHeader.html",
            controller: "ProfileHeaderCtlr"
        },
        'content': {
            templateUrl: "./profile.html",
            controller: "ProfileCtlr"
        }
    }
});
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
@Component({selector: "app"})
@View({template: '&lt;router-outlet/&gt;'})
@RouteConfig([
    new Route({ path: '/...', name: 'Products',
        component: Products})
])
class App {}

@Component({})
@View({template: 'products: &lt;router-outlet/&gt;'})
@RouteConfig([{
        path: '/', name: 'all',
        component: ProductList
    }, {path: '/:id', name: 'one',
        component: Product
    }
])
class Products {}
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li>/... means that you delegate the routing to another component</li>
            <li>Only one RouterOutlet per component</li>
        </ul>
    </aside>
</section>