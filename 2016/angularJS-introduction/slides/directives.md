<section>
	<h1>Directives</h1>
</section>

<section>
	<h2>What are Directives?</h2>

	<ul>
		<li>Powerhouses of AngularJS and are the underlying components that make a rich client-side application</li>
		<li>Can enhance existing elements with functionality (e.g., ng-required, ng-click)</li>
		<li>Can extend functionality to previously non-functional elements (e.g., ng-repeat, ng-class, ng-show/hide) </li>
		<li>Can be brand-new elements with their own functionality (e.g., ng-include)</li>
		<li>Directives can be set via custom element tags, attributes, classes, or uncommonly as comments</li>
	</ul>

	<aside class="notes">
		<ul>
			<li>Anything you previously did with jQuery where you reached into the DOM (e.g., selectors) can be done via Angular Directives</li>
		</ul>
	</aside>
</section>

<section>
    <h2>Blink Hello World every 500ms</h2>
    <pre><code class="javascript">
    angular.module('demo', []).directive('blinkHelloWorld', function() {
        return {
            restrict: 'E',
            template: '<p ng-show="visible">Hello World</p>',
            controller: function($scope, $interval) {
                $scope.visible = true;
                var timer = $interval(function() {
                    $scope.visible = !$scope.visible;
                }, 500);
            }
        }
    });
    </code></pre>

    <pre><code class="html">
        <blink-hello-world></blink-hello-world>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blinkHelloWorld.html"></iframe>
</section>

<section>
    <h2>Blink Hello World every Xms</h2>
    <pre><code class="javascript">
    angular.module('demo', []).directive('blinkHelloWorld', function() {
        return {
            restrict: 'E',
            template: '<p ng-show="visible">Hello World</p>',
            scope: {
                interval: '='
            },
            controller: function($scope, $interval) {
                $scope.visible = true;
                var timer = $interval(function() {
                    $scope.visible = !$scope.visible;
                }, $scope.interval);
            }
        }
    });
    </code></pre>

    <pre><code class="html">
        <blink-hello-world interval="500"></blink-hello-world>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blinkHelloWorld-scope.html"></iframe>
</section>

<section>
    <h2>Blink Any text every Xms</h2>
    <pre><code class="javascript">
    angular.module('demo', []).directive('blink', function() {
        return {
            restrict: 'E',
            template: '<p ng-show="visible">{{text}}</p>',
            scope: {
                interval: '=',
                text: '@'
            },
            controller: function($scope, $interval) {
                $scope.visible = true;
                var timer = $interval(function() {
                    $scope.visible = !$scope.visible;
                }, $scope.interval);
            }
        }
    });
    </code></pre>

    <pre><code class="html">
        <blink interval="500" text="Hello World"></blink>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blink.html"></iframe>
</section>

<section>
    <h2>Blink complex element every Xms</h2>
    <pre><code class="javascript">
    angular.module('demo', []).directive('blink', function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<p ng-show="visible" ng-transclude></p>',
            scope: {
                interval: '='
            },
            controller: function($scope, $interval) {
                $scope.visible = true;
                var timer = $interval(function() {
                    $scope.visible = !$scope.visible;
                }, $scope.interval);
            }
        }
    });
    </code></pre>

    <pre><code class="html">
        <blink interval="500"><b><i>Hello World</i></b></blink>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blink-complex.html"></iframe>
</section>

<section>
    <h3>Blink complex element every Xms and get notified on change</h3>
    <pre style="font-size: 0.30em"><code class="javascript">
    angular.module('demo', []).directive('blink', function() {
            return {
                restrict: 'E',
                transclude: true,
                template: '<p ng-show="visible" ng-transclude></p>',
                scope: {
                    interval: '=',
                    onChange: '&'
                },
                controller: function($scope, $interval) {
                    $scope.visible = true;
                    var counter = 0;
                    var timer = $interval(function() {
                        $scope.visible = !$scope.visible;
                        counter++;
                        $scope.onChange({
                            $counter: counter
                        });
                    }, $scope.interval);
                }
            }
        }).controller('demoCtrl', function($scope) {
            $scope.changeCounter = 0;
            $scope.onBlinkChange = function(counter) {
                $scope.changeCounter = counter;
            }
        })
    </code></pre>
    <pre style="font-size: 0.30em"><code class="html">
        <p>Changed {{changeCounter}} times</p>
        <blink interval="500" on-change="onBlinkChange($counter)"><b><i>Hello World</i></b></blink>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blink-complex-notification.html"></iframe>
