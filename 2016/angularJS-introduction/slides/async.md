<section>
    <h1>async</h1>
</section>


<section>
    <h2>Promises via $q</h2>

    <ul>
        <li><code class="snippet">$q</code> is a simplified Promise library implementation that supports <code class="snippet">then</code>, <code class="snippet">catch</code>, <code class="snippet">finally</code>, and <code class="snippet">all</code> methods</li>
        <li>Supports ES6 syntax</li>
    </ul>
    
    <pre><code data-trim>
function asyncGreet(name) {
    return $q(function(resolve, reject) {
        setTimeout(function() {
            if (okToGreet(name)) { resolve('Hello, ' + name + '!'); }
            else { reject('Greeting ' + name + ' is not allowed.'); }
        }, 1000);
    });
}
    </code></pre>
    
    <pre><code>
asyncGreet('Julien')
    .then(runResolveCallback, runRejectCallback)
    .catch(runRejectCallback)
    .finally(runAfterCallback)
    </code></pre>
    <aside class="notes">
        <ul>
            <li>Promises helps write declarative programming (instead of imperative) which is more predictable</li>
        </ul>
    </aside>
</section>


<section>
    <h2>Http requests via $http</h2>

    <ul>
        <li><code class="snippet">$http</code> is a service that enables server-side communication via AJAX requests</li>
        <li> <code class="snippet">GET</code>, <code class="snippet">POST</code>, <code class="snippet">DELETE</code>, <code class="snippet">PUT</code>, <code class="snippet">HEAD</code>, <code class="snippet">JSONP</code> and <code class="snippet">PATCH</code> , methods are implemented.</li>
        <li>Returns a Promise object based on the <code class="snippet">$q</code> service.</li>
    </ul>
      <pre><code>
$http({
  method: 'GET',
  url: '/someUrl'
})
.then(function successCallback(response) {}, function errorCallback(error) {})
.catch(function(){})
.finally(function(){});
        </code></pre>
    <aside class="notes">
        <ul>
            <li>$http responses are wrapped in and $scope.$apply call, so if we update $scope bindings based on a response, they will be automatically updated in the View</li>
        </ul>
    </aside>
</section>