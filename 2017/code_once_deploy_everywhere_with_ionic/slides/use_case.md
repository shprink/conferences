<section>
    <h2><span style="color: #5c8dfc">Ionic Twitter</span> PWA an <span style="color: #5c8dfc">Open Source</span> version of <span style="color: #5c8dfc">m.twitter.com</span> PWA</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section class="stretch">
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" h100 w100 style="">
                <div flex layout-align="center stretch">
                 <img style="position: absolute; top: 25%; left: 0" class="fragment current-visible img-plain" data-fragment-index="1" src="./img/use_case/ionic_app_qr.jpg" width="30%"/>
                 <img style="position: absolute; top: 0; left: 0" class="fragment current-visible img-plain" data-fragment-index="2" src="./img/use_case/tweet.gif"/>
                 <img style="position: absolute; top: 0; left: 0" class="fragment current-visible img-plain" data-fragment-index="3" src="./img/use_case/like_retweet_reply.gif"/>
                 <img style="position: absolute; top: 0; left: 0"class="fragment current-visible img-plain" data-fragment-index="4" src="./img/use_case/open_tweet.gif"/>
                 <img style="position: absolute; top: 0; left: 0"class="fragment current-visible img-plain" data-fragment-index="5" src="./img/use_case/profile_sticky_segment.gif"/>
                 <img style="position: absolute; top: 0; left: 0"class="fragment current-visible img-plain" data-fragment-index="6" src="./img/use_case/search.gif"/>
                 </div>
            </div>
            <div layout="column" flex layout-align="center start" style="margin-left: 30px">
                <h3>Ionic Twitter PWA</h3>
                <a target="_blank" class="fragment" data-fragment-index="1" href="https://twitter-pwa.julienrenaux.fr/"><i class="fa fa-link" style="color: white"></i> twitter-pwa.julienrenaux.fr</a>
                <a target="_blank" class="fragment" data-fragment-index="1" href="https://github.com/shprink/ionic-angular-twitter-pwa"><i class="fa fa-github" style="color: white"></i> shprink/ionic-angular-twitter-pwa</a>
                <ul>
                    <li class="fragment" data-fragment-index="2">Create tweets</li>
                    <li class="fragment" data-fragment-index="3">Like, Retweet and Reply</li>
                    <li class="fragment" data-fragment-index="4">Open Tweets</li>
                    <li class="fragment" data-fragment-index="5">Profile page</li>
                    <li class="fragment" data-fragment-index="6">Search</li>
                </ul>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section >
    <h4 style="margin-bottom: 10px;">m.twitter.com <span style="color: #5c8dfc">performance</span></h4>
    <img class="img-plain" style="margin:0" width="60%" src="./img/use_case/twitter-lighthouse.png"/>
    <img class="img-plain" style="margin:0" width="60%" src="./img/use_case/twitter-time.png"/>
    <p style="margin:0">lighthouse & testmysite.withgoogle.com</p>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section >
    <h4 style="margin-bottom: 10px;">twitter-pwa.julienrenaux.fr <span style="color: #5c8dfc">performance</span></h4>
    <img class="img-plain" style="margin:0" width="60%" src="./img/use_case/ionic-lighthouse.png"/>
    <img class="img-plain" style="margin:0" width="60%" src="./img/use_case/ionic-time.png"/>
    <p style="margin:0">lighthouse & testmysite.withgoogle.com</p>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Creating a new <span style="color: #5c8dfc">app</span></h3>
<pre style="font-size: 130%"><code class="shell" data-trim>
$ ionic start myNewApp tabs
</code></pre>

<p class="fragment">Possible templates: blank | <span style="color: #5c8dfc">tabs</span> | sidemenu | conference...

<pre style="font-size: 130%" class="fragment"><code class="shell" data-trim>
$ cd myNewApp
</code></pre>

<pre style="font-size: 130%;" class="fragment"><code class="shell" data-trim>
$ ionic serve
</code></pre>

    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Building for the <span style="color: #5c8dfc">Web</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/chrome-logo-white.png" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center start">
<pre class="fragment" style="font-size: 130%"><code class="shell" data-trim>
$ ionic build --prod
</code></pre>
    <img class="fragment img-plain" style="margin-top:0" width="42%" src="./img/use_case/ionic_www.png"/>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Building for the <span style="color: #5c8dfc">Android</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/android-logo.png" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center center">
<pre style="font-size: 130%"><code class="shell" data-trim>
$ npm install -g ionic
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>


<section>
    <h3 style="margin-bottom: 10px;">Component semantic</h3>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center" style="position: relative">
            <div class="fragment current-only hi" data-code-focus="1-5">
                <div style="background-color:red; opacity: 0.5; width: 282px; height: 38px; position: absolute; left: 19px; top: 17px;"></div>
            </div>
            <div class="fragment current-only" data-code-focus="7-24">
                <div style="background-color:red; opacity: 0.5; width: 282px; height: 444px; position: absolute; left: 19px; top: 56px;"></div>
            </div>
            <div class="fragment current-only" data-code-focus="8-22">
                <div style="background-color:red; opacity: 0.5; width: 268px; height: 291px; position: absolute; left: 26px; top: 63px;"></div>
            </div>
            <div class="fragment current-only" data-code-focus="9-11">
                <div style="background-color:red; opacity: 0.5; width: 268px; height: 51px; position: absolute; left: 26px; top: 63px;"></div>
            </div>
            <div class="fragment current-only" data-code-focus="12-21">
                <div style="background-color:red; opacity: 0.5; width: 268px; height: 246px; position: absolute; left: 26px; top: 109px;"></div>
            </div>
            <img src="./img/screenshots/semantic-ios.png" style="margin:0" height="500" class="img-plain"/>
        </div>
        <div layout="column" flex layout-align="center center" style="margin-left: 10px">
<pre style="font-size: 45%; box-shadow: none" class="stretch" ><code class="html" style="background-color: #082349" data-trim>
<ion-header>
  <ion-toolbar>
    <ion-title>Card Lists</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
    <ion-card>
        <ion-card-header>
            Explore Nearby
        </ion-card-header>
        <ion-list>
            <button ion-item>
                <ion-icon name="cart"></ion-icon>
                Shopping
            </button>
            <button ion-item>
                <ion-icon name="medical"></ion-icon>
                Hospital
            </button>
        </ion-list>
    </ion-card>
</ion-content>
 <!-- -->
</code></pre>
        </div>
    </div>
    <aside class="notes">
        <b>The Ionic component semantic helps developers when it comes to understand what they are dealing with. Let's see an example:</b>
        <ol>
            <li>First we have the header component. This component includes a toolbar that itself includes a title. The result is what you see on the left side. There is no surprise, Just by reading the code semantic, you can get an idea of what the result will be.</li>
            <li>The content is the rest of the page</li>
            <li>that contains a card</li>
            <li>which has a title</li>
            <li>and contains a list of buttons</li>
            <li>Ionic component semantic helps developers understand and build complexe UI easily</li>
        </ol>
        <b></b>
    </aside>
</section>