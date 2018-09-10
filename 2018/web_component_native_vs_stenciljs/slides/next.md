<!-- <section>
    <h2>Alternatives</h2>
    <ul>
        <li>[Polymer 3](https://www.polymer-project.org/)</li>
        <li>[LitElement](https://github.com/Polymer/lit-element) by Polymer</li>
        <li>[SkateJS](http://skatejs.netlify.com/)</li>
        <li>[Slim.js](http://slimjs.com/#/getting-started)</li>
    </ul>
    <aside class="notes">
        <b></b>
    </aside>
</section> -->

<section>
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
        Pour vous donner un peu de context sur pourquoi avoir choisi Stencil ou lit-element aujourd'hui.
        J'ai cree un repo qui liste differente implementation d'une todolist avec plusieurs technologies de web components 
    </aside>
</section>

<section>
    <img src="./img/stencil_vs_wc.png" class="img-plain no-margin"/>
    <aside class="notes"></aside>
</section>

<section>
    <h5>Assets Dowloaded by the Browser (in KB)</h5>
    <canvas data-chart="horizontalBar">
, Native, Lit-Element, StencilJS, Polymer 3, Vue, Angular Elements
<!-- This is a comment that will be ignored -->
Code Size (in kb), 4.3, 7.6, 10.7, 36, 85, 258
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
                    "#37B179",
                    "#d8002c"
                ],
                "borderColor": [
                    "#f05118",
                    "#1b4678",
                    "white",
                    "#f4224d",
                    "#37B179",
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
    <h5>First meaningful paint fast 3G mobile (in ms)</h5>
    <canvas data-chart="horizontalBar">
, StencilJS + Prerendering, Native, StencilJS, Lit-Element, Polymer 3, Vue, Angular Elements
<!-- This is a comment that will be ignored -->
First meaningful paint (in ms), 980, 1030, 1070, 1320, 1370, 3010, 3100
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
                    "white",
                    "#1b4678",
                    "#f4224d",
                    "#37B179",
                    "#d8002c"
                ],
                "borderColor": [
                    "white",
                    "#f05118",
                    "white",
                    "#1b4678",
                    "#f4224d",
                    "#37B179",
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

<!--
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
</section> -->