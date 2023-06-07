import React, { useEffect } from 'react';

function InArticleAd() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1497260367342842"
            data-ad-layout="in-article"
            data-ad-slot="1182795868"
            data-ad-format="fluid"
            data-full-width-responsive="true"
        ></ins>
    );
}

export default InArticleAd;
