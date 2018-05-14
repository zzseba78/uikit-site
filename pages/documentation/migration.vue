<template>
                    <div>
  <h1>
    migration
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Migrate to UIkit 3</h1>
        <p>&lt;p class="uk-text-lead"&gt;Migrate an existing UIkit 2 website to the new UIkit 3.&lt;/p&gt;</p>
        <p>Uikit 3 offers a migration tool that runs in your browser and lists all necessary changes from an existing Uikit 2 site. Two options are available to run the tool: Via a bookmark or by including a single JavaScript file. The necessary migration
          changes are then listed in your browser's console.</p>
        <hr>
        <h2>Browser bookmark</h2>
        <p>The easiest way to use the migration tool is via a bookmark in your browser. You can then run the script on any page that you navigate to by simply clicking the bookmark. Just drag the following link into your browser's bookmark section.</p>
        <p>Drag into your bookmark bar &lt;span uk-icon="icon: arrow-right"&gt;&lt;/span&gt; &lt;a class="uk-button uk-button-primary" href="javascript: (function () { var script = document.createElement('script'); script.setAttribute('src', 'https://getuikit.com/migrate.min.js');
          document.body.appendChild(script); }());"&gt;UIkit 3 Migration&lt;/a&gt;</p>
        <p>Alternatively, you can manually create a bookmark with the following code as its URL.</p>
        <pre><code class="language-js">javascript<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'https://getuikit.com/migrate.min.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <hr>
        <h2>HTML integration</h2>
        <p>You can also run the migration tool by loading the needed JavaScript on your website. This way the migration script will always be loaded on your website. Remember to remove this when you have completed the migration. Add the following line just
          before the closing <code>&lt;/body&gt;</code> tag.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://getuikit.com/migrate.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <hr>
        <h2>Usage</h2>
        <p>To start the migration, replace the UIkit 2 files of your website with their UIkit 3 equivalents (both JS and CSS) and run the migration tool using one of the solutions listed above. To learn how to change your markup, open the developer console
          of your browser. Your see a list of warnings and notices that tell you what to change. You can click the arrows next to any message to see more details about the necessary changes.</p>
        <p>
          <img src="/Users/jms/uikit/images/migration-console.gif" alt="Console output">
        </p>
        <p>Every notice or warning message tells you what to change, including a list of all affected HTML elements. More complex changes are explained with examples that are easy to follow. The best way to migrate is to fix one component after another.
          That way you can see if the error messages are gone after a reload and also see the changes on your site.</p>
        <h3>Warnings</h3>
        <p>Warnings highlight all CSS classes or JavaScript attributes which are not supported anymore or have changed in UIkit 3. These warnings have to be fixed to migrate your website to UIkit 3.</p>
        <h3>Notices</h3>
        <p>Notices highlight potential issues that might not break your site. Some notices might not require a change at all. This is caused by the fact that some names from UIkit 2 still exist in UIkit 3, but now belong to a different component or carry
          different semantics. This can't be detected by the selectors we use to determine if this is a correct markup, so you need to take a look into it and need to decide if you already have changed it or still need to fix it.</p>
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