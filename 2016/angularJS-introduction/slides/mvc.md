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
            <pre><code class="js">
angular.module('MyModuleName').controller('MyController', function($scope, dependency) {
    $scope.heading = 'Hello World!';
});
            </code></pre>

            <pre><code class="html">
&lt;div ng-controller=&quot;MyController&quot;&gt;
    &lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;Hello World!&lt;/h1&gt; --&gt;
&lt;/div&gt;
            </code></pre>
        </li>
        <li>The $rootScope object is the parent of all $scopes</li>
        <li>Prototypical inherited</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>$scope is the link between your presentation layer (View) and the data/business logic (Model)</li>
            <li>It enables the two-way data binding</li>
            <li>
                In the template, the ng-controller directive tells Angular where to bind an instance of a Controller and make the Controller's data and methods available in that DOM scope.
            </li>
        </ul>
    </aside>
</section>


<section>
    <h2>Watchers</h2>

    <ul>
        <li>Automatically added when using <code class="snippet">{{}}</code> in a template</li>
        <li>Manually listen to changes
<pre><code class="js">
$scope.$watch('foo', function(new, old){

});
</code></pre>
        </li>
    </ul>
    <aside class="notes">
        <ul>
            <li>Watchers check for changes at every $digest cycle (see after that slide)</li>
            <li>Stack of things to check</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Change detection</h2>

    <ul>
        <li>$digest cycle</li>
        <li>Update every scopes: $scope.apply() (calls $rootScope.$digest())</li>
        <li>Update current scope and childrens: $scope.digest()</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>What is this famous $digest cycle?</li>
            <li>It is a process that checks every watchers for changes</li>
            <li>$digest cycle doesn’t run just once. At the end of the current loop, it starts all over again to check if any of the models have changed. </li>
        </ul>
    </aside>
</section>
