import React from "react";
import ReactDOM from "react-dom/client";



const headingJsx = <h1>welcome to react element</h1>
const Logo = () => <p>logo</p>
const HeadingComponent = () => (
  <div>
      <Logo/>
      <h2> welcome to react component</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingJsx);
root.render(<HeadingComponent/>)








