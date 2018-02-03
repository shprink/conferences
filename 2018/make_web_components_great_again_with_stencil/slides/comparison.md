<section>
    <h2>Case study: Todo list</h2>
    <div style="margin: 50px 0;">
    <img src="../../img/web_component-logo.png" height="150" class="img-plain"/>
    <img src="../../img/stencil-logo.png" height="150" class="img-plain"/>
    <img src="../../img/polymer-logo.png" height="150" class="img-plain"/>
    <img src="../../img/angular-logo.png" height="150" class="img-plain"/>
    </div>

    Repo: https://github.com/shprink/web-components-todo
    Demo: https://wc-todo.firebaseapp.com
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <img src="./img/todo.gif" class="img-plain"/>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Full disclosure</h3>
    <ul>
         <li class="fragment">I try not be biased</li>
         <li class="fragment">I followed the docs</li>
         <li class="fragment">No optimizations was made</li>
         <li class="fragment">⚠️ Angular Elements is in early stage</li>
    </ul>
    <aside class="notes">
        <b>Before we start I wanted to emphasize that...</b>
        <ul>
            <li>I am not biased: I am not payed by anyone, I tried to be as factual as possible</li>
            <li>I followed the docs: like a normal user would do</li>
            <li>no optimizations was made: the results that I am about to share are what you get out of the box</li>
            <li>Angular Elements is a proof of concept right now, it is far from being optimized, be patient</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Lines of code</h3>
    <img src="./img/stencil_vs_wc.png" class="img-plain"/>
    <aside class="notes">
        <b>As you can see the whole industry converge to the same</b>
    </aside>
</section>

<section>
    <h3>ES2015 Code size Min and Gzipped (in KB)</h3>
    <canvas data-chart="horizontalBar">
, Native, StencilJS, Polymer 2, Angular Elements
<!-- This is a comment that will be ignored -->
Code Size (in kb), 2.3, 8.3, 126, 258
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
                    "#d8002c"
                ],
                "borderColor": [
                    "#f05118",
                    "white",
                    "#1d4b9e",
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
        <b></b>
    </aside>
</section>

<section>
    <h3>Lighthouse Performance</h3>
    <div layout="row" layout-align="center center">
        <div flex="25" style="position: relative;">
            <canvas data-chart="doughnut">
            ,
            Performance, 99, 1
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "label": "My First Dataset",
                        "data": [
                            99
                        ],
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
            <span style="position: absolute; top: 35px; left: 0; right: 0;">99</span>
            <h4>Native</h4>
        </div>
        <div flex="25" style="position: relative;">
            <canvas data-chart="doughnut">
            ,
            Performance, 99, 1
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "label": "My First Dataset",
                        "data": [
                            99
                        ],
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
            <span style="position: absolute; top: 35px; left: 0; right: 0;">99</span>
            <h4>StencilJS</h4>
        </div>
        <div flex="25" style="position: relative;">
            <canvas data-chart="doughnut">
            ,
            Performance, 95, 5
            <!--
            {
            "data": {
                "datasets": [
                    {
                        "label": "My First Dataset",
                        "data": [
                            99
                        ],
                        "fill": false,
                        "backgroundColor": [
                            "#a1a530",
                            "#222"
                        ],
                        "borderColor": [
                            "#a1a530",
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
            <span style="position: absolute; top: 35px; left: 0; right: 0;">95</span>
            <h4>Polymer 2</h4>
        </div>
        <div flex="25" style="position: relative;">
            <canvas data-chart="doughnut">
            ,
            Performance, 83, 17
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
            <span style="position: absolute; top: 35px; left: 0; right: 0;">83</span>
            <h4>Angular Elements</h4>
        </div>
    </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>First meaningful paint on Mobile 3G</h3>
    <canvas data-chart="horizontalBar">
, Native, StencilJS, Polymer 2, Angular Elements
<!-- This is a comment that will be ignored -->
First meaningful paint (in ms), 1400, 1250, 1970, 3200
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
                    "#d8002c"
                ],
                "borderColor": [
                    "#f05118",
                    "white",
                    "#1d4b9e",
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
        <b>First meaningful paint measures when the primary content of a page is visible</b>
    </aside>
</section>

<section>
    <h3>Conclusion</h3>
    <aside class="notes">
        <b></b>
    </aside>
</section>