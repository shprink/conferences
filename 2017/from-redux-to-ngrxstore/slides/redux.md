<section>
    <img src="../../img/redux-logo.png" width="25%" class="img-plain"/>
    <h1>Redux</h1>
    <h2>Predictable state container for JavaScript apps</h2>
    
    <aside class="notes">
        <b>Redux is a library for unidirectional data flow (top to bottom), which makes the state of your app:</b>
        <ul>
            <li>Easier to understand for developers</li>
            <li>Encourages data normalization: avoid copies</li>
            <li>Predictable</li>
        </ul>
        <b>What is the problem with conventionnal data flow?</b>
    </aside>
</section>

<section>
    <h3>Without Redux</h3>
    <img src="./img/without_redux.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>Conventionnal data flow could look like this.</b>
        <ul>
            <li>components can communicate directly with each other: props, event emitters</li>
            <li>components can communicate through third party services</li>
        </ul>
        <b>Hard to reason about</b>
    </aside>
</section>

<section>
    <h3>With Redux</h3>
    <img src="./img/with_redux.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>With Redux the store contains the state of your app. It is the Single Source of Truth!!!</b>
        <ul>
            <li>Here A state change is ordered by a component</li>
            <li>The store provides the new state to other components using a unidirectional data flow</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Redux store</h3>
    <img src="./img/redux_store.svg" width="65%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>Let's get into the store API details.</b>
        <ul>
            <li>When a component orders a change, we say that it DISPATCHES an action</li>
            <li>Components that subscribed to store changes will get notified</li>
        </ul>
        <b>Now let's see what is an action and how does it update the store?</b>
    </aside>
</section>

<section>
    <h3>Redux: Action</h3>
    <img src="./img/redux_action.svg" width="80%" class="img-plain no-margin"/>

    <aside class="notes">
        <b>An action is a plain JavaScript Object that describes the changes to make to the store</b>
        <ul>
            <li>The only constraint you have is to be able to identify the action, here with a type</li>
            <li>The payload can be anything</li>
        </ul>
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
        <b>Redux is called Redux because of reducers. A reducer or a reduction function is a function that takes an accumulator (here total) and the current value and returns a new value</b>
        <b>We have a 1,2,3 array that we reduce with the sum function and give an initial value of 0</b>
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
            <li>and to finish the reducer will return a new state</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Unidirectional data flow with Redux</h3>
    <img src="./img/redux_diagram_2.png" width="100%" class="img-plain"/>
    <aside class="notes">
        <b>Let's summarized the unidirectional data flow with this diagram</b>
        <ul>
            <li>First Components subscribe to the unique store</li>
            <li>Components can dispatch actions</li>
            <li>Actions do to the reducers</li>
            <li>The reducers apply the changes and return a new state</li>
            <li>The new state is giver to components</li>
            <li>... and so on</li>
        </ul>
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