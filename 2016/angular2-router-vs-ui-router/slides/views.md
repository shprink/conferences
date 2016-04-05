<section>
    <h1>View placeholder</h1>
    <aside class="notes">
        
    </aside>
</section>


<section>
    <h2>View placeholder</h2>
    <ul>
        <li>Where the content loads</li>
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
            <li>A UI-VIEW or a routerOutlet is a placeholder that Angular dynamically fills based on the application's route.</li>
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
            <li>We define an abstract products state that does not have a url. It has a named ui-view directive</li>
            <li>the two other states follow the {parent}.{name} pattern, they are called nested views</li>
            <li>These states inject their content in the ui-view name "products" (see the views property) and not on the root one</li>
        </ul>
    </aside>
     <aside class="notes">
        <ul>
            <li>The App component has a routerOutlet and has one Route registered</li>
            <li>Only one RouterOutlet per component</li>
            <li>/... means that the App component delegates the routing to the Products component</li>
            <li>the Products component defines it own Routes and uses RouterOutlet</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Nested views</h2>
    <img src="./img/nested-views.jpg" />
    <aside class="notes">
        
    </aside>
</section>
