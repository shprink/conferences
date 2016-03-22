<section>
	<h1>Directives</h1>
</section>

<section>
	<h2>What are Directives?</h2>

	<ul>
		<li>Encapsulate functionality and views (optional) in reusable and injectable way</li>
		<li>Can enhance existing elements with functionality</li>
		<li>Directives can be set via custom element tags, attributes or classes
<pre><code>
&lt;my-directive&gt;&lt;/my-directive&gt;
&lt;div my-directive&gt;&lt;/div&gt;
&lt;div class=&quot;my-directive&quot;&gt;&lt;/div&gt;
</code></pre>
		</li>
		<li>camelCase name but Kebab-case when use in the DOM</li>
	</ul>

	<aside class="notes">
		<ul>
			<li>Directives can be assimilated to Web Components or React Components</li>
			<li> (e.g., ng-required, ng-click)</li>
			<li>Attributes are preferred which prevent older IE from complaining and are generally more clear than attribute or classes</li>
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
    <h2>Blink Hello World every 500ms</h2>
    <pre><code class="javascript">
    angular.module('demo', []).directive('blinkHelloWorld', function() {
        return {
            restrict: 'E',
            template: '<p ng-show="visible">Hello World</p>',
			link: function link(scope, elem, attrs) {}, // provides DOM access
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
	<aside class="notes">
		<ul>
			<li>The link function is executed after the Directive is compiled and the template (if provided) is inserted into the DOM, allowing us to bind event listeners or perform DOM manipulation based on scope properties or other logic</li>
		</ul>
	</aside>
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
			// true => new scope prototypally inherited from parent
		    // false => parent scope
		    // object literal => isolate scope where custom properties can be injected
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
