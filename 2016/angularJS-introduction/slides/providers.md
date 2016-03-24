<section>
    <h1>Service vs Factory vs Provider</h1>
</section>

<section>
    <h2>Service</h2>

    <ul>
        <li>Services are invoked with <code class="snippet">new</code> (<code class="snippet">Object.create</code>), thus all data/logic should be bound to <code class="snippet">this</code></li>
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
            <li>.service() is a method on our module that takes a name and a function</li>
            <li>We can inject it into controllers, directives and filters</li>
            <li>A service is a constructor method. it is instanciated using New or Object.create()</li>
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
            <li>.factory() is a method on our module and it also takes a name and a function</li>
            <li>just a function that gets called, which is why we have to return an object explicitly</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Service or Factory?</h2>
    <ul>
        <li>Both <code class="snippet">Singleton</code></li>
        <li>Same purpose, same capabilities</li>
        <li>Services easy to use with ES6 classes</li>
    </ul>

    <pre><code>
class MyService {
  sayHello() {
    console.log('hello');
  }
}
app.service('MyService', MyService);
    </code></pre>

<aside class="notes">
    <ul>
        <li>Regardless of where a Service or Factory is used, it's always the same reference. This enables us to share data across the application.</li>
        <li>Purpose: Organize and share code across your app</li>
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
