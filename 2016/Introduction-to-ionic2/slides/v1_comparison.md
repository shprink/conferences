<section>
    <img src="./img/ionic-v1-vs-v2.png" style="margin: 50px 0" width="90%" class="img-plain"/>
    <h1>Ionic v1 versus v2</h1>
</section>

<section>
    <h3>Better performance by default</h3>
    <div class="grid">
        <div class="unit half">
            <h4>v1</h4>
            <ul>
                <li>$watch</li>
                <li>One-time binding</li>
                <li>Track by</li>
                <li>Debug</li>
                <li>Collection repeat</li>
                <li>View cache</li>
                <li><a href="https://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/" target="_blank">etc...</a></li>
            </ul>
            
        </div>
        <div class="unit half">
            <h4>V2</h4>
            <ul>
                <li>Zone.js</li>
                <li>Change Detection Strategies</li>
            </ul>
        </div>
    </div>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Better DOM Performance</h3>
    <style>
        .rowCount, .deviation{
            display: none;
        }
        .factor{
            color: #1d1d1d;
        }
    </style>
    <table class="results" style="zoom: 65%">
        <thead>
            <tr>
                <th class="benchname"></th>
                <th>angular v1.5.8</th>
                <th>angular v2.0.0</th>
                <th>angular v2.2.1</th>
                <th>react v15.4.0</th>
                <th>vanillajs</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="benchname">
                    create rows
                    <div class="rowCount">Duration for creating 1000 rows after the page loaded.</div>
                </th>
                <td style="background-color:rgb(255, 229, 131)"><span class="mean">264.96</span><span class="deviation">8.50</span><br><span class="factor">(2.10)</span></td>
                <td style="background-color:rgb(182, 215, 128)"><span class="mean">193.32</span><span class="deviation">4.17</span><br><span class="factor">(1.53)</span></td>
                <td style="background-color:rgb(162, 209, 127)"><span class="mean">177.07</span><span class="deviation">4.05</span><br><span class="factor">(1.40)</span></td>
                <td style="background-color:rgb(163, 209, 127)"><span class="mean">177.58</span><span class="deviation">1.93</span><br><span class="factor">(1.41)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">126.05</span><span class="deviation">2.95</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    replace all rows
                    <div class="rowCount">Duration for updating all 1000 rows of the table (with 5 warmup iterations).</div>
                </th>
                <td style="background-color:rgb(249, 105, 108)"><span class="mean">251.32</span><span class="deviation">5.35</span><br><span class="factor">(4.70)</span></td>
                <td style="background-color:rgb(250, 137, 114)"><span class="mean">187.68</span><span class="deviation">5.16</span><br><span class="factor">(3.51)</span></td>
                <td style="background-color:rgb(251, 148, 116)"><span class="mean">178.76</span><span class="deviation">3.85</span><br><span class="factor">(3.34)</span></td>
                <td style="background-color:rgb(250, 137, 114)"><span class="mean">187.73</span><span class="deviation">1.84</span><br><span class="factor">(3.51)</span></td>
                <td style="background-color:rgb(101, 192, 124)"><span class="mean">54.23</span><span class="deviation">0.92</span><br><span class="factor">(1.01)</span></td>
            </tr>
            <tr style="display:none">
                <th class="benchname">
                    partial update
                    <div class="rowCount">Time to update the text of every 10th row (with 5 warmup iterations).</div>
                </th>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">11.23</span><span class="deviation">0.36</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">9.34</span><span class="deviation">0.39</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">9.17</span><span class="deviation">0.52</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">15.97</span><span class="deviation">0.50</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">11.06</span><span class="deviation">2.64</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr style="display:none">
                <th class="benchname">
                    select row
                    <div class="rowCount">Duration to highlight a row in response to a click on the row. (with 5 warmup iterations).</div>
                </th>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">8.16</span><span class="deviation">2.90</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">4.54</span><span class="deviation">2.67</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">5.35</span><span class="deviation">1.07</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">4.90</span><span class="deviation">0.19</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">2.27</span><span class="deviation">0.86</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr style="display:none">
                <th class="benchname">
                    swap rows
                    <div class="rowCount">Time to swap 2 rows on a 1K table. (with 5 warmup iterations).</div>
                </th>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">12.80</span><span class="deviation">0.44</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">12.03</span><span class="deviation">0.49</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">11.73</span><span class="deviation">0.26</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">13.83</span><span class="deviation">0.19</span><br><span class="factor">(1.00)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">6.88</span><span class="deviation">0.21</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    remove row
                    <div class="rowCount">Duration to remove a row. (with 5 warmup iterations).</div>
                </th>
                <td style="background-color:rgb(176, 213, 128)"><span class="mean">54.13</span><span class="deviation">3.40</span><br><span class="factor">(1.49)</span></td>
                <td style="background-color:rgb(147, 205, 126)"><span class="mean">47.41</span><span class="deviation">1.21</span><br><span class="factor">(1.31)</span></td>
                <td style="background-color:rgb(161, 209, 127)"><span class="mean">50.59</span><span class="deviation">1.24</span><br><span class="factor">(1.40)</span></td>
                <td style="background-color:rgb(161, 209, 127)"><span class="mean">50.57</span><span class="deviation">1.09</span><br><span class="factor">(1.40)</span></td>
                <td style="background-color:rgb(102, 192, 124)"><span class="mean">36.93</span><span class="deviation">0.56</span><br><span class="factor">(1.02)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    create many rows
                    <div class="rowCount">Duration to create 10,000 rows</div>
                </th>
                <td style="background-color:rgb(231, 229, 131)"><span class="mean">2247.40</span><span class="deviation">20.05</span><br><span class="factor">(1.85)</span></td>
                <td style="background-color:rgb(190, 217, 129)"><span class="mean">1928.51</span><span class="deviation">16.91</span><br><span class="factor">(1.58)</span></td>
                <td style="background-color:rgb(171, 212, 128)"><span class="mean">1776.01</span><span class="deviation">19.21</span><br><span class="factor">(1.46)</span></td>
                <td style="background-color:rgb(179, 214, 128)"><span class="mean">1839.46</span><span class="deviation">11.73</span><br><span class="factor">(1.51)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">1217.30</span><span class="deviation">12.33</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    append rows to large table
                    <div class="rowCount">Duration for adding 1000 rows on a table of 10,000 rows.</div>
                </th>
                <td style="background-color:rgb(202, 221, 129)"><span class="mean">388.07</span><span class="deviation">4.59</span><br><span class="factor">(1.66)</span></td>
                <td style="background-color:rgb(146, 205, 126)"><span class="mean">304.24</span><span class="deviation">8.19</span><br><span class="factor">(1.30)</span></td>
                <td style="background-color:rgb(129, 200, 126)"><span class="mean">278.94</span><span class="deviation">3.75</span><br><span class="factor">(1.19)</span></td>
                <td style="background-color:rgb(151, 206, 127)"><span class="mean">311.43</span><span class="deviation">6.96</span><br><span class="factor">(1.33)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">233.57</span><span class="deviation">1.98</span><br><span class="factor">(1.00)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    clear rows
                    <div class="rowCount">Duration to clear the table filled with 10.000 rows.</div>
                </th>
                <td style="background-color:rgb(251, 144, 115)"><span class="mean">650.28</span><span class="deviation">29.54</span><br><span class="factor">(3.40)</span></td>
                <td style="background-color:rgb(226, 228, 131)"><span class="mean">346.79</span><span class="deviation">8.63</span><br><span class="factor">(1.81)</span></td>
                <td style="background-color:rgb(205, 221, 129)"><span class="mean">320.76</span><span class="deviation">5.81</span><br><span class="factor">(1.68)</span></td>
                <td style="background-color:rgb(255, 236, 132)"><span class="mean">383.62</span><span class="deviation">4.83</span><br><span class="factor">(2.01)</span></td>
                <td style="background-color:rgb(106, 193, 124)"><span class="mean">199.67</span><span class="deviation">3.21</span><br><span class="factor">(1.04)</span></td>
            </tr>
            <tr>
                <th class="benchname">
                    clear rows a 2nd time
                    <div class="rowCount">Time to clear the table filled with 10.000 rows. But warmed up with only one iteration.</div>
                </th>
                <td style="background-color:rgb(249, 105, 108)"><span class="mean">1388.19</span><span class="deviation">21.56</span><br><span class="factor">(7.27)</span></td>
                <td style="background-color:rgb(198, 220, 129)"><span class="mean">312.46</span><span class="deviation">4.87</span><br><span class="factor">(1.64)</span></td>
                <td style="background-color:rgb(197, 219, 129)"><span class="mean">311.20</span><span class="deviation">6.44</span><br><span class="factor">(1.63)</span></td>
                <td style="background-color:rgb(254, 236, 132)"><span class="mean">380.15</span><span class="deviation">13.02</span><br><span class="factor">(1.99)</span></td>
                <td style="background-color:rgb(99, 191, 124)"><span class="mean">190.86</span><span class="deviation">1.55</span><br><span class="factor">(1.00)</span></td>
            </tr>
        </tbody>
    </table>
    <a href="https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html" target="_blank" style="font-size: 15px">source</a> 

