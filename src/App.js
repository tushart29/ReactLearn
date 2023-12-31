import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import "./index.css"

// in this example, app component is the parent component. header, main, sidebar is the child component. this parent has passed
// data to the other 3 files.

function App() {
  return (
    <div className='App'>
      <Header name="Anna" color="purple" />
      <div>
        <Main greet="Howdy" />
        <Sidebar greet="Hi" />
      </div>

    </div>
  )
}

export default App;

/*
project is in specific style and structure 
node_modules - repository for all the modules in the react app. automatically added when installing a specific npm package
packages are used so we can use other code other developers have made
public folder contains all the assets that will be displayed to the user in the app 

index.html - a react app gets injected into specific element of the body of the html file. based on teh changes in the react app,
it injects updates into the same div, index.html 

src folder contains all the essential files that react app functions

index.js and app.js is used to render the root componets of the app 

React does not care how you organize files in the src folders. 

index.js is the most important in the src file. imports everything that needs the app to work

.gitignore specifies what files should be included or not included in the project. not specific to react 

package.json lists information pertaining to my_app. helps npm build in an other machine
package-lock.json holds all the information to build the app reliabily 


*/