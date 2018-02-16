<section>
    <h2>Case study: Todo list</h2>
    <div style="margin: 50px 0;">
    <img src="../../img/web_component-logo.png" height="150" class="img-plain"/>
    <img src="../../img/stencil-logo.png" height="150" class="img-plain"/>
    <img src="../../img/polymer-logo.png" height="150" class="img-plain"/>
    <img src="../../img/angular-logo.png" height="150" class="img-plain"/>
    <img src="../../img/vue-logo.png" height="150" class="img-plain"/>
    </div>

    Repo: https://github.com/shprink/web-components-todo
    Demo: https://wc-todo.firebaseapp.com
    <aside class="notes">
        <b>To finish this presentation I wanted to show you numbers to get you excited about stencil. I created a project that aim to compare different libraries that export Web Components. Today we are going compare The native implementation, with Stencil, Polymer 2 and Angular Elements</b>
        <b>The code and the demo are available on Github</b>
    </aside>
</section>

<section>
    <img src="./img/todo.gif" class="img-plain"/>
    <aside class="notes">
        <b>The app is a simple todo list, where you can add, remove and check items.</b>
    </aside>
</section>

<section>
    <h3>Full disclosure</h3>
    <ul>
         <li class="fragment">I try not be biased</li>
         <li class="fragment">I followed the docs</li>
         <li class="fragment">No optimizations was made</li>
         <li class="fragment">⚠️ Angular Elements and Vue Web Component Wrapper are in early stage</li>
    </ul>
    <aside class="notes">
        <b>Before we start I wanted to emphasize that...</b>
        <ul>
            <li>I am not biased: I am not payed by anyone, I tried to be as factual as possible</li>
            <li>I followed the docs: like a normal user would do to start with those libraries</li>
            <li>no optimizations was made: the results that I am about to share are what you get out of the box</li>
            <li>Angular Elements is a proof of concept right now, it is far from being optimized, be patient</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Code length</h3>
    <img src="./img/stencil_vs_wc.png" class="img-plain"/>
    <aside class="notes">
        <b>In terms of code length, what we can see is that with Stencil and Angular Elements you write less code.</b>
        <b>Polymer is more verbose because it is not compiled and does not use decorators. Polymer 3 which is not stable yet will be simimlar to stencil and angular in termes of code length.</b>
        <b>Why is code lenght important to me?</b>
    </aside>
</section>

<section>
    <h2 style="text-transform: initial;">The less code you write <span style="color: var(--blue)">the less bugs you will introduce</span></h2>
    <aside class="notes">
    </aside>
</section>

<section>
    <h5>Assets Dowloaded by the Browser (in KB)</h5>
    <canvas data-chart="horizontalBar">
