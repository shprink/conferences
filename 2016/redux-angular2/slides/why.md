<section>
    <img src="./img/logo_redux.png" width="25%" class="img-plain"/>
    <h1>Why Redux?</h1>
</section>

<section data="http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux">
    <h1>Why Redux?</h1>
    <ul>
        <li class="fragment">Strict unidirectional data flow.</li>
        <li class="fragment">Only one store</li>
        <li class="fragment">Simple store API: 3 methods (subscribe, dispatch and getState)</li>
        <li class="fragment">A lot of middlewares available</li>
        <li class="fragment">Great dev tools (State visualizer, time machine etc.)</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>all data in an application follows the same lifecycle pattern</li>
            <li>functional composition where Flux uses callback registration</li>
        </ul>
    </aside>
</section>

<section>
    <h2>Dev tools: State visualizer</h2>
    <img src="./img/redux_state_vizualizer.gif" width="80%" class="img-plain"/>
</section>

<section>
    <h2>Dev tools: State map</h2>
    <img src="./img/redux_state_map.gif" width="100%" class="img-plain"/>
</section>

<section>
    <h2>Dev tools: Time machine</h2>
    <img src="./img/redux_time_machine.gif" width="100%" class="img-plain"/>
</section>
