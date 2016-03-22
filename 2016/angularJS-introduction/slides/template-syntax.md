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
