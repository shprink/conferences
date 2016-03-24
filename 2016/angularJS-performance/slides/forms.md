<section>
    <h1>Forms</h1>
</section>


<section>
    <h2>ng-model-options</h2>
    
    <ul>
        <li>Allows tuning how model updates are done</li>
    </ul>  
    <pre class="fragment"><code data-trim class="html">
<input ng-model="age" type="text"></input>
    </code></pre>
     <iframe class="fragment" style="background-color:white; height: 60px;" src="examples/ng-model-options/without.html"></iframe>

    <pre class="fragment"><code data-trim class="html">
<input ng-model="age" ng-model-options="{debounce: 1000}" type="text"></input>
    </code></pre>
     <iframe class="fragment" style="background-color:white; height: 60px;" src="examples/ng-model-options/debounce.html"></iframe>

    <pre class="fragment"><code data-trim class="html">
<input ng-model="age" ng-model-options="{updateOn: 'blur'}" type="text"></input>
    </code></pre>
     <iframe class="fragment" style="background-color:white; height: 60px;" src="examples/ng-model-options/event.html"></iframe>
</section>