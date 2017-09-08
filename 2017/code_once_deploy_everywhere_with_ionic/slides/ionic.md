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
                <li><span style="color: #5c8dfc">Open Source</span> project (MIT licensed)</li>
                <li>100% <span style="color: #5c8dfc">Web technology </span> based</li>
                <li>Build apps for <span style="color: #5c8dfc">many platforms</span> (Android, iOS, Desktop, PWA, etc.)</li>
                <li>2013: <span style="color: #5c8dfc">V1</span> release (AngularJS)</li>
                <li>2017: <span style="color: #5c8dfc">V2/V3</span> release (Angular)</li>
                <li>Soon: <span style="color: #5c8dfc">V4</span> release (Angular/Stencil)</li>
            </ul>
        </div>
    </div>
    <aside class="notes">
        <b>...</b>
        <br/>
        <b>Stencil is the latest project created by the Ionic team, and will eventually replace Angular in long term but for now all we know is that Ionic v4 will mix Angular and Stencil. Let's see what Stencil is...</b>
    </aside>
</section>

<section data-background-color="#000">
    <h3>Stencil</h3>
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
        <b>Ionic comes with dozens of components out of the box and each component has the look and feel of its original platform</b>
        <ol>
            <li>FOr instance buttons: On the left side we have material design button for Android and on the right iOS buttons</li>
        </ol>
        <b>With Ionic you get the majority of the components you might need to create a good user experience.</b>
    </aside>
</section>

<!-- POPULAR -->
<!-- 
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
        <b>The success of an Open source project is often based on popularity. The more popular your project is the more resources, plugins and answers to questions you will get.</b>
        <br/>
        <b>Those mnumbers highlight the fact that Ionic is extremely popular and it is not going anywhere!</b>
    </aside>
</section> -->

<!-- ONE LANGUAGE -->

<section>
    <h2>only <span style="color: #5c8dfc">one language</span> and <span style="color: #5c8dfc">one codebase</span> are necessary</h2>
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
        <b>Ionic applications are native applications. They can be installed on Google Play, the App Store or any sotre your platform uses. How does this work? ...</b>
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
                    <div class="box ionic fragment zoom-in"  data-fragment-index="5" w100 style="position: relative">
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
        <b>... well Cordova is the magic behind the native capabilities. It is an open source project that provides a native shell for a lot of platforms</b>
        <ol>
            <li>This native shell has access to all the device hardware, exactly the same as any native app.</li>
            <li>The native shell runs a Webview which is a simple browser</li>
            <li>We can control the hardware via HTLM5 for some features or via Cordova API for missing features</li>
            <li>On top of all of that stack you can build your application using Ionic Web Components and any framework you want or not framework at all.</li>
        </ol>
        <b>Your Ionic Components have therefore access to every API needed to build a complete application.</b>
    </aside>
</section>

<section>
    <h2><span style="color: #5c8dfc">Ionic apps</span> are also <span style="color: #5c8dfc">Progressive Web Apps</span> (PWA)</h2>
    <aside class="notes">
        <b>We just saw that Ionic apps were Native apps that can be installed via stores but did you know that Ionic apps are also Progressive Web apps by default?</b>
    </aside>
</section>

<!-- ADVANTAGES -->

<section>
    <h3>A <span style="color: #5c8dfc">PWA</span> out of the box</h3>
    <ul>
        <li class="fragment">Preconfigured <span style="color: #5c8dfc">Service worker</span>
            <ul>
                <li><span style="color: #5c8dfc">Assets caching</span> (HTML, JS, CSS, Images, Fonts etc.)</li>
                <li><span style="color: #5c8dfc">Network caching</span> (NetworkFirst Strategy)</li>
            </ul>
        </li>
        <li class="fragment">Preconfigured <span style="color: #5c8dfc">Manifest.json</span>
            <ul>
                <li>Application name</li>
                <li>Icons list</li>
                <li>Fullscreen strategy</li>
            </ul></li>
    </ul>
    <aside class="notes">
        <b></b>
        <ol>
            <li>Preconfigured Manifest.json</li>
            <li>Manifest.json has all the informations that are required to qualify as a Progressive Web App: name, icons, background color etc.</li>
        </ol>
    </aside>
</section>

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
    <h3 style="color:#fff;"><span style="color: #5c8dfc">Ionic</span> is one of the best SDK to build <span style="color: #5c8dfc">cross platform apps</span></h3>
    <ul>
        <li class="fragment">Large <span style="color: #5c8dfc">set of components </span> to choose from</li>
        <li class="fragment">Only <span style="color: #5c8dfc">one programming language</span> needed (JS)</li>
        <li class="fragment">Only <span style="color: #5c8dfc">one codebase</span> for all platforms</li>
        <li class="fragment">Ionic apps are <span style="color: #5c8dfc">Native Apps</span></li>
        <li class="fragment">Ionic apps are <span style="color: #5c8dfc">Progressive Web Apps</span></li>
        <li class="fragment">Access to <span style="color: #5c8dfc">any native Hardware</span> (via cordova plugins)</li>
        <li class="fragment"><span style="color: #5c8dfc">No build configuration</span> (Ionic CLI)</li>
    </ul>
    <aside class="notes">
        <b>We saw earlier that, nowadays, we have to go multi platform and to do so, the Web is the best platform. To code once and deploy everywhere using the Web, Ionic is clearly the best option.</b>
        <ol>
            <li>A large set of components are available out of the box</li>
            <li>only one programming language is needed and it is the most popular one: JavaScript</li>
            <li>Only one codebase is necessary to build on every platforms with platform specific look and feel</li>
            <li>Ionic Apps are Native Apps that can be installed on the stores</li>
            <li>Ionic Apps are also Progressive Web Apps</li>
            <li>We can access any native hardware via Cordova plugins or HTML5</li>
            <li>To finish with Ionic CLI you do not have to worry about complex webpack configuration, it is already done for you</li>
        </ol>
        <b></b>
    </aside>
</section>