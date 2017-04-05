<section>
    <img src="../../img/ngrx-store-logo.png" width="25%" class="img-plain"/>
    <h1>ngrx/store</h1>
    <h2>Reactive Redux for Angular</h2>
    
    <aside class="notes">
        <b>ngrx/store is a RxJS powered, state management for Angular applications</b><br/>
    </aside>
</section>

<section>
    <h3>ngrx/store</h3>
    <ul>
        <li>Open Source library inspired by Redux</li>
        <li class="fragment">Predictable state management</li>
        <li class="fragment">RxJS powered</li>
        <li class="fragment">Unidirectional data flow (top to bottom)</li>
        <li class="fragment">Only for Angular applications</li>
        <li class="fragment">Created by Rob Wormald</li>
        <li class="fragment">
            2.5k <i class="fa fa-star"></i> on Github
        </li>
    </ul>
    <aside class="notes">
        <b>ngrx/store is an Open Source library inspired by Redux</b>
        <ul>
            <li>Same purpose as Redux, it is a Predictable state management library</li>
            <li>It is powered by RxJS, everything is an Observable</li>
            <li>also has a Unidirectional data flow</li>
            <li>This time it is not framework agnostic but only for Angular applications</li>
            <li>Created by Rob Wormald, who works at google in Angular core team</li>
            <li>has two point five thousand stars on Github</li>
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
            <li>We keep all the Redux ideas: Actions, Reducers, Store</li>
        </ul><br/>
        <b>Now let's see how to install it</b>
        <!--<b>Now let's see a basic implementation</b>-->
    </aside>
</section>

<!--
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
        <b>Here is a basic implementation of ngrx/store</b>
        <ol>
            <li>As you can see reducers are the same as with Redux. They are still pure functions that return a new state from an action an a state.</li>
            <li>The actionsObserver is a stream of our actions</li>
            <li>To produce the stateObserver we are going to scan on the actionsObserver. The scan operator is similar to the reduce operator.</li>
            <li>To finish we can subscribe to the stateObserver to get notified of every state changes.</li>
        </ol>
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
        <b>That is NOT what we want, we want to get notified everytime that the state changes.</b>
    </aside>
</section>

<section>
    <h3>RxJS scan operator</h3>
    <h4>With a sum function</h4>
    <img src="./img/rx_scan.png" class="img-plain"/>
    <aside class="notes">
        <b>Now with the scan operator, we can see that we receive all intermediate states.</b>
        <b>After applying the scan operator to 1,2,3,4,5 stream, we get a stream of 1,3,6,10 and 15</b>
        <b>This is why ngrx/store uses the scan operator internally</b>
        <b>Now that we have a global understanding of what ngrx/store is, what it does let see how to use it in a real Angular Application</b>
    </aside>
</section>
-->
<section>
    <h3>Installation</h3>

<pre style="font-size: 90%"><code class="js" data-trim>
npm install @ngrx/core @ngrx/store --save
</code></pre>
OR
<pre style="font-size: 90%"><code class="js" data-trim>
yarn add @ngrx/core @ngrx/store
</code></pre>
    <aside class="notes">
        <b>This is how we install the ngrx/store packages with npm or yarn. There are two packages, Core and Store</b>
    </aside>
</section>

<section>
    <h3>Store: creation</h3>
<pre style="font-size: 60%" class="stretch"><code class="js" data-trim>
import { StoreModule, combineReducers } from '@ngrx/store';
import { 
    userReducer, usersReducer, languageReducer
} from './reducers';

const rootReducer = combineReducers({
    currentUser: userReducer,
    users: usersReducer,
    language: languageReducer,
})

export function reducer(state: any, action: any) { // AOT
  return rootReducer(state, action);
}
 
@NgModule({
  imports: [ StoreModule.provideStore(reducer) ]
})
export class AppModule {}
</code></pre>
<div class="fragment current-only" data-code-focus="1"></div>
<div class="fragment current-only" data-code-focus="2-10"></div>
<div class="fragment current-only" data-code-focus="12-14"></div>
<div class="fragment current-only" data-code-focus="17"></div>
    <aside class="notes">
        <b>The first thing to do after the installation is to create our store and import it into our ngModule.</b>
        <ol>
            <li>First We import StoreModule and the combineReducers method</li>
            <li>We then import our reducers and use the combineReducers method to group them together. This step is important because it defines the shape of your state object.</li>
            <li>For AOT compilation to work we need an extra step, we export a function that returns the result of the rootReducer call. This function is called at every new action triggered</li>
            <li>To finish we can import this store into our app using StoreModule.provideStore</li>
        </ol>
        <b>Now that our store is ready the Next question is: How do we use it in our components or services?</b>
    </aside>
