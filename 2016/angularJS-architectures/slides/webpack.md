<section>
    <h1>Module bundlers</h1>
</section>


<section>
    <h2>What is it?</h2>
    <ul>
        <li>A tool that allows requiring modules (ES2015, CommonJS or AMD)</li>
        <li>Generates static assets from a dependency tree</li>        
        <li>Most popular ones: <code class="snippet">Webpack</code> and <code class="snippet">Browserify</code></li>
    </ul>
</section>
<section>
    <h2>Webpack</h2>
    <p class="fragment">Preprocess any type of file and generate static assets</p>
    <div class="grid">
        <div class="unit two-thirds fragment">
            <img data-src="./img/dependency_tree.jpg" height="380" alt="dependency_tree">
        </div>
        <div class="unit one-third fragment"  style="position:relative;">
            <i class="fa fa-chevron-right" style="position: absolute; left: -40px; top:200px;"></i>
            <img data-src="./img/webpack_static_assets.jpg" alt="Loading Ionic">
            <h3>Static assets</h3>
        </div>
    </div>
     <aside class="notes">
        <ul>
            <li>Here we have a dependency tree. The tree root here is called an entry point. This intry point will require other dependencies that will require other dependencies and so on.</li>
            <li>At the end you end up with a large dependency tree that compile into static assets</li>
        </ul>
    </aside>
</section>
<section>
    <h2>Webpack conditional imports</h2>
    <div class="grid">
        <div class="unit half fragment">
        <pre style="margin:0; box-shadow: none; position:relative;">
            <code class="hljs">
new webpack.DefinePlugin({
    IS_IOS: false,
    IS_ANDROID: false,
    IS_BROWSER: true,
    IS_DESKTOP: false
})
            </code>
            <span style="position:absolute; right:0; top:0;">Webpack Config</span>
        </pre>
        <pre style="margin:0; box-shadow: none; position:relative; margin-top: -30px;">
            <code class="hljs">
if (IS_IOS)
    require("./ios.ts");
if (IS_ANDROID)
    require("./android.ts");
if (IS_BROWSER)
    require("./browser.ts");
if (IS_DESKTOP)
    require("./desktop.ts");
            </code>
            <span style="position:absolute; right:0; top:0;">Any js file</span>
        </pre>
        </div>
        <div class="unit half fragment">
        <img data-src="./img/dependency_tree_browser.jpg" height="400" alt="dependency_tree">
        </div>

        </div>

    <aside class="notes">
        1. With webpack we can create conditional imports upon the platform that we want to build on.<br/>
        2. Using Webpack's DefinePlugin you can inject any variable into your JS files.<br/>
        3. Upon those variables we can import the right content for the right platform.<br/>
        4. Setting IS_BROWSER to true will remove an entire branch of the dependency tree and build Browser only code.
    </aside>
</section>