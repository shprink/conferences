<section>
    <h1>Filters</h1>
</section>

<section>
    <h2>Filters</h2>
    <ul>
        <li>Provide a way to process data and return a transformed version of it</li>
        <li>Filters can be used in templates via the <code class="snippet">|</code> character</li>
        <pre><code data-trim>
{{ object_expression | filterName : expression }}
{{ 'hello' | translate }} // Hola
        </code></pre>
        <li>Filters can be used in JavaScript via the <code class="snippet">$filter</code> service</li>
        <pre><code data-trim>
$filter('filterName')(object, expression)
$filter('translate')('hello') // Hola
        </code></pre>
        <li>Filters do not mutate objects</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>filterName is the filter to be used (e.g., 'filter', 'date', 'uppercase' or 'translate')</li>
            <li>can be used with single value or a collection expression</li>
        </ul>
    </aside>
</section>

<section>

    <h2>Common Examples</h2>

    <ul>
        <li><code class="snippet">date</code> converts a date to a specified format and timezone</li>
        <li><code class="snippet">limitTo</code> limits the elements returned in the collection to the specified number</li>
        <li><code class="snippet">orderBy</code> orders the elements returned in the collection based on the predicate</li>
    </ul>
</section>

<section>
    <h2>Custom Filters - Usage</h2>

    <ul>
        <li>A <code class="snippet">filter</code> returns a function used to filter</li>
        <li>First argument is the value to run through the filter function</li>
                                    <pre><code>
angular.module('MyModule').filter('capitalize', function() {
	return function(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};
})
.controller('MyController', function($scope) {
	$scope.heading = 'foobar';
});
        </code></pre>
    <pre><code>
&lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;foobar&lt;/h1&gt;--&gt;
&lt;h1&gt;{{heading | capitalize}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;Foobar&lt;/h1&gt;--&gt;
    </code></pre>
    </ul>
    
    <iframe style="background-color:white;" src="examples/filter/index.html"></iframe>


    <aside class="notes">
        <ul>
            <li>Custom Filters benefit from two-way data binding and are executed on each $digest cycle automatically</li>
        </ul>
    </aside>
</section>
