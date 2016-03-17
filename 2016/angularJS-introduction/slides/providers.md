<section>
    <h1>Providers</h1>
</section>

<section>
    <h2>Services and Factories</h2>
    <ul>
        <li>Containers for our application's Model, where the data and business logic should live</li>
        <li>Services are invoked with <code class="snippet">new</code>, thus all data/logic should be bound to <code class="snippet">this</code></li>
        <li>Factories are <em>not</em> invoked with <code class="snippet">new</code> and can return anything (e.g., Functions, Objects, Arrays, simple values)</li>
        <li>Everything returned from either a Service or Factory is a <em>singleton</em></li>
    </ul>

    <aside class="notes">
        <ul>
            <li>The fact that they are singletons is very important and powerful. This means that regardless of where a Service or Factory object is used, it's always the same object. This enables us to share data across Controllers and maintain state with our application.</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Service Syntax</h2>

    <pre><code>
angular.module('MyModule')
.service('MyService', [myService]);

function myService() {
this.bar = 'bar';
this.doSomething = function doSomething() {
return 'foo' + this.bar;
}
}
    </code></pre>

                            <pre><code>
angular.module('MyModule')
.controller('MyController', ['$scope', 'MyService', myController]);

function myController($scope, myService) {
$scope.heading = myService.doSomething();
}
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
    <h2>Factories</h2>
    <ul>
        <li>Can return anything, but typically an <code class="snippet">Object Literal</code> or <code class="snippet">Function</code></li>
    </ul>

    <aside class="notes">
        <ul>
            <li>Take advantage of closures and can create privately scope variables</li>
            <li>When naming Factories, recommend still use the word 'service' unless they are truly a Factory for creating other objects</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Factory Syntax</h2>

    <pre><code>
angular.module('MyModule')
.factory('MyService', [myService]);

function myService() {
var bar = 'bar';

return {
doSomething: doSomething
}

function doSomething() {
return 'foo' + bar;
}
}
    </code></pre>

                            <pre><code>
angular.module('MyModule')
.controller('MyController', ['$scope', 'MyService', myController]);

function myController($scope, myService) {
$scope.heading = myService.doSomething();
}
    </code></pre>
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
angular.module('MyModule')
.provider('MyService', function() {
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
angular.module('MyModule')
.config(function(MyServiceProvider) {
MyServiceProvider.setBar('baz');
})
.controller('MyController', function($scope, MyService) {
$scope.heading = MyService.doSomething();
});
    </code></pre>

    <aside class="notes">
        <ul>
            <li>Service objects are just constructors that only get invoked once</li>
        </ul>
    </aside>
</section>
