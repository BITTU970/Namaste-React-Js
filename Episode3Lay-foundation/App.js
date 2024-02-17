import React from "react";
import ReactDOM  from "react-dom/client";

//  React.createElement -> object ------------->HTML element (render)
// const heading = React.createElement(
//     "h1",
//      {className: "heading"},
//      "Bittu"
//      );
//      console.log(heading);

// create React Element using JSX
// JSX ---> React.createElement() ----->js object ------>html element(render)
// const heading2 = <h2 id ="heading2">React element using JSX</h2>

//console.log(heading2);

// way to write jsx in multiple lines
// const heading = (<h1 className="head">
// React jsx
// </h1>
// )

// React component ----1 class based component and functional component
// Functional component always start with capital letter.
//const HeadingComponent = () => <h1>Namaste react</h1>;    // shorthand of arrow function

// const HeadingComponent = () =>{
//     return<h1>Namaste react</h1>;   //return is not mandatory if we have only one line statement
// }

// const HeadingComponent = () =>(
//     <div className="container">
//     <h1 className="heading">Namaste React🚀🚀💚💚</h1>
//     </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);  //  injecting  the component into DOM 
//root.render(heading2);  // injecting react element

const hello = <span>Hii.. friends!</span>

// component composition
const Title = () =>(
    <div id = "title">
        <h1>{<span>{hello}</span>}  Welcome To My Website🚀🚀❤️❤️❤️</h1>
    </div>
);

const HeadingComponent =() =>(
    <div className="container">
        <Title /> {/* calling another component */}
        <h3>Hii.. Namaste React🚀🚀💚💚</h3>
    </div>
);
//ReactDOM.render(<HeadingComponent />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
