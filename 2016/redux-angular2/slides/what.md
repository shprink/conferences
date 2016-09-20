<section>
    <img src="./img/logo_redux.png" width="25%" class="img-plain"/>
    <h1>Redux</h1>
    <h2>Predictable state container for JavaScript apps</h2>
</section>

<section data-background-color="#ff0000">
    <h1>Redux !== React</h1>
</section>

<section>
    <h2>Evolved from...</h2>
    <h1 class="fragment">Flux</h1>
    
    <aside class="notes">
        <ul>
            <li>Created at Facebook</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Flux: Pattern for a unidirectional data flow</h2>
    <img src="./img/flux-simple-f8-diagram-with-client-action-1300w_stores_views.png" width="90%" class="img-plain fragment"/>
    
    <aside class="notes">
        <ul>
            <li>All data flows through the dispatcher as a central hub</li>
            <li>Actions are plain objects that describe a store change</li>
            <li>Actions most often originate from user interactions with the views</li>
            <li>The dispatcher then invokes the callbacks that the stores have registered with it, dispatching actions to all stores. </li>
            <li>The stores then emit a change event</li>
            <li>The re-rendering happens</li>
        </ul>
    </aside>
</section>

<section>
    <h1>Why Flux?</h1>
    <h2 class="fragment">Avoid MVC hell</h2>
    <img src="./img/mvc_diagram.jpeg" width="80%" class="img-plain fragment"/>
    
    <aside class="notes">
        <ul>
            <li></li>
        </ul>
    </aside>
</section>

<section>
    <h1>Redux</h1>
    <img src="./img/redux_diagram_2.png" width="100%" class="img-plain"/>
    <aside class="notes">
        <ul>
            <li >Action: Describe the change to make as plain objects.</li>
            <li >Reducer: Describe the logic for handling changes as pure functions.</li>
            <li >Store: Holds application state as plain objects and arrays.</li>
        </ul>
    </aside>
</section>

<section>
    <h1>Redux: Action</h1>
    <h2>Describe the change to make</h2>

<pre><code class="js" data-trim>
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function incrementCounter(amount = 1) {
  return {
    type: INCREMENT_COUNTER,
    amount
  };
}
</code></pre>
</section>

<section>
    <h1>Redux: Reducer</h1>
    <h2>Apply state modification</h2>

<pre><code class="js" data-trim>
import { INCREMENT_COUNTER } from '../actions';

const INITIAL_STATE = 0;
export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.amount;
    default:
      return state;
  }
}
</code></pre>
<aside class="notes">
    <ul>
        <li>functionnal</li>
        <li>pure function</li>
    </ul>
</aside>
</section>