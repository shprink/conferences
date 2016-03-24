<section>
    <h1>ng-if vs ng-switch vs ng-show/hide</h1>
</section>

<section>
    <h2>ng-if, ng-switch</h2>
    
    <ul>
        <li>Reconstruct DOM</li>
        <li>No compilation</li>
        <li>Minimal DOM repaints</li>
        <li>Children $$Watchers not attached</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="html">
<ANY ng-if="condition"></ANY>
    </code></pre>
    <pre class="fragment"><code data-trim class="html">
<ANY ng-switch="expression">
  <ANY ng-switch-when="matchValue1">...</ANY>
  <ANY ng-switch-when="matchValue2">...</ANY>
  <ANY ng-switch-default>...</ANY>
</ANY>
    </code></pre>
</section>

<section>
    <h2>ng-show, ng-hide</h2>
    
    <ul>
        <li>Toggle a class</li>
        <li>Children DOM is compiled</li>
        <li>Children $$Watchers  attached</li>
    </ul>
    
    <pre class="fragment"><code data-trim class="html">
<ANY ng-if="condition"></ANY>
    </code></pre>
    <pre class="fragment"><code data-trim class="html">
<ANY ng-switch="expression">
  <ANY ng-switch-when="matchValue1">...</ANY>
  <ANY ng-switch-when="matchValue2">...</ANY>
  <ANY ng-switch-default>...</ANY>
</ANY>
    </code></pre>
</section>