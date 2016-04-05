<section>
    <h1>$digest cycle</h1>
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
            <li>PERF: Make sure to trigger the good one to avoid, dirty checking useless data.</li>
        </ul>
    </aside>
    
</section>