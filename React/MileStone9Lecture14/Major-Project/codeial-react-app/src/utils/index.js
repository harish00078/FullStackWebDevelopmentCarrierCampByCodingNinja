//  here we are importing the (constants) file:
// V.IMP = so basically there are so many ways to (import) and (export) the files.
// V.IMP = it will basically depend on that what we have in the file:
// for-example:if we are importing and exporting the (Constants) file.
// so then instead of importing and exporting it as the normal file.
// we can import and export it in different way or we can say in the (simple) way:

// => this is (simple) way to do it:if we have (multiple) export function in the one (file):
// -> first we import:
// import {API_URL,local_storage_token} from './constants.js';
// -> and then second we export them:
// V.IMP -> like this as an (object) of (multiple-functions):
// export {API_URL,Local_Storage_token};

// => this is (other) way to do it:
// V.IMP = by simply using the (*) asterisk method on the (constants) file and (export) it:
// => (asterisk) =  The asterisk (*) in the context of React’s export statement is used to export all the named exports from a module as a single object1. This is useful when you want to group multiple exports from a module into a single object.
// V.IMP = this will basically get all the (exported-function) from the (Constants) file in the (Utils) file:
// and then from the (utils) file we will export them and gave it to the (application):
// IMP = with the help of this method we can (export) all the export-function in (one-line):
export * from './constants';


