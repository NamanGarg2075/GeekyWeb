import React from 'react';
import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
// import {StickyShareButtons} from 'sharethis-reactjs';
// import {InlineFollowButtons} from 'sharethis-reactjs';
// import Layout from '@theme/Layout';
// import styles from '../pages/introduction.css'
// import './courses.module.css' // if needed then

// import Link from '@docusaurus/Link';

function pprrint() {
    return (
        <>
    {/* <button class="button button--primary" onClick={pprint}>Print</button> */}
{/* <hr/> */}
<hr/>
<h2>React This Page</h2>
    <InlineReactionButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              'slight_smile',
              'heart_eyes',
              'laughing',
              'astonished',
              'sob',
              'rage'
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)

            // OPTIONAL PARAMETERS
            url: 'https://geekyweb.tk' // (defaults to current url)
          }}
          />
          <hr/>
          {/* <h2>React This Docus</h2> */}
<InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'print',
              'email',
              'telegram',
              'facebook',
              'whatsapp',
              'linkedin',
              // 'twitter',
              // 'reddit',
              // 'pinterest',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 10,            // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40,             // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: '', // (defaults to current url)
            image: '',  // (defaults to og:image or twitter:image)
            description: 'Check Out this now',       // (defaults to og:description or twitter:description)
            title: '',            // (defaults to og:title or twitter:title)
            message: 'Check Out this amazing doc',     // (only for email sharing)
            subject: 'Amazing Document',  // (only for email sharing)
            username: '' // (only for twitter sharing)
          }}
        />
    </>
  );
}

export default pprrint;