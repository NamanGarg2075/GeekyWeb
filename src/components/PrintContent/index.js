import React from 'react';
// import Layout from '@theme/Layout';
// import styles from '../pages/introduction.css'
// import './courses.module.css' // if needed then

// import Link from '@docusaurus/Link';

function socialShare() {
    function printContent() {
        window.print()
    }
    return (
        <>
    <button class="button button--primary" onClick={printContent}>🖨️ Print</button>
    
    </>
  );
}

export default socialShare;