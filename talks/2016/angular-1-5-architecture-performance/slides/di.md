<section>
    <h1>DI</h1>
</section>

<section>
    <h2>Dependency Injection</h2>
    <ul>
        <li>Resolving dependencies via argument names
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', function($log) {
    $log.debug('hello world to console');
});
            </code></pre>
        </li>
        <li>$injector service can be injected
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', function($injector) {
    $injector.get('$log').debug('hello world to console');
});
            </code></pre>
        </li>
        <li>To handle minification/uglification, Angular provides an alernate syntax
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', ['$log', function($log) {
    $log.debug('hello world to console');
}]);
            </code></pre>
        </li>
    </ul>



    <aside class="notes">
        <ul>
            <li>Dependencies are explicitly declared and passed to the object or function</li>
            <li>The $injector typically does not need to be called explicitly, Angular does the resolving of dependencies for us</li>
            <li>Angular will throw an error if it cannot resolve a dependency</li>
        </ul>
    </aside>

</section>
