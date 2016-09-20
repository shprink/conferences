<section>
    <img src="../../img/angular-logo.png" width="30%" class="img-plain"/>
    <h1>Redux + Angular2 = ng2-redux</h1>
</section>

<section>
    <h1>ng2-redux</h1>
    <small>https://github.com/angular-redux/ng2-redux</small>
    <ul>
        <li>Can access the store as Observables</li>
        <li>Compatible with existing Redux middlewares</li>
        <li>Compatible with the existing Redux devtools</li>
    </ul>
</section>

<section>
    <h1>Case study: basic counter app</h1>
<pre><code class="json" data-trim>
{
  "isMenuOpened": false,
  "user" : {
    "firstname": "Julien",
    "sexe": "male",
    "age": 29
  },
  "counter" 0
}
</code></pre>
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
</section>

<section>
    <h5>Basic counter app: Create the root Reducer</h5>
<pre><code class="js" data-trim>
import {
  combineReducers
} from 'redux';
 
import CounterReducer from './counter';
import { UserReducer, IUser } from './user';
import isMenuOpenedReducer from './isMenuOpened';
 
export interface IAppState {
  isMenuOpened: boolean;
  user: IUser;
  counter: number;
}
 
export const rootReducer = combineReducers({
  isMenuOpened: isMenuOpenedReducer,
  user: UserReducer,
  counter: CounterReducer
});
</code></pre>
</section>

<section>
    <h5>Basic counter app: Bootstrap the store</h5>
<pre><code class="js" data-trim>
import { Store, createStore } from 'redux';
import { rootReducer, IAppState } from './reducers';
import { NgRedux } from 'ng2-redux';
 
const store = createStore(rootReducer) as Store< IAppState >;
 
@Component({})
class App {
  constructor(private ngRedux: NgRedux< IAppState >) {
    this.ngRedux.provideStore(store);
  }
}
</code></pre>
</section>

<section>
    <h5>Basic counter app: Interacting with the store</h5>
<pre><code class="js" data-trim >
import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { incrementCounter } = require('../actions');
 
@Component({
  template: \`
    <div>
        <p>{counter$ | async}</p>
        <button (click)="incrementCounter">+1</button>
        <button (click)="decrementCounter">-1</button>
    </div>
  \`
})
export class Counter {
  @select() counter$;
 
  constructor(private ngRedux: NgRedux< IAppState >) {}
 
  incrementCounter = () => this.ngRedux.dispatch(incrementCounter())
  decrementCounter = () => this.ngRedux.dispatch(decrementCounter())
}
</code></pre>
</section>