</section>

<section>
    <h3>Better Tooling: Module Bundler</h3>
    <div class="grid">
        <div class="unit half">
            <h4>Bye bye Gulp</h4>
            <img src="../../img/meme/happy.gif" width="100%" class="img-plain"/>
        </div>
        <div class="unit half">
            <h4>Welcome Webpack</h4>
            <img src="../../img/webpack-logo.png" width="70%" class="img-plain"/>
        </div>
    </div>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Better Tooling: CLI</h3>
<pre style="font-size: 130%"><code class="shell" data-trim>
$ ionic generate page MyPage
</code></pre>
<pre style="font-size: 100%"><code class="shell" data-trim>
√ Create app/pages/my-page/my-page.html
√ Create app/pages/my-page/my-page.ts
√ Create app/pages/my-page/my-page.scss
</code></pre>
    <aside class="notes"></aside>
</section>

<section>
    <h3>More flexible Navigation</h3>
    <div class="grid">
        <div class="unit half">
            <h4>V1</h4>
            Tight to URL
        </div>
        <div class="unit half">
            <h4>V2</h4>
            Push/Pop
        </div>
    </div>
    <iframe width="350px" height="400px" style="background-color:white; height: 300px;" src="./examples/navigation/index.html"></iframe>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Better control over Animations / Transitions</h3>
    <div class="grid">
        <div class="unit half">
            <h4>v1</h4>
            CSS
        </div>
        <div class="unit half">
            <h4>V2</h4>
            Web Animations (W3C)
        </div>
    </div>
    <iframe width="350px" height="400px" style="background-color:white; height: 300px;" src="./examples/web_animations/index.html"></iframe>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Native Scrolling</h3>
    <div class="grid">
        <div class="unit half">
            <h4>v1</h4>
            <ul>
                <li><i class="fa fa-check-square-o green" aria-hidden="true"></i> Android</li>
                <li><i class="fa fa-square-o red" aria-hidden="true"></i> iOS</li>
                <li><i class="fa fa-square-o red" aria-hidden="true"></i> Windows Phone</li>
            </ul>
        </div>
        <div class="unit half">
            <h4>V2</h4>
            <ul>
                <li><i class="fa fa-check-square-o green" aria-hidden="true"></i> Android</li>
                <li><i class="fa fa-check-square-o green" aria-hidden="true"></i> iOS</li>
                <li><i class="fa fa-check-square-o green" aria-hidden="true"></i> Windows Phone</li>
            </ul>
        </div>
    </div>
    <img src="./img/native_scrolling.png" width="100%" class="img-plain"/>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Package size</h3>
    <div class="grid">
        <div class="unit half">
            <h4>V1</h4>
            500kb
        </div>
        <div class="unit half">
            <h4>V2</h4>
            1.1Mb
        </div>
    </div>
    <aside class="notes"></aside>
</section>

<section>
    <h3>Better startup time (AOT)</h3>
    <img src="./img/aot.gif" width="70%" class="img-plain"/>
    <aside class="notes"></aside>
</section>

<section data-background="./img/daft_punk.jpg">
    <div style="background-color: rgba(0, 0, 0, 0.8); padding: 20px; border-radius: 5px;">
        <h3>Ionic2 is therefore...</h3>
        <blockquote>
            "...Better
            Faster
            Stronger"
            <footer>— Daft Punk</footer>
        </blockquote>
    </div>
    <aside class="notes"></aside>
</section>