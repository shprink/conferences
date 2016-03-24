<section>
    <h1>AngularJS 1.5</h1>
</section>

<section>
    <h2>What's new?</h2>
    <ul>
        <li><code class="snippet">.component</code></li>
        <li>Multislot transclusion</li>
    </ul>
</section>

<section>
    <h2>.component</h2>
    <ul>
        <li><code class="snippet">.component</code> same purpose as <code class="snippet">.directive</code></li>
        <li>simpler configuration than plain directives</li>
        <li>promote sane defaults and best practices</li>
        <li>writing component directives will make it easier to upgrade to Angular 2</li>
    </ul>
</section>


<section>
    <h2>API Comparison</h2>
    <table style="font-size: 0.55em !important;" class="ng-scope table table-bordered table-striped code-table">
    <thead>
    <tr>
    <th></th>
    <th>Directive</th>
    <th>Component</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>bindings</td>
    <td>No</td>
    <td>Yes (binds to controller)</td>
    </tr>
    <tr>
    <td>bindToController</td>
    <td>Yes (default: false)</td>
    <td>No (use bindings instead)</td>
    </tr>
    <tr>
    <td>compile function</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>controller</td>
    <td>Yes</td>
    <td>Yes (default <code><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{}</span></code>)</td>
    </tr>
    <tr>
    <td>controllerAs</td>
    <td>Yes (default: false)</td>
    <td>Yes (default: <code><span class="pln">$ctrl</span></code>)</td>
    </tr>
    <tr>
    <td>link functions</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>multiElement</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>priority</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>require</td>
    <td>Yes</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>restrict</td>
    <td>Yes</td>
    <td>No (restricted to elements only)</td>
    </tr>
    <tr>
    <td>scope</td>
    <td>Yes (default: false)</td>
    <td>No (scope is always isolate)</td>
    </tr>
    <tr>
    <td>template</td>
    <td>Yes</td>
    <td>Yes, injectable</td>
    </tr>
    <tr>
    <td>templateNamespace</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>templateUrl</td>
    <td>Yes</td>
    <td>Yes, injectable</td>
    </tr>
    <tr>
    <td>terminal</td>
    <td>Yes</td>
    <td>No</td>
    </tr>
    <tr>
    <td>transclude</td>
    <td>Yes (default: false)</td>
    <td>Yes (default: false)</td>
    </tr>
    </tbody>
    </table>
     <aside class="notes">
        <ul>
            <li>.directive a lot of YES => complicated to manipulate</li>
            <li>.component a lot of NO => Follow best practices</li>
            <li>Easier to use</li>
            <li>Easier to switch to Angular2 afterwards</li>
        </ul>
    </aside>
</section>



<section>
    <h2>API Comparison</h2>
    <pre class="fragment"><code data-trim class="javascript">
app.directive('card', function() {
    return {
        restrict: 'E',        // default
        transclude: true      // default: false
        bindToController: true  // now bindings
        scope: {
            title: '@'
        },
        controller: function(){},
        controllerAs: '$ctrl', // default
        template: '<div><h3>{{$ctrl.title || "No title"}}</h3><i ng-transclude>Empty</i></div>'
    }
});
    </code></pre>
    <pre class="fragment"><code data-trim class="javascript">
app.component('card', function() {
    return {
        bindings: { 
            title: '@'
        },
        transclude: true,
        template: '<div><h3>{{$ctrl.title || "No title"}}</h3><i ng-transclude>Empty</i></div>'
    }
});
    </code></pre>
    <pre  class="fragment"><code data-trim>
<card title="Mariah Carey">All I Want for Christmas Is You</card>
    </code></pre>
     <aside class="notes">
        <ul>
            <li>.directive that follows the best practices</li>
            <li>.component that does the exact same thing</li>
        </ul>
    </aside>
</section>


<section>
    <h2>Multislot transclusion</h2>
     <pre  class="fragment"><code data-trim class="javascript">
app.directive('card', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {title: '='},
        template: '<div><h3>{{title}}</h3><i ng-transclude></i></div>'
    }
});
    </code></pre>
    <pre  class="fragment"><code data-trim>
// simple transclusion
<card title="Mariah Carey">All I Want for Christmas Is You</card>
    </code></pre>
    
     <pre class="fragment"><code data-trim class="javascript">
app.directive('multislotCard', function() {
    return {
        restrict: 'E',
        transclude: {
            title: '?cardTitle',
            song: '?cardSong'
        },
        template: '<div><h3 ng-transclude="title">No title</h3><i ng-transclude="song">Empty</i></div>'
    }
});
    </code></pre>
    
    <pre class="fragment"><code data-trim class="javascript">
// multislot transclusion
<multislot-card>
    <card-title>Mariah Carey</card-title>
    <card-song>All I Want for Christmas Is You</card-song>
</multislot-card>
    </code></pre>
</section>