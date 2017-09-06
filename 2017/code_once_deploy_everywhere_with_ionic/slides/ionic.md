<section>
    <img src="../../img/ionic-logo.png" style="margin: 50px 0" width="78%" class="img-plain"/>
    <h3>An open source <span style="color: #5c8dfc">SDK</span> that lets <span style="color: #5c8dfc">Web developers</span> build <span style="color: #5c8dfc">cross platform apps</span></h3>
    <aside class="notes">
        <b>Ionic is a Software Developer Kit to build cross platforms applications with Web technologies!</b>
    </aside>
</section>

<section>
    <h3>Ionic</h3>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center">
            <img src="../../img/ionic-logo-square.png" style="margin: 0" width="100%" class="img-plain"/>
        </div>
        <div layout="column" flex="66" layout-align="center center">
            <ul>
                <li>100% <span style="color: #5c8dfc">Web technology </span> based</li>
                <li><span style="color: #5c8dfc">Top 50</span> OSS project on GitHub</li>
                <li><span style="color: #5c8dfc">MIT </span> licensed</li>
                <li>2013: <span style="color: #5c8dfc">V1</span> release (AngularJS)</li>
                <li>2017: <span style="color: #5c8dfc">V2/V3</span> release (Angular)</li>
                <li>Soon: <span style="color: #5c8dfc">V4</span> release (Stencil)</li>
            </ul>
        </div>
    </div>
    <aside class="notes">
        <b>Ionic first release was 4 years ago now. The first version was built on top of AngularJS (known as Angular version 1). Now the current version of Ionic is based on the latest version of Angular 2+ and written in TypeScript</b>
        <br/>
        <b>Let's see how popular Ionic is ...</b>
    </aside>
</section>

<section data-background-color="#000">
    <h3>Stencil (Future of Ionic)</h3>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center">
            <img src="../../img/stencil_logo.gif" style="margin: 0" width="100%" class="img-plain"/>
        </div>
        <div layout="column" flex="66" layout-align="center center">
            <ul>
                <li>A <span style="color: #5c8dfc">compiler</span> for <span style="color: #5c8dfc">Web components</span> </li>
                <li>Builds <span style="color: #5c8dfc">100% vanilla</span> custom elements</li>
                <li>Allows <span style="color: #5c8dfc">SSR</span> and <span style="color: #5c8dfc">Async rendering</span></li>
                <li>Based on <span style="color: #5c8dfc">TypeScript</span> and <span style="color: #5c8dfc">JSX</span></li>
                <li><span style="color: #5c8dfc">MIT </span> licensed</li>
            </ul>
        </div>
    </div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-color="#000" class="stretch">
    <h3>Stencil Component</h3>
<pre style="font-size: 90%;" ><code class="html" data-trim>
<my-hostname></my-hostname> 
// My hostname is: 127.0.0.1
</code></pre>
<pre style="font-size: 80%;" class="fragment"><code  class="typescript" data-trim>
import { Component } from '@stencil/core';

@Component({
  tag: 'my-hostname',
  styleUrl: 'my-hostname.scss'
})
export class Hostname {
  render() {
    return (
        <p>My hostname is: {location.hostname}</p>
    );
  }
}
</code></pre>
    <div class="fragment current-only" data-code-block="2" data-code-focus="3-6"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="8-12"></div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-color="#000" class="stretch">
    <h3>Stencil Component <span style="color : #5c8dfc">Props</span></h3>
<pre style="font-size: 90%;" ><code class="html" data-trim>
<my-name-is name="Julien"></my-name-is>
// My name is Julien
</code></pre>
<pre style="font-size: 55%;" class="fragment"><code class="typescript" data-trim>
@Component({
  tag: 'my-name-is',
  styleUrl: 'my-name-is.scss'
})
export class MyNameIs {
  @Prop() name: string;

  @PropWillChange('name')
  willChangeHandler(newValue: string) {
    console.log('New name:', newValue);
  }

  render() {
    return (<p>My name is {this.name}</p>);
  }
}
</code></pre>
    <div class="fragment current-only" data-code-block="2" data-code-focus="6"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="13-15"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="8-11"></div>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section data-background-color="#000" class="stretch">
    <h3>Stencil Component <span style="color: #5c8dfc">State</span></h3>
