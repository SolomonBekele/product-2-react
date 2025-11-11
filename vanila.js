const heading = document.createElement('h1');
        heading.innerHTML='this is react';
        const root = document.getElementById('root');
        root.appendChild(heading)

// using react create element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child1" }, // 👈 added key here
    [
      React.createElement("h1", { key: "h1-1" }, "I am H1 tag"),
      React.createElement("h2", { key: "h2-1" }, "I am H2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" }, // 👈 another key here
    [
      React.createElement("h1", { key: "h1-2" }, "I am H1 tag"),
      React.createElement("h2", { key: "h2-2" }, "I am H2 tag"),
    ]
  ),
]);

// const heading = React.createElement("h1", {id:"heading",className:"heading"}, "this is react cdn");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);