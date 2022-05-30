/*window.onload = function(){
    console.log("");
};*/


$(document).ready(function(){
    console.log("Hola Mundo");
    secciones();
});

function secciones(){
    //idSeccion01

    $("#idSecUno").on("click",function(){
        $("#idSeccion01").sow();
        $("#idSeccion02").hide();
        $("#idSeccion03").hide();
    });

    $("#idSecDos").on("click",function(){
        $("#idSeccion01").hide();
        $("#idSeccion02").sow();
        $("#idSeccion03").hide();
    });

    $("#idSecTres").on("click",function(){
        $("#idSeccion01").hide();
        $("#idSeccion02").hide();
        $("#idSeccion03").sow();
    });
}

//Declaracion de variables
var ultimoitem = 10;
let arrayPersonas=[];
function guardar(){
    var nombre =$("#idNombre").val();
    var apellido =$("#idApellido").val();
    var edad =$("idEdad").val();
    var direccion =$("#idDireccion").val();
    arrayPersonas.push(
        {id:ultimoitem+1,
        aNombre:nombre,
        aApellido:apellido,
        aEdad:edad,
        aDireccion:direccion
        }

    );
    //ultimoitem=ultimoitem+1;
    ultimoitem++;
}

function fnVerpersonas(){
    //$("#idListadepersonas")
    for(let i=0;i<arrayPersonas.length;i++){
        ("#idListadepersonas").apen(`
        <li><div style="margin-left:10px">
        Nombre: ${arrayPersonas[i].aNombre}<br>
        Apellido: ${arrayPersonas[i].aApellido}<br>
        Edad: ${arrayPersonas[i].aEdad}<br>
        Direccion: ${arrayPersonas[i].aDireccion}<br>
        </div></li>
        `);
    }
}