<pre style="font-size: 90%;" ><code class="html" data-trim>
<counter></counter>
//Counter: 1, 2, 3 ... 50 etc.
</code></pre>
<pre style="font-size: 55%;" class="fragment"><code class="typescript" data-trim>
@Component({
  tag: 'counter',
  styleUrl: 'counter.scss'
})
export class Counter {
  @State() count: number = 1;

  componentDidLoad() {
    setInterval(() => this.count = this.count + 1, 1000);
  }
  componentDidUnload() { // unregister interval }

  render() {
    return (
      <p>Counter: {this.count}</p>
    );
  }
}
</code></pre>
    <div class="fragment current-only" data-code-block="2" data-code-focus="6"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="13-17"></div>
    <div class="fragment current-only" data-code-block="2" data-code-focus="8-11"></div>
    <aside class="notes">
        <b></b>
    </aside>
</section>


<section class="stretch">
    <h3><span style="color: #5c8dfc">Ionic</span> components</h3>
    <div  style="margin: 0 75px; position: relative;">
        <div style="position: absolute; width:100%;" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <img src="./img/screenshots/button-android.png" style="margin:0" height="500" class="img-plain"/>
            <img src="./img/screenshots/button-ios.png" style="margin:0" height="500" class="img-plain"/>
        </div>
        <div style="position: absolute; width:100%; padding: 15px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <img src="./img/screenshots/card-android.png" style="margin:0" height="500" class="img-plain"/>
            <img src="./img/screenshots/card-ios.png" style="margin:0" height="500" class="img-plain"/>
        </div>
        <div style="position: absolute; width:100%; padding: 30px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <img src="./img/screenshots/icons-android.png" style="margin:0" height="500" class="img-plain"/>
            <img src="./img/screenshots/icons-ios.png" style="margin:0" height="500" class="img-plain"/>
        </div>
        <div style="position: absolute; width:100%; padding: 45px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <video autoplay loop height="500">
                <source src="./img/screenshots/date-android.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>  
            <video autoplay loop height="500">
                <source src="./img/screenshots/date-ios.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div style="position: absolute; width:100%; padding: 60px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <video autoplay loop height="500">
                <source src="./img/screenshots/segment-android.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>  
            <video autoplay loop height="500">
                <source src="./img/screenshots/segment-ios.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div style="position: absolute; width:100%; padding: 75px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <video autoplay loop height="500">
                <source src="./img/screenshots/modal-android.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>  
            <video autoplay loop height="500">
                <source src="./img/screenshots/modal-ios.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div style="position: absolute; width:100%; padding: 90px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <video autoplay loop height="500">
                <source src="./img/screenshots/loading-android.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>  
            <video autoplay loop height="500">
                <source src="./img/screenshots/loading-ios.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div style="position: absolute; width:100%; padding: 105px" layout="row" layout-align="space-between center" class="fragment zoom-in">
            <video autoplay loop height="500">
                <source src="./img/screenshots/slides-android.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>  
            <video autoplay loop height="500">
                <source src="./img/screenshots/slides-ios.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <aside class="notes">    
        <b>Ionic comes with dozens of components out of the box</b>
        <ol>
            <li>We have for instance "buttons". On the left side we have Material Design buttons for Android and on the right side buttons for iOS. And this is the EXACT same code. As you can see the code once built embraces the device UI standards!</li>
            <li>We have also cards</li>
            <li>Icons. As you can see even icons are different per platform</li>
            <li>Date pickers</li>
            <li>Segments which is a popular UI for iOS</li>
            <li>Modals</li>
            <li>Loading</li>
            <li>And slides to create tutorials.</li>
        </ol>
        <b>With Ionic you get the majority of the components you might need to create a good user experience.</b>
        <br/>
        <b>Let's see how simple it is to use those components shall we?</b>
    </aside>
</section>

<!-- POPULAR -->

<section>
    <h2> <span style="color: #5c8dfc">Ionic</span> is very <span style="color: #5c8dfc">popular</span></h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h2>Ionic in numbers</h2>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center">
            <h3 style="color: #5c8dfc; margin-bottom:0">Devs on Slack</h3>
            <span style="font-size: 80px" data-number="14,000" class="counter counter-devs">😱</span>
        </div>
        <div layout="column" flex="33" layout-align="center center">
            <h3 style="color: #5c8dfc; margin-bottom:0">StackOverflow tags</h3>
            <span style="font-size: 80px" data-number="26,000" class="counter counter-stackoverflow">😱</span>
        </div>
        <div layout="column" flex="33" layout-align="center center">
            <h3 style="color: #5c8dfc; margin-bottom:0">Stars on Github</h3>
            <span style="font-size: 80px" data-number="30,000" class="counter counter-stars">😱</span>
        </div>
    </div>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center">
            <h3 style="color: #5c8dfc; margin-bottom:0">Followers on Twitter</h3>
            <span style="font-size: 80px" data-number="74,000" class="counter counter-twitter">😱</span>
        </div>
        <div layout="column" flex="33" layout-align="center center">
            <h3 style="color: #5c8dfc; margin-bottom:0">Applications created</h3>
            <span style="font-size: 80px" data-number="4,000,000" class="counter counter-app">😱</span>
        </div>
    </div>
    <aside class="notes">
        <ol>
            <li>Ionic has a huge community, we are around 12 thousands developers on the Ionic Worldwide Slack. As you know The biggest the community is, the easiest it is to find good resources, plugins, or find the answer to your questions.</li>
            <li>Ionic is within the top 50 most popular open source project on Github with 29 thousands stars</li>
            <li>and the official estimated number of applications created with Ionic is four million!</li>
        </ol>
        <b>As you can see, Ionic is extremely popular and it is not going anywhere!</b>
    </aside>
</section>

<!-- ONE LANGUAGE -->

<section>
    <h2>only <span style="color: #5c8dfc">one language</span> and <span style="color: #5c8dfc">one codebase</span> necessary</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>All you need is <span style="color: #5c8dfc">JavaScript</span></h3>
    <div layout="row" layout-align="center center">
        <div layout="column" flex="33" layout-align="center center">
            <img src="../../img/objective-c-logo.png" style="margin: 50px 0" class="img-plain fragment"/>
            <img src="../../img/red_cross.png" style="position: absolute" width="25%" class="img-plain fragment zoom-in"/>
        </div>
        <div layout="column" flex="33" layout-align="center center">
            <img src="../../img/swift-logo.png" style="margin: 50px 0" class="img-plain fragment"/>
            <img src="../../img/red_cross.png" style="position: absolute" width="25%" class="img-plain fragment zoom-in"/>
        </div>
        <div layout="column" flex="33" layout-align="center center">
            <img src="../../img/java-logo.png" style="margin: 50px 0" class="img-plain fragment"/>
            <img src="../../img/red_cross.png" style="position: absolute" width="25%" class="img-plain fragment zoom-in"/>
        </div>
    </div>
    <aside class="notes">
        <b>One thing that I really want to emphasize on it that there is no need to learn about</b>
        <ol>
            <li>Objective-C</li>
            <li>about Swift for iOS</li>
            <li>or even Java for Android</li>
            <li>Once again all you need are Web technologies</li>
        </ol>
    </aside>
</section>

<section>
    <h3><span style="color: #5c8dfc">One codebase</span> many <span style="color: #5c8dfc">platforms</span></h3>
    <img  src="../../img/html5-css3-js.png" style="margin: 0" width="25%" class="img-plain zoom-in"/>
    <div class="fragment" layout="row" layout-align="center center">
        <img src="../../img/arrow_down.svg" style="margin: 0" width="100px" class="img-plain"/>
        <img src="../../img/arrow_down.svg" style="margin: 0" width="100px" class="img-plain"/>
        <span class="fa-spin" style="font-size: 1.2em">⚙️</span>
        <img src="../../img/arrow_down.svg" style="margin: 0" width="100px" class="img-plain"/>
        <img src="../../img/arrow_down.svg" style="margin: 0" width="100px" class="img-plain"/>
    </div>
    <img src="../../img/android-logo.png" style="margin: 0 0" width="15%" class="img-plain fragment zoom-in"/>
    <img src="../../img/ios-logo.png" style="margin: 0 0" width="15%" class="img-plain fragment zoom-in"/>
    <img src="../../img/windows-mobile-logo.png" style="margin: 0 0" width="15%" class="img-plain fragment zoom-in"/>
    <img src="../../img/electron-logo.svg" style="margin: 0 10px; opacity: 0.8" width="15%" class="img-plain fragment zoom-in"/>
    <img src="../../img/chrome-logo-white.png" style="margin: 0 10px; opacity: 0.8" width="15%" class="img-plain fragment zoom-in"/>
    <aside class="notes">
        <b>With only one codebase based on Web technologies we are able to create applications for...</b>
        <ol>
            <li>many platforms! Among those we have</li>
            <li>Android</li>
            <li>iOS</li>
            <li>Windows Universal</li>
            <li>Desktop apps with Electron</li>
            <li>and of course browsers</li>
            <li>It is one codebase to rule them all</li>
        </ol>
        <b></b>
    </aside>
</section>

<section>
    <h2><span style="color: #5c8dfc">Ionic apps</span> are <span style="color: #5c8dfc">Native apps</span></h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3>Cordova <span style="color: #5c8dfc">Native app</span> shell</h3>
     <div layout="row" layout-align="center center">
            <div layout="column" flex="33" layout-align="center center">
                 <img src="./img/hybrid.png" class="img-plain"/>
            </div>
            <div layout="column" flex layout-align="center center" style="margin-left: 10px">
                <div class="box shell " data-fragment-index="1" w100 style="position: relative">
                    <div class="box ionic fragment zoom-in"  data-fragment-index="6" w100 style="position: relative">
                        <img src="../../img/ionic-logo-square-white.png" style="margin: 0; height: 48px; position: absolute; left: 10px;"  class="img-plain"/>
                        Ionic Components
                    </div>
                    <div class="box angular fragment zoom-in"  data-fragment-index="5" w100 style="position: relative">
                        Angular | React | Vue | Plain JS
                    </div>
                    <div class="box hardware fragment zoom-in" data-fragment-index="4" w100 style="position: relative">
                        <img src="../../img/js-logo.png" style="margin: 0; height: 48px; position: absolute; left: 10px;"  class="img-plain"/>Hardware Bridge
                    </div>
                    <div class="box browser fragment zoom-in"  data-fragment-index="3" w100 style="position: relative">
                        <img src="../../img/chromium-logo.png" style="margin: 0; height: 48px; position: absolute; left: 10px;"  class="img-plain"/>
                        <img src="../../img/wkwebview-logo.png" style="margin: 0; height: 48px; position: absolute; left: 58px;"  class="img-plain"/>
                        Webview
                    </div>
                    Cordova native shell
                </div>
                <div class=" fragment zoom-in" data-fragment-index="2" w100>
                    <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true" style="margin-bottom: 10px"></i>
                    <div class="box native" layout="column" layout-align="center center">
                        <img src="./img/native_features.png" class="img-plain" style="margin:0" />
                    </div>
                </div>
            </div>
        </div>
        https://cordova.apache.org
    <aside class="notes">
        <b>Ionic applications are native applications. They can be installed via stores such as Google Play or the App Store.</b>
        <ol>
            <li>Cordova is the magic that make it happens. It is an open source project that provides a native shell for a lot of platforms</li>
            <li>This native shell has access to all the device hardware, exactly the same as any native app.</li>
            <li>The native shell runs a Webview</li>
            <li>You can control the hardware via HTLM5 for some features or via Cordova API</li>
            <li>Your code seats on top of Ionic so you can use any Ionic components or services</li>
            <li>Ionic being based on Angular you can also reach Angular features such as the HTTP module to make HTTP requests</li>
            <li>To interact with the device features such as the camera you can use either Cordova if you want to build an hybrid app for Android or iOS or HTML5 if you build for the Web.</li>
        </ol>
        <b>Your Ionic application has therefore access to every API needed to build a complete application.</b>
    </aside>
</section>

<section>
    <h2><span style="color: #5c8dfc">Ionic apps</span> are also <span style="color: #5c8dfc">Progressive Web Apps</span> (PWA)</h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<!-- ADVANTAGES -->

<section>
    <h3>A <span style="color: #5c8dfc">PWA</span> out of the box</h3>
    <ul>
        <li class="fragment">Preconfigured <span style="color: #5c8dfc">Service worker</span>
            <ul>
                <li>Assets caching</li>
                <li>Network caching</li>
            </ul>
        </li>
        <li class="fragment">Preconfigured <span style="color: #5c8dfc">Manifest</span>
            <ul>
                <li>Application name</li>
                <li>Icons list</li>
                <li>Fullscreen strategy</li>
            </ul></li>
    </ul>
    <aside class="notes">
        <b>We saw earlier what was a Progressive Web app and why it is the Next Generation of the Mobile Web.</b>
         <ol>
            <li>With Ionic you get a preconfigured service worker out of the box. All the assets needed to run the app are precached by default, the rest is simply cached when used and can be accessed offline</li>
            <li>We also get a preconfigured manifest that contains information such as the app name, splashscreen background color, icons etc.</li>
            <li>What you need to remember is that an Ionic app is already a Progressive Web App</li>
        </ol>
        <b>An Ionic app is a PWA!</b>
    </aside>
</section>

<section>
    <h2>How do we <span style="color: #5c8dfc">start?</span></h2>
    <aside class="notes">
        <b></b>
    </aside>
</section>

<section>
    <h3><span style="color: #5c8dfc">Ionic CLI</span> is the entry point</h3>
<pre style="font-size: 130%"><code class="shell" data-trim>
$ npm install -g ionic
</code></pre>
    <ul>
         <li class="fragment">Create new Applications</li>
         <li class="fragment">Create new Pages, Components, Providers</li>
         <li class="fragment">Run a local dev server</li>
         <li class="fragment">Run on emulator or on device</li>
         <li class="fragment">Build for every platform...</li>
    </ul>
    <aside class="notes">
        <b>To install Ionic on your machine we first need to install the Ionic CLI. It can be installed globally with npm.</b>
         <ol>
            <li>The CLI can help you Create new Application</li>
            <li>new Pages, Components, Providers etc.</li>
            <li>It can run a local server based on webpack</li>
            <li>It can run the app on emulator or on device</li>
            <li>and allow you to buid for every known platforms</li>
            <li>As you can see all you need is the CLI</li>
        </ol>
        <b>All you need is Ionic CLI</b>
    </aside>
</section>

<!-- CONCLUSION  -->

<section>
    <h3 style="color:#fff;">Why is <span style="color: #5c8dfc">Ionic</span> one of the best SDK to build <span style="color: #5c8dfc">cross platform apps</span>?</h3>
    <ul>
        <li class="fragment">100% <span style="color: #5c8dfc">Web technology </span> based</li>
        <li class="fragment">Large <span style="color: #5c8dfc">set of components </span> out of the box</li>
        <li class="fragment"><span style="color: #5c8dfc">One single codebase</span> for all platforms</li>
        <li class="fragment"><span style="color: #5c8dfc">Native shell</span> on Mobile devices</li>
        <li class="fragment">Access to <span style="color: #5c8dfc">native hardware</span></li>
        <li class="fragment"><span style="color: #5c8dfc">Progressive Web App</span> by default</li>
        <li class="fragment"><span style="color: #5c8dfc">No build configuration</span>: Ionic CLI</li>
        <li class="fragment">Powered by a <span style="color: #5c8dfc">growing community</span></li>
    </ul>
    <aside class="notes">
        <b>Let's conclude this talk, here are the things you should take home with you:</b>
        <ol>
            <li>With Ionic you get a progressive Web app by default</li>
            <li>With the Ionic CLI there are no complexe Webpack or Gulp configuration, it is already done for you</li>
            <li>Only one codebase is necessary to build on every platforms. your Components use the device specific UI standards so on every platforms users have the look and feel they are expecting</li>
            <li>A large set of components are available out of the box and many more are available on market.ionic.io</li>
            <li>As a developer, the component semantic makes it really easy to pick up what you are dealing with</li>
            <li>Your application code can leverage Ionic, Angular, HTML5 and Cordova APIs directly.</li>
            <li>Ionic has great services around the SDK</li>
            <li>To finish the community is what makes Ionic sooooo special in the industry. With thousands of developers like myself, advocating for Ionic around the world or creating plugins, components, themes etc. Ionic is super successful!</li>
        </ol>
        <b></b>
    </aside>
</section>
