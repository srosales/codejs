/**
 * Created by srosales on 8/02/17.
 */
function makeAdder(x) {
// parameter `x` is an inner variable
// inner function `add()` uses `x`, so
// it has a "closure" over it
    function add(y) {
        return y + x;
    };
    return add;
}
var plusOne = makeAdder( 1 );
var plusTen = makeAdder( 10 );
console.log(plusOne( 3 ));
console.log(plusOne( 41 ));
console.log(plusTen( 13 ));
