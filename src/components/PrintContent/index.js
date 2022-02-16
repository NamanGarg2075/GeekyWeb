import React from 'react';

import   './main'
// import   '@site/src/components/PrintContenr'
// import Layout from '@theme/Layout';
// import styles from '../pages/introduction.css'
// import './courses.module.css' // if needed then

// import Link from '@docusaurus/Link';

function socialShare() {
    // function printContent() {
    //     window.print()
    // }
    return (
        <>
    {/* <button class="button button--primary" onClick={printContent}>🖨️ Print</button> */}
    
    <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_facebook"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_email"></a>
</div>
    </>
  );
}

export default socialShare;