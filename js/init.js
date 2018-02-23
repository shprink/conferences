// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    showNotes: window.showNotes,

    transition: 'slide', // none/fade/slide/convex/concave/zoom
    backgroundTransition: 'fade',

    chart: {
        defaults: {
            global: {
                title: { fontColor: "#FFF" },
                legend: {
                    labels: { fontColor: "#FFF" },
                },
            },
            scale: {
                scaleLabel: { fontColor: "#FFF" },
                gridLines: { color: "#FFF", zeroLineColor: "#FFF" },
                ticks: { fontColor: "#FFF" },
            }
        },
        line: { borderColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"], "borderDash": [[5, 10], [0, 0]] },
        bar: { backgroundColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"] },
        horizontalBar: { backgroundColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"] },
        pie: { backgroundColor: [["rgba(0,0,0,.8)", "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"]] },
        radar: { borderColor: ["rgba(20,220,220,.8)", "rgba(220,120,120,.8)", "rgba(20,120,220,.8)"] },
    },

    // Optional reveal.js plugins
    dependencies: [{
        src: '../../lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: '../../plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: '../../plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: '../../plugin/highlight/highlight.js',
        async: false,
        callback: function () {
            // hljs.initHighlightingOnLoad();
        }
    }, {
        src: '../../plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: '../../plugin/notes/notes.js',
        async: true
    // }, {
    //     src: '../../plugin/asciinema-player.js',
    //     async: true
    }, {
        src: '../../plugin/reveal-code-focus/reveal-code-focus.js',
        async: true,
        callback: function () {
            RevealCodeFocus();
        }
    },
    { src: '../../plugin/reveal.js-plugins-master/chart/Chart.min.js' },
    { src: '../../plugin/reveal.js-plugins-master/chart/csv2chart.js' },]
});

// https://gist.github.com/geek1011/1841acca111b7dbb3cd902497f255ba0
window.printRevealNotes = function () {
    /* Open the window */
    var w = window.open('about:blank'); /* Open a blank window */

    /* Write the titles */
    var doctitle = "Speaker notes for " + document.title + " Presentation";
    w.document.write('<html><head><title>' + doctitle + '</title></head><body>');
    w.document.write('<center><h1>' + doctitle + '</h1></center>');

    /* Search for slides */
    var slidesContainer = document.getElementsByClassName('slides')[0]; /* The parent element to search for slides and notes */
    var slides = []; /* The list of unique slides (no containers) */
    var allSlides = slidesContainer.getElementsByTagName('section'); /* All slides, even container ones */

    /* Filter the slides (remove the container slides) */
    for (var e in allSlides) {
        if (allSlides.hasOwnProperty(e)) { /* Make sure it is not an inherited object property */
            var el = allSlides[e];
            if (el.parentNode.tagName == "SECTION") { /* If it is in another slide, then it is a subslide */
                slides.push(el);
            } else { /* Not a subslide; either a container or a orphan slide */
                var isOwnSlide = true; /* Default to is an orphan slide */
                /* Check if not an orphan slide */
                for (var i in el.children) { /* Search for sub-slides by looping through children */
                    if (el.children.hasOwnProperty(i)) { /* Make sure it is not an inherited object property */
                        if (el.children[i].tagName == "SECTION") { /* Contains another slide, skip it */
                            isOwnSlide = false; /* Skip the slide */
                        }
                    }
                }
                if (isOwnSlide) { /* If it does not contain another slide, then it is an orphan slide */
                    slides.push(el);
                }
            }
        }
    }

    /* Write the notes page */
    var num = 0;
    for (var slide in slides) {
        if (slides.hasOwnProperty(slide)) { /* Make sure it is not an inherited object property */
            var el = slides[slide];
            var titleel = el.querySelector('h1, h2, h3, h4, h5, h6') || document.createElement('h1'); /* Look for a slide title, or create a blank one */
            num++;
            var title = num + ". " + titleel.innerText; /* Don't keep the html */
            var notesel = el.querySelector('aside.notes') || document.createElement('aside'); /* Look for notes, or create a blank one */
            var notes = notesel.innerHTML; /* Keep the html for formatting */
            w.document.write('<br><b>' + title + '</b><br>' + notes + '<br>');

        }
    }

    /* Write the stylesheet */
    w.document.write(
        '<style>@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800);body{padding:20px;color:#8e8071;font-size:15px;font-family:"Open Sans",AppleSDGothicNeo-Medium,"Segoe UI","Malgun Gothic",sans-serif;background:#fff;-webkit-font-smoothing:antialiased}a{color:#3269a0}a:hover{color:#4183c4}h1,h2,h3,h4,h5{font-weight:400;color:#5c5146;letter-spacing:-1px}h2{border-bottom:1px solid #e6e6e6;line-height:1.7em}h6{color:#777}hr{border:1px solid #e6e6e6}p{line-height:19px}p>code{font-family:"Open Sans",AppleSDGothicNeo-Medium,"Segoe UI","Malgun Gothic",sans-serif;color:#e86741;font-size:.9em}pre>code{font-size:1em;font-family:"Open Sans",AppleSDGothicNeo-Medium,"Segoe UI","Malgun Gothic",sans-serif;letter-spacing:-1px;font-weight:400}blockquote{border-left:4px solid #e6e6e6;padding:0 15px;font-style:italic;color:#e86741}table{background-color:#fafafa}table tr td,table tr th{border:1px solid #e6e6e6}table tr:nth-child(2n){background-color:#f2f2f2}</style></body></html>'
    );

    /* Finish up */
    w.document.close(); /* Close the document to prevent endless load on firefox */
    w.window.print(); /* Open the print dialog */
};