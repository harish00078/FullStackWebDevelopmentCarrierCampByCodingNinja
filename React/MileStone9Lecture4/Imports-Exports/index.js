// here we learn about that:how (Import) or (Export) work in the (React):

// 1 = here we are Importing the (function):that we have exported with the help of (default) function:


import log from "./someFile";

log();

// we can also change the name of the function:while importing it:

import MY_LOG from "./someFile";

MY_LOG();


// 2 = here we are Importing the (function):that we have exported with the help of (named-export) function:
// the functions that we have exported with the help of (named-export) function:we can import the more then one function at a (one-time) with the help of (named-export) function:

// like here we import the (greet) and (a) at a one-time:

// IMP = we are not directly allowed to the change the name of the (named-export) function:
// but we can gave them the another name with the help of (as) keyword:
import { greet as customGreet,a } from "./someFile";

greet();
customGreet();

console.log(a);