</section>
<section>

	<h2>Common Examples</h2>

	<ul>
		<li><code class="snippet">ng-repeat</code> provides a repeater for displaying the same template over a collection of like elements</li>
		<li><code class="snippet">ng-model</code> allows us to bind HTML inputs to Models on our $scope</li>
		<li><code class="snippet">ng-click</code> allows us to handle click events on buttons, anchors or any other element, with the function bound only to the local $scope</li>
		<li><code class="snippet">ng-href</code>/<code class="snippet">ng-src</code> allow us to dynamically set href and src attributes. Important since we want angular to resolve the href/src before it's clicked or the image downloaded</li>
		<li><code class="snippet">ng-class</code> allows us to dynamically add/remove classes to elements</li>
	</ul>
</section>
<section>
	<h2>Common Examples Cont.</h2>

	<ul>
		<li><code class="snippet">ng-show</code>/<code class="snippet">ng-hide</code> allow us to toggle the display property of elements based on a boolean (or truthy/falsy) value</li>
		<li><code class="snippet">ng-if</code> will actually remove the element from the DOM and the $scope it creates</li>
		<li><code class="snippet">ng-switch</code> removes elements from the DOM based on a value (doesn't have to be boolean) and can apply to multiple elements like a switch statement </li>
		<li><code class="snippet">ng-bind</code> is an alternative to <code class="snippet">{{}}</code> that prevents edge-cases where there is a brief flicker of the <code class="snippet">{{}}</code> before Angular resolves the value</li>
		<li><code class="snippet">ng-include</code> allows you to pull in a template of HTML from the server or pre-loaded in the template cache</li>
	</ul>
</section>

<section>
	<h2>Custom Directives - Usage</h2>

	<ul>
		<li>Enable us to create and encapsulate new functionality and views in reusable and injectable way</li>
		<li>Can be used as tags, attributes, classes, or comments as specified via the <code class="snippet">restrict</code> property on the Directive Definition Object (DDO)</li>
		<li>
			<code class="snippet">E</code> for Element/Tag,
			<code class="snippet">A</code> for Attribute,
			<code class="snippet">C</code> for Class,
			<code class="snippet">M</code> for Comment,
			Default to <code class="snippet">EA</code>
		</li>
		<li>Follow a kebab-case convention for use within the DOM (in JavaScript, use camelCase, Angular handles the conversion)</li>
	</ul>

	<pre><code>
&lt;my-directive&gt;&lt;/my-directive&gt;
&lt;div my-directive&gt;&lt;/div&gt;
&lt;div class=&quot;my-directive&quot;&gt;&lt;/div&gt;
&lt;!-- directive: my-directive --&gt;
	</code></pre>

	<aside class="notes">
		<ul>
			<li>Directives are akin to Web Components or React Components</li>
			<li>Attributes are preferred which prevent older IE from complaining and are generally more clear than classes/comments</li>
			<li></li>
		</ul>
	</aside>
</section>

<section>
	<h2>Custom Directives - Templates</h2>

	<ul>
		<li>Directives can be used as templating engines, so you not only extend an element with functionality, but also extend the DOM with content</li>
		<li><code class="snippet">template</code> and <code class="snippet">templateUrl</code> are the two ways of associating DOM content with a Directive</li>
	</ul>

	<aside class="notes">
		<ul>
			<li>template is just a string representing HTML</li>
			<li>templateUrl is a reference to a public HTML asset on your server, a pre-existing asset in the $templateCache, or a template defined as a custom script tag using the custom type of "text/ng-template"</li>
		</ul>
	</aside>
</section>

<section>
	<h2>Custom Directives - DDO</h2>

	<ul>
		<li>The Directive Definition Object is the API for creating Directives</li>
		<li>Simple JavaScript Object with certain properties</li>
	</ul>

		<pre><code>
function myDirective() {
return {
restrict: 'EA', // how the directive can be used
templateUrl: 'myDirective.html', // template HTML
scope: true, // how we setup the directive's scope
 // true => new scope prototypally inherited from parent
 // false => parent scope
 // object literal => isolate scope where custom properties can be injected
link: function link(scope, elem, attrs) {}, // provides DOM access
controller: function myController($scope) {}, // like other controllers, except specific to the directive's scope

}
}
		</code></pre>

	<aside class="notes">
		<ul>
			<li>The link function is executed after the Directive is compiled and the template (if provided) is inserted into the DOM, allowing us to bind event listeners or perform DOM manipulation based on scope properties or other logic</li>
			<li>It's important to approach DI with Controllers just as with other Controllers, so to handle minification/uglification you must use Array and String notation. This does not apply to Link functions.</li>
			<li>Other less common DDO properties are listed <a href="https://docs.angularjs.org/api/ng/service/$compile">here</a></li>
		</ul>
	</aside>
</section>
