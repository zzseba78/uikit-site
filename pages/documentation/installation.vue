<template>
                    <div>
  <h1>
    installation
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Installation</h1>
        <p>&lt;p class="uk-text-lead"&gt;Learn where to download and how to compile the UIkit sources.&lt;/p&gt;</p>
        <h2>Download</h2>
        <p>You have the following options to get UIkit:</p>
        <ul>
          <li>Download the
            <a href="https://github.com/uikit/uikit/releases/latest">latest release</a> with pre-built JavaScript and CSS.</li>
          <li>Install with
            <a href="https://www.npmjs.com/package/uikit">Npm</a> to get the pre-built JavaScript, CSS and the Less source files. This is recommended when using UIkit for a typical web project: <code>npm install uikit</code></li>
          <li>Clone the repo to get all source files including build scripts: <code>git clone git://github.com/uikit/uikit.git</code></li>
        </ul>
        <p>The compiled files of all UIkit versions are also hosted on the Cloudflare content delivery network via
          <a href="https://cdnjs.com/libraries/uikit">cdnjs.com</a>.</p>
        <pre><code class="language-html"><span class="token comment">&lt;!-- UIkit CSS --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/uikit/[uikit-version]/css/uikit.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- UIkit JS --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/uikit/[uikit-version]/js/uikit.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/uikit/[uikit-version]/js/uikit-icons.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p><strong>Note</strong> The latest
          <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity">Subresource Integrity (SRI)</a> hashes can be obtained through
          <a href="https://cdnjs.com/libraries/uikit/">CDNJS</a>.</p>
        <hr>
        <h2>File structure of the source</h2>
        <p>The Github project contains all source files which are compiled into the <code>dist</code> folder.
          <a href="http://lesscss.org">Less</a> sources are compiled into CSS files, JavaScript sources are bundled and transpiled into ECMAScript 5 and icons are bundled into the icon library.</p>
        <table>
          <thead>
            <tr>
              <th style="text-align:left">Folder</th>
              <th style="text-align:left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left"><code>/src</code></td>
              <td style="text-align:left">Contains all Less, JavaScript and image sources.</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>/dist</code></td>
              <td style="text-align:left">Contains compiled CSS and JS, updated on every release.</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>/tests</code></td>
              <td style="text-align:left">Contains HTML test files of all components.</td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h2>Compile from Github source</h2>
        <p>To compile UIkit yourself, you can use the included build scripts.</p>
        <pre><code class="language-sh"># Run once to install all dependencies
npm install

# Compile all source files
npm run compile

# Watch files and compile automatically everytime a file changes
npm run watch
</code></pre>
        <p><strong>Note</strong> Use Node.js version 8.2.0 or higher.</p>
        <p>The compiled <code>dist</code> folder now contains additional files which are not checked in by default. The build task will create even more additional files if you have added a
          <a href="less.md#use-included-build-process">custom UIkit theme</a>.</p>
        <pre><code class="language-html">/dist/css

    <span class="token comment">&lt;!-- UIkit's CSS --&gt;</span>
    uikit.css
    uikit.min.css

    <span class="token comment">&lt;!-- UIkit's core styles, without the default theme --&gt;</span>
    uikit-core.css
    uikit-core.min.css

    <span class="token comment">&lt;!-- UIkit's CSS in a right-to-left version --&gt;</span>
    uikit.rtl.css
    uikit.rtl.min.css


/dist/js

    <span class="token comment">&lt;!-- UIkit's JavaScript --&gt;</span>
    uikit.js
    uikit.min.js

    <span class="token comment">&lt;!-- Stripped down JavaScript. Core functionality without additional components --&gt;</span>
    uikit-core.js
    uikit-core.min.js

    <span class="token comment">&lt;!-- Icon Library --&gt;</span>
    uikit-icons.js
    uikit-icons.min.js

    <span class="token comment">&lt;!-- Additional components (e.g. Lightbox), only needed when including uikit-core.js --&gt;</span>
    /components
</code></pre>
        <p>To use UIkit's CSS and JavaScript,
          <a href="introduction.md#html-markup">include the files</a> in your own HTML and then create the markup of any of the components listed here in the docs.</p>
        <p>To compile UIkit automatically everytime you change the LESS or JavaScript, you can use the included build scripts.</p>
        <pre><code class="language-sh">npm run watch
</code></pre>
      </div>
    </div>
    
    
    
    
    
    
    
  </div>
  <hr>
  <i>package:
    <a href="#">
      uikit
    </a>
  </i>
  
</div>
                  </template>