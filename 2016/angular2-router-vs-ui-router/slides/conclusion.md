<section>
    <h1>Conclusion</h1>
</section>


<section>
    <h2>Conclusion</h2>
    
    <ul>
        <li>Angular2 Router keeps (almost) all UI-Router features</li>
        <li>Same location strategies (Path and Hash)</li>
        <li>Similar route definitions</li>
        <li>Similar services:
            <ul>
                <li><code class="snippet">$state.go</code> and <code class="snippet">Router.navigate</code></li>
                <li><code class="snippet">$stateParams</code> and <code class="snippet">RouteParams</code></li>
                <li><code class="snippet">$state.current.data</code> and <code class="snippet">RouteData</code></li>
            </ul>
        </li>
        <li>Similar directives:
            <ul>
                <li><code class="snippet">ui-view</code> and <code class="snippet">router-outlet</code></li>
                <li><code class="snippet">ui-sref</code> and <code class="snippet">routerLink</code></li>
            </ul>
        </li>
    </ul>
    <aside class="notes">
        <ul>
            <li>We can say that overall we have the same features</li>
            <li>the Same location strategies</li>
            <li>Similar route definitions => a route (previously a state) is still a url, a template and some JS logic</li>
            <li>Similar services
                <ul>
                    <li>$state.go and Router.navigate to navigate from page to page</li>
                    <li>$stateParams and RouteParams to get URL parameters</li>
                    <li>$state.current.data and RouteData to get Route static data</li>
                </ul>
            </li>
            <li>Similar directives
                <ul>
                    <li>ui-view and router-outlet to display components upon url changes</li>
                    <li>ui-sref and routerLink for click events</li>
                </ul>
            </li>
        </ul>
    </aside>
</section>