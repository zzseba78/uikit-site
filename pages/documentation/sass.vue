<template>
                    <div>
  <h1>
    sass
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Sass</h1>
        <p>&lt;p class="uk-text-lead"&gt;Learn how to modify the UIkit styling and create your own theme with Sass.&lt;/p&gt;</p>
        <p>When you have
          <a href="installation.md">installed UIkit</a> with sources you will find the UIkit Sass version within the <em>/src/scss</em> folder. The Sass version allows you to include customizations in the build process, rather than manually overwriting a lot of CSS rules by hand.</p>
        <p><strong>Note</strong> Sass allows two different syntax version: Sass and SCSS. UIkit makes use of the SCSS syntax.</p>
        <hr>
        <h2>How to build</h2>
        <p>To include UIkit in your project's build workflow, you need to import three SCSS files from UIkit in the correct order into in your own SCSS code. Then, compile your file, e.g. running <code>sass site.scss &gt; site.css</code> or any other
          <a
            href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass">Sass compiler</a>. Be careful to keep the correct order as described in the following example.</p>
        <pre><code class="language-scss">// 1. Your custom variables and variable overwrites.
$global-link-color: #DA7D02;

// 2. Import default variables and available mixins.
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";

// 3. Your custom mixin overwrites.
@mixin hook-card() { color: #000; }

// 4. Import UIkit.
@import "uikit/src/scss/uikit-theme.scss";
</code></pre>
        <p><strong>Note</strong> The example uses the styling of the included default theme. Alternatively, you can import <code>variables.scss</code>, <code>mixins.scss</code> and <code>uikit.scss</code> to only include the core styling.</p>
        <hr>
        <h2>Create a UIkit theme</h2>
        <p>When you have setup a file to put in your own SCSS code, you can get started to theme UIkit the way you want. If you have never used SCSS before, check out the
          <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#features">language features</a>. When working with the UIkit SCSS sources, we have a few recommendations.</p>
        <h3>Use variables</h3>
        <p>A lot of customization is possible by simply overwriting the values of already declared variables. You can find all variables for each component inside their SCSS files of the framework or the <code>variables.scss</code> file and override them
          in your theme.</p>
        <p>First, find a SCSS variable you want to change inside the UIkit source. For example, the global link color is defined in <code>/src/scss/components/variables.scss</code>:</p>
        <pre><code class="language-scss">// default value
$global-link-color: #4091D2;
</code></pre>
        <p>Then, overwrite the default by setting a custom value inside your own file, i.e. to <code>site.scss</code> as described above:</p>
        <pre><code class="language-scss">// new value
$global-link-color: #DA7D02;
</code></pre>
        <p>The compiled CSS will then have your custom value. But not only has the global link color changed. Many components make use of the <code>@global-*</code> variables to infer their own colors, and just adapt them slightly. That way you can rapidly
          create a theme by just changing some global variables.</p>
        <h3>Use hooks</h3>
        <p>To prevent overhead selectors, we use Mixins from
          <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins">Sass</a>, which hook into predefined selectors from the UIkit source and inject additional properties. Selectors don't have to be repeated throughout all documents and global changes can be made much more easily.</p>
        <p>First, find a rule that you want to extend by looking through the component's SCSS file, for example <code>/src/scss/components/card.scss</code> for the Card component:</p>
        <pre><code class="language-scss">// SCSS rule
.uk-card {
    position: relative;
    box-sizing: border-box;

    // mixin to allow adding new declaration
    @include hook-card();
}
</code></pre>
        <p>Then, inject additional CSS by using the hook inside your own SCSS file, i.e. to <code>site.scss</code> as described above:</p>
        <pre><code class="language-scss">// mixin to add new declaration
@mixin hook-card() { color: #000; }
</code></pre>
        <h3>Inverse hooks</h3>
        <p>Inverse hooks allow you to customize how a component is styled when used in combination with the <code>.uk-light</code> or <code>.uk-dark</code> modifiers (check out the
          <a href="inverse.md">Inverse component</a> for details). These hooks are handled a little differently in the Sass version compared to the Less version. In the Sass version, every component has its own inverse hooks. You can see all available ones when going through
          the file <code>src/scss/mixins.scss</code>.</p>
        <p>For example, you can make a default button appear with a custom background whenever it is used as an inverse version.</p>
        <pre><code class="language-scss">@mixin hook-inverse-button-default(){
    background: lime;
}
</code></pre>
        <h3>Miscellaneous hooks</h3>
        <p>Should there be neither a variable nor a hook available, you can also create your own selector. To do so, e.g. use the <em>hook-card-misc()</em> mixin of the Card component and write a selector inside. This will sort your new selector to the right
          place of the compiled CSS file. Just add the following lines to your own SCSS file, i.e. to <code>site.scss</code> as described above:</p>
        <pre><code class="language-scss">// misc mixin
@mixin hook-card-misc() {

    // new rule
    .uk-card a { color: #f00; }
}
</code></pre>
        <h3>Disable inverse component</h3>
        <p>The Inverse component includes additional styles to implement the flexible inverse behaviour. If your project does not make use of these styles, you can leave them out when compiling Sass. This allows smaller file sizes of the compiled CSS. To
          do so, search for Sass variables containing <code>color-mode</code> (e.g. <code>$inverse-global-color-mode</code>), and set them to <code>none</code>.</p>
        <p>To disable the inverse styles completely, set:</p>
        <pre><code class="language-scss">$inverse-global-color-mode: none;
</code></pre>
        <p>You can also disable the inverse mode for specific components:</p>
        <pre><code class="language-scss">// Card
$card-primary-color-mode: none;
$card-secondary-color-mode: none;

// Navbar
$navbar-color-mode: none;

// Off-canvas
$offcanvas-bar-color-mode: none;

// Overlay
$overlay-primary-color-mode: none;

// Section
$section-primary-color-mode: none;
$section-secondary-color-mode: none;

// Tile
$tile-primary-color-mode: none;
$tile-secondary-color-mode: none;
</code></pre>
        <hr>
        <h2>How to structure your theme</h2>
        <p>In the examples above, we have added all custom rules directly to <code>site.scss</code>. When you change a few variables but are happy with the rest, this is perfectly fine. However, for larger customizations, we recommend to only use this file
          as an entry point for the Sass compiler. You should better sort all rules into single files per component inside of a subfolder. This is the same structure that you can find in the default theme <code>/src/scss/theme</code>.</p>
        <pre><code class="language-html"><span class="token comment">&lt;!-- uikit sources, might be in a subfolder when using npm --&gt;</span>
uikit/src/scss/

    components/
        _import.scss
        accordion.scss
        alert.scss
        ...

    theme/
        _import.scss
        accordion.scss
        alert.scss
        ...

    <span class="token comment">&lt;!-- other uikit files, some of which we will import below --&gt;</span>
    ...

<span class="token comment">&lt;!-- in here, we now put all your customizations, divided by component --&gt;</span>
theme/

    <span class="token comment">&lt;!-- create 2 files for each component you customize --&gt;</span>
    accordion.scss <span class="token comment">&lt;!-- overwrite variables in here --&gt;</span>
    accordion-mixins.scss <span class="token comment">&lt;!-- use hooks in here --&gt;</span>

    alert.scss
    alert-mixins.scss

    align.scss
    align-mixins.scss

    <span class="token comment">&lt;!-- etc for all components you customize --&gt;</span>
    ...

<span class="token comment">&lt;!-- this is your entry point to compile scss --&gt;</span>
site.scss

</code></pre>
        <p>The entry point for the Sass compiler is <code>site.scss</code>. Here you compile all source files in the following order:</p>
        <pre><code class="language-scss">// site.scss

// 1. Your custom variables and variable overwrites.
@import "theme/accordion.scss";
@import "theme/alert.scss";
@import "theme/align.scss";
// ... import all

// 2. Import default variables and available mixins.
@import "uikit/src/scss/variables.scss";
@import "uikit/src/scss/mixins.scss";

// 3. Your custom mixin overwrites.
@import "theme/accordion-mixins.scss";
@import "theme/alert-mixins.scss";
@import "theme/align-mixins.scss";
// ... import all

// 4. Import UIkit
@import "uikit/src/scss/uikit.scss";
</code></pre>
        <p>Now you can compile <code>site.scss</code> and the resulting CSS will include all your customizations.</p>
        <p><strong>Note</strong> You can further extend this setup by replacing part "4." with single import statements from the UIkit source. You can then omit some components you do not use to produce smaller CSS. Just copy from
          <a href="https://github.com/uikit/uikit/blob/develop/src/scss/components/_import.scss">src/scss/components/_import.scss</a> and make sure to preserve the correct import order.</p>
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