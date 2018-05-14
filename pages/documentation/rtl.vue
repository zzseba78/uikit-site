<template>
                    <div>
  <h1>
    rtl
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Right-to-left support</h1>
        <p>&lt;p class="uk-text-lead"&gt;UIkit supports right-to-left languages and allows you to switch the orientation of all design elements.&lt;/p&gt;</p>
        <p>The RTL version switches the orientation of UIkit design elements, including properties such as floats, text-align, position coordinates, direction of background shadows and more. However, all classes that are explicitly named <code>*-left</code>          or <code>*-right</code> stay the same in the RTL version.</p>
        <hr>
        <h2>Usage</h2>
        <p>To use UIkit in RTL mode, use <code>uikit.rtl.min.css</code> which is included in the <code>dist/</code> folder. Make sure to add the <code>dir="rtl"</code> attribute to the <code>&lt;html&gt;</code> tag of your website. The JavaScript supports
          RTL by default, so you can include the regular JS files without changing anything.</p>
        <pre><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/uikit.rtl.min.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/uikit.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>Take a look at the available components and just create markup as usual. There is no difference when working with the RTL version.</p>
        <hr>
        <h2>Compile from source</h2>
        <p>If you
          <a href="installation.md#compile-from-github-source">setup UIkit from Github source</a>, you can also compile the RTL version of UIkit yourself. This will include any
          <a href="less.md">custom UIkit theme</a> you have created in the <code>custom/</code> directory.</p>
        <pre><code class="language-sh">npm install
npm run compile-rtl
</code></pre>
        <p>The resulting files are now located in the <code>dist/</code> folder and end with <code>*.rtl.css</code>. The JavaScript files stay the same as with the default LTR version.</p>
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