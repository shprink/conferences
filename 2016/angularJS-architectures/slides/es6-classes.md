<section>
    <h1>ES2015 Classes / TypeScript Interfaces</h1>
</section>


<section>
    <h2>ES2015 Classes</h2>
    <ul>
        <li>Facilitate inheritance</li>
        <li>Perfect to extend/overwrite features</li>
    </ul>
    <pre><code class="hljs">
class Form  { 
    constructor() {
        this.type = 'abstract';
    }

    getType(){
        return this.type;
    }
}

class Square extends Form{
    constructor(){
      	super();
        this.type = 'square';
    }
}

let square = new Square();
console.log(square.getType()); // square
    </code></pre>
    <aside class="notes">
        <ul>
            <li>Using this architecture we can imagine building cross platform apps using an abstract layer to hold the common behavior</li>
        </ul>
    </aside>
</section>

<section data-markdown>
    <h2>TypeScript Interfaces</h2>
    <ul>
        <li>Forces a Class to respect a certain implementation</li>
        <li>Forces types</li>
    </ul>

    <pre ><code class="hljs">
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface  { 
    currentTime: Date;
    // ALL THE COMMON LOGIC
}

class ClockAndroid extends Clock implements ClockInterface  {
    currentTime: Date;
    // PLATFORM ANDROID SPECIFIC CODE
}
    </code></pre>

    <aside class="notes">
        <ul>
            <li>[transition] If you have some experience with Java, PHP, C# you already know what's interface.</li>
            <li>Interfaces are a TypeScript feature</li>
            <li>forces a Class to respect a certain implementation</li>
            <li> Here we force any Classes that implements the ClockInterface to have a property named currentTime which has a Date type.</li>
        </ul>
    </aside>
</section>