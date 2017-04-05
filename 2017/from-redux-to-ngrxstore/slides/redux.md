<section>
    <img src="../../img/redux-logo.png" width="25%" class="img-plain"/>
    <h1>Redux</h1>
    <h2>Predictable state container for JavaScript apps</h2>
    
    <aside class="notes">
        <b>To understand what ngrx/store is we must first learn where it is coming from. It is mainly inspired by Redux.</b><br/>
        <b>What is Redux then?</b><br/>
    </aside>
</section>

<section>
    <h3>Redux</h3>
    <ul>
        <li>Open Source library</li>
        <li class="fragment">Predictable state management</li>
        <li class="fragment">Unidirectional data flow (top to bottom)</li>
        <li class="fragment">Framework agnostic</li>
        <li class="fragment">Created by Dan Abramov & Andrew Clark</li>
        <li class="fragment">
            29k <i class="fa fa-star"></i> on Github
        </li>
    </ul>
    <aside class="notes">
        <b>Redux is an Open Source library to manage the state of your app, meaning all the data within your app.</b>
        <ul>
            <li>The state is Predictable so it is easily testable</li>
            <li>It has a Unidirectional data flow: Always top to bottom</li>
            <li>It is Framework agnostic, it can be used with any framework or any library: Angular, React, whatever</li>
            <li>Created by Dan Abramov & Andrew Clark</li>
            <li>has tweenty nine thousand stars on Github</li>
        </ul>
        <b>Ok great but What is the problem with conventionnal data flows?</b>
    </aside>
</section>

<section>
    <h3>Without Redux</h3>
    <div class="grid vertical-center">
        <div class="unit w-3-5 no-padding">
            <img src="./img/without_redux.svg" class="img-plain no-margin"/>
        </div>
        <div class="unit w-2-5 no-padding">
            <ul style="zoom: 80%">
                <li class="fragment">Direct communication: props, eventEmitters</li>
                <li class="fragment">Undirect communication: Service, EventBus, PubSub</li>
            </ul>
        </div>
    </div>
    <h4 class="fragment red">Too many options</h4>

    <aside class="notes">
        <b>Conventionnal data flow could look like this.</b>
        <ul>
            <li>When your components have a direct relationship, they can communicate directly with each other using props to get data IN and event emitters to get data out.</li>
            <li>When you do not have a direct relationship you can use a third party service, or something similar to the rootScope in Angular 1 or a Pub Sub pattern</li>
            <li>There are too many ways to achieve data communications between components and it is not normalized. </li>
        </ul>
        <b>If you have several developers working on your application over time, you could end up using many of the possibilities and make your app harder to understand and to predict.</b>
    </aside>
</section>

<section>
    <h3>With Redux</h3>
    <div class="grid vertical-center">
        <div class="unit w-3-5 no-padding">
            <img src="./img/with_redux.svg" class="img-plain no-margin"/>
        </div>
        <div class="unit w-2-5 no-padding">
            <ul style="zoom: 80%" class="fragment">
                <li >No component to component communication</li>
                <li>Same lifecycle pattern</li>
            </ul>
        </div>
    </div>
    <h4 class="fragment green">Easy to reason about</h4>

    <aside class="notes">
        <b>With Redux the store contains the entire state of your app. It is what we call "the Single Source of Truth!!!". When a component initiate a change (green arrow), the store apply this change and let the components know about it (blue arrows)</b>
        <ul>
            <li>With the unidirectional data flow, all data in your application follow the same lifecycle pattern: there is no component to component communication</li>
            <li>It makes the logic of your application more predictable and easier to reason about.</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Redux store</h3>
    <div class="grid vertical-center">
        <div class="unit w-3-5 no-padding">
            <img src="./img/redux_store.svg" class="img-plain no-margin"/>
        </div>
        <div class="unit w-2-5 no-padding">
            <ol style="zoom: 80%">
                <li class="fragment">An action is dispatched</li>
                <li class="fragment">The store applies the change</li>
                <li class="fragment">Components get notify</li>
            </ol>
        </div>
    </div>

    <aside class="notes">
        <b>Let's explore the lifecycle pattern a bit deeper</b>
        <ol>
            <li>When a component needs to change the state of the app, it orders a change by DISPATCHING an ACTION, that's the only way to change the state in Redux.</li>
            <li>The store then applies this change</li>
            <li>to finish the store notifies the components that subscribed to its changes</li>
        </ol>
        <b>Now let's see what is an action and how it can update the store</b>
    </aside>
</section>

<section>
    <h3>Redux: Action</h3>
    <img src="./img/redux_action.svg" width="80%" class="img-plain no-margin"/>
    <h4 class="fragment green">Type key is the only constraint</h4>

    <aside class="notes">
        <b>this is an an action. An Action is a plain JavaScript Object that describes the changes to make to the store</b>
        <ul>
            <li>The only constraint you have is to be able to identify the action, here we do this using the type key, which is a convention. it has to be unique</li>
            <li>The payload on the other hand is completely up to you, it can be anything</li>
        </ul>
        <b>the purpose of this action is pretty straight forward. We want to change the username of the current user.</b>
    </aside>
