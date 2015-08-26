var path = require('path');

// Definitions
//-----------------------------------------------
const dirs = {
  root: __dirname,
  src:  path.join(__dirname, 'web_modules'),
  web:  path.join(__dirname, 'assets') // Change this to your project's webroot
};

// Export
//-----------------------------------------------
export default {
  dirs,

  paths: {
    src: {
      js:     path.join(dirs.src, 'js'),
      react:  path.join(dirs.src, 'js/apps'),
      styles: path.join(dirs.src, 'styles'),
      server: path.join(dirs.root, 'server'),
      assets: path.join(dirs.root, 'assets')
    },

    web: {
      images: path.join(dirs.web, 'images'),
      fonts:  path.join(dirs.web, 'fonts'),
      css:    path.join(dirs.web, 'css'),
      js:     path.join(dirs.web, 'js')
    }
  }
};
