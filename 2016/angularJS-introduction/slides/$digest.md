<section>
    <h1>$digest cycle</h1>
</section>


<section>
    <h2>What is it?</h2>
    
     <ul>
        <li>Process that checks every <code class="snippet">$scope.$$watchers</code> for changes when angular or yourself call <code class="snippet">$scope.$apply()</code></li>
    </ul>
    <pre><code data-trim class="html">
$rootScope
    $$watchers
    $scope
        $$watchers
    $scope
        $$watchers
        $scope
            $$watchers
    </code></pre>
    <aside class="notes">
            <li>dirty check scan every</li>
            <li>It is a process that checks every watchers for changes</li>
        </ul>
        
    </aside>
    
</section>
<section>
    <h2>How does it work?</h2>
    
     <ul>
        <li>Angular or yourself triggers the <code class="snippet">$digest</code> cycle</li>
        <li>The dirty checking will catch the changes</li>
        <li>The DOM will update</li>
        <li>call <code class="snippet">$digest</code> cycle once again</li>
        <li><code class="snippet">$digest</code> cycle stops when stable</li>
    </ul>
    <pre><code data-trim class="html">
$rootScope
    $$watchers // Changed? NO
    $scope
        $$watchers // Changed? NO
    $scope
        $$watchers // Changed? YES
        $scope
            $$watchers // Changed? NO (restart $digest cycle)
    </code></pre>
    <aside class="notes">
        <ul>
            <li>$digest cycle doesn’t run just once. At the end of the current loop, it starts all over again to check if any of the models have changed.</li>
            <li>It takes at least 2 digest cycle to know if we can stop checking (stable)</li>
        </ul>
    </aside>
    
</section>
<section>
    <h2>What triggers a $digest cycle?</h2>    

     <ul>
        <li>Directives with user interactions: <code class="snippet">ngClick</code>, <code class="snippet">ngMouseOver</code>, <code class="snippet">ngKeypress</code> etc.</li>
        <li><code class="snippet">$http</code></li>
        <li><code class="snippet">$location</code></li>
        <li><code class="snippet">$timeout</code> or <code class="snippet">$interval</code></li>
    </ul>
    <aside class="notes">
        <ul>
            <li></li>
        </ul>
    </aside>
    
</section>
<section>
    <h2>$apply or $digest?</h2>
    
       <img src="../../img/meme/$scope.apply.jpg" style="width: 18em;"/>
    
     <ul>
        <li><code class="snippet">$scope.$apply()</code> (calls <code class="snippet">$rootScope.$digest()</code>) update every scopes</li>
        <li><code class="snippet">$scope.$digest()</code> update current scope and childrens</li>
    </ul>
   
    <aside class="notes">
        <ul>
            <li>Make sure to trigger the good one to avoid, dirty checking useless data.</li>
        </ul>
    </aside>
    
</section>