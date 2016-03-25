<section>
    <h1>$watch</h1>
</section>

<section>
    <h2>What is it?</h2>
    
    <ul>
        <li>Allow you to listen to a scope property change</li>
        <li>Triggers when a change has happened</li>
        <li>Gives you access to the new and the old value</li>
    </ul>
    
    <pre><code data-trim class="js">
$scope.$watch('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
    }
});
    </code></pre>
    
</section>
<section>
    <h2>There are 4 types of $watch</h2>
    
    <ul>
        <li><code class="snippet">$watch</code></li>
        <li>Deep <code class="snippet">$watch</code></li>
        <li><code class="snippet">$watchCollection</code></li>
        <li><code class="snippet">$watchGroup</code></li>
    </ul>
</section>
<section>
    <h2>$watch</h2>
    
    <ul>
        <li>Does not shallow watch</li>
        <li>Does not deep watch</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
$scope.$watch('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
    }
});
    </code></pre>
    
</section>
<section>
    <h2>Deep $watch</h2>
    
    <ul>
        <li>Shallow watch</li>
        <li>Deep watch</li>
        <li>Can be really expensive</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
$scope.$watch('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
    }
}, true);
    </code></pre>
    
</section>
<section>
    <h2>$watchGroup</h2>
    
    <ul>
        <li>Does not shallow watch</li>
        <li>Does not deep watch</li>
        <li>More synthetic syntax</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
$scope.$watchGroup([
    'watchExpression',
    'watchExpression2',
    'watchExpression3'
], function(newVals, oldVals) {
    if (newVals[0]) {
        // watchExpression has changed.
    }
    if (newVals[1]) {
        // watchExpression2 has changed.
    }
    if (newVals[2]) {
        // watchExpression3 has changed.
    }
});
    </code></pre>
    
</section>
<section>
    <h2>$watchCollection</h2>
    
    <ul>
        <li>Shallow watch</li>
        <li>Does not deep watch</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
$scope.$watchCollection('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
    }
});
    </code></pre>
    
</section>
<section>
    <h2>Do not forget to unwatch</h2>
    
    <ul>
        <li><code class="snippet">$scope</code> destroy will automatically unwatch</li>
        <li>You can unwatch manually </li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
var unWatch = $scope.$watch('watchExpression', function(newVal, oldVal){
    if(newVal){
        // watchExpression has changed.
        unWatch();
    }
});
    </code></pre>
    
</section>