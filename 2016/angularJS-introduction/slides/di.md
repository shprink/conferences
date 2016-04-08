<section>
    <h1>DI</h1>
</section>

<section>
    <h2>Dependency Injection</h2>
    <ul>
        <li>Resolving dependencies via argument names
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', 
    function($log, $http) { // same as ($http, $log)
        $log.debug('About to make an HTTP call');
        $http.get({ /\* ... \*/})
});
            </code></pre>
        </li>
        <li>Behind the scene: $injector service
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', function($injector) {
    $injector.get('$log').debug('About to make an HTTP call');
});
            </code></pre>
        </li>
        <li>Minification/uglification
            <pre><code class="javascript" ng-non-bindable data-trim>
app.controller('FavoritesController', ['$log', function($log) {
    $log.debug('hello world to console');
}]);
            </code></pre>
            <pre><code class="javascript" ng-non-bindable data-trim>
var FavoritesController = function($log) { $log.debug('hello world to console');}
FavoritesController.$inject = ['$log'];
app.controller('FavoritesController', FavoritesController);
            </code></pre>
        </li>
    </ul>



    <aside class="notes">
        <ul>
            <li>Dependencies are explicitly declared and passed to the function based on their name</li>
            <li>This DI system is unique to Angular, it allows you to inject any service of your app dependencies</li>
            <li>The $injector typically does not need to be called explicitly, Angular does the resolving of dependencies for us</li>
            <li>Angular will throw an error if it cannot resolve a dependency</li>
            <li>As it is based on arguments names, the DI breaks when we minify our code.</li>
            <li>To prevent that we can use an array syntax or the $inject property</li>
        </ul>
    </aside>

</section>
