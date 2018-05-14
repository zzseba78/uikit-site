<template>
                    <div>
  <h1>
    webpack
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Webpack</h1>
        <p>You can use Webpack to include and bundle UIkit's JavaScript in your project.</p>
        <hr>
        <h2>File structure</h2>
        <p>For the basic project setup, we will create the following files:</p>
        <pre><code class="language-html">app/
    index.js
index.html
package.json
</code></pre>
        <p>The following commands will create and fill the file <code>package.json</code>. It contains the dependencies for Npm. We include UIkit and Webpack.</p>
        <pre><code class="language-sh">mkdir uikit-webpack &amp;&amp; cd uikit-webpack
npm init -y
npm install --save uikit
npm install --save-dev webpack
</code></pre>
        <p>As an entry file for the projects JavaScript, create a file <code>app/index.js</code> with the following content.</p>
        <pre><code class="language-js"><span class="token keyword">import</span> UIkit <span class="token keyword">from</span> <span class="token string">'uikit'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icons <span class="token keyword">from</span> <span class="token string">'uikit/dist/js/uikit-icons'</span><span class="token punctuation">;</span>

<span class="token comment">// loads the Icon plugin</span>
UIkit<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Icons<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// components can be called from the imported UIkit reference</span>
UIkit<span class="token punctuation">.</span><span class="token function">notification</span><span class="token punctuation">(</span><span class="token string">'Hello world.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <p>This way you have the reference to UIkit available without having to include its JavaScript files in your HTML. Instead, we can include the full bundle that will be created by Webpack. Create the main HTML file <code>index.html</code> with the
          following content.</p>
        <pre><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>node_modules/uikit/dist/css/uikit.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uk-container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uk-card uk-card-body uk-card-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uk-card-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example headline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uk-button uk-button-default<span class="token punctuation">"</span></span> <span class="token attr-name">uk-tooltip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title: Hello World<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dist/bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p><strong>Note</strong> For simplicity reasons, we have included the pre-built CSS. In a real project, you probably want to build the
          <a href="less.md">Less</a> files and included the compiled CSS instead.</p>
        <h2>Webpack config</h2>
        <p>To configure Webpack to compile <code>app/index.js</code> into <code>dist/bundle.js</code>, create the file <code>webpack.config.js</code> with the following content.</p>
        <pre><code class="language-js"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token punctuation">:</span> <span class="token string">'./app/index.js'</span><span class="token punctuation">,</span>
    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        filename<span class="token punctuation">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
        path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
        <p>Now, run Webpack in your project's main directory.</p>
        <pre><code class="language-sh">./node_modules/.bin/webpack # Run webpack from local project installation
.\node_modules\.bin\webpack # Run webpack on Windows
webpack # If you installed webpack globally
</code></pre>
        <p>This completes the basic setup of your project. Navigate to <code>index.html</code> in your browser and confirm that the basic UIkit styling is applied to your page. If the bundling was successful, a notification should pop up at the top of your
          page and the button should display a message on hover.</p>
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