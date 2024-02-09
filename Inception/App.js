const heading = React.createElement("h1", 
{id:"heading",abc:"xyz"}, 
"Hello world from React js123");
// console.log(heading)  // ------ this is a object(React element) ----- //
const root = ReactDOM.createRoot(document.getElementById("root"));
//ReactDOM.render(heading, root);
root.render(heading);   // ----- Render is a method which  is used to render the react elements into HTML DOM ---- //

/**
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>I'm h1 tag</h1>
 *     </div>
 * </div>
 * 
 */

const parent = React.createElement('div', {id: 'parent'},  
    React.createElement('div', {id:'child'},  
       [ React.createElement('h1', null ,'Im H1 Tag'),
        React.createElement('h2', null ,'Im H2 Tag')
        
        
    ]),
    React.createElement('div', {id:'child'},  
       [ React.createElement('h1', null ,'Im H1 Tag'),
        React.createElement('h2', null ,'Im H2 Tag')
        
        
    ])
    
 );
    

 root.render(parent);
// console.log(parent);  // object  (React Element)