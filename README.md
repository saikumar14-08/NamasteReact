# NamasteReact

#### Ep-02: Igniting our React app.

-> There is no specific full form for the NPM. It is just a random Abrevation but we call it as Node Package Manager.

-> npm init - Creates package.json - It is a configuration for NPM.
  -> Packages are also called dependencies.
  -> Tracks the dependencies.

-> Most imp thing in project is bundler.
  -> Bundler helps in generating production ready code.

-> Node version and npm version are dependent on each other. npm version updates with the node version.
-> Here we are using parcel.
  -> All the bundlers do same. But code differs.
  -> npm install -d parcel.
  -> -d: dev dependency, it is required in development phase.
  -> normal dependency: Can also be used in production.
  -> Error faced with parcel installation with node 16.18.1 version.
  -> So again shifted to the 16.10.1 version.

-> Version numburs info:
  -> X.y.z: Generally version numbers use patch update(z), minor update(y), major update(X).
  -> We have caret ^ : Allows to update minor and patch versions but not the major version.
  -> We have tilde ~ : Allows only patch level updates.

-> package-lock.json:
  -> When it will be created?
  -> It keeps a record of exact version of dependency which we installed even though we use ~ or ^.
  -> In the file we have other things along with the exact version. Those are the sub-dependencies which are required by our dependency.
  ->

-> Parcel has its own dependencies and these dependencies has its own dependencies(transitive dependencies).    So all these are installed in the node_modules.
-> Transitive dependencies has its own package.json

-> npx = Used to run the npm package.
-> Using CDN is not a good way to use react, because:
  -> CDN makes call to unpkg.com which requires a network call.
  -> Url should be changing along with the version change.

-> All the imports which we do gets imported from our node_modules.
-> We need to use type='module' in script tag because:
  -> Our script tag in index.html considers our app just as normal javascript file but normal JS file don't have imports.
  -> So we need to use type='module' so that react considers it as module.

-> Along with react, bundler also should be speed to make our app faster.

-> Parcel is a beast. Some features of parcel are:
  -> Creates dev build.
  -> Created Local Server
  -> Auto refresh because of HMR - Hot Module Replacement
  -> HMR is possible because of File Watching Algorithm which is written in C++.
  -> Caching in .parcel-cache - faster builds
  -> Image optimization.
  -> Minification of production build
  -> Compress
  -> Consistent hashing - Google it.
  -> Code splitting.
  -> Differential bundling - To support older browsers.
  -> Better Error suggestions.
  -> Supports https.
  -> Tree Shaking - Removes unused methods/packages code.
  -> production build: npx parcel build index.html

-> BrowsersList:

# Parcel official documentation: https://parceljs.org/
# Browsers list compatability: https://browsersl.ist/