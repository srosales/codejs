/**
 * Created by srosales on 9/02/17.
 */

function User(){
    var username, password;
    function doLogin(user,pw) {
        username = user;
        password = pw;
// do the rest of the login work
    }
    var publicAPI = {
        login: doLogin
    };
    return publicAPI;
}
// create a `User` module instance
var fred = User();  //Es una función.
fred.login( "fred", "12Battery34!" );