<section>
    <h1>Modules</h1>
</section>

<section>
    <h2>Modules</h2>
    <ul>
        <li>Applications are built from Modules</li>
        <li>Can depend on other modules</li>
        <li>Declares controllers, directives, services etc.</li>
        <li>Modules make our code reusable (import/export)</li>
    </ul>
</section>

<section>
    <h2>Module Syntax</h2>
        <h4>Setter</h4>
        <pre><code>
angular.module('MyModuleName', [ModuleDependency1, md2, md3, ...]);
        </code></pre>

        <h4>Getter</h4>
        <pre><code>
angular.module('MyModuleName')
.controller('MyController', function() {});
        </code></pre>

        <aside class="notes">
            <ul>
                <li>Modules can have dependencies on other modules, which in turn may have other dependencies of their own</li>
                <li>The Module dependency declarations allow a service within your Module to use a service from another Module</li>
                <li>Creating other services in Angular requires you to have an instance of the Module it will be attached to</li>
                <li>Modules can be stared in JavaScript variables, however with the Getter syntax, this is unnecessary and should be discouraged</li>
            </ul>
        </aside>
</section>

<section>
    <h2>Bootstraping the app module (entry point)</h2>
    <pre><code>
&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body ng-app=&quot;MyModuleName&quot;&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <h3>Or</h3>
    <pre><code>
angular.bootstrap(document, ['MyModuleName']);
    </code></pre>

    <aside class="notes">
        <ul>
            <li>An app needs at least one module</li>
        </ul>
    </aside>
</section>
