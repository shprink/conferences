<section >
    <img src="../../img/meme/live-demo.jpg" style="margin:0" width="85%" class="img-plain"/>
    <aside class="notes">
        <b>It is time for a quick live demo! I will show you the commands to build for several platforms in no time</b>
    </aside>
</section>

<!-- <section>
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
</section> -->

<section>
    <h3>Creating a new <span style="color: #5c8dfc">app</span></h3>
<pre style="font-size: 120%"><code class="shell" data-trim>
$ ionic start myNewApp conference
</code></pre>

<p class="fragment">Possible templates: blank | tabs | sidemenu | <span style="color: #5c8dfc">conference</span>...

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
    <!-- <img class="fragment img-plain" style="margin-top:0" width="42%" src="./img/use_case/ionic_www.png"/> -->
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Building for <span style="color: #5c8dfc">iOS</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/ios-logo.png" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center start">
<p>Required: OSX, Xcode</p>
<pre style="font-size: 80%"><code class="shell" data-trim>
$ ionic cordova platform add ios@latest
</code></pre>
<pre style="font-size: 50%; margin-top:  -2.5%" class="fragment"><code class="shell" data-trim>
Installing "cordova-plugin-device" for ios
Installing "cordova-plugin-splashscreen" for ios
Installing "cordova-plugin-statusbar" for ios
Installing "cordova-plugin-whitelist" for ios
Installing "ionic-plugin-keyboard" for ios
</code></pre>
<pre style="font-size: 80%" class="fragment"><code class="shell" data-trim>
$ ionic cordova run ios
</code></pre>
<pre style="font-size: 80%" class="fragment"><code class="shell" data-trim>
$ ionic cordova build ios --prod
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Building for <span style="color: #5c8dfc">Android</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/android-logo.png" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center start">
<p>Required: Android SDK, Gradle, Ant, Java JDK</p>
<pre style="font-size: 80%" class="fragment"><code class="shell" data-trim>
$ ionic cordova platform add android@latest
</code></pre>
<pre style="font-size: 50%; margin-top:  -2.5%" class="fragment"><code class="shell" data-trim>
Installing "cordova-plugin-device" for android
Installing "cordova-plugin-splashscreen" for android
Installing "cordova-plugin-statusbar" for android
Installing "cordova-plugin-whitelist" for android
Installing "ionic-plugin-keyboard" for android
</code></pre>
<pre style="font-size: 80%" class="fragment"><code class="shell" data-trim>
$ ionic cordova run android
</code></pre>
<pre style="font-size: 80%" class="fragment"><code class="shell" data-trim>
$ ionic cordova build android --prod
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<!-- <section>
    <h3>Building for <span style="color: #5c8dfc">Desktop</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/electron-logo.svg" width="55%" class="img-plain"/>
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
</section> -->

<!-- <section>
    <h2><span style="color: #5c8dfc">Ionic Twitter</span> PWA an <span style="color: #5c8dfc">Open Source</span> version of <span style="color: #5c8dfc">m.twitter.com</span> PWA</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section> -->

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