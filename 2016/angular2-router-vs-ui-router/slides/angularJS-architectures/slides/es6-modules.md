<section>
    <h1>ES2015 Modules</h1>
</section>


<section>
    <h2>ES2015 Modules</h2>
    <ul>
        <li>Creates reusable and modular code</li>
        <li>Default exports are easy to import</li>
    </ul>
    <pre><code class="js">
# export default (one per module)
export default square(x){return x &#42; x}; // ES5
export default square(x) => x &#42; x; // ES6

# import default
import anyName from './path/math.js'; // anyName becomes the square function
    </code></pre>
    <pre><code class="js">
# export named module (several per modules)
export square(x) => x &#42; x
export const pi = 3.14159265359;

# import specific
import {square, pi} from './path/math.js';
# import all
import * as math from './path/math.js';
    </code></pre>
     <aside class="notes">
        <ul>
            <li>What's a module? Isolated piece of code that solves scope leaking and namespacing problem. Import or Export MUST be explicite.</li>
            <li>With modules we can easily CREATE / IMPORT and EXPORT reusable pieces of code</li>
            <li>No need to know the name of a default exported function</li>
        </ul>
    </aside>
</section>