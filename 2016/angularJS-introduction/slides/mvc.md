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
    <h2>$scope (Model)</h2>
    <ul>
        <li>Represents the Model</li>
        <li>Plain JavaScript Object</li>
        <li>Anything attached to the $scope object is then accessible in the HTML via <code class="snippet">{{}}</code> or <code class="snippet">ng-bind</code>
            <pre><code class="js" data-trim>
$scope.user = {
    firstname: 'Julien'
}
            </code></pre>
            <pre><code class="html" data-trim>
<h1>Welcome {{user.firstname}}</h1>
<h1>Welcome <span ng-bind="user.firstname"></span></h1>
            </code></pre>
        </li>
        <li>The <code class="snippet">$rootScope</code> object is the parent of all <code class="snippet">$scope</code></li>
        <li><code class="snippet">$scope</code> inherites from parents <code class="snippet">$scope</code> and <code class="snippet">$rootScope</code></li>
    </ul>

    <aside class="notes">
        <ul>
            <li>$scope is the link between your presentation layer (View) and the data/business logic (Model)</li>
            <li>The Model becomes the single source of truth</li>
            <li>It enables the two-way data binding</li>
            <li>
                In the template, the ng-controller directive tells Angular where to bind an instance of a Controller and make the Controller's data and methods available in that DOM scope.
            </li>
        </ul>
    </aside>
</section>

<section>
    <h2>Two-Way Data binding</h2>
    <ul>
        <li>Synchronizes the View with the Model and vice-versa</li>
        <li>Must use <code class="snippet">ng-model</code> directive</li>
    <pre><code class="js" data-trim>
$scope.user = {
    firstname: 'Julien'
}
            </code></pre>
        <pre><code class="html">
<input type="text" ng-model="user.firstname">
<p>Welcome, {{user.firstname}}</p>
        </code></pre>
    <iframe style="background-color:white;" src="examples/data-bind/two-way.html"></iframe>
    <aside class="notes">
        <ul>
            <li>No need to worry about DOM manipulation</li>
            <li>Clean and understandable Syntax</li>
            <li>Few lines of code</li>
        </ul>
    </aside>
</section>

<section>
    <h2>WITHOUT Two-Way Data binding</h2>
    <pre><code class="html" data-trim>
<input type="text" id="my-input-box" />
<p id="my-label"></p>
    </code></pre>
    
    <pre><code class="js" data-trim>
var myInput = document.getElementById("my-input-box");
var myLabel = document.getElementById("my-label");
myInput.addEventListener("keyup", function() {
    myLabel.innerText = "Hello, " + this.value;
}, false);
    </code></pre>
</section>

<section>
    <h2>Watchers</h2>

    <ul>
        <li>Listen to a scope property change</li>
        <li>Triggers when a change has happened</li>
        <li>Several way to attach a watcher: <code class="snippet">$scope.$watch</code>, <code class="snippet">{{}}</code>, <code class="snippet">ng-bind</code> or <code class="snippet">ng-model</code>
            <pre><code data-trim class="js">
$scope.$watch('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
    }
});
            </code></pre>
        </li>
        <li>The <code class="snippet">$$watchers</code> list is checked for changes at every $digest cycle</li>
    </ul>
    
    
    <aside class="notes">
        <ul>
            <li>$digest cycle (see after that slide)</li>
        </ul>
    </aside>
</section>
