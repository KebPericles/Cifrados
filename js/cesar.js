/*
vamos a crear una funcion con el uso de JS6
que se encargue del cifrado y descifrado del texto de area
considerando utilizar funciones anonimas y callback
*/

var cesar = cesar || (function() {
    //tenemos que entender que para poder cifrar o descifrar
    //es necesario obtener 3 parametros
    //txt, desp, action
    let doStaff = function(txt, seed, action) {
        //nota ya estamos mal, la nueva version de JS
        //ya no maneja var, ahora todo es let y const
        //besos y comercial wiiiii


        var replace = (function() {
            //necesito un alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z'
            ];

            var l = abc.length;
            let desp = Number(seed) % l;
            //tenemos que crear una funcion que se encargue de poder realizar
            //el cambio de las posiciones de las letras para el
            //cifrado

            //regresamos la funcion que se asociara a replace ya que se autoejecuta la funcion anonima
            return function(c) {
                var i = abc.indexOf(c.toLowerCase());
                //reemplazo de las posiciones o el movimiento
                //primero tenemos que saber si el texto esta vacio
                if (i != -1) {
                    //movimiento de las posiciones
                    var pos = i;
                    if (action) {
                        //cifrar
                        pos += desp;
                        if (pos > l) {
                            pos -= l;
                        }
                    } else {
                        //descifrando
                        pos -= desp;
                        if (pos < 0) {
                            pos += l
                        }
                    }
                    return abc[pos];
                }
                return c;
            };
        })();
        //ejecutamos la funcion, desechandola y obteniendo la funcion que nos retorna dentro de ella

        //vamos a necesitar regresar el reemplazo de la cadena
        //pero primero hay que verificarlo
        var re = (/[a-z\u00f1]/ig);

        //se encarga de buscar las coincidencias entre la
        //expresion regular y el textarea
        return String(txt).replace(re,
            /*La siguiente funcion se ejecutara dentro de replace cada que coincida que re se cumpla en txt pasandole el string de lo que coincidio*/
            function(macth) {
                return replace(macth);
            });

    };

    //necesito enviar si vamos a cifrar o descifrar
    return { // regresamos un objeto que se asignara a cesar, ya que se autoejecutara esta funcion

        //el caso para cuando cifras
        encode: function(txt, desp) {
            return doStaff(txt, desp, true);
        },
        decode: function(txt, desp) {
            return doStaff(txt, desp, false);
        }
    };

})(); //ejecutamos la funcion 


//crear las funciones codificar y decodificar

function codificar() {
    document.getElementById("resultado").innerHTML =
        cesar.encode(document.getElementById("cadena").value, document.getElementById("semilla").value);
}

function decodificar() {
    document.getElementById("resultado").innerHTML =
        cesar.decode(document.getElementById("cadena").value, document.getElementById("semilla").value);
}

//