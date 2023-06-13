import React, { useEffect } from 'react';

function DisplayAd() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', marginTop: '20px', marginBottom: '10px' }}
            data-ad-client="ca-pub-1497260367342842"
            data-ad-slot="1567671183"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
}

export default DisplayAd;
