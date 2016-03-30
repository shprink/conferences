<section>
    <h1>Conclusion</h1>
</section>


<section>
    <h2>Conclusion</h2>
    
    <ul>
        <li>Angular2 Router keeps (almost) all UI-Router features</li>
        <li>Same location strategies (Path and Hash)</li>
        <li>Similar route definitions</li>
        <li>Similar services API:
            <ul>
                <li><code class="snippet">$state.go</code> and <code class="snippet">Router.navigate</code></li>
                <li><code class="snippet">$stateParams.id</code> and <code class="snippet">RouteParams.get('id')</code></li>
            </ul>
        </li>
        <li>Similar directives and purpose:
            <ul>
                <li><code class="snippet">ui-view</code> and <code class="snippet">router-outlet</code></li>
                <li><code class="snippet">ui-sref</code> and <code class="snippet">routerLink</code></li>
            </ul>
        </li>
    </ul>
    <aside class="notes">
        <ul>
            <li>Similar route definitions => a route (previously a state) is still a url, a template and some JS logic</li>
            <li>ui-view & router-outlet same purpose => Display elements in a part of the DOM upon URL changes</li>
            <li>ui-sref & routerLink same purpose => Navigate between routes (or states)</li>
        </ul>
    </aside>
</section>