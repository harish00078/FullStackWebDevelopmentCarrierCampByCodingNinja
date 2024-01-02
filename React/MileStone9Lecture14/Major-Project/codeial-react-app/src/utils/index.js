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
export * from "./constants";




// V.V.IMP = here we are creating the function:
// through which we are converting our (request) body-data in the form of (x-www-form-urlencoded) request:
// so that we can send our (body) data in this (request):

// V.V.IMP = so what does this (function) do:
// for example:if we have a (body) object like this:
// {
    // username:'harish',
    // password:'12345'
//}
// V.V.IMP = so when we pass this (body) object into this (function):
// it will look like this:
// 'username=harish&password=12345'

// here In this way we can create this function:
// 1 => we will create this function in the form of (arrow-function):and export it:
// 2 => we will also pass it the (params) argument.this params argument is basically a (object):this  (params) argument will basically have the (data) related to our (body):
// because we are passing our (body) to this (Function):
export const getFormBody = (params) => {
  // 3 => under this function:first we  create the empty (formBody) and that is just a (empty-array):
  let formBody = [];

  // 4 => after that we need to loop on the (params) argument:
  // because that will have the (data) related to  (body).
  // which we want to send to the (server) in the (request):
  // IMP = it will have the personal details related to the (user):
  // like (user-name) or (password):
  // so we will getting those both from the (params) by looping on it:

  for (let property in params) {
    // console.log(property);
    // console.log(params[property]);
    // 5 = here we are converting our body-data.In the form of (form-content) type request:
    // so that we can send it into the (request):
    // IMP = In body data we will have the two things:
    // IMP = we will be converting those both the things and store them in the (key) and (value) variable:
    // 1 = (user-name):the (user-name) will be our (key) or (encodeKey) variable:
    // 2 = password):and the (password) will be our (value) or (encodeValue) variable:
    // V.IMp = for converting our body-data into the (form-content)type-request:
    // we have to use the (encodeURIComponent) function:
    // V.IMP = this function basically Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
    // first = we will convert the (name).
    // => if we have user name like this:(harish kumar):
    // then after conversion it will be look like this:(harish%20name):
    let encodeKey = encodeURIComponent(property);
    // second = we will convert the (password):
    // if we have password like this:(harish 123):
    // then after conversion it will be look like this:(harish%2020123)
    let encodeValue = encodeURIComponent(params[property]);

    // 6= now we will push our (key) and (value) into the (formBody) array:
    // V.IMP = before that we have combine them both.and there (values) will be (separated) from each other.
    // with the help of equalsto (=):
    // after combining them.we need to push them into our (formBody) array:
    // we can do that with the help of (push) function:
    formBody.push(encodeKey + '=' + encodeValue);

  }
  // 7 = after getting the (conversion) of our (body-data) in the (formBody) array:
  // we have to (return) that (conversion) from this function:so that our request can have (access) of that (new) body-data:
  // through the body which we are passing our (request): 
  // V.V.IMP => before returning that conversion from this function:
  // we have to separate those both the values from each other with the help of (join) function:
  // with the help of (join) function:we can add the (&)  ampersand-sign between those two values:
  // so that they got separated from each other:
  return formBody.join('&'); // 'username=harish&password=12345'
};

