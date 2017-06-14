/**
 * Created by srosales on 12/02/17.
 */

// Entornos viejos
po
function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
}

foo(7);



function foo(a = 2) {
    console.log( a );
}
console.log(foo());
console.log(foo( 42 ));



/*
 Ejemplo de Transpiler

 Babel
 Traceur

 */