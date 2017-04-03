<section>
    <img src="../../img/ngrx-store-logo.png" width="25%" class="img-plain"/>
    <h1>ngrx/store</h1>
    <h2>Reactive Redux for Angular</h2>
    
    <aside class="notes">
        <b>ngrx/store is a RxJS powered, state management for Angular applications</b><br/>
        <b>It was created by Rob Wormald who is a core member of the Angular team.</b>
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
    <h3>Ngrx/store: Installation</h3>

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
    <h3>Ngrx/store: Create store</h3>
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

export function get(state: any, action: any) { // AOT
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
        <b>Now that our store is ready the Next question is: How do we ust it in our components?</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: use the store</h3>
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
  constructor(
      store: Store< IAppState >
  ) { }
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
        <b>Now how to retrieve data from the store?</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: Select</h3>
<div class="fragment">
<h4>Entire state</h4>
<pre style="font-size: 95%"><code class="js" data-trim>
store.select(state => state)
</code></pre>
</div>

<div class="fragment">
<h4>Slice of the state</h4>
<pre style="font-size: 95%" ><code class="js" data-trim>
store.select(state => state.users)
</code></pre>
</div>
    <aside class="notes">
        <b>We can use the store provider to retreive data from the store using the `select` method</b>
        <ol>
            <li>This is how you select the entire state tree. the `Select` method returns an Observable that we can subscribe to.</li>
            <li>or you can get a slice of the state tree</li>
        </ol>
        <b>Now we know how to get the state from the store, but how do we dispatch actions?</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: Dispatch Actions</h3>
<pre style="font-size: 65%"><code class="js" data-trim>
this.store.dispatch({ type: 'ACTION_TYPE' })
</code></pre>
    <aside class="notes">
        <b>Well it is pretty straight forward, we use the `dispatch` method with an action as argument</b><br/>
        <b>Now we know how to modify the store through actions, how does the UI react to changes?</b>
    </aside>
</section>

<section>
    <h4>Ngrx/store: Change detection</h4>
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
    <aside class="notes">
        <b>The change detection happens everytime a Component Class property changes.</b>
        <ol>
            <li>We want the class property updated in the template everytime it changes in the Class.</li>
            <li>To do this we are going to create an Observable that increments a counter by 1 every 1 second.</li>
            <li>We then subscribe to it and bind the counter result to our Class property</li>
            <li>On important thing to notice is that we need to unsubscribe to our Subscription, otherwise the Observable will continue pushing new values</li>
        </ol>
        <b>As you can see this is a bit tidious?. Here we need to subscribe, keep a reference to the subscription and then unsubscribe... Is there a better way?</b>
    </aside>
</section>

<section>
    <h4>Ngrx/store: Change detection with Async pipe</h4>
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
<!--<img src="./img/ngrx_async.png" width="80%" class="img-plain"/>-->
    <aside class="notes">
        <b>Yes there is a better way. It is the async pipe.</b><br/>
        <ol>
            <li>The async pipe subscribes AND unscubscribes automatically to Observables, letting you focus on what's really important to you: the Data to display. Angular does the rest.</li>
        </ol>
        <b>This example is exactly the same as the previous example but we with less code</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: all together</h3>
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
            <li>The usersStream$ is an Observable that we get from the store and subscribe to using the async pipe</li>
            <li>To finish we have the removeUser method that is called when the user clicks on the button and that dispaches the REMOVE_USER action.</li>
        </ol>
        <b>To resume, when we click on the remove button, the reducer will apply the modification, the usersStream will receive a new value and the UI will rerender the list</b><br/>
        <b>Now let's learn about the state best practices</b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: State best practices</h3>
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
        <b></b>
    </aside>
</section>

<section>
    <h3>Ngrx/store: State best practices</h3>
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
            <li>Why is this wrong? Well user objects that represent the same users can be out of sync. For instance the same user can have a profile picture on a page and another on another page depending on when you got the data.</li>
            <li>It is really important to keep a single source of truth! And it is easily doable using an array of ids in this case</li>
        </ol>
        <b>This leads us to conclude this talk on derived data</b><br/>
        <b>A little hint: we need to use a special rxjs operator</b>
    </aside>
</section>


<section>
    <h3>Ngrx/store: Derived data</h3>
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
            <li>We get notified everytime one of the source Observable emits a new item</li>
            <li>Two observables are merge into one, the result is a combination of both values</li>
            <li>If we translate this into code we have the following</li>
            <li>The first two arguments are our state Observables, then the last argument is a function that receives the state values and returns whatever you want but here the list of trending user objects!</li>
        </ul>
        <b>You guys now know EVERYTHING there is to know about ngrx/store, now have fun with it, thank you!</b>
    </aside>
</section>