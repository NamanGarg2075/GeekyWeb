/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  HTML: [
    {
      type: 'category',
      label: 'Getting Started with HTML',
      link: { type: 'doc', id: 'languages/html/getting-started/introduction' },
      items: [

        'languages/html/getting-started/element-insight',
        'languages/html/getting-started/creating-page',
        'languages/html/getting-started/breakdown-page',
        'languages/html/getting-started/remarks',
      ],
    },

    {
      type: 'category',
      label: 'Doctypes',
      link: { type: 'doc', id: 'languages/html/doctypes/introduction' },
      items: [
        'languages/html/doctypes/adding-the-doctype',
        'languages/html/doctypes/html-5-doctype',
        'languages/html/doctypes/remarks',
      ],
    },
    {
      type: 'category',
      label: 'Headings',
      link: { type: 'doc', id: 'languages/html/headings/introduction' },
      items: [
        'languages/html/headings/using-headings',
        'languages/html/headings/correct-structure-matters',
        'languages/html/headings/remarks',
      ],
    },
    {
      type: 'category',
      label: 'Lists',
      link: { type: 'doc', id: 'languages/html/lists/introduction' },
      items: [
        'languages/html/lists/ordered-list',
        'languages/html/lists/unordered-list',
        'languages/html/lists/nested-list',
        'languages/html/lists/remarks',
      ],
    },
  ],

  KOTLIN: [{ type: 'autogenerated', dirName: 'languages/kotlin' }],
  JQUERY: [{ type: 'autogenerated', dirName: 'languages/jquery' }],
  JAVASCRIPT: [{ type: 'autogenerated', dirName: 'languages/javascript' }],
};

module.exports = sidebars;
