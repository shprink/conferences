<section>
    <h1>MVC</h1>
</section>

<section>
    <h2>Angular's MVC Architecture</h2>
    <img src="img/angular-mvc.svg" style="width:70%; background-color:white;" alt="">
    <aside class="notes">
        <ul>
            <li>
                View it as an MVVM framework, where the VM is specifically targeted at linking the UI (View) to the Data/Logic (Model) via two-way data binding.
            </li>
            <li>
                Data lives in a Model, our HTML lives as a tiny template to be rendered as a View, and we use a Controller to connect the two, driving Model and View value changes.
            </li>
            <li>
                Angular keeps the DOM updated with any Model changes, and updates the underlying Model when a DOM input changes. The  Model is simply a pure JavaScript Object for data-binding purposes.
            </li>
        </ul>
    </aside>
</section>

<section>
    <h2>Two-Way Data binding</h2>
    <ul>
        <li>Synchronizes the View with the Model and vice-versa</li>
        <li>The underlying model is a plain JavaScript Object</li>
        <li>The models are easily parsed to and from JSON, making server-side communication simple</li>
        <li>Binding occurs in the templates via <code class="snippet">{{}}</code> or <code class="snippet">ng-bind</code></li>
        <li>Models can also be two way data-bound via the <code class="snippet">ng-model</code> directive</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>Model becomes the single source of truth since it is always current</li>
            <li>Any valid type in JavaScript can be bound to the ViewModel</li>
            <li>Angular manages the data-binding via dirty checking and the $digest cycle, which checks everything in $scope for changes and then makes updates accordingly</li>
        </ul>
    </aside>

</section>

<section>
    <h2>WITHOUT Two-Way Data binding</h2>
    <pre><code class="html">
    <input type="text" id="my-input-box" />
    <p id="my-label"></p>
    </code></pre>
    <pre><code class="javascript">
    var myInput = document.getElementById("my-input-box");
    var myLabel = document.getElementById("my-label");
    myInput.addEventListener("keyup", function() {
    myLabel.innerText = "Hello, " + this.value;
    }, false);
    </code></pre>
</section>

<section>
    <h2>WITH Two-Way Data binding</h2>
    <div class="fragment">
        <pre><code class="html" ng-non-bindable>
<input type="text" ng-model="name" />
<p>Hello, {{name}}</p>
        </code></pre>
    </div>
    <aside class="notes">
        <ul>
            <li>No need to worry about manipulating the DOM</li>
            <li>Syntax clearer (quickly understand what the code does)</li>
            <li>Less code</li>
        </ul>
    </aside>
</section>

<section>
    <h2>$scope</h2>
    <ul>
        <li>Represents the Model</li>
        <li>Anything attached to the $scope object is then accessible in the HTML
            <pre><code class="html">
    $scope.heading = 'Hello World!';
            </code></pre>

            <pre><code class="html">
    &lt;body ng-app=&quot;MyModuleName&quot; ng-app=&quot;MyController&quot;&gt;
    &lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;Hello World!&lt;/h1&gt; --&gt;
    &lt;/body&gt;
            </code></pre>
        </li>
        <li>$scope is only used in our Controllers and Directives, where we bind data to a view</li>
        <li>The $rootScope object is the parent of all $scopes</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>$scope is the link between your presentation layer (View) and the data/business logic (Model)</li>
            <li>It enables the two-way data binding</li>
            <li>The DOM outside of the scope of the Controller (or Directive) is not accessible via the $scope</li>
            <li>Properties on $rootScope will be accessible via other $scopes through the prototype chain of inheritance (NOTE: be careful about what you inherit. It's easy to shadow parent properties with child properties that are no longer linked).</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Controllers</h2>

    <ul>
        <li>Controllers are responsible for setting up the link between your View and Model (i.e., $scope)</li>
    </ul>
        <pre><code>
angular.module('MyModuleName').controller('MyController', function($scope, dependency) {
    $scope.heading = 'Hello World!';
});
        </code></pre>

        <pre><code>
// Syntax for minification/uglification
angular.module('MyModuleName').controller('MyController', ['$scope', 'dependency', function($scope, dependency) {
    $scope.heading = 'Hello World!';
});
        </code></pre>

    <aside class="notes">
        <ul>
            <li>
                In the template, the ng-controller directive tells Angular where to bind an instance of a Controller and make the Controller's data and methods available in that DOM scope.
            </li>
            <li>Controller function accepts the Controller's name as a String, and a Function that represents the Controller's body</li>
            <li>To ensure the DI works correctly in minified code, an alternate syntax of passing an Array is used, where the inital values of the Array are the String representation of the Controller's dependencies, and the last argument is the Controller's body (i.e., the Function callback).</li>
        </ul>
    </aside>
</section>
