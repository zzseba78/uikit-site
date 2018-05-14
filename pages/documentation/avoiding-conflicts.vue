<template>
                    <div>
  <h1>
    avoiding-conflicts
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Avoiding conflicts</h1>
        <p>&lt;p class="uk-text-lead"&gt;Use a custom prefix and the scope mode to make UIkit work in any environment.&lt;/p&gt;</p>
        <p>By default, all classes and attributes in UIkit start with the <code>uk-</code> prefix. This avoids name collisions when introducing UIkit to existing projects or when combining it with other frameworks. UIkit allows to change that prefix. This
          even allows to use multiple versions of UIkit alongside each other. In addition, the scope mode allows to limit the UIkit styles to only affect certain parts on your pages.</p>
        <hr>
        <h2>Custom prefix</h2>
        <p>Using a custom prefix allows using multiple versions of UIkit on the same page. This might be needed when you are building something like a CMS plugin. In such cases, you do not know what other versions of UIkit might be loaded, so it is a good
          idea to use a custom prefix.</p>
        <p>When you have
          <a href="installation.md#compile-from-github-source">setup UIkit from Github source</a>, you can compile it with a custom prefix. If you choose a custom prefix, for example <code>xyz</code>, all attributes and classes will now start with that prefix, for example <code>xyz-grid</code> instead of
          <code>uk-grid</code>. The global JavaScript object <code>UIkit</code> will also be renamed to <code>xyzUIkit</code>.</p>
        <pre><code class="language-sh">npm run prefix -- -p xyz # replace xyz with your custom prefix.
</code></pre>
        <p><strong>Note</strong> <code>npm run prefix</code> will prompt for a prefix.</p>
        <p>The script will go through all CSS files in the <code>/dist</code> folder and replace them with your custom prefix version.</p>
        <p><strong>Note</strong> The Base component will still include styles that affect some base HTML elements. To avoid this, either create a
          <a href="less.md">custom build</a> without including the Base component, or use the scoped mode.</p>
        <hr>
        <h2>Scope mode</h2>
        <p>Using a scoped version of UIkit allows you to limit styles to only apply to a certain part of your document. This might be needed in environments of admin interfaces, such as the backend of WordPress or Joomla. When you have
          <a href="installation.md#compile-from-github-source">setup UIkit from Github source</a>, you can recompile UIkit as a scoped version.</p>
        <pre><code class="language-sh">npm run scope
</code></pre>
        <p><strong>Note</strong> Type <code>npm run scope -- -h</code> to get more options.</p>
        <p>You will find the generated CSS and JS files in the <code>/dist</code> folder. To use the scoped version, wrap the document section with your UIkit markup in an element with the <code>.uk-scope</code> class.</p>
        <pre><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- non UIkit markup --&gt;</span>
        ...

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uk-scope<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- your UIkit markup --&gt;</span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>Now you need to tell <code>uk-modal</code>, <code>uk-tooltip</code> and <code>uk-lightbox</code> where to append themselves into the DOM when they do not have the <code>container</code> option set, e.g. the default container for said components.
          To do so, set the following parameter:</p>
        <pre><code class="language-javascript"><span class="token comment">//simply pass the selector</span>
UIkit<span class="token punctuation">.</span>container <span class="token operator">=</span> <span class="token string">'.uk-scope'</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token comment">//or you can set an element directly, for example:</span>
UIkit<span class="token punctuation">.</span>container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'#id-of-scope-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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