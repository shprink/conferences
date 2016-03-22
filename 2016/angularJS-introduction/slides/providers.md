<section>
    <h1>Service Factory and Provider</h1>
</section>

<section>
    <h2>Services and Factories</h2>
    <ul>
        <li>Organize and share code across your app</li>
        <li>Services are invoked with <code class="snippet">new</code>, thus all data/logic should be bound to <code class="snippet">this</code></li>
        <li>Factories are <em>not</em> invoked with <code class="snippet">new</code> and can return anything (e.g., Functions, Objects, Arrays, simple values)</li>
        <li>Service or Factory are <em>singleton</em></li>
    </ul>

    <aside class="notes">
        <ul>
            <li>The fact that they are singletons is very important and powerful. This means that regardless of where a Service or Factory object is used, it's always the same object. This enables us to share data across Controllers and maintain state with our application.</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Service</h2>

    <ul>
        <li>Services are invoked with <code class="snippet">new</code>, thus all data/logic should be bound to <code class="snippet">this</code></li>
    </ul>

    <pre><code>
angular.module('MyModule').service('MyService', function() {
    var bar = 'bar';
    this.doSomething = function() {
        return 'foo' + bar;
    }
});
    </code></pre>

    <pre><code>
angular.module('MyModule').controller('MyController', function ($scope, myService) {
    $scope.heading = myService.doSomething();
});
    </code></pre>

    <pre><code>
&lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;foobar&lt;/h1&gt;--&gt;
    </code></pre>

    <aside class="notes">
        <ul>
            <li>Service objects are just constructors that only get invoked once</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Factory</h2>

    <ul>
        <li>Can return anything, but typically an <code class="snippet">Object Literal</code> or <code class="snippet">Function</code></li>
    </ul>


    <pre><code>
angular.module('MyModule').factory('MyService', function () {
    var bar = 'bar';

    return {
        doSomething: function() {
            return 'foo' + bar;
        }
    }
});
    </code></pre>

    <pre><code>
angular.module('MyModule').controller('MyController', function ($scope, myService) {
    $scope.heading = myService.doSomething();
});
    </code></pre>

    <aside class="notes">
        <ul>
            <li>Take advantage of closures and can create privately scope variables</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Providers</h2>
    <ul>
        <li>Used throughout your application just like Factories or Services, however they can also be passed into the <code class="snippet">.config()</code> of your Module</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>The config of a module is executed before the DI invokes the Service or Factory functions, enabling you to setup certain parts of your service/factory</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Provider Syntax</h2>

    <pre><code>
angular.module('MyModule').provider('MyService', function() {
    var bar = 'bar';
    return {
        setBar: function(newBar) { bar = newBar; },
        $get: function() {
            return {
                doSomething: function() { return 'foo' + bar; }
            };
        }
    };
});
    </code></pre>

    <pre><code>
angular.module('MyModule').config(function(MyServiceProvider) {
    MyServiceProvider.setBar('foo');
}).controller('MyController', function($scope, MyService) {
    $scope.heading = MyService.doSomething();
});
    </code></pre>


    <pre><code>
&lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;foofoo&lt;/h1&gt;--&gt;
    </code></pre>

    <aside class="notes">
        <ul>
            <li>.config is called when the app starts</li>
            <li>.config is a way to customize services before runtime</li>
        </ul>
    </aside>
</section>
