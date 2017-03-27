<section>
    <img src="../../img/ngrx-store-logo.png" width="25%" class="img-plain"/>
    <h1>ngrx/store</h1>
    <h2>Reactive Redux for Angular</h2>
    
    <aside class="notes">
        <b>Now let's talk about ngrx/store shall we? ngrx/store is a RxJS powered, state management for Angular applications</b>
        <ul>
            <li>We keep the Redux principals: Actions, Reducers, Store</li>
            <li>The entire state of your app is an Observable</li>
            <li>Play nicely with async pipe and the change detection in general</li>
        </ul>
    </aside>
</section>

<section>
    <h3>Unidirectional data flow with ngrx/store</h3>
    <img src="./img/ngrx_diagram.png" width="100%" class="img-plain"/>
    <aside class="notes">
        <b>As you can see the diagram we have with ngrx is almost the same as with Redux. </b>
        <ul>
            <li>The differences are that both actions and the store are streams/Observables.</li>
            <li>Both dispatch and subscribe methods are kept. Same API as redux</li>
        </ul>
        <b>Now let's see a basic implementation</b>
    </aside>
</section>

<section>
    <h3>ngrx/store: Basic implementation</h3>
<pre style="font-size: 65%" class="stretch"><code class="js" data-trim>
function counterReducer(state, action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
}

const actionsObserver: Observable< Action > = Observable.of([
    { type: 'INCREMENT' },
    { type: 'INCREMENT' },
])

const stateObserver: Observable< number> 
    = actionsObserver.scan(counterReducer, 0);

stateObserver.subscribe(counter => console.log(counter))
;
</code></pre>
<div class="fragment current-only" data-code-focus="1-7"></div>
<div class="fragment current-only" data-code-focus="9-12"></div>
<div class="fragment current-only" data-code-focus="14-15"></div>
<div class="fragment current-only" data-code-focus="17"></div>
    <aside class="notes">
        <ul>
            <li>As you can see reducers are the same as with Redux. Pure functions that return a new state from an action an a state.</li>
            <li>The actionsObserver is a stream of actions</li>
            <li>To produce the stateObserver we are going to scan on the actionsObserver. The scan operator is similar to the reduce operator.</li>
            <li>To finish we can subscribe to the stateObserver to get notified of every state changes.</li>
        </ul>
        <b>You guys might wonder why we use the scan operator here instead of the reduce operator.</b>
    </aside>
</section>

<section>
    <h3>RxJS reduce operator</h3>
    <h4>With a sum function</h4>
    <img src="./img/rx_reduce.png" class="img-plain"/>
    <aside class="notes">
        <b>If we use the reduce operator and a sum function on a stream of numbers we will get the result only when the observable is completed.</b>
        <b>We completely miss the intermediate states</b>
        <b>That is NOT what we want, we want to get notified when the state changes in order to update the UI for instance.</b>
    </aside>
</section>

<section>
    <h3>RxJS scan operator</h3>
    <h4>With a sum function</h4>
    <img src="./img/rx_scan.png" class="img-plain"/>
    <aside class="notes">
        <b>Now with the scan operator, we can see that we receive all intermediate states.</b>
        <b>This is why ngrx/store uses the scan operator internally</b>
        <b>Now that we have a global understanding of what is ngrx/store, what it does let see how to use it in a real Angular Application</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: Installation</h3>

<pre style="font-size: 90%"><code class="js" data-trim>
npm install @ngrx/core @ngrx/store --save
</code></pre>
OR
<pre style="font-size: 90%"><code class="js" data-trim>
yarn add @ngrx/core @ngrx/store
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: Create store</h3>
<pre style="font-size: 65%" class="stretch"><code class="js" data-trim>
import { StoreModule, combineReducers } from '@ngrx/store';
import { usersReducer } from './reducers/users';
import { languageReducer } from './reducers/language';
 
export function reducer(state: any, action: any) {
  return combineReducers({
    users: usersReducer,
    language: languageReducer,
  })(state, action);
}
 
@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
  ]
})
export class AppModule {}
</code></pre>
<div class="fragment current-only" data-code-focus="1"></div>
<div class="fragment current-only" data-code-focus="2-3"></div>
<div class="fragment current-only" data-code-focus="5-10"></div>
<div class="fragment current-only" data-code-focus="14"></div>
    <aside class="notes">
        <b>The first thing to do after the installation is to create our store and import it into our ngModule.</b>
        <ul>
            <li>We import StoreModule and the combineReducers method</li>
            <li>We import our reducers</li>
            <li>In order to have AOT working we need to export a function that will return our store, which is a combination of several reducers.</li>
            <li>To finish we can import this store into our app in order to get consume from any component or provider</li>
        </ul>
        <b>Then how do we consume this store?</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: import the store</h3>
<pre style="font-size: 95%"><code class="js" data-trim>
export interface AppState {
    users: User[]; // [{ id: 1, ..}, ..]
    language: string, // fr, en, es etc.
}
</code></pre>
<pre style="font-size: 95%" class="fragment"><code class="typescript" data-trim>
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
 
@Component({ ... })
export class SomeComponent {
  constructor(
      store: Store< AppState>
  ) { }
}
</code></pre>
    <aside class="notes">
        <b>Before we can use the store we must create its definition. To do this we need to use an interface. Here users are an array of User and language is a string.</b>
        <b>To use the store as easy as using Angular's dependency injection.</b>
        <b>The Store provider must be typed, that's why here we import AppState which is an interface that </b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: GetState</h3>
<pre style="font-size: 65%"><code class="js" data-trim>
store.select(state => state)
</code></pre>
<pre style="font-size: 65%"><code class="js" data-trim>
store.select(state => state.users)
</code></pre>
<pre style="font-size: 65%"><code class="js" data-trim>
store.select('users')
</code></pre>
<pre style="font-size: 65%"><code class="js" data-trim>
let usersList = {};
store
  .select('users')
  .first() 
  .subscribe(users => usersList = users)

console.log(usersList) // users list
</code></pre>
    <aside class="notes">
        <b>To get the state in Redux we have the getState method that return the entire state. It is pretty easy but with ngrx/store we do not have such a method. We once again must use Observables</b>
    </aside>
</section>