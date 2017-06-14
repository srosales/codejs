/**
 * Created by Do you speak javascript.
 */
function createIncrementor(start) {
    return function () { // (1)
        start++;
        return start;
    }
}
var inc = createIncrementor(5);
inc();
console.log(inc());
