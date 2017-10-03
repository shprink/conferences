<section>
    <h2>How do we <span style="color: #5c8dfc">start?</span></h2>
    <aside class="notes">
        <b>How to start using Ionic?</b>
    </aside>
</section>

<section>
    <h3><span style="color: #5c8dfc">Ionic CLI</span> is the entry point</h3>
<pre style="font-size: 130%"><code class="shell" data-trim>
$ npm install -g ionic
</code></pre>
    <ul>
         <li class="fragment"><span style="color: #5c8dfc">Creates</span> new Apps, Pages, Components, Services</li>
         <li class="fragment"><span style="color: #5c8dfc">Runs</span> a dev server, the emulator or on device</li>
         <li class="fragment"><span style="color: #5c8dfc">Builds</span> for every platform</li>
    </ul>
    <aside class="notes">
        <b>To install Ionic on your machine we first need to install the Ionic CLI. It can be installed globally with npm.</b>
         <ol>
            <li>...</li>
        </ol>
        <b>All you need is Ionic CLI</b>
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

<section >
    <h2>Create a new <span style="color: #5c8dfc">app</span></h2>
<pre style="font-size: 140%"><code class="shell" data-trim>
$ ionic start
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_start.mp4" data-background-color="#262528">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section >
    <h2>Run a <span style="color: #5c8dfc">Dev server</span></h2>
<pre style="font-size: 140%"><code class="shell" data-trim>
$ ionic serve
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_serve.mp4" data-background-color="#262528">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section >
    <h2>Advanced <span style="color: #5c8dfc">Dev server</span></h2>
<pre style="font-size: 140%"><code class="shell" data-trim>
$ ionic serve --lab
</code></pre>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_serve_lab.mp4" data-background-video-loop  data-background-color="#262528">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Build for the <span style="color: #5c8dfc">Web</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/chrome-logo-white.png" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center start">
<pre style="font-size: 130%"><code class="shell" data-trim>
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
    <h3>Build for <span style="color: #5c8dfc">iOS</span></h3>
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
$ ionic cordova build ios --prod
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_ios.mp4" data-background-video-loop  data-background-color="#262528">
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
<pre style="font-size: 80%" class=""><code class="shell" data-trim>
$ ionic cordova platform add android@latest
</code></pre>
<pre style="font-size: 50%; margin-top:  -2.5%" class=""><code class="shell" data-trim>
Installing "cordova-plugin-device" for android
Installing "cordova-plugin-splashscreen" for android
Installing "cordova-plugin-statusbar" for android
Installing "cordova-plugin-whitelist" for android
Installing "ionic-plugin-keyboard" for android
</code></pre>
<pre style="font-size: 80%" class=""><code class="shell" data-trim>
$ ionic cordova build android --prod
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_android.mp4" data-background-video-loop  data-background-color="#222222">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Build for <span style="color: #5c8dfc">Desktop</span></h3>
     <div layout="row" layout-align="center center" h100>
            <div flex="33" layout="column" layout-align="center center">
                <img src="../../img/electron-logo.svg" width="55%" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center center">
<pre style="font-size: 70%"><code class="shell" data-trim>
$ npm install electron --save-dev --save-exact
</code></pre>
<pre style="font-size: 70%; margin-top:  -1.5%"><code class="shell" data-trim>
$ ionic build --prod
</code></pre>
<div class="fragment">
    <div style="text-align: left; width: 100%;">Add index.js at the production app root</div>
<pre style="font-size: 50%"><code class="shell" data-trim>
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
    const win = new BrowserWindow({ width: 1000, height: 800 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
});
</code></pre>
</div>
<pre class="fragment" style="font-size: 90%; margin-top:  -1.5%"><code class="shell" data-trim>
$ ./node_modules/.bin/electron www/
</code></pre>
            </div>
        </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-video="./img/use_case/ionic_desktop.mp4" data-background-video-loop  data-background-color="#262528">
    <aside class="notes">
        <b></b>
    </aside>
</section>

<!-- CONCLUSION  -->

<section>
    <h3 style="color:#fff;">takeaways</h3>
    <h5 class="fragment">use <span style="color: #5c8dfc">the WEB capabilities</span> </h5>
    <h5 class="fragment">CREATE <span style="color: #5c8dfc">BEAUTIFUL UI </span>WITH <span style="color: #5c8dfc">IONIC</span></h5>
    <h5 class="fragment">BUILD <span style="color: #5c8dfc">FOR EVERY PLATFORM</span></h5>
    <h5 class="fragment">BE <span style="color: #5c8dfc">PRODUCTIVE</span></h5>
    <!-- <ul>
        <li class="fragment"><span style="color: #5c8dfc">Multi platform</span> is the <span style="color: #5c8dfc">new norm</span></li>
        <li class="fragment">The <span style="color: #5c8dfc">Web</span> now <span style="color: #5c8dfc">provides</span> the <span style="color: #5c8dfc">tools to create</span> almost <span style="color: #5c8dfc">anything</span></li>
        <li class="fragment"><span style="color: #5c8dfc">Ionic</span> provides <span style="color: #5c8dfc">Framework agnostic</span> components to be <span style="color: #5c8dfc">productive</span></li>
        <li class="fragment">Only <span style="color: #5c8dfc">one codebase</span> for all platforms</li>
    </ul> -->
    <aside class="notes">
        <b>We saw earlier that, nowadays, we have to go multi platform and to do so, the Web is the best platform. To code once and deploy everywhere using the Web, Ionic is clearly a good option.</b>
        <ol>
            <li>It is an exciting time to be a Web developer with what the web has to offer. with y</li>
            <li>Ionic provides great Web components to build your user interface, use them as much as you can</li>
            <li>multiplatform has become a new norm and that's a fact, do not fight it, just go multiplatform</li>
            <li>Ionic Apps are also Progressive Web Apps</li>
            <li>We can access any native hardware via Cordova plugins or HTML5</li>
            <li>To finish with Ionic CLI you do not have to worry about complex webpack configuration, it is already done for you</li>
        </ol>
        <b>You do not have to take my work for it. I am going to show you</b>
    </aside>
</section>

<!-- <section>
    <h2><span style="color: #5c8dfc">Ionic Twitter</span> PWA an <span style="color: #5c8dfc">Open Source</span> version of <span style="color: #5c8dfc">m.twitter.com</span> PWA</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section> -->
<!-- 
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
</section> -->