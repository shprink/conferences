<section>
    <img src="../../img/wp-api-logo.jpg" style="margin-top: 100px" class="img-plain"/>
    <h3>Access your WordPress site's data through an easy-to-use HTTP REST API.</h3>
    Example: https://dev.julienrenaux.fr/wp-json/wp/v2/posts
</section>

<section>
    <h3>wp-api-angular</h3>
    <h4>Angular (1 & 2) wrapper for wp-api</h4>
    https://github.com/shprink/wp-api-angular

<pre style="font-size: 60%"><code class="typescript" data-trim>
import { WpApiModule, WpApiLoader, WpApiStaticLoader
 } from 'wp-api-angular'

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'YOUR_DOMAIN/wp-json/');
}
@NgModule({
  imports: [
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
})
</code></pre>
<div class="fragment current-only" data-code-focus="1,9-13"></div>
<div class="fragment current-only" data-code-focus="4-6,11"></div>
    <aside class="notes"></aside>
</section>

<section>
    <h3>wp-api-angular</h3>

<pre style="font-size: 85%"><code class="typescript" data-trim>
import 'rxjs/add/operator/toPromise';

class Test {
  constructor(private wpApiPosts: WpApiPosts) {
    this.wpApiPosts.getList()
      .toPromise()
      .then(response => response.json())
      .then(body => {})
      .catch(error => {})
  }
}
</code></pre>
    <aside class="notes"></aside>
</section>

<section>
    <h3>wp-api-angular providers</h3>
    <ul>
        <li>wpApiComments</li>
        <li>wpApiCustom</li>
        <li>wpApiMedia</li>
        <li>wpApiPages</li>
        <li>wpApiPosts</li>
        <li>wpApiStatuses</li>
        <li>wpApiTaxonomies</li>
        <li>wpApiTerms</li>
        <li>wpApiTypes</li>
        <li>wpApiUsers</li>
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
<pre style="font-size: 85%"><code class="shell" data-trim>
# Clone and use the latest version
$ git clone shprink/wordpress-hybrid-client.git
$ cd wordpress-hybrid-client
$ git checkout v3

# Install
$ yarn

# Run on the browser
$ npm start
</code></pre>
    
    <aside class="notes"></aside>
</section>

<section>
    <iframe width="350px" height="800px" style="background-color:white; height: 500px;" src="http://m.julienrenaux.fr"></iframe>

    
    <aside class="notes"></aside>
</section>
