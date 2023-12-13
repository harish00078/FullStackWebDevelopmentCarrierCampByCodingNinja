// import (app) component.In main file of component folder:
import App from "./App";
// import Navbar Component.
import Navbar from "./Navbar";



// here we are importing the (loader-component) in our main-file of (Components):
import Loader from "./Loader";



// And here we export all the component.so that we can use the in our application.
// we export them with one export function.as an object.
// so we did not have write the export again and again for the particular component.which we want to export.
// IMP = it also help system to do not check all the components one by one:
// it can get them in one (go):
export { App,Navbar, Loader };
