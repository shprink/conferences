<section>
    <h1>async</h1>
</section>

<section>
    <h2>$http</h2>

    <ul>
        <li><code class="snippet">$http</code> is a service that enables server-side communication via AJAX requests</li>
        <li><code class="snippet">$http</code> is both a function, whereby an AJAX configuration object is passed in, and an object with convenience <code class="snippet">GET</code>, <code class="snippet">POST</code>, <code class="snippet">DELETE</code>, and <code class="snippet">PUT</code> methods (also exposes HEAD, JSONP, and PATCH)</li>
        <li>Returns a Promise object based on the <code class="snippet">$q</code> service, with additional <code class="snippet">success</code> and <code class="snippet">error</code> convenience functions</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>Note the Success and Error functions returned from an $http request are convenience wrappers for Then and Catch promise functions. Success and Error functions are automatically passed in the data, status, headers and config params, where .Then/.Catch are only passed the raw response containing the aforementioned properties.</li>
            <li>$http responses are wrapped in and $apply call, so if we update $scope bindings based on a response, they will be automatically updated in the View</li>
            <li>You can bind the $http Promise response to a $scope property and Angular will automatically resolve the Promise value when it is fulfilled</li>
        </ul>
    </aside>
</section>

<section>
    <h2>$q</h2>

    <ul>
        <li><code class="snippet">$q</code> is a simplified Promise library implementation that supports <code class="snippet">then</code>, <code class="snippet">catch</code>, <code class="snippet">finally</code>, and <code class="snippet">all</code> methods</li>
        <li>Exposes both the ES6 style promise or via the deferred API</li>
    </ul>
    <pre><code>
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
function asyncGreet(name) {
var deferred = $q.defer();
setTimeout(function() {
if (okToGreet(name)) { deferred.resolve('Hello, ' + name + '!'); }
else { deferred.reject('Greeting ' + name + ' is not allowed.'); }
}, 1000);
return deferred.promise;
}
        </code></pre>
    <aside class="notes">
        <ul>
            <li>Note the Success and Error functions returned from an $http request are convenience wrappers for Then and Catch promise functions. Success and Error functions are automatically passed in the data, status, headers and config params, where .Then/.Catch are only passed the raw response containing the aforementioned properties.</li>
            <li>$http responses are wrapped in and $apply call, so if we update $scope bindings based on a response, they will be automatically updated in the View</li>
            <li>You can bind the $http Promise response to a $scope property and Angular will automatically resolve the Promise value when it is fulfilled</li>
        </ul>
    </aside>
</section>
