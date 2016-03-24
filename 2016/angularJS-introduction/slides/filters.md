<section>
    <h1>Filters</h1>
</section>

<section>
    <h2>Filters</h2>
    <ul>
        <li>Provide a means of processing data and returning a transformed version of it</li>
        <li>Filters can be used in templates via the <code class="snippet">|</code> character</li>
        <pre><code>
{{ object_expression | filterName : expression : comparator}}
        </code></pre>
        <li>Filters can be used in JavaScript via the <code class="snippet">$filter</code> service</li>
        <pre><code>
$filter('filterName')(object, expression, comparator)
        </code></pre>
        <li>Filters do not mutate objects</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>single value or collection based</li>
            <li>object/object_expression is the JavaScript Object to be passed through the filter function</li>
            <li>filterName is the filter to be used (e.g., 'filter', 'date', 'uppercase')</li>
            <li>expression is the predicate to be used for selecting certain elements from a collection (String, Object, or Function callback...via a function callback, custom filters can be created outside of the .filter function on modules)</li>
            <li>comparator is means of telling Angular whether the actual and expected items are considered 'equal'</li>
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

    <aside class="notes">
        <ul>
            <li>orderBy defaults to descending order, but can be reversed with a third boolean parameter</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Custom Filters - Usage</h2>

    <ul>
        <li>A <code class="snippet">filter</code> returns a function used to filter</li>
        <li>First argument is the value to run through the filter function</li>
                                    <pre><code>
angular.module('MyModule').filter('capitalize', function() {
	return function capitalizer(text) {
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
            <li>Custom filters for collections are generally the same and single value filters: the collection will be passed to your function and you must return the subset of objects that meet your filtering conditions</li>
            <li>Additional arguments can be passed into your filter function by colon (:) delimiting the arguments in the expression (e.g., capitlize:onlyStringsStartingWithA => | capitalize:'a'</li>
            <li>Note that because the generalized 'filter' filter can take a function callback as a predicate, custom filters can be created without using the customer .filter module function</li>
        </ul>
    </aside>
</section>
