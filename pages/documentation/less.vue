<template>
                    <div>
  <h1>
    less
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Less</h1>
        <p>&lt;p class="uk-text-lead"&gt;Learn how to modify the UIkit styling and create your own theme with Less.&lt;/p&gt;</p>
        <p>When you have
          <a href="installation.md">installed UIkit</a> with Less sources, you can compile it and add your own custom theme.
          <a href="http://lesscss.org/">Less</a> is the language that the UIkit styles are written in. This allows you to include customizations in the build process, rather than manually overwriting a lot of CSS rules by hand.</p>
        <hr>
        <h2>How to build</h2>
        <p>The Less source files allow you to customize UIkit. To use the customized version on your website, you need to compile the Less sources into CSS. There are basically two approaches available to you: Setup your own build process or use the build
          scripts included in UIkit.</p>
        <h3>Use your own build process</h3>
        <p>To include UIkit in your project's build workflow, you need to import the core UIkit styles (<code>uikit.less</code>) or UIkit with its default theme (<code>uikit.theme.less</code>) into your project's own Less file. This main Less file then needs
          to be compiled in any way you like. Read the
          <a href="http://lesscss.org/usage/">official Less docs</a> if you are unsure how to compile Less.</p>
        <pre><code class="language-less">// Import UIkit default theme (or uikit.less with only core styles)
@import "node_modules/uikit/src/less/uikit.theme.less";

// Your custom code goes here, e.g. mixins, variables.
// See "how to create a theme" below for more info.
</code></pre>
        <h3>Use included build process</h3>
        <p>If you are want to change the styling of UIkit, you can use its build process to create a differently themed version of the CSS, that you can then include in your project. That way you do not need to set up your own build process.</p>
        <p>To include your own Less theme in the build process, create a <code>/custom</code> directory, which will contain all of your custom themes.</p>
        <p><strong>Note</strong> The <code>/custom</code> folder is listed in <code>.gitignore</code>, which prevents your custom files from being pushed into the UIkit repository. You might also have the <code>/custom</code> directory as your own Git repository.
          That way your theme files are under version control without interfering with the UIkit files.</p>
        <p>Create a file <code>/custom/my-theme.less</code> (or any other name) and import the core UIkit styles (<code>uikit.less</code>) or UIkit with its default theme (<code>uikit.theme.less</code>).</p>
        <pre><code class="language-less">// Import UIkit default theme (or uikit.less with only core styles)
@import "../src/less/uikit.theme.less";

// Your custom code goes here, e.g. mixins, variables.
// See "how to create a theme" below for more info.
</code></pre>
        <p>To compile UIkit and your custom theme into CSS, run the npm task <code>compile</code> .</p>
        <pre><code class="language-sh"># Run once to install all dependencies
npm install

# Compile all source files including your theme
npm run compile

# Watch files and compile automatically everytime a file changes
npm run watch
</code></pre>
        <p>The generated CSS files will be located in the <code>/dist/css</code> folder.</p>
        <p><strong>Note</strong> The custom theme is also available in the test files, just navigate your browser to the index of the <code>/test</code> directory and select your theme from the Dropdown menu.</p>
        <hr>
        <h2>Create a UIkit theme</h2>
        <p>When you have setup a file to put in your own Less code, you can get started to theme UIkit the way you want. If you have never used Less before, check out the
          <a href="http://lesscss.org/features/">language features</a>. When working with the UIkit Less sources, we have a few recommendations.</p>
        <h3>Use variables</h3>
        <p>A lot of customization is possible by simply overwriting the values of already declared variables. You can find all variables for each component inside their Less files of the framework and override them in your theme.</p>
        <p>First, find a Less variable you want to change inside the UIkit source. For example, the global link color is defined in <code>/src/less/components/variables.less</code>:</p>
        <pre><code class="language-less">// default value
@global-link-color: #4091D2;
</code></pre>
        <p>Then, overwrite the default by setting a custom value inside your own file, i.e. in <code>/custom/my-theme.less</code>:</p>
        <pre><code class="language-less">// new value
@global-link-color: #DA7D02;
</code></pre>
        <p>The compiled CSS will then have your custom value. But not only has the global link color changed. Many components make use of the <code>@global-*</code> variables to infer their own colors, and just adapt them slightly. That way you can rapidly
          create a theme by just changing some global variables.</p>
        <h3>Use hooks</h3>
        <p>To prevent overhead selectors, we use Mixins from
          <a href="http://lesscss.org">Less</a>, which hook into predefined selectors from the UIkit source and apply additional properties. Selectors don't have to be repeated throughout all documents and global changes can be made much more easily.</p>
        <p>First, find a rule that you want to extend by looking through the component's Less file, for example <code>/src/less/components/card.less</code> for the Card component:</p>
        <pre><code class="language-less">// CSS rule
.uk-card {
    position: relative;
    box-sizing: border-box;

    // mixin to allow adding new declarations
    .hook-card;
}
</code></pre>
        <p>Then, inject additional CSS by using the hook inside your own Less file, i.e. in <code>/custom/my-theme.less</code>:</p>
        <pre><code class="language-less">// mixin to add new declaration
.hook-card() { color: #000; }
</code></pre>
        <h3>Miscellaneous hooks</h3>
        <p>Should there be neither a variable nor a hook available, you can also create your own selector. To do so, use the <em>.hook-card-misc</em> hook and write your selector inside. This will sort your new selector to the right place of the compiled
          CSS file. Just add the following lines to your own Less file, i.e. to <code>/custom/my-theme.less</code>:</p>
        <pre><code class="language-less">// misc mixin
.hook-card-misc() {

    // new rule
    .uk-card a { color: #f00; }
}
</code></pre>
        <h3>Disable inverse component</h3>
        <p>The Inverse component includes additional styles to implement the flexible inverse behaviour. If your project does not make use of these styles, you can leave them out when compiling Less. This allows smaller file sizes of the compiled CSS. To
          do so, search for Less variables containing <code>color-mode</code> (e.g. <code>@card-primary-color-mode</code>), and set them to <code>none</code>.</p>
        <p>To disable the inverse styles completely, set:</p>
        <pre><code class="language-less">@inverse-global-color-mode: none;
</code></pre>
        <p>You can also disable the inverse mode for specific components:</p>
        <pre><code class="language-less">// Card
@card-primary-color-mode: none;
@card-secondary-color-mode: none;

// Navbar
@navbar-color-mode: none;

// Off-canvas
@offcanvas-bar-color-mode: none;

// Overlay
@overlay-primary-color-mode: none;

// Section
@section-primary-color-mode: none;
@section-secondary-color-mode: none;

// Tile
@tile-primary-color-mode: none;
@tile-secondary-color-mode: none;
</code></pre>
        <h2>How to structure your theme</h2>
        <p>In the examples above, we have added all custom rules directly to <code>/custom/my-theme.less</code>. When you change a few variables but are happy with the rest, this is perfectly fine. However, for larger customizations, we recommend to only
          use this file as an entry point for the Less compiler. You should better sort all rules into single files per component inside of a subfolder. This is the same structure that you can find in the default theme <code>/src/less/uikit.theme.less</code>.</p>
        <p><strong>Note</strong> The example assumes you are building a theme in the <code>/custom</code> directory of the full UIkit project. You can adapt these paths if you have set up your own build process.</p>
        <pre><code class="language-html">custom/

    <span class="token comment">&lt;!-- entry file for Less compiler --&gt;</span>
    my-theme.less

    <span class="token comment">&lt;!-- folder with single Less files --&gt;</span>
    my-theme/

        <span class="token comment">&lt;!-- imports all components in this folder --&gt;</span>
        _import.less

        <span class="token comment">&lt;!-- one file per customized component --&gt;</span>
        accordion.less
        alert.less
        ...
</code></pre>
        <p>The entry point for the Less compiler, <code>/custom/my-theme.less</code>:</p>
        <pre><code class="language-less">// Core
@import "../../src/less/uikit.less";

// Theme
@import "my-theme/_import.less";
</code></pre>
        <p>Your theme folder has one file which imports all single component customizations, <code>custom/my-theme/_import.less</code>:</p>
        <pre><code class="language-less">@import "accordion.less";
@import "alert.less";
// ...
</code></pre>
        <p><strong>Note</strong> With this setup you can remove the import statements of components you do not use. This will produce smaller CSS. Just make sure to preserve the correct import order as listet in
          <a href="https://github.com/uikit/uikit/blob/develop/src/less/components/_import.less">src/less/components/_import.less</a>.</p>
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