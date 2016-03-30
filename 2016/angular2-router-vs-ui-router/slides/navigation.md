<section>
    <h1>Navigation</h1>
</section>

<section>
    <h2>In the DOM</h2>
    <ul>
        <li><code class="snippet">ui-sref</code> directive for UI-Router</li>
        <li><code class="snippet">routerLink</code> directive for Angular2 Router</li>
    </ul>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="html" data-trim>
<!-- AngularJS 1.x with UI-Router -->
<a ui-sref="home">Home page</a>
<a ui-sref="about">About page</a>
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {RouterLink} from 'angular2/router';
@Component({
  selector: "menu",
  directives: [RouterLink],
  template: \`
    <a [routerLink]="['./Home']">Home page</a>
    <a [routerLink]="['./About']">About page</a>
  \`
})
export class Menu {}
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
    <h2>In your js modules</h2>
    <ul>
        <li><code class="snippet">$state.go</code> service for UI-Router</li>
        <li><code class="snippet">Router.navigate</code> service for Angular2 Router</li>
    </ul>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="js" data-trim>
<!-- AngularJS 1.x with UI-Router -->
$state.go('products.item', {id: 4});
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {Router} from 'angular2/router';
class {
  constructor(private _router: Router) {
    this._router.navigate( [
        './ProductItem', 
        { id: 4 }
    ] );
  }
}
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li></li>
        </ul>
    </aside>
</section>