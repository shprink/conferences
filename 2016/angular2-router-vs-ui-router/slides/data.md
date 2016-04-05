<section>
    <h1>Data</h1>
    <aside class="notes">
       How to transfer data from one state to another?
    </aside>
</section>

<section>
    <h2>URL data</h2>
    <ul>
        <li>How to get the <code class="snippet">id</code> from <code class="snippet">#/products/:id</code>?</li>
        <li><code class="snippet">$stateParams</code> service for UI-Router</li>
        <li><code class="snippet">RouteParams</code> service for Angular2 Router</li>
    </ul>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="js" data-trim>
// AngularJS 1.x with UI-Router
.controller('contactsCtrl',
    function($stateParams){
        var id = $stateParams.id;
    }
);
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
import {RouteParams} from 'angular2/router';
class {
  constructor(private _params: RouteParams) {
    var id = _params.get('id');
  }
}
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
        </ul>
    </aside>
</section>

<section>
    <h2>Static data</h2>
    <ul>
        <li>How to display a different theme per page?</li>
        <li><code class="snippet">$state.current.data</code> for UI-Router</li>
        <li><code class="snippet">RouteData</code> service for Angular2 Router</li>
    </ul>
    <div class="grid">
        <div class="unit half fragment">
<pre><code class="js" data-trim>
// AngularJS 1.x with UI-Router
.state('contacts', {
    url: '/contacts',
    templateUrl: 'contacts.html',
    data: {
        theme: 'red'
    }
  })
</code></pre>
<pre><code class="js" data-trim>
.controller('contactsCtrl', function($state){
    $state.current.data.theme // red
});
</code></pre>
        </div>
        <div class="unit half fragment" >
<pre><code class="typescript" data-trim>
// Angular2 Router
@RouteConfig([
    new Route({
        path: '/contacts',
        component: ContactsComponent,
        name: 'Contacts',
        data: {
            theme: 'blue'
        }
    })
])
</code></pre>
<pre><code class="typescript" data-trim>
// Angular2 Router
class {
  constructor(private _data: RouteData) {
    _data.get('theme'); // blue
  }
}
</code></pre>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li></li>
        </ul>
    </aside>
</section>

<section>
    <h2>Dynamic data</h2>
    <div class="grid">
        <div class="unit half ">
<pre class="fragment"><code class="js" data-trim>
// AngularJS 1.x with UI-Router
app.config(function($locationProvider){
    $stateProvider
    .state('user', {
        url: '/',
        templateUrl: 'user.html',
        controller: 'UserCtrl',
        params: {
            user: null
        }
    })
});
</code></pre>
<div class="fragment">
<pre><code class="html" data-trim>
<div ng-repeat="user in users">
    <a ui-sref="user({user: user})">
        Go to {{user.name}}
    </a>
</div>
</code></pre>
or
<pre><code class="js" data-trim>
app.controller(function($state){
    $state.go('user', {user: user});
});
</code></pre>
</div>
        </div>
        <div class="unit half fragment" >
            <img src="../../img/meme/does-not-exist.jpg"/>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li>Using "params" property in a state definition we could pass an entire object to another state. For instance here we are in a user list page.</li>
            <li>We want when we click on a specific user to pass the user object to the user page</li>
            <li>Why? So we do not have to fetch it server side.</li>
            <li>What about on Angular2? Well it does not exist!</li>
        </ul>
    </aside>
</section>