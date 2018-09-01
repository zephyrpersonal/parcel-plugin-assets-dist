# parcel-plugin-assets-dist

a parcel plugin to transfer bundled assets to a subdirectory for an easy-deploy purpose.

## Install

install package and all done

```bash
yarn add -D parcel-plugin-assets-dist
```

## What for

this plugin will do the job only in production enviroment

e.g. NODE_ENV=production parcel build index.html

original

```
src/index.html  ===>   dist/index.html
src/whatever/a.css  ===>   dist/a.css
src/whatever/b.js ===>   dist/b.js
```

use this plugin

```
src/index.html  ===>   dist/index.html
src/whatever/a.css  ===>   dist/assets/a.css
src/whatever/b.js ===>   dist/assets/b.js
```

and now you may skip the complex configuration of your gateway

## Required

parcel-bundler >= 1.8

node >= 7
