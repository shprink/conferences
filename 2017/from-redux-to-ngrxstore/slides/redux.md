<section>
    <img src="../../img/redux-logo.png" width="25%" class="img-plain"/>
    <h1>Redux</h1>
    <h2>Predictable state container for JavaScript apps</h2>
    
    <aside class="notes">
        <b>To understand what ngrx/store is we must first learn where it is coming from. It is mainly inspired by Redux.</b><br/>
        <b>What is Redux then?</b><br/>
        <b>Redux is a library for unidirectional data flow (top to bottom), which makes the state of your app:</b>
        <ul>
            <li>Easier to understand for developers</li>
            <li>Encourages data normalization: avoid copies of the same data</li>
            <li>Predictable</li>
        </ul>
        <b>Ok great but What is the problem with conventionnal data flows?</b>
    </aside>
</section>

<section>
    <h3>Without Redux</h3>
    <img src="./img/without_redux.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>Conventionnal data flow could look like this.</b>
        <ul>
            <li>Components can communicate directly with each other using props or event emitters (In and Out). Works for components that have a direct relationship, such as parent and children.</li>
            <li>When you do not have a direct relationship you can use a third party service, or use a pub sub pattern etc.</li>
        </ul>
        <b>As you can see there are many ways to achieve data communications between components and it is not normalized, meaning if you have several developers working on your application over time, you could end up using all the possibilities and make your app harder to understand and unpredictable.</b>
    </aside>
</section>

<section>
    <h3>With Redux</h3>
    <img src="./img/with_redux.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>With Redux the store contains the entire state of your app. It is what we call "the Single Source of Truth!!!"</b>
        <ul>
            <li>When a component ask a state change to the store, the store apply this change and notify the components that subscribed to it</li>
            <li>With the unidirectional data flow, all data in your application follows the same lifecycle pattern, which makes the logic of your application more predictable and easier to understand.</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Redux store</h3>
    <img src="./img/redux_store.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>Let's explore the lifecycle pattern a bit deeper</b>
        <ol>
            <li>When a component needs to change the state of the app, it orders a change by DISPATCHING an ACTION, that's the only way to change the state.</li>
            <li>The store then applies this change and to finish it notifies the components that subscribed to its changes</li>
        </ol>
        <b>Now let's see what is an action and how it can update the store</b>
    </aside>
</section>

<section>
    <h3>Redux: Action</h3>
    <img src="./img/redux_action.svg" width="80%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>this is an an action. An Action is a plain JavaScript Object that describes the changes to make to the store</b>
        <ul>
            <li>The only constraint you have is to be able to identify the action, here we do this using the type key, which is a convention.</li>
            <li>The payload on the other hand is completely up to you, it can be anything</li>
        </ul>
        <b>the purpose of this action is pretty straight forward. We want to change the username of the current user.</b>
    </aside>
</section>

<section>
    <h3>Redux store</h3>
    <img src="./img/redux_store.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>If we go back to the previous diagram, we can see that there is missing part here. From an action how do we change the state of the app?</b>
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
    <aside class="notes">
        <b>A reducer or a reduction function is a function that takes an accumulator (here total), the current value and returns a new value</b>
        <b>Reduce is only available on arrays in JavaScript</b>
        <b>Here We have a 1,2,3 array that we reduce with the sum function (or a reducer) and give an initial value of 0</b>
        <b>What is the return value here? 6</b>
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

[
    { type: 'INCREMENT' },
    { type: 'INCREMENT' },
    { type: 'DECREMENT' }
].reduce(counterReducer, 0)
</code></pre>
    <aside class="notes">
        <b>If we expend this reduce idea with an array of actions, we get the idea of what Redux does internaly.</b>
        <b>In this case we are going to increment or decrement a counter by passing actions to a reducer.</b>
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
        <b>By now I think it is pretty clear, let now recap all of this with a diagram</b>
    </aside>
</section>

<section>
    <h3>Unidirectional data flow with Redux</h3>
    <img src="./img/redux_diagram_2.png" width="100%" class="img-plain"/>
    <aside class="notes">
        <ol>
            <li>First Components subscribe to the unique store (only one store in Redux)</li>
            <li>then the components can dispatch actions</li>
            <li>The reducers receive those actions, apply the changes, and return a new state</li>
            <li>The Store notify the components with this new state</li>
            <li>... and so on, and so forth</li>
        </ol>
        <b>You guys are now Redux experts, let's learn about ngrx/store now!</b>
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