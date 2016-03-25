<section>
    <h1>Folder structure</h1>
</section>


<section>
    <h2>Track by</h2>
    
    <ul>
        <li><code class="snippet">track by</code> allow better performance when using <code class="snippet">ng-repeat</code></li>
        <li>Avoid useless DOM manipulation</li>
        <li>Minimal DOM repaints</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="html">
<ul>
        <li ng-repeat="user in users">{{user.name}}</li>
</ul>
    </code></pre>
    <pre class="fragment"><code data-trim class="html">
<ul>
        <li ng-repeat="user in users track by user.id">{{user.name}}</li>
</ul>
    </code></pre>
    
</section>