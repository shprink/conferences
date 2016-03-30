<section>
    <h1>Folder structure</h1>
</section>


<section>
    <h2>Folder-by-type</h2>
    
    <ul>
        <li>Grouping JavaScript files by types (controllers, configs, views, directives etc.) </li>
    </ul>
    
    <pre><code data-trim class="html">
app/
    app.js
    controllers/
        aaa.js
        bbb.js
        ccc.js
    directives/
        ddd.directive.js
        eee.directive.js
        fff.directive.js
    services/
        xxx.js
        yyy.js
        zzz.js
    views/
        aaa.html
        bbb.html
        ccc.html
        ddd.directive.html
        eee.directive.html
        fff.directive.html
    </code></pre>
    
</section>


<section>
    <h2>Folder-by-type</h2>
    
    <ul>
        <li>Bad for large scale apps</li>
        <li>The number of files in your folders can become really large.</li>
        <li>Finding all the files you need to modify for a specific feature can be tricky.</li>
        <li>Working on a feature will lead to open many folders.</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>Lots of files per folder</li>
            <li>Hard to know which file should be modified</li>
            <li>One feature = many folder to browse</li>
        </ul>
    </aside>
    
</section>



<section>
    <h2>Folders-by-Feature</h2>
    
    <ul>
        <li>Grouping files (controllers, configs, views, directives etc.) per feature</li>
    </ul>
    
    <pre><code data-trim class="html">
lib/
    app.js
    home/
        home.module.js
        home.config.js
        home.service.js
        home.controller.js
        home.html
        home.scss
    parameters/
        parameters.module.js
        parameters.config.js
        parameters.service.js
        parameters.controller.js
        parameters.html
        parameters.scss
    </code></pre>
    
</section>


<section>
    <h2>Folders-by-Feature</h2>
    
    <ul>
        <li>Better for large scale apps</li>
        <li>The number of files in your folders are limited to few.</li>
        <li>Finding all the files you need to modify for a specific feature is easy (they are in the same folder!).</li>
        <li>You can work independently on a feature.</li>
        <li>Knowing what the module represents is easy (the folder name is sufficient).</li>
    </ul>
    <aside class="notes">
        <ul>
            <li>Few files per folder</li>
            <li>Easy to modify a feature</li>
            <li>Easy to work independently on a feature</li>
            <li>Easy to know what a feature is about</li>
        </ul>
    </aside>
</section>