</section>

<section>
    <h3>Redux store</h3>
    <img src="./img/redux_store.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>If we go back to the previous diagram, we can see that there is missing part here around the store.<br/> From this action how do we change the state of the app?</b>
        <b>That's where reducers enter into the equation</b>
    </aside>
</section>

<section>
    <h3>Redux: Reducer</h3>
<pre style="font-size: 110%" class=""><code class="js" data-trim>
function sum(total, currentValue) {
    return total + currentValue;
}
[1,2,3].reduce(sum, 0);
</code></pre>
    <h4 class="fragment green">Result: 6</h4>
    <aside class="notes">
        <b>A reducer or a reduction function is a function that takes an accumulator (here total), the current value and returns a new value</b>
        <ul>
            <li>Reduce is only available on arrays in JavaScript</li>
            <li>Here We have a 1,2,3 array that we reduce with the sum function (or a reducer) and give an initial value of 0</li>
            <li>What is the return value here? 6</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Redux: Reducer</h3>
<pre style="font-size: 79%" class="stretch"><code class="js" data-trim>
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
}

[   { type: 'INCREMENT' }, { type: 'INCREMENT' },
    { type: 'DECREMENT' }, { type: 'INCREMENT' }
].reduce(counterReducer, 0)
</code></pre>
    <h4 class="fragment green">Result: 2</h4>
    <aside class="notes">
        <b>If we expend this reduce idea with an array of actions, we get the idea of what Redux does internaly.</b>
        <b>In this case we are going to increment or decrement a counter by passing actions to a reducer. <br/>What is the return value here? 2</b>
    </aside>
</section>

<section>
    <h3>Redux: Reducer</h3>
<img src="./img/redux_reducer_v2.svg" width="100%" class="img-plain"/>
<!--<pre style="font-size: 110%" class="fragment"><code class="js" data-trim>
(previousState, action) => newState
</code></pre>-->
    <aside class="notes">
        <b>To finish on reducers we can say that a reducer purpose is to apply the state modification the action is asking for</b>
        <ul>
            <li>The current state + an action will enter the reducer</li>
            <li>The reducer will apply the state modification</li>
            <li>then the reducer will return a new state</li>
        </ul>
        <b>Let's now recap all of what we learnt with a diagram</b>
    </aside>
</section>

<section>
    <h3>Unidirectional data flow with Redux</h3>
    <img src="./img/redux_diagram_2.png" width="100%" class="img-plain"/>
    <aside class="notes">
        <b>We can summurize the </b>
        <ol>
            <li>First the Components subscribe to the store to get the state</li>
            <li>then the Components can dispatch actions</li>
            <li>The reducers will receive those actions, apply the changes, and return a new state to the store</li>
            <li>The Store then notify the components with this new state</li>
            <li>... and so on, and so forth</li>
        </ol>
        <b>You guys are now Redux experts, Now let's talk about ngrx/store shall we?!</b>
    </aside>
</section>

<!--
<section>
    <h2>Redux: State visualizer</h2>
    <iframe width="100%" style="background-color:white; height: 500px;" src="http://argelius.github.io/react-redux-timetravel/"></iframe>
    https://github.com/argelius/react-redux-timetravel
    <aside class="notes">
        <b>Redux has amazing devtools</b>
        <ul>
            <li>Projet d'un amis suedois au Japon</li>
            <li>Qui permet d'expliquer Redux de facon pedagogique</li>
            <li>Suivre action par action l'evolution du state de son app</li>
            <li>Par example on peut decouvrir l'etat initial de cet app</li>
        </ul>
        <b>Og so now that we are excited about Redux</b>
    </aside>
</section>
-->

<!--
<section data="http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux">
    <h3>Why choose Redux?</h3>
    <ul>
        <li class="fragment">Simplifies the development</li>
        <li class="fragment">Functional programming</li>
        <li class="fragment">Only one store</li>
        <li class="fragment">Easy to scale</li>
        <li class="fragment">Simple store API: 3 methods</li>
    </ul>
    <aside class="notes">
        <b>To finish about Redux let see the advantages we get using it:</b>
        <ul>
            <li>Simplifies the development : Same dataflow accross the entire app</li>
            <li>Functional programming: prevent side effects and easy to test and predict</li>
            <li>Only one store: Avoids complexe dependencies</li>
            <li>Easy to scale: we just need to add reducers to handle the new data structure</li>
            <li>Basic store api: subscribe, dispatch and getState</li>
        </ul>
        <b>Now we have a great background about Redux, let's see how this could help on a Angular app!</b>
    </aside>
</section>
-->