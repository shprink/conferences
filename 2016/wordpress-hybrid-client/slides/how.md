<section>
    <img src="../../img/wp-api-logo.jpg" style="margin-top: 100px" class="img-plain"/>
    <h3>Access your WordPress site's data through an easy-to-use HTTP REST API.</h3>
    http://v2.wp-api.org/
</section>

<section>
    <h3>wp-api-angular</h3>
    <h4>Angular (1 & 2) wrapper for wp-api</h4>
    https://github.com/shprink/wp-api-angular

<pre class="fragment" style="font-size: 60% !important"><code class="js" data-trim>
app.config((WpApiProvider) => {
    WpApiProvider.setBaseUrl('dev.julienrenaux.fr/wp-json');
});
</code></pre>
<pre class="fragment" style="font-size: 60% !important"><code class="js" data-trim>
app.controller(($wpApiPosts) => {
    $wpApiPosts.getList({
        page: 1,
        per_page: 10,
        "filter[orderby]": "date"
        "filter[orderby]": "asc"
    }).then((posts) => {
        // do something with posts
    });
});
</code></pre>
    
    <aside class="notes"></aside>
</section>

<section>
    <h3>wp-api-angular services</h3>
    <ul>
        <li>$wpApiComments</li>
        <li>$wpApiCustom</li>
        <li>$wpApiMedia</li>
        <li>$wpApiPages</li>
        <li>$wpApiPosts</li>
        <li>$wpApiStatuses</li>
        <li>$wpApiTaxonomies</li>
        <li>$wpApiTerms</li>
        <li>$wpApiTypes</li>
        <li>$wpApiUsers</li>
    </ul>
    
    <aside class="notes"></aside>
</section>

<section>
    <h3>Push Notifications <small>by Delite Studio</small></h3>
    <h4>Self hosted and free push notifications</h4>
    <img src="./img/push_notifications.png" width="60%" class="img-plain"/>
    https://wordpress.org/plugins/push-notifications-for-wp/
</section>

<section>
    <h3>Installation</h3>
<pre style="font-size: 65% !important"><code class="shell" data-trim>
# Clone and use the latest version
$ git clone shprink/wordpress-hybrid-client.git
$ cd wordpress-hybrid-client

# List all versions
$ git tag
$ git checkout < the-latest-version >

# Install
$ npm install && npm run installWPHC

# Run on the browser
$ npm start
</code></pre>
    
    <aside class="notes"></aside>
</section>

<section>
    <iframe width="350px" height="800px" style="background-color:white; height: 500px;" src="http://m.julienrenaux.fr"></iframe>

    
    <aside class="notes"></aside>
</section>