</section>

<section>
    <h3>Store: injection</h3>
<pre style="font-size: 85%"><code class="js" data-trim>
export interface IAppState {
    currentUser: User; // { id: 1, ..}
    users: User[]; // [{ id: 2, ..}, ..]
    language: string, // fr, en, es etc.
}
</code></pre>
<pre style="font-size: 95%" class="fragment"><code class="typescript" data-trim>
import { Store } from '@ngrx/store';
 
@Component({ ... })
export class SomeComponent {
  constructor(store: Store< IAppState >) {
      // We can use the store
      this.store...
   }
}
</code></pre>
    <aside class="notes">
        <b>Before we can use the store we must create its definition. To do this we need to use a TypeScript interface.</b>
        <ol>
            <li>The currentUser has a User type</li>
            <li>Users are an array of User</li>
            <li>And language is a string</li>
        </ol>
        <b>Once we have the appState interface, we can inject the Store provider in our services or components using Angular's dependency injection.</b><br/>
        <b>Now that we have access to the store, let's focus on its API</b>
    </aside>
</section>

<section>
    <h3>Store: API</h3>
<div >
<h4>select the Entire state</h4>
<pre style="font-size: 95%"><code class="js" data-trim>
this.store.select(state => state)
</code></pre>
</div>

<div class="fragment">
<h4>select a Slice of the state</h4>
<pre style="font-size: 95%" ><code class="js" data-trim>
this.store.select(state => state.users)
this.store.select('users')
</code></pre>
</div>
<div class="fragment">
<h4>Dispatch actions</h4>
<pre style="font-size: 85%"><code class="js" data-trim>
this.store.dispatch({
    type: 'ACTION_TYPE',
    payload: {...}
})
</code></pre>
</div>
    <aside class="notes">
        <ol>
            <li>to retreive data from the store we use the `select` method. The `Select` method returns an Observable that we can subscribe to.</li>
            <li>or you can get a slice of the state tree</li>
            <li>To modify the state we can use the `dispatch` method with an action as the argument</li>
        </ol>
        <b>Now we know how to manipulate the state of the app, but we do not know how the UI reacts to the changes?</b>
    </aside>
</section>
<!--
<section>
    <h3>Store: Dispatch</h3>
<pre style="font-size: 65%"><code class="js" data-trim>
this.store.dispatch({
    type: 'ACTION_TYPE',
    payload: {...}
})
</code></pre>
    <aside class="notes">
        <b>Well it is pretty straight forward, we use the `dispatch` method with an action as argument</b><br/>
        <b>Now we know how to modify the store through actions, how does the UI react to changes?</b>
    </aside>
</section>
-->
<section>
    <h4>UI Change detection</h4>
