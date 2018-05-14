<template>
                    <div>
  <h1>
    javascript
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>JavaScript</h1>
        <p>Once you have
          <a href="installation.md">installed UIkit</a>, include the JavaScript files on your page by adding them to the <code>&lt;head&gt;</code> section. You can also choose to use the <code>defer</code> attribute to delay script execution.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/uikit.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/uikit-icons.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <hr>
        <h2>UIkit and reactive JavaScript frameworks</h2>
        <p>UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript frameworks like
          <a href="http://vuejs.org/">Vue.js</a> and React.</p>
        <p><strong>Note</strong> The UIkit website and its documentation that you are currently looking at is built that way. It is a perfect example of how &lt;em&gt;UIkit and Vue.js&lt;/em&gt; can be integrated. Head over to its
          <a href="https://github.com/uikit/uikit-site">Github repo</a> to see what a good setup can look like.</p>
        <hr>
        <h2>Component usage</h2>
        <p>You can use UIkit components by adding <code>uk-*</code> or <code>data-uk-*</code> attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered
          first.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">uk-sticky</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>offset: 50;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-uk-sticky</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>offset: 50;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p><strong>Note</strong>
          <a href="https://facebook.github.io/react/">React</a> will work with <code>data-uk-*</code> prefixes only.</p>
        <p>You can also initialize components via JavaScript and apply them to elements in your document.</p>
        <pre><code class="language-js"><span class="token keyword">var</span> stickys <span class="token operator">=</span> UIkit<span class="token punctuation">.</span><span class="token function">sticky</span><span class="token punctuation">(</span><span class="token string">'#sticky'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    offset<span class="token punctuation">:</span> <span class="token number">50</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <hr>
        <h2>Component configuration</h2>
        <p>Each component comes with a set of configuration options that let you customize their behavior. You can set the options on a per instance level or globally.</p>
        <h3>Instance</h3>
        <p>Options can be set:</p>
        <p>with the <code>key: value;</code> format,</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">uk-sticky</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>offset: 50; top: 100;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>in valid JSON format,</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">uk-sticky</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>{<span class="token punctuation">"</span>offset<span class="token punctuation">"</span>: 50, <span class="token punctuation">"</span>top<span class="token punctuation">"</span>: 100}<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>or with single attributes.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">uk-sticky</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>For <em>Primary</em> options, its key may be omitted, if it's the only option in the attribute value. Please take a look at the specific component documentation to find which option is the <em>Primary</em> option.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">uk-icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre>
        <p>You can also pass options to the component constructor programmatically.</p>
        <pre><code class="language-js"><span class="token comment">// Passing an options object.</span>
UIkit<span class="token punctuation">.</span><span class="token function">sticky</span><span class="token punctuation">(</span><span class="token string">'.sticky'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    offset<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    top<span class="token punctuation">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// If the component supports Primary options.</span>
UIkit<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token string">'#drop'</span><span class="token punctuation">,</span> <span class="token string">'top-left'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <h3>Precedence</h3>
        <p>Options passed via the component attribute will have the highest precedence, followed by single attributes and then JavaScript.</p>
        <pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">uk-sticky</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>offset: 50;<span class="token punctuation">"</span></span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- The offset will be 50 --&gt;</span>
</code></pre>
        <h3>Globally</h3>
        <p>Component options can be changed globally by setting the component's <code>defaults</code> property.</p>
        <pre><code class="language-js">UIkit<span class="token punctuation">.</span>components<span class="token punctuation">.</span>sticky<span class="token punctuation">.</span>options<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
UIkit<span class="token punctuation">.</span>components<span class="token punctuation">.</span>sticky<span class="token punctuation">.</span>options<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre>
        <hr>
        <h2>Programmatic use</h2>
        <p>Programmatically, components may be initialized with the <code>element, options</code> arguments format in JavaScript. The <code>element</code> argument may be any <code>Node</code>, <code>selector</code> or <code>jQuery object</code>. You'll
          receive the initialized component as return value. <code>Functional Components</code> (e.g. <code>Notification</code>) should omit the <code>element</code> parameter.</p>
        <pre><code class="language-js"><span class="token comment">// Passing a selector and an options object.</span>
<span class="token keyword">var</span> sticky <span class="token operator">=</span> UIkit<span class="token punctuation">.</span><span class="token function">sticky</span><span class="token punctuation">(</span><span class="token string">'.sticky'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    offset<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    top<span class="token punctuation">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Functional components should omit the 'element' argument.</span>
<span class="token keyword">var</span> notifications <span class="token operator">=</span> UIkit<span class="token punctuation">.</span><span class="token function">notification</span><span class="token punctuation">(</span><span class="token string">'MyMessage'</span><span class="token punctuation">,</span> <span class="token string">'danger'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <p><strong>Note</strong> The options names must be in their camel cased representation, e.g. <code>show-on-up</code> becomes <code>showOnUp</code>.</p>
        <p>After initialisation you can get your component by calling the same initialisation function, omitting the options parameter.</p>
        <pre><code class="language-js"><span class="token comment">// Sticky is now the prior initialised components</span>
<span class="token keyword">var</span> sticky <span class="token operator">=</span> UIkit<span class="token punctuation">.</span><span class="token function">sticky</span><span class="token punctuation">(</span><span class="token string">'.sticky'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <p><strong>Note</strong> Using <code>UIkit[componentName](selector)</code> with css selectors will always return the first occurrence only! If you need to access all instances do
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">query</a> the elements first. Then apply the getter to each element separately - <code>UIkit[componentName](element)</code>.</p>
        <p>Initializing your components programmatically gives you the possibility to invoke their functions directly.</p>
        <pre><code class="language-js">UIkit<span class="token punctuation">.</span><span class="token function">offcanvas</span><span class="token punctuation">(</span><span class="token string">'#offcanvas'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <p>Any component functions and variables prefixed with an underscore are considered as part of the internal API, which may change at any given time.</p>
        <p>Each component triggers DOM events that you can react to. For example when an Modal is shown or a Scrollspy element becomes visible.</p>
        <pre><code class="language-js">UIkit<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'#offcanvas'</span><span class="token punctuation">,</span> <span class="token string">'show'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        <p>The component's documentation page lists its events.</p>
        <p>Sometimes, components like Grid or Tab are hidden in the markup. This may happen when used in combination with the Switcher, Modal or Dropdown. Once they become visible, they need to adjust or fix their height and other dimensions.</p>
        <p>UIkit offers several ways of updating a component. Omitting the <code>event</code> parameter will trigger an <code>update</code> event.</p>
        <pre><code class="language-js"><span class="token comment">// Calls the update hook on components registered on the element itself, it's parents and children.</span>
UIkit<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>element <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> event <span class="token operator">=</span> <span class="token string">'update'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Updates the component itself.</span>
component<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>event <span class="token operator">=</span> <span class="token string">'update'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
        <p>If you need to make sure a component is properly destroyed, for example upon removal from the DOM, you can call its <code>$destroy</code> function.</p>
        <pre><code class="language-js"><span class="token comment">// Destroys the component. For example unbind its event listeners.</span>
component<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Also destroys the component, but also removes the element from the DOM.</span>
component<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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