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
            <li>A view placeholder is a placeholder that Angular dynamically fills based on the application's route.</li>
            <li>It can be nested</li>
        </ul>
        <ul>
            <li>Use ui-view directive for the ui-router</li>
            <li>and RouterOutlet for Angular2</li>
        </ul>
    </aside>
</section>

<section>
    <img src="../../img/meme/go-deeper.jpg" style="width: 18em;"/>
     <aside class="notes">
        <ul>
            <li>Let's see how to go deeper with nested views</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Nested views</h2>
    <img src="./img/nested-views.jpg" />
     <aside class="notes">
        <ul>
            <li>How to create that?</li>
            <li>index.html contains either the root ui-view or the App routerOutlet</li>
            <li>When we are browsing the Product page we want only a part of the ui updated, not the menu</li>
            <li>To do this we must create a named ui-view or routerOutlet in the Products component</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Nested views</h2>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="html" data-trim>
<!-- AngularJS 1.x UI-Router - index.html -->
<ui-view></ui-view>
</code></pre>

<pre><code class="js" data-trim>
$stateProvider.state('products', {
    abstract: true,
    template: '<Menu></Menu>
               &lt;ui-view name="products"/&gt;'
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
        <div class="unit half " >
<pre class="fragment"><code class="typescript" data-trim>
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
</code></pre>
<pre class="fragment"><code class="typescript" data-trim>
@Component({
    template: '<Menu></Menu>&lt;router-outlet/&gt;'
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
        This could be complicated to explain and not really interesting in that format but here is what you need to remember
        <ul>
            <li>With ui router we can do that using named ui-view</li>
            <li>This named ui-view can be reference by any nested state</li>
        </ul>
        <ul>
            <li>products/... means that the App component delegates the routing to the Products component</li>
            <li>The products component can defines its own Routes</li>
            <li>We can have only one RouterOutlet per component</li>
        </ul>
        <!--<ul>
            <li>We define an abstract products state that does not have a url. It has a named ui-view directive and a menu directive</li>
            <li>the two other states follow the {parent}.{name} pattern, they are called nested views</li>
            <li>These states inject their content in the ui-view name "products" (because within the views property)</li>
        </ul>
        For Angular2
        <ul>
            <li>The App component has a routerOutlet and has one Route registered</li>
            <li>We can have only one RouterOutlet per component</li>
            <li>products/... means that the App component delegates the routing to the Products component</li>
            <li>[NEXT]</li>
            <li>the Products component uses its own RouterOutlet</li>
            <li>the Products component also defines it own Routes</li>
        </ul>-->
    </aside>
</section>
