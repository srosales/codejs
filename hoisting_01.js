/**
 * Created by srosales on 16/02/17.
 */
var a = 2;
foo();
// works because `foo()`
// declaration is "hoisted"
function foo() {
    a = 3;
    console.log( a ); // 3
    console.log(this.a);
    var a; // declaration is "hoisted"
// to the top of `foo()`
}
console.log( a );
// 2