<section>
    <img src="./img/logo_redux.png" width="25%" class="img-plain"/>
    <h1>Redux</h1>
    <h2>Predictable state container for JavaScript apps</h2>
    
    <aside class="notes">
        <ul>
            <li>Redux c'est quoi?</li>
            <li>Une librairie qui permet d'avoir un etat predictif pour ses apps</li>
        </ul>
    </aside>
</section>

<section data-background-color="#ff0000">
    <h1>Redux !== React</h1>
    
    <aside class="notes">
        <ul>
            <li>React et Redux n'ont rien a voir (Redux permet de gerer le state de son app et React permet de creer des composants)</li>
            <li>Redux est framework agnostic</li>
            <li>Peut etre utilise m'importe quel framework ou librairie</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Evolved from...</h2>
    <h1 class="fragment">Flux</h1>
    
    <aside class="notes">
        <ul>
            <li>Redux est une evolution de Flux</li>
        </ul>
      <b>Qu'est ce que Flux?</b>
    </aside>
</section>

<section>
    <h2>Why Flux was created?</h2>
    <div class="fragment">
        <h2>Avoid MVC hell</h2>
        <img src="./img/mvc_diagram.jpeg" width="80%" class="img-plain"/>
    </div>
    
    <aside class="notes">
        <ul>
            <li>Pourquoi utiliser flux?</li>
            <li>Eviter les problemes du MVC et du two way data binding</li>
            <li>MVC? Le model update la vue et la vue update le model</li>
            <li>C'est la magie Angular v1 </li>
            <li>Probleme: ca ne scale pas vraiment</li>
            <li>Tres dur de predire pourquoi l'etat de mon app a change</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Flux: Pattern for a unidirectional data flow</h2>
    <img src="./img/flux-simple-f8-diagram-with-client-action-1300w_stores_views.png" width="90%" class="img-plain"/>
    
    <aside class="notes">
        <ul>
            <li>Pattern cree par les equipes Facebook</li>
            <li>Flux unidirectionel des donnees</li>
            <li>Toutes les actions de l'app passe par l'unique dispatcher</li>
            <li>Le dispatcher va notifier tous les stores</li>
            <li>Les stores vont se modifier si necessaire pour changer l'etat de l'app</li>
            <li>et notifier les components pour qu'ils se redessinent</li>
        </ul>
    </aside>
    
    <!--<aside class="notes">
        <ul>
            <li>All data flows through the dispatcher as a central hub</li>
            <li>Actions are plain objects that describe a store change</li>
            <li>Actions most often originate from user interactions with the views</li>
            <li>The dispatcher then invokes the callbacks that the stores have registered with it, dispatching actions to all stores. </li>
            <li>The stores then emit a change event</li>
            <li>The re-rendering happens</li>
        </ul>
    </aside>-->
</section>

<section>
    <h1>Redux</h1>
    <img src="./img/redux_diagram_2.png" width="100%" class="img-plain"/>
    Created by <a href="https://twitter.com/dan_abramov"/>@dan_abramov</a>
    <aside class="notes">
        <ul>
            <li>Librairie cree par Dan Abramov</li>
            <li>Aussi un flux unidirectionel des donnees</li>
            <li>Toutes les actions de l'app passe cette fois ci par des reducers</li>
            <li>Ces reducers vont modifier l'unique store qui contient l'etat de l'app</li>
            <li>A chaque modification du store, les components sont notifies</li>
            <li>et se redessinent si besoin</li>
        </ul>
        <b>Maintenant on va explorer plus en details les actions et les reducers</b>
    </aside>
</section>

<section>
    <h1>Redux: Action</h1>
    <h2>Describe the change to make</h2>

<pre style="font-size: 150%"><code class="js" data-trim>
const action = {
  type: 'CHANGE_USERNAME',
  newUsername: 'Kevin'
}
</code></pre>

    <aside class="notes">
        <ul>
            <li>Une action c'est un object qui decrit une modification du store</li>
            <li>Une action a toujours un type, c'est la seule contrainte</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Redux: Action Creator</h2>
    <h3>Functions that create actions</h3>

<pre style="font-size: 60% !important"><code class="js" data-trim>
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter(amount = 1) {
  return {
    type: INCREMENT_COUNTER,
    amount
  };
}
export function decrementCounter(amount = 1) {
  return {
    type: DECREMENT_COUNTER,
    amount
  };
}
</code></pre>

    <aside class="notes">
        <ul>
            <li>Fonction qui cree des actions</li>
            <li>Prenons l'exemple d'un compteur</li>
            <li>On peut l'incrementer ou le decrementer d'une valeur, ici 1 par default.</li>
            <li>Nos components vont pouvoir appeler ces actions creators pour modifier le compteur</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Redux: Reducer</h2>
    <h3>Apply state modification</h3>
<pre style="font-size: 110%"><code class="js" data-trim>
(previousState, action) => newState
</code></pre>
<pre class="fragment"><code class="js" data-trim>
import { 
    INCREMENT_COUNTER, 
    DECREMENT_COUNTER 
} from '../actions';

const INITIAL_STATE = 0;
export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.amount;
    case DECREMENT_COUNTER:
      return state - action.amount;
    default:
      return state;
  }
}
</code></pre>
    <aside class="notes">
        <ul>
            <li>Le principe de base d'un reducer: </li>
            <li>Prendre un etat et une action pour retourner un nouvel etat</li>
            <li>Dans les faits voici a quoi ca ressemble</li>
            <li>Toujours un etat initial: ici 0</li>
            <li>Toujours un default qui retourne l'etat precedent</li>
            <li>Si le type correspond alors on retourne un nouvel etat</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Redux: Action creators and reducers are pure functions</h2>

    <ul>
        <li>Predictable</li>
        <li>Testable</li>
        <li>Return a new reference</li>
        <li>Do not mutate arguments</li>
    </ul>

    <aside class="notes">
        <ul>
            <li>Les Action creators et les reducers sont des pure functions</li>
            <li>Predictives: pour une meme entree, on aura toujours une meme sortie</li>
        </ul>
    </aside>
</section>