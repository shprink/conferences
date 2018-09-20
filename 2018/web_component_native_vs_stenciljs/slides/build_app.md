<section>
    <h2>I want to build an app in 2018</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h2>Let's start by picking up a Framework</h2>
    <div style="margin: 0;">
        <img src="../../img/react-logo.png" height="200" class="img-plain no-margin"/>
        <img src="../../img/vue-logo.png" height="200" class="img-plain no-margin"/>
        <img src="../../img/angular-logo.png" height="200" class="img-plain no-margin"/>
    </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Now let's select how to write our style</h3>
    <ul>
        <li>CSS</li>
        <li>Sass</li>
        <li>Less</li>
        <li>Stylus</li>
        <li>CSS-IN-JS</li>
        <li>POST CSS</li>
        <li>NEXT CSS</li>
    </ul>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Now let's transpile our code</h3>
    <ul>
        <li>Webpack</li>
        <li>Parcel</li>
        <li>Rollup</li>
        <li>Bazel</li>
    </ul>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h2>Developping an app in JS in not easy anymore...</h2>
    <aside class="notes">
    </aside>
</section>

<section>
    <h2 style="text-shadow: 0px 0px 15px rgba(0, 0, 0, 1);">The industry is moving too fast...</h2>
    <img src="./img/fwk_too_fast.png" class="img-plain"/>
    <aside class="notes">
        <p><b>En plus de ca</b></p>
        <p>l'industrie evolue trop rapidement</p>
        <p><b>Les choix precedents sont obsolete tres rapidement</b></p>
    </aside>
</section>

<section>
    <h2>...Interoperability is not available out of the box...</h2>
    <div style="margin: 0;">
        <img src="../../img/react-logo.png" height="200" class="img-plain no-margin"/>
        <img src="../../img/vue-logo.png" height="200" class="img-plain no-margin"/>
        <img src="../../img/angular-logo.png" height="200" class="img-plain no-margin"/>
    </div>
    <aside class="notes">
    </aside>
</section>

<section class="stretch">
    <h3>...And we keep reinventing the wheel!</h3>
    <div style="height: 75%; position: relative; width: 100%; display: flex; justify-items: center; align-items: center; align-content: center; flex: 1;">
        <div class="fragment"></div>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(0.005turn) " src="./img/material/material-design-1.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(-0.005turn) " src="./img/material/material-design-2.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(0.008turn) " src="./img/material/material-design-3.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(-0.008turn) " src="./img/material/material-design-4.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(0.010turn) " src="./img/material/material-design-5.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(-0.010turn) " src="./img/material/material-design-6.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(0.015turn) " src="./img/material/material-design-7.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(-0.015turn)" src="./img/material/material-design-8.png" class="img-plain fragment zoom-in"/>
        <img data-autoslide="1000" style="position: absolute; transform: rotate(0.005turn)" src="./img/material/material-design-9.png" class="img-plain fragment zoom-in"/>
        <img style="position: absolute; transform: rotate(-0.005turn)" src="./img/material/material-design-10.png" class="img-plain fragment zoom-in"/>
        <!-- <img style="position: absolute; left: calc(50% - 250px);" src="./img/material/illuminati.png" class="img-plain fragment zoom-in"/> -->
    </div>
    <aside class="notes">
        <p><b>Tout ces projets sont des implementations des specs Material design pour plusieurs framework</b></p>
        <p>C'est clairement un perte de temps et de resource sachant que ca ne reste ques des ripples effects sur des boutons</p>
    </aside>
</section>

<section>
    <h2>All this complexity is coming to an end with <span style="color: var(--primary)">Web Components</span></h2>
    <aside class="notes">
        <p><b>Promesses de web components</b></p>
        <ul>
            <li>Deleguer au navigateur le plus possible au lieu de nos frameworks favoris</li>
            <li>Mutualiser les resources</li>
            <li>Capitaliser sur des elements web vraiment commun sur le long terme</li>
        </ul>
    </aside>
</section>

<section>
<h2>Size matters (Gzipped)</h2>
<pre style="font-size: 25px; color: white;">
angular  ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 59kb
stencil  ▉▉▉▉▉▋ 11kb
native   ▉▎ 2.5kb
</pre>
    <ul>
        <li class="fragment">Native is 23 times smaller than Angular</li>
        <li class="fragment">Stencil is 5 times smaller than Angular</li>
    </ul>
    <aside class="notes">
        <p><b>Pour finir de vous convaincre</b></p>
        <p>apres l'aspect plus philosophique penchant nous sur l'aspect benchmark, l'aspect</p>
    </aside>
</section>

<section>
<h2>Time matters (FMP 3G 📱 in ms)</h2>
<pre style="font-size: 21px; color: white;">
Angular              ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 3000
Stencil              ▉▉▉▉▉▉▉▉▉▉▊ 1070
Native               ▉▉▉▉▉▉▉▉▉▉▎ 1030
Stencil Pre Rendered ▉▉▉▉▉▉▉▉▉▊ 980
</pre>
    <ul>
        <li class="fragment">Native & Stencil 3 times faster than Angular</li>
    </ul>
    <aside class="notes">
        <p>FMP: First meaningful paint</p>
        <p>Maintenant que vous etes bien chaud, que vous comprenez l'interet des web components sur le papier, voyons voir les details.</p>
    </aside>
</section>


