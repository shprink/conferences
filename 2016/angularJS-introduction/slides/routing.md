<section>
    <h1>Routing</h1>
</section>

<section>
    <h2>Routing</h2>
    <ul>
        <li>Not part of "core" angular, but almost every app needs it.</li>
        <li>Two options: Native angular or Ui Router (community)</li>
        <li>Associates a URL with a controller and view</li>
        <li>When a user changes the URL (by clicking a link), the active controller and view change</li>
    </ul>
</section>

<section>
    <h2>UI Router State</h2>
    <ul>
        <li>Declared in a .config phase via $stateProvider</li>
        <li>Represents a "page"</li>
        <li>Declares a URL</li>
        <li>Associate a controller with a template</li>
    </ul>
    

        <pre><code data-trim class="javascript">
$stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: "templates/dashboard.html",
    controller: "DashboardController"
});
        </code></pre>
</section>
<section>
    <h2>$stateProvider advanced features</h2>
    

    <pre><code data-trim class="javascript">
$stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: "templates/dashboard.html",
    controller: "DashboardController",
    params: {
        user: null
    },
    resolve: {
        promiseObj:  function($http){
            return $http({method: 'GET', url: '/someUrl'});
         }
    },
    data: {
        header: "blue"
    }
});
    </code></pre>
    <pre><code data-trim class="javascript">
app.controller('MyController', function ($scope, $state, $stateParams, promiseObj) {
    console.log($stateParams.user) // outputs null;
    console.log(promiseObj) // outputs /someUrl response;
    console.log($state.current.data.header) // outputs "blue";
});
    </code></pre>
    
    
</section>
<section>
<h2>Nested Views</h2>
    <ul>
        <li>State pattern: <code class="snippet">parent.child</code></li>
        <li>Inherit from parent state</li>
    </ul>
    
    <pre><code data-trim class="javascript">
$stateProvider
  .state('contacts', {}) // #contacts
  .state('contacts.list', {}); // #contacts/list
    </code></pre>
</section>

