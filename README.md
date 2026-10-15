install node command - npm init
eg:git repository: (https://github.com/sujithandletech/fresh-react)
npm install -D vite
npx vite
npm install react
npm install react-dom
npx vite build (production build)

remove main.js from package.jsoon

#vite
- dev build
- local server
- HMR - Hot module replacement
- File watching algorithm - written in c++
- caching - Faster builds
- image optimisation
- bundling
- compressing
- consistance Hashing
- code splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPS
- Tree shaking - remove unused code
- Different dev and prod bundles


two types of 

- Default export 
-Named Export


- here in this site i used swiggy Api.
- you have you add cors extension in your chrome
- json viewer also needed.

- cors proxy 
search - cors proxy free
- link
- [https://corsfix.com/free-cors-proxy](https://corsfix.com/free-cors-proxy)

- useEffect
// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial rendder(just once)
// if dependency array is [loginBtn] => called everytime loginBtn is updated
useEffect(() => {
    console.log("useEffect called");
      
},[loginBtn]);

- 2 types Routing in web apps
- Clientside Routing
- Serverside Routing


(life cycle method)

-parent constructor
-parent render

    - firstChild constructor
    - firstChild Render

    - secondChild constructor
    - secondChild Render

<DOM UPDATED - IN A SINGLE BATCH>
    -firstChild component DidMount
    -secondChild component DidMount

-parent component DidMount