, Native, StencilJS, Polymer 2, Angular Elements, Vue Wrapper
<!-- This is a comment that will be ignored -->
Code Size (in kb), 2.3, 8.3, 126, 258, 87
    <!--
{
    "data": {
        "datasets": [
            {
                "label": "My First Dataset",
                "fill": false,
                "backgroundColor": [
                    "#ef5a25",
                    "white",
                    "#1b7de1",
                    "#d8002c",
                    "#39AF78"
                ],
                "borderColor": [
                    "#f05118",
                    "white",
                    "#1d4b9e",
                    "#bb0029",
                    "#39AF78"
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
        <b>In terms of the assets size, we can see that it is hard to compete with the native implementation. Stencil however has great results as well. The difference is the Virtual DOM code needs to be shipped as well.</b>
        <b>Polymer and Angular Elements are not optimized out of the box as far as I could see.</b>
    </aside>
</section>

<section>
    <h3>Lighthouse Performance</h3>
    <div layout="row" layout-align="center start">
        <div flex="20" style="position: relative;">
            <canvas data-chart="doughnut" style="margin: 20px 0">
            ,
            Performance, 92, 8
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "fill": false,
                        "backgroundColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderWidth": 1
                    }
                ]
            },
            "options": {
                "responsive": true,
                "legend": {
                    "display": false
                }
            }
            }
            -->
            </canvas>
            <span style="position: absolute; top: 44px; left: 0; right: 0;">92</span>
            <img src="../../img/web_component-logo.png" height="150" class="img-plain"/>
        </div>
        <div flex="20" style="position: relative;">
            <canvas data-chart="doughnut" style="margin: 20px 0">
            ,
            Performance, 97, 3
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "fill": false,
                        "backgroundColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderWidth": 1
                    }
                ]
            },
            "options": {
                "responsive": true,
                "legend": {
                    "display": false
                }
            }
            }
            -->
            </canvas>
            <span style="position: absolute; top: 44px; left: 0; right: 0;">97</span>
            <img src="../../img/stencil-logo.png" height="150" class="img-plain"/>
        </div>
        <div flex="20" style="position: relative;">
            <canvas data-chart="doughnut" style="margin: 20px 0">
            ,
            Performance, 94, 6
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "fill": false,
                        "backgroundColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderColor": [
                            "#44b164",
                            "#222"
                        ],
                        "borderWidth": 1
                    }
                ]
            },
            "options": {
                "responsive": true,
                "legend": {
                    "display": false
                }
            }
            }
            -->
            </canvas>
            <span style="position: absolute; top: 44px; left: 0; right: 0;">94</span>
            <img src="../../img/polymer-logo.png" height="150" class="img-plain"/>
        </div>
        <div flex="20" style="position: relative;">
            <canvas data-chart="doughnut" style="margin: 20px 0">
            ,
            Performance, 74, 26
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "label": "My First Dataset",
                        "fill": false,
                        "backgroundColor": [
                            "#d8b93f",
                            "#222"
                        ],
                        "borderColor": [
                            "#d8b93f",
                            "#222"
                        ],
                        "borderWidth": 1
                    }
                ]
            },
            "options": {
                "responsive": true,
                "legend": {
                    "display": false
                }
            }
            }
            -->
            </canvas>
            <span style="position: absolute; top: 44px; left: 0; right: 0;">74</span>
            <img src="../../img/angular-logo.png" height="150" class="img-plain"/>
        </div>
        <div flex="20" style="position: relative;">
            <canvas data-chart="doughnut" style="margin: 20px 0">
            ,
            Performance, 73, 27
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "label": "My First Dataset",
                        "fill": false,
                        "backgroundColor": [
                            "#d8b93f",
                            "#222"
                        ],
                        "borderColor": [
                            "#d8b93f",
                            "#222"
                        ],
                        "borderWidth": 1
                    }
                ]
            },
            "options": {
                "responsive": true,
                "legend": {
                    "display": false
                }
            }
            }
            -->
            </canvas>
            <span style="position: absolute; top: 44px; left: 0; right: 0;">73</span>
            <img src="../../img/vue-logo.png" height="150" class="img-plain"/>
        </div>
    </div>
    <aside class="notes">
        <b>If you run lighthouse on those implementation you will see that Native and Stencil are scoring the best. Polymer and Angular are still pretty good but lower.</b>
    </aside>
</section>

<section>
    <h3>First meaningful paint</h3>
    <canvas data-chart="horizontalBar">
, Native, StencilJS, Polymer 2, Angular Elements, Vue Wrapper
<!-- This is a comment that will be ignored -->
First meaningful paint (in ms), 2480, 1828, 2292, 4229, 4321
    <!--
{
    "data": {
        "datasets": [
            {
                "label": "My First Dataset",
                "data": [
                    65,
                    59,
                    80,
                    81,
                    56,
                    55,
                    40
                ],
                "fill": false,
                "backgroundColor": [
                    "#ef5a25",
                    "white",
                    "#1b7de1",
                    "#d8002c",
                    "#39AF78"
                ],
                "borderColor": [
                    "#f05118",
                    "white",
                    "#1d4b9e",
                    "#bb0029",
                    "#39AF78"
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
        <b>First meaningful paint measures when the primary content of a page is visible, it is not interactive yet.</b>
        <b>What we can see is that Stencil is faster than the native implementation because or prerendering</b>
    </aside>
</section>

<section>
    <h3>Why StencilJS makes Web Components great again?</h3>
    <ol>
        <li><span style="color: var(--blue)">Interoperability</span></li>
        <li><span style="color: var(--blue)">Write less code</span> (Decorator, JSX)</li>
        <li><span style="color: var(--blue)">Write better code</span> (Static Type-checking)</li>
        <li><span style="color: var(--blue)">Optimized DOM manipulation</span> (Virtual DOM)</li>
        <li><span style="color: var(--blue)">Faster time to first meaningful paint</span> (Prerendering)</li>
        <!-- <li><span style="color: var(--blue)">Better SEO</span> (Prerendering)</li> -->
    </ol>
    <aside class="notes">
        <b></b>
    </aside>
</section>