<section>
    <h3 class="">Case study: Creating a todo list with:</h3>
    <div style="margin: 0;">
        <img src="../../img/web_component-logo.png" height="85" class="img-plain no-margin"/>
        <img src="../../img/stencil-logo.png" height="85" class="img-plain no-margin"/>
        <img src="../../img/polymer-logo.png" height="85" class="img-plain no-margin"/>
        <img src="../../img/skatejs-logo.png" height="85" class="img-plain no-margin"/>
        <img src="../../img/angular-logo.png" height="85" class="img-plain no-margin"/>
    </div>
    <img src="./img/todo.gif" class="img-plain no-margin" width="500" />
    <br/>
    Repo: https://github.com/shprink/web-components-todo
    Demos: https://wc-todo.firebaseapp.com
    <aside class="notes">
        <b>Several month ago I wanted to compare the syntax and performance between all the alternatives we have to create Web Components.</b>
        </br>
        <ul>
            <li>For that reason I created this open source project that implements the same todo list with various Web Components technologies. </li>
            <li>Today we are going compare The native implementation, with stencil, polymer, skateJS and Angular Elements</li>
        </ul>
    </aside>
</section>

<!-- <section>
    <div style="margin: 0 0;">
    <img src="../../img/web_component-logo.png" height="125" class="img-plain"/>
    <img src="../../img/stencil-logo.png" height="125" class="img-plain"/>
    <img src="../../img/polymer-logo.png" height="125" class="img-plain"/>
    <img src="../../img/skatejs-logo.png" height="125" class="img-plain"/>
    <img src="../../img/angular-logo.png" height="125" class="img-plain"/>
    <img src="../../img/vue-logo.png" height="125" class="img-plain"/>
    </div>
    <img src="./img/todo.gif" class="img-plain"/>
    <aside class="notes">
        <b>The app is a simple todo list, where you can add, remove and check items that I implemented with the above the libraries.</b>
    </aside>
</section> -->

<section>
    <i style="font-size: 200px; color: yellow" class="fa fa-exclamation-triangle"></i>
    <h3>Angular Elements is in early stage</h3>
    <!-- <ul>
         <li class="fragment">I try not be biased</li>
         <li class="fragment"></li>
    </ul> -->
    <aside class="notes">
        <b>Before we start I wanted to emphasize that...</b>
        <ul>
            <!-- <li>I am not biased: I am not payed by anyone to say good things or bad things about any of those technologies</li>
            <li>I followed the docs: like a normal user would do to start with those libraries</li>
            <li>no optimizations was made: the results that I am about to share are what you get out of the box</li> -->
            <li>Angular Elements is a proof of concept at this point, take that into consideration when analysing the results</li>
        </ul>
    </aside>
</section>

<section data-background-color="#fff">
    <img src="./img/angular_elements.png"  class="img-plain"/>
    <aside class="notes">
        <b>Also don't miss the chance to learn about angular elements with Pascal at six twenty five</b>
    </aside>
</section>

<section>
    <h4>Code length</h4>
    <img src="./img/stencil_vs_wc.png" class="img-plain no-margin"/>
    <aside class="notes">
        <b>In terms of code length, what we can see is that Native custom element is the most verbose version. <br/>The others are kinda similar.</b>
        <br/>
        <b>Why is code lenght important to me?</b>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">The less code you write <span style="color: var(--blue)">the less bugs you will create</span></h2>
    <aside class="notes">
        <b>Because this is my motto: "The less code you write the less bugs you will create" and also the more maintainable your code will be. So it is very important to me</b>
    </aside>
</section>

<section>
    <h5>Assets Dowloaded by the Browser (in KB)</h5>
    <canvas data-chart="horizontalBar">
, Native, SkateJS, StencilJS, Polymer 2, Angular Elements
<!-- This is a comment that will be ignored -->
Code Size (in kb), 4.3, 7, 10.7, 36.7, 258
    <!--
{
    "data": {
        "datasets": [
            {
                "label": "My First Dataset",
                "fill": false,
                "backgroundColor": [
                    "#ef5a25",
                    "#1b4678",
                    "white",
                    "#f4224d",
                    "#d8002c"
                ],
                "borderColor": [
                    "#f05118",
                    "#1b4678",
                    "white",
                    "#f4224d",
                    "#bb0029"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "responsive": true,
        "scales": {
            "yAxes": [
                {
                    "stacked": true,
                    "ticks": {
                        "fontSize": 25
                    },
                    "gridLines": {
                        "display": false
                    }
                }
            ],
            "xAxes": [
                {
                    "stacked": false,
                    "ticks": {
                        "beginAtZero": true
                    },
                    "gridLines": {
                        "color": "rgba(255, 255, 255, 0.2)"
                    }
                }
            ]
        },
        "legend": {
            "display": false
        }
    }
}
    -->
    </canvas>
    <aside class="notes">
        <b>In terms of the assets size it is hard to beat the native implementation because it has 0 dependencies. But SkateJS and Stencil are pretty close</b>
        <ul>
            <li>Both Stencil & SkateJS use an HTML renderer such as VDOM or lit-html, that's one of the reason they are bigger than native.</li>
            <li>Stencil is a little bit bigger than SkateJS because it also includes the dynamic polyfill loader. Stencil is the only one that works on every browser by default</li>
        </ul>
    </aside>
</section>


<section>
    <h5>First meaningful paint (in ms)</h5>
    <canvas data-chart="horizontalBar">
, StencilJS + Prerendering, Native, SkateJS, Polymer 2, StencilJS, Angular Elements
<!-- This is a comment that will be ignored -->
First meaningful paint (in ms), 1828, 2085, 2131, 2292, 2319, 4229
    <!--
{
    "data": {
        "datasets": [
            {
                "label": "My First Dataset",
                "fill": false,
                "backgroundColor": [
                    "white",
                    "#ef5a25",
                    "#1b4678",
                    "#f4224d",
                    "white",
                    "#d8002c"
                ],
                "borderColor": [
                    "white",
                    "#f05118",
                    "#1b4678",
                    "#f4224d",
                    "white",
                    "#bb0029"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "responsive": true,
        "scales": {
            "yAxes": [
                {
                    "stacked": true,
                    "ticks": {
                        "fontSize": 25
                    },
                    "gridLines": {
                        "display": false
                    }
                }
            ],
            "xAxes": [
                {
                    "stacked": false,
                    "ticks": {
                        "beginAtZero": true
                    },
                    "gridLines": {
                        "color": "rgba(255, 255, 255, 0.2)"
                    }
                }
            ]
        },
        "legend": {
            "display": false
        }
    }
}
    -->
    </canvas>
    <aside class="notes">
        <b>First meaningful paint measures when the primary content of a page is visible, the faster the better of course.</b>
        <br/>
        <ul>
            <li>If we put stencil + prerendering asides for now</li>
            <li>Native, Skate, Polymer and Stencil are pretty close to each other.</li>
        </ul>
        <b>To understand why stencil + prerendering is the fastest. We need to learn about prerendering</b>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;"> <span style="color: var(--blue)">Prerendering</span> comes <span style="color: var(--blue)">out of the box</span> with StencilJS</h2>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="30" layout-align="center center">
<pre style="font-size: 60%;text-align:left;"><code class="html" data-trim>
&lt;body&gt;
  <my-app></my-app>
&lt;/body&gt;
</code></pre>
        </div>
        <div class="fragment" data-fragment-index="1" layout="column" flex="5" layout-align="center center">
            <i class="fa fa-arrow-circle-right"></i>
        </div>
        <div class="fragment" data-fragment-index="1" layout="column" flex="60" layout-align="center center">
            <img src="./img/prerendering.png" class="img-plain"/>
        </div>
    </div>
    <ul>
        <li class="fragment">🚀 Blazing fast First Meaningful Paint</li>
        <li class="fragment">Better SEO</li>
    </ul>
    <aside class="notes">
        <b>Prerendering comes out of the box with Stencil!</b>
        <br/>
        <b>With modern frameworks we are used to have only one component in our index.html exactly as on the left side here</b>
        <br/>
        <ul>
            <li>Stencil uses it server side rendering capability to prerender your app in production mode</li>
        </ul>
        <ul>
            <li>The benefits are a Blazing fast First meaningful paint. Your users will see your application as fast as possible</li>
            <li>Better Search Engine Optimization</li>
        </ul>
    </aside>
</section>

<section>
    <h5>Overall Lighthouse Performance</h5>
    <canvas data-chart="horizontalBar">
, StencilJS + Prerendering, Native, SkateJS, Polymer 2, StencilJS, Angular Elements
<!-- This is a comment that will be ignored -->
Lighthouse Performance, 97, 95, 95, 94,  91, 74
    <!--
{
    "data": {
        "datasets": [
            {
                "label": "My First Dataset",
                "fill": false,
                "backgroundColor": [
                    "white",
                    "#ef5a25",
                    "#1b4678",
                    "#f4224d",
                    "white",
                    "#d8002c"
                ],
                "borderColor": [
                    "white",
                    "#f05118",
                    "#1b4678",
                    "#f4224d",
                    "white",
                    "#bb0029"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "responsive": true,
        "scales": {
            "yAxes": [
                {
                    "stacked": true,
                    "ticks": {
                        "fontSize": 25
                    },
                    "gridLines": {
                        "display": false
                    }
                }
            ],
            "xAxes": [
                {
                    "stacked": false,
                    "ticks": {
                        "beginAtZero": true
                    },
                    "gridLines": {
                        "color": "rgba(255, 255, 255, 0.2)"
                    }
                }
            ]
        },
        "legend": {
            "display": false
        }
    }
}
    -->
    </canvas>
    <aside class="notes">
        <b>If we take a look at the Overall Lighthouse Performance, once again Stencil + prerendering beats Native.
        <br/> Skate, polymer and stencil are above 90 by default which is a great score.</b>
    </aside>
</section>

<!-- <section>
    <h3>Ranking</h3>
    <div layout="row" layout-align="center end" h100>
        <div flex="46" layout="column" layout-align="center center">
           <div layout="row" layout-align="center center">
                <img src="../../img/web_component-logo.png" height="85" class="img-plain no-margin"/>
                <img src="../../img/stencil-logo.png" height="85" class="img-plain no-margin"/>
                <img src="../../img/polymer-logo.png" height="85" class="img-plain no-margin"/>
                <img src="../../img/skatejs-logo.png" height="85" class="img-plain no-margin"/>
            </div>
            <div style="background-color: silver; height: 200px; width: 100%;"></div>
        </div>
        <div flex="33" layout="column" layout-align="center center">
           <div layout="row" layout-align="center center">
                 <img src="../../img/stencil-logo.png" height="85" class="img-plain no-margin"/> + Prerendering
            </div>
            <div style="background-color: silver; height: 300px; width: 100%;"></div>
        </div>
        <div flex="20" layout="column" layout-align="center center">
           <div layout="row" layout-align="center center">
                <img src="../../img/angular-logo.png" height="85" class="img-plain no-margin"/>
            <img src="../../img/vue-logo.png" height="85" class="img-plain no-margin"/>
            </div>
            <div style="background-color: silver; height: 100px; width: 100%;"></div>
        </div>
    </div>
    <aside class="notes">
        <b>If I had to rank those technologies I would rank them like this</b>
        <ul>
            <li></li>
        </ul>
        <b></b>
    </aside>
</section> -->

<section>
    <h3>Why StencilJS makes Web Components great again?</h3>
    <ol>
        <li class="fragment"><span style="color: var(--blue)">Works everywhere</span> (Dynamic Polyfill loader)</li>
        <li class="fragment"><span style="color: var(--blue)">Loads fast</span> (Prerendering, dynamic import)</li>
        <li class="fragment"><span style="color: var(--blue)">Less verbose</span> (Decorators, JSX renderer)</li>
        <li class="fragment"><span style="color: var(--blue)">Optimized DOM manipulation</span> (Virtual DOM)</li>
        <li class="fragment"><span style="color: var(--blue)">Allows SEO</span> (SSR)</li>
    </ol>
    <aside class="notes">
        <b>Let's conclude this talk</b>
        <br/>
        <b>Why StencilJS makes Web Components great again?</b>
        <br/>
        <ul>
            <li>Stencil works everywhere</li>
            <li>Stencil is fast</li>
            <li>Stencil components are concise</li>
            <li>Stencil optimizes the DOM manipulation by default</li>
            <li>And Stencil allows Search Engine Optimization</li>
        </ul>
        <br/>
        <b>That's it for me,
        <br/>I hope you guys are excited about Web Components and Stencil,<br/> and if you are I will be in the office hours room with Stencil stickers! thanks very much</b>
    </aside>
</section>