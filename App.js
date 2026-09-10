// 
// <div id="root">
//      <div id="child">
//          <h1>Hello World</h1>
//      </div>
// </div>
//


const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
        ],
        React.createElement('div', {id: 'child2'}, [
            React.createElement('h1', {}, "i am h1 tag"),
            React.createElement('h2', {}, 'i am h2 tag')
        ])
    )
)





const heading = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
    "Hello world"
);

console.log(heading); //header object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
