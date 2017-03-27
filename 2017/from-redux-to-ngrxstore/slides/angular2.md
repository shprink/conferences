<section>
    <img src="../../img/redux-logo.png" width="25%" class="img-plain"/>
    <img src="../../img/angular-logo.png" width="20%" class="img-plain"/>
    <h1>Redux + Angular2</h1>
    <aside class="notes">
      <b>Maintenant que nous connaissons Redux, voyons comment l'utiliser avec Angular2</b>
    </aside>
</section>

<section>
    <h1>ng2-redux</h1>
    <h2>Angular 2 bindings for Redux</h2>
    <small>https://github.com/angular-redux/ng2-redux</small>
    <ul>
        <li>Uses Redux!</li>
        <li>Can access the store as Observables</li>
        <li>Compatible with existing Redux middlewares</li>
        <li>Compatible with the existing Redux devtools</li>
    </ul>
    <aside class="notes">
      <b>Il y a plusieurs librairies Redux pour angular2</b>
      <b>Celle que je recommande c'est ng-redux. Pourquoi?</b>
      <ul>
        <li>Utilise Redux. Attention ca parait logique mais...</li>
        <li>Vous le savez Angular2 est optimise pour les Observables</li>
        <li>ng2-redux permet donc de recuperer des datas du store via des Observables</li>
        <li>ng2-redux permet d'utiliser les devtools et middleware Redux</li>
        <li>Ce qui n'est pas le cas d'autres librairies</li>
      </ul>
    </aside>
</section>

<section>
    <h2>Case study: basic counter app</h2>
<pre style="font-size: 100%"><code class="json" data-trim>
{
  "isMenuOpened": false,
  "user" : {
    "firstname": "Julien",
    "sexe": "male",
    "age": 29
  },
  "counter": 0
}
</code></pre>
    <aside class="notes">
      <b>Un example concret</b>
      <ul>
        <li>On va reprendre l'example d'app compteur avec un state qui ressemble a ca.</li>
        <li>isMenuOpened: boolean qui permet de savoir si le menu lateral est ouvert</li>
        <li>user: object representant l'user connecte</li>
        <li>et notre fameux compteur</li>
      </ul>
    </aside>
</section>


<section>
    <h5>Basic counter app: Reducers</h5>

    <div class="grid">
        <div class="unit one-third fragment">
        <b>isMenuOpened</b>
<pre><code class="js" data-trim>
const INITIAL_STATE = false;

export default (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}
</code></pre>
        </div>
        <div class="unit one-third fragment">
        <b>user</b>
<pre><code class="js" data-trim>
const INITIAL_STATE = {};

export default (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case LOGIN:
      return action.response;
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
</code></pre>
        </div>
        <div class="unit one-third fragment">
        <b>counter</b>
<pre><code class="js" data-trim>
const INITIAL_STATE = 0;

export default (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
</code></pre>
        </div>
    </div>
    <aside class="notes">
      <b>A quoi ressemble les reducers de cette app?</b>
      <ul>
        <li>INITIAL_STATE a false</li>
        <li>a chaque fois que TOGGLE_MENU est appele on va toggle le state</li>
      </ul>
      <ul>
        <li>INITIAL_STATE a object vide</li>
        <li>On va remplir le user sur l'action LOGIN qui nous renvoit le payload de l'user</li>
        <li>Et on reinit quand on LOGOUT</li>
      </ul>
      <ul>
        <li>INITIAL_STATE a 0</li>
        <li>sur l'action INCREMENT_COUNTER on incremente de 1</li>
        <li>sur l'action DECREMENT_COUNTER on decremente de 1</li>
      </ul>
      <b>Maintenant que nos reducers sont pret il faut les enregister</b>
    </aside>
</section>

<section>
    <h5>Create the root Reducer</h5>




  <aside class="notes">
    <ul>
      <li>Nous allons combiner nos reducers pour creer un rootReducer</li>
      <li>On cree une interface du store, on va en avoir besoin</li>
      <li>On utilise la method combineReducers pour enregister nos reducers</li>
      <li>Ensuite on export rootReducer et l'interface du store</li>
    </ul>
    <b>Maintenant nous allons creer le store</b>
  </aside>
</section>

<section>
    <h5>Bootstrap the store</h5>
<pre style="font-size: 65%;"><code class="html" data-trim>
  <section>
    <pre><code>
    // Useless comment.
    alert('hi');
    </pre></code>
    <p class="fragment" data-code-focus="1">
      This focuses on the comment.
    </p>
    <p class="fragment" data-code-focus="1-2">
      Another fragment.
    </p>
  </section>
</code></pre>
  <div class="fragment current-only" data-code-focus="1-12">This section is a slide.</div>
  <div class="fragment current-only" data-code-focus="2-5">This will be highlighted by `highlight.js`.</div>
  <div class="fragment current-only" data-code-focus="6-8">This fragment focuses on the first line.</div>
  <div class="fragment current-only" data-code-focus="9-11">This fragment focuses on lines 1 and 2.</div>        
  <aside class="notes">
    <ul>
      <li>le store a besoin d'une definition ici IAppState et d'un rootReducer</li>
      <li>On utilise createStore method pour creer le store</li>
      <li>ensuite on donne ce store a ng2-redux via provideStore method</li>
    </ul>
    <b>Notre store est donc cree, voyons comment l'utiliser</b>
  </aside>
</section>

<section>
    <h5>@select: get store data as an Observable</h5>
<pre style="font-size: 80%;"><code class="js" data-trim>
import { Component } from '@angular/core';
import { select } from 'ng2-redux';
 
@Component({
  template: \`<p>{counter$ | async}</p>\`
})
export class Counter {
  @select() counter$: Observable < number >;
}
</code></pre>
  <aside class="notes">
    <ul>
      <li>Pour recuperer la donner compteur on utilise le select decorator.</li>
      <li>@select retourne un observable qui subscribe et unsubscribe tout seul</li>
      <li>Via le asynch pipe on aura le resultat affiche a chaque changement</li>
    </ul>
  </aside>
</section>

<section>
    <h5>Dispaching actions</h5>
<pre style="font-size: 60%;" class="stretch"><code class="js" data-trim>
import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../reducers';
import { 
  incrementCounter, 
  decrementCounter
} from '../actions';
 
@Component({
  template: \`
    <button (click)="incrementCounter">+1</button>
    <button (click)="decrementCounter">-1</button>
  \`
})
export class Counter {
  constructor(private ngRedux: NgRedux< IAppState >) {} 
  incrementCounter = () => this.ngRedux.dispatch(incrementCounter())
  decrementCounter = () => this.ngRedux.dispatch(decrementCounter())
}
</code></pre>
  <aside class="notes">
    <ul>
      <li>Pour changer la valeur du store on va utiliser nos actions creators au click user</li>
      <li>Pour ce faire on utilise ngRedux dispatch method au click</li>
    </ul>
    <b>C'est tout pour moi, j'espere que ca vous a permis de mieux comprendre les applications possibles de Redux dans Angular2. Merci beaucoup de votre attention.</b>
  </aside>
</section>

<section data-background-image="../../img/meme/questions.gif">
  <h1>Questions?</h1>
</section>

