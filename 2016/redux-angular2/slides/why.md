<section>
    <img src="./img/logo_redux.png" width="25%" class="img-plain"/>
    <h1>Why choose Redux?</h1>
</section>

<section data="http://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux">
    <h1>Why choose Redux?</h1>
    <ul>
        <li class="fragment">Simplified development</li>
        <li class="fragment">Only one store (avoids complexe dependencies)</li>
        <li class="fragment">Easy to scale (add reducers)</li>
        <li class="fragment">Simple store API: 3 methods (subscribe, dispatch and getState)</li>
        <li class="fragment">A lot of middlewares and dev tools available</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>simplifie le developpement : Toutes les donnees de l'app suivent le meme pattern</li>
            <li>Un seul store: Evite l'injection de plusieurs stores</li>
            <li>facile a scaler: On rajoute juste des reducers</li>
            <li>Une api du store tres basique</li>
            <li>La communaute fournis beaucoup de middlewares et dev tools</li>
        </ul>
      <b>Et justement voyons quelques examples de devtools</b>
    </aside>
</section>

<section>
    <h2>Dev tools: State visualizer</h2>
    <iframe width="100%" style="background-color:white; height: 500px;" src="http://argelius.github.io/react-redux-timetravel/"></iframe>
    https://github.com/argelius/react-redux-timetravel
    <aside class="notes">
        <ul>
            <li>Projet d'un amis suedois au Japon</li>
            <li>Qui permet d'expliquer Redux de facon pedagogique</li>
            <li>Suivre action par action l'evolution du state de son app</li>
            <li>Par example on peut decouvrir l'etat initial de cet app</li>
        </ul>
    </aside>
</section>

<!--<section>
    <h2>Dev tools: State map</h2>
    <img src="./img/redux_state_map.gif" width="100%" class="img-plain"/>
    <aside class="notes">
        <ul>
            <li>Visualiser l'etat de l'app de facon graphique</li>
        </ul>
        <b>Et pour finir le time machine</b>
    </aside>
</section>-->

<section>
    <h2>Dev tools: Time machine</h2>
    <img src="./img/redux_time_machine.gif" width="100%" class="img-plain"/>
    <aside class="notes">
        <ul>
            <li>Permet de rejouer toutes les actions les unes apres les autres.</li>
            <li>Concretement ca peut avoir un interet par example dans la reproduction d'un bug utilisateur.</li>
            <li>On va pouvoir rejouer l'emsemble des actions et identifier l'origine du bug</li>
        </ul>
    </aside>
</section>
