<template>
                    <div>
  <h1>
    introduction
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Introduction</h1>
        <p>&lt;p class="uk-text-lead"&gt;Get familiar with the basic setup and overview of UIkit.&lt;/p&gt;</p>
        <p>First of all you need to download UIkit. For other packages and links to a CDN, head to the
          <a href="installation.md">installation guide</a> to learn more.</p>
        <p>&lt;a class="uk-button uk-button-primary" href="https://getuikit.com/download"&gt;Download UIkit&lt;/a&gt;</p>
        <hr>
        <h2>Package contents</h2>
        <p>The Zip file contains the compiled CSS and JavaScript files, which is everything you need to get started. Later, you might want to
          <a href="installation.md">install and compile UIkit</a> yourself and also
          <a href="less.md">create your own UIkit theme</a>.</p>
        <table>
          <thead>
            <tr>
              <th style="text-align:left">Folder</th>
              <th style="text-align:left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left"><code>/css</code></td>
              <td style="text-align:left">Contains the UIkit CSS and a right-to-left version.</td>
            </tr>
            <tr>
              <td style="text-align:left"><code>/js</code></td>
              <td style="text-align:left">Contains the UIkit JavaScript and the Icon Library JavaScript.</td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h2>HTML markup</h2>
        <p>Add the compiled and minified CSS and JavaScript to the <code>&lt;head&gt;</code> element of your HTML5 document. Also include the UIkit icon library. For your basic setup, that's it.</p>
        <pre><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/uikit.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/uikit.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/uikit-icons.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>Once you have included UIkit into your document, take a look at the available components and create your own markup inside the <code>&lt;body&gt;</code> element of your page.</p>
        <hr>
        <h2>UIkit autocomplete for your editor</h2>
        <p>Using UIkit works best if you have a solid code editor, for example
          <a href="https://www.sublimetext.com/">Sublime Text</a> or
          <a href="https://atom.io/">Atom</a>. To be even more efficient, we recommend that you install one of the autocomplete plugins for your favorite IDE or code editor. This saves a lot of time, as you won't have to look up and type all UIkit classes and markup.</p>
        <ul>
          <li>
            <a href="https://github.com/uikit/uikit-sublime">Autocomplete plugin for Sublime Text 3</a>
          </li>
          <li>
            <a href="https://atom.io/packages/uikit-atom">Autocomplete plugin for Atom</a>
          </li>
        </ul>
        <hr>
        <h2>Browser support</h2>
        <p>The following table lists the versions that UIkit is tested on. "Latest" means that it works just fine on all recent versions of that browser. With many browser moving towards a rolling release strategy, pinning down browser support to a specific
          version has become a little tricky in recent years. Long story short: UIkit will work on pretty much any modern browser.</p>
        <p>&lt;div class="uk-child-width-1-3 uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="&gt; * &gt; div"&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome.svg?sanitize=true"
          width="50" alt="Chrome"&gt; &lt;/div&gt; &lt;p&gt;Latest&lt;/p&gt; &lt;/div&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox.svg?sanitize=true"
          width="50" alt="Firefox"&gt; &lt;/div&gt; &lt;p&gt;Latest&lt;/p&gt; &lt;/div&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg?sanitize=true"
          width="50" alt="Edge"&gt; &lt;/div&gt; &lt;p&gt;Latest&lt;/p&gt; &lt;/div&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11.svg?sanitize=true"
          width="50" alt="IE"&gt; &lt;/div&gt; &lt;p&gt;11+&lt;/p&gt; &lt;/div&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios.svg?sanitize=true"
          width="50" alt="Safari"&gt; &lt;/div&gt; &lt;p&gt;9.1+&lt;/p&gt; &lt;/div&gt; &lt;div&gt; &lt;div class="uk-flex uk-flex-center uk-flex-middle"&gt; &lt;img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg?sanitize=true"
          width="50" alt="Opera"&gt; &lt;/div&gt; &lt;p&gt;Latest&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
        </p>
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