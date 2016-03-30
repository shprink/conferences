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
    selector: "app",
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
    <img src="../../img/meme/go-deeper.jpg" style="width: 18em;"/>
     <aside class="notes">
        <ul>
            <li>We can now go deeper and nest our views</li>
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
$stateProvider.state('products', {
    abstract: true,
    template: '&lt;ui-view name="products"/&gt;'
})
.state('products.list', {
    url: '/products',
    views: {
        'products': {
            templateUrl: "./ProductList.html",
            controller: "ProductListCtlr"
        }
    }
});
.state('products.item', {
    url: '/products/:id',
    views: {
        'products': {
            templateUrl: "./Product.html",
             controller: "ProductCtlr"
        }
    }
});
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
@Component({
    selector: "app"
    template: '&lt;router-outlet/&gt;'
})
@RouteConfig([
    new Route({ path: 'products/...',
        name: 'Products',
        component: Products})
])
class App {}
@Component({
    template: 'products: &lt;router-outlet/&gt;'
})
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