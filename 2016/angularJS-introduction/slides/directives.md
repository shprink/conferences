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
            controller: function($scope, $interval) {
                $scope.visible = true;
                $interval(function() {
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
        END:
		<ul>
			<li>As you can see the 500ms are hardcoded. What if we want it to be managable from the outside?</li>
		</ul>
        BONUS:
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
                $interval(function() {
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
	<aside class="notes">
		<ul>
			<li>To do that we introduce a scope to the directive</li>
		</ul>
        END:
		<ul>
			<li>As you can see the text is hardcoded. What if we want it to inject a custom text form the outside?</li>
		</ul>
	</aside>
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
                $interval(function() {
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
	<aside class="notes">
		<ul>
			<li>Here we introduce a new scope property with the @ sign instead of the =. It means that changes will not be picked up. It is good to pass strings</li>
		</ul>
        END:
		<ul>
			<li>What if we want to inject more complexe data than text?</li>
		</ul>
	</aside>
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
                $interval(function() {
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
	<aside class="notes">
		<ul>
			<li>Here we are introducing transclusion. With transclude: true and ng-transclude directive we can inject complexe data inside a directive</li>
		</ul>
        END:
		<ul>
			<li>What if now we want to notified that outside world for any changes?</li>
		</ul>
	</aside>
</section>

<section>
    <h3>Blink complex element every Xms and get notified on change</h3>
    <pre style="font-size: 0.30em"><code class="javascript" data-trim>
{
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
        $interval(function() {
            $scope.visible = !$scope.visible;
            counter++;
            $scope.onChange({
                $counter: counter
            });
        }, $scope.interval);
    }
}
    </code></pre>
    <pre style="font-size: 0.30em"><code class="javascript" data-trim>
.controller('demoCtrl', function($scope) {
    $scope.changeCounter = 0;
    $scope.onBlinkChange = function(counter) {
        $scope.changeCounter = counter;
    }
})
    </code></pre>
    <pre style="font-size: 0.30em"><code class="html" data-trim>
<p>Changed {{changeCounter}} times</p>
<blink interval="500" on-change="onBlinkChange($counter)"><b><i>Hello World</i></b></blink>
    </code></pre>

    <iframe style="background-color:white;" src="examples/directive/blink-complex-notification.html"></iframe>
	<aside class="notes">
		<ul>
			<li>To do that we introducing scope property with the & symbole. It means that the outside world can inject a function that will be played on demand.</li>
		</ul>
	</aside>
</section>
