<section>
    <h1>Template syntax</h1>
</section>

<section>
    <h2>Expressions</h2>
    <ul>
        <li>"JavaScript-like" pieces of code that conditionally change the View (DOM) to match the Model</li>
        <li>Live in <code class="snippet">{{}}</code> or <code class="snippet">ng-bind</code> and evaluated against $scope</li>
        <li>Angular re-evaluates these expressions during each $digest cycle, making updates based on any changes</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>Can contain limited bits of JavaScript logic including basic operators (e.g., &&, ||, ?:, >/<, +/-, ===, etc.)</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Built in directives</h2>

    <p>ngJq,
    <b class="green">ngApp</b>,
    <b class="green">ngHref</b>,
    ngSrc,
    ngSrcset,
    ngDisabled,
    ngChecked,
    ngReadonly,
    ngSelected,
    ngOpen,
    ngForm,
    ngValue,
    ngBind,
    ngBindTemplate,
    <b class="green">ngBindHtml</b>,
    ngChange,
    <b class="green">ngClass</b>,
    ngClassOdd,
    ngClassEven,
    ngCloak,
    ngController,
    ngCsp,
    <b class="green">ngClick</b>,
    ngDblclick,
    ngMousedown,
    ngMouseup,
    ngMouseover,
    ngMouseenter,
    ngMouseleave,
    ngMousemove,
    ngKeydown,
    ngKeyup,
    ngKeypress,
    ngSubmit,
    ngFocus,
    ngBlur,
    ngCopy,
    ngCut,
    ngPaste,
    <b class="green">ngIf</b>,
    ngInclude,
    ngInit,
    ngList,
    <b class="green">ngModel</b>,
    ngModelOptions,
    ngNonBindable,
    ngOptions,
    ngPluralize,
    <b class="green">ngRepeat</b>,
    <b class="green">ngShow</b>,
    <b class="green">ngHide</b>,
    ngStyle,
    ngSwitch,
    ngTransclude,
    ngRequired,
    ngPattern,
    ngMaxlength,
    ngMinlength</p>

</section>

<section>
  <h2>The Angular Compiler</h2>
  <p>This is where the magic happens</p>
  <ul>
    <li class="fragment">Parses the DOM tree for directives</li>
    <li class="fragment">
      Found directives
      <ul>
        <li>Manipulate their children further</li>
        <li>Populate Scopes with data and functions</li>
        <li>Instantiate controllers</li>
      </ul>
    </li>
  </ul>
</section>

<section>
    <h2>Example</h2>
    <pre><code>
$scope.heading = 'Hello World!';
$scope.updateHeading = function(newHeading) {
    $scope.heading = newHeading;
}
    </code></pre>

    <pre><code>
&lt;h1&gt;{{heading}}&lt;/h1&gt; &lt;!-- &lt;h1&gt;Hello World!&lt;/h1&gt;--&gt;
&lt;button ng-click="updateHeading('Foobar')"&gt;Update&lt;/button&gt; &lt;!-- Click --&gt;
    </code></pre>

    <iframe style="background-color:white;" src="examples/template-syntax/index.html"></iframe>
</section>
