<section>
    <h1>Bind once</h1>
</section>


<section>
    <h2>Bind once</h2>
    
    <ul>
        <li>Introduced in Angular 1.3</li>
        <li>An expression that starts with <code class="snippet">::</code> is considered a one-time expression</li>
        <li>Will remove expression from the <code class="snippet">$$watchers</code> list when not <code class="snippet">undefined</code> anymore</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="html">
{{user.first_name}}
    </code></pre>
    
    <iframe class="fragment" style="background-color:white; height: 60px;" src="examples/bind-once/without.html"></iframe>
    
    <pre class="fragment"><code data-trim class="html">
{{::user.first_name}}
    </code></pre>
    
    <iframe class="fragment" style="background-color:white; height: 60px;" src="examples/bind-once/with.html"></iframe>
    
</section>