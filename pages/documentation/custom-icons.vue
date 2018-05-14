<template>
                    <div>
  <h1>
    custom-icons
  </h1>


  <hr>
  
  <div class="">
    <div>
      <div>
        <h1>Custom icons</h1>
        <p>&lt;p class="uk-text-lead"&gt;UIkit's icon library can be extended and customized with your own icon files.&lt;/p&gt;</p>
        <p>UIkit's icon library contains a number of SVG icons bundled in a single JavaScript file <code>uikit-icons.min.js</code>. This file includes all icons, no additional SVG files are needed. In this document, we will describe how you can add your
          own icons to this library or overwrite existing ones. Look at the
          <a href="icon.md">Icon component</a> for an overview of the default icons.</p>
        <hr>
        <h2>Add and overwrite icons</h2>
        <p>Your can overwrite any of the default icons from UIkit and create additional ones. To prepare, please
          <a href="installation.md#compile-from-github-source">setup UIkit from Github source</a>. You can now add your own SVG icons and include them in UIkit's build process.</p>
        <p>The build process will check two places for additional icon files:</p>
        <ol>
          <li>The custom folder: <code>/custom/icons/*.svg</code></li>
          <li>Any custom theme: <code>/custom/mytheme/icons/*.svg</code></li>
        </ol>
        <p>Compile UIkit to include the additional icons:</p>
        <pre><code class="language-sh">npm run compile
</code></pre>
        <p>Your additional icon will now be added to the icon library, in one of these two places:</p>
        <ol>
          <li><code>dist/js/uikit-icons.js</code> if you have added the icon to UIkit globally</li>
          <li><code>dist/js/uikit-icons-mytheme.js</code> if the icon is only inside a UIkit theme</li>
        </ol>
        <hr>
        <h2>Avoid naming conflicts</h2>
        <p>If you create an icon with an existing name, you will overwrite the default icon of the same name. For example, <code>/custom/icons/close.svg</code> would overwrite the default close icon.</p>
        <p>If your icon uses a name that has not been used before, it will be added as a new icon. For example, <code>/custom/icons/example.svg</code> will create a new icon that can be used via <code>&lt;span uk-icon="example"&gt;&lt;/span&gt;</code>.</p>
        <p>To check which names are already in use, look in the two directories <code>/src/images/components</code> and <code>/src/images/icons</code>. When you create a new icon, make sure the same name is not used in either of these two folder. Otherwise,
          it will overwrite the included icon.</p>
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