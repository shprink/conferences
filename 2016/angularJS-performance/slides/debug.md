<section>
    <h1>Production mode</h1>
</section>


<section>
    <h2>Logs</h2>
    
    <ul>
        <li>Do not use <code class="snippet">console.log</code></li>
        <li>Use Angular <code class="snippet">$log</code> service</li>
        <li>Can be a real bottleneck (http://jsperf.com/logs-impact)</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
angular.module('yourModule').config(function($logProvider) {
    if (testIfInProd) {
        $logProvider.debugEnabled(false);
    }
}).controller('yourController', function($log) {
    $log.debug('this will be displayed in debug mode only');
});
    </code></pre>
    
</section>

<section>
    <h2>Debug</h2>
    
    <ul>
        <li>By default each <code class="snippet">$scope</code> are accessible via the DOM</li>
        <li>Used by debug tools such as <code class="snippet">angularjs-batarang</code></li>
        <li>Allow <code class="snippet">$$watchers</code> count</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="js">
angular.module('yourModule').config(function($compileProvider) {
    if (testIfInProd) {
        $compileProvider.debugInfoEnabled(false);
    }
});
    </code></pre>
    
</section>