<pre style="font-size: 65%" class="stretch"><code class="js" data-trim>
@Component({
  template: \`
    <div>Counter: {{ counter }}</div>
  \`
})
export class CounterComponent {
  counter: number;
  counterSub: Subscription;

  ngOnInit() {
      this.counterSub = Observable.interval(1000).startWith(0)
        .subscribe(counter => this.counter = counter)
  }
  ngOnDestroy() {
      this.counterSub.unsubscribe()
  }
}
</code></pre>
<div class="fragment current-only" data-code-focus="3,7"></div>
<div class="fragment current-only" data-code-focus="11"></div>
<div class="fragment current-only" data-code-focus="12"></div>
<div class="fragment current-only" data-code-focus="14-16"></div>
    <h4 class="fragment red">a bit tidious</h4>
    <aside class="notes">
        <b>The change detection happens everytime a Component Class property changes.</b>
        <ol>
            <li>We want the class property updated in the template everytime it changes in the Class.</li>
            <li>To do this we are going to create an Observable that increments a counter by 1 every 1 second.</li>
            <li>We then subscribe to it and bind the counter result to our Class property. The counter will increase on the screen</li>
            <li>One important thing to notice is that we need to unsubscribe once the component is destroy, otherwise the Observable will continue pushing new values</li>
        </ol>
        <b>As you can see this is a bit tidious?. We need to subscribe, we need to keep a reference to the subscription and then unsubscribe... Is there a better way?</b>
    </aside>
</section>

<section>
    <h4>UI Change detection with Async pipe</h4>
<pre style="font-size: 65%"><code class="js" data-trim>
@Component({
  template: \`Counter: {{ counter$ | async }}\`
})
export class AsyncCounterComponent {
  counter$: Observable< number >;

  ngOnInit() {
      this.counter$ = Observable.interval(1000).startWith(0);
  }
}
</code></pre>
    <div class="fragment current-only" data-code-focus="2"></div>
    <h4 class="fragment green">Less code = Less bugs</h4>
<!--<img src="./img/ngrx_async.png" width="80%" class="img-plain"/>-->
    <aside class="notes">
        <b>Yes there is a better way. It is the async pipe. This example is exactly the same as the previous example but we with less code</b><br/>
        <ol>
            <li>The async pipe subscribes AND unscubscribes automatically to Observables, letting you focus on what's really important to you: the Data to display. Angular does the rest.</li>
            <li>Less code = less bugs. In the previous example if you forgot to unsubscribe for instance you would have memory leaks</li>
        </ol>
        <b></b>
    </aside>
</section>

<section>
    <h3>all together</h3>
<pre style="font-size: 55%" class="stretch"><code class="typescript" data-trim> 
@Component({
  template: \`
      <div *ngFor="let user of (usersStream$ | async)">
        {{user.username}}
        <button (click)="removeUser(user)">X</button>
      </div>
    \`
})
export class UsersComponent {
  usersStream$: Observable< User[] >;

  constructor(
    private store: Store< IAppState >,
  ) {
      this.usersStream$ = this.store.select('users');
  }
 
  removeUser(user: User) {
    this.store.dispatch({ type: 'REMOVE_USER', payload: user })
  }
}
</code></pre>
<div class="fragment current-only" data-code-focus="3-6"></div>
<div class="fragment current-only" data-code-focus="3,10,15"></div>
<div class="fragment current-only" data-code-focus="5,18-20"></div>
    <aside class="notes">
        <b>Now all together. With this example I want to show you how easy the code can be when using ngrx/store</b>
        <ol>
            <li>We have a template that display a list of users with a remove button</li>
            <li>The usersStream$ is an Observable that we get from the store and subscribe to it using the async pipe</li>
            <li>To finish we have the removeUser method that is called when the user clicks on the button and which dispaches the REMOVE_USER action.</li>
        </ol>
        <b>Now let's learn about the state best practices</b>
    </aside>
</section>

<section>
    <h3>State best practices</h3>
<pre style="font-size: 75%"><code class="typescript" data-trim> 
"users": [
    { id: 293580923, "username": "shprink", ...},
    { id: 423948745, "username": "byjc", ...},
    { id: 435435799, "username": "myagoo", ...},
    { id: 027859645, "username": "whoknows", ...}
]
</code></pre>
    <h4 class="fragment red">Avoid arrays!</h4>
    <div  class="fragment">
<pre style="font-size: 68%"><code class="typescript" data-trim> 
"users": {
    293580923: { id: 293580923, "username": "shprink", ...},
    423948745: { id: 423948745, "username": "byjc", ...},
    435435799: { id: 435435799, "username": "myagoo", ...},
    027859645: { id: 027859645, "username": "whoknows", ...}
}
</code></pre>
        <h4 class="green">Prefer Object literals!</h4>
    </div>
    <aside class="notes">
        <b>The state of your app should be easy to understand but most of all to easy use.</b>
        <ol>
            <li>Is anyone able to tell be what's wrong with this state?</li>
            <li>You should avoid arrays and prefer object literals</li>
            <li>Why? Because with an array we need to go through the entire list if we want to get a specific User.</li>
            <li>With Object literals, we simply get the right key.</li>
        </ol>
        <b>Object literals have better performance</b>
    </aside>
</section>

<section>
    <h3>State best practices</h3>
<pre style="font-size: 65%"><code class="typescript" data-trim> 
"users": {
    293580923: { id: 293580923, "username": "shprink", ...},
    423948745: { id: 423948745, "username": "byjc", ...},
},
"trendingUsers": [
    { id: 293580923, "username": "shprink", ...},
    { id: 423948745, "username": "byjc", ...},
    ...
],
</code></pre>
    <h4 class="fragment red">Avoid duplication!</h4>
    <div  class="fragment">
<pre style="font-size: 65%"><code class="typescript" data-trim> 
"users": {
    293580923: { id: 293580923, "username": "shprink", ...},
    423948745: { id: 423948745, "username": "byjc", ...},
},
"trendingUsers": [293580923, 423948745 ...],
</code></pre>
        <h4 class="green">Prefer a Single Source of Truth!</h4>
    </div>
    <aside class="notes">
        <b></b>
        <ol>
            <li>What's wrong now? => We have two references of the same user objects.</li>
            <li>Why is this wrong? the references can be out of sync. For instance the same user can have a profile picture on a page and another on another page depending on when you got the data.</li>
            <li>It is really important to keep a single source of truth! And it is easily doable using an array of ids in this case</li>
        </ol>
        <b>This leads us to conclude this talk on derived data</b><br/>
    </aside>
</section>


<section>
    <h3>Derived data</h3>
<pre style="font-size: 65%"><code class="typescript" data-trim> 
{
  "users": {
    293580923: { id: 293580923, "username": "shprink", ...},
    423948745: { id: 423948745, "username": "byjc", ...},
    435435799: { id: 435435799, "username": "myagoo", ...},
    027859645: { id: 027859645, "username": "whoknows", ...},
    ...
  },
  "trendingUsers": [293580923, 435435799, ...]
}
</code></pre>
<div class="fragment">
<h4 >trending Users list:</h4>
<pre style="font-size: 65%"><code class="typescript" data-trim> 
[
    { id: 293580923, "username": "shprink", ...},
    { id: 423948745, "username": "byjc", ...},
]
</code></pre>
</div>
    <aside class="notes">
        <b>Derived data is a data that is created from different sources of data.</b>
        <ol>
            <li>For instance here with this state we want our UI to display a list of trending users.</li>
            <li>To do this we need to merge the users objects and the trending users ids</li>
        </ol>
        <b>How do we do this? Anyone?</b>
        <b>A little hint: we need to use a special rxjs operator</b>
    </aside>
</section>

<section>
    <h3>RxJS combineLatest operator</h3>
    <img src="./img/rx_combinelatest_operator.png" class="img-plain"/>
<pre style="font-size: 65%" class="fragment"><code class="typescript" data-trim> 
this.stream$ = Observable.combineLatest(
      store.select(state => state.users),
      store.select(state => state.trendingUsers),
      (users, trendingUsers)
        => trendingUsers.map(id => users[id]))
</code></pre>
    <aside class="notes">
        <b>We need to use the combineLatest operator.</b><br/>
        <ul>
            <li>We get notified everytime one of the source Observable emits a new item (arrows on top)</li>
            <li>Two observables are merge into one, the result is a combination of both values</li>
            <li>[EXPLAIN IMAGE]</li>
            <li>If we translate this into code we have the following</li>
            <li>The first two arguments are our state Observables, then the last argument is a function that receives the state values and returns whatever you want but in this case the list of trending user objects!</li>
        </ul>
        <b>let's conclude this talk</b>
    </aside>
</section>

<section>
    <h3>Conclusion</h3>
    <h4>With ngrx/store you get:</h4>
    <ul>
        <li>A reactive app</li>
        <li class="fragment">A predictable state</li>
        <li class="fragment">A normalized state structure</li>
        <li class="fragment">A unidirectional data flow</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>With ngrx/strore You app becomes fully reactive, it will only rerender part of UI when necessary</li>
            <li>Your state is always predictable: From a list of actions you can retreive the final state easily. Which make it perfect for unit testing</li>
            <li>If you follow the state best practices I shared with you (and there are more), you endup having a state understandable by everyone.</li>
            <li>And with the unidirectional data flow (Top to bottom), it makes your app easier to reason about</li>
        </ul>
        <b>Now you guys know EVERYTHING there is to know about ngrx/store, I hope you guys will use it in your next project, and that's all for me thank you!</b>
    </aside>
</section>