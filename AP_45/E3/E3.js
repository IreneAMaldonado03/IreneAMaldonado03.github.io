
function IMC() {
  
    var nombre = document.getElementById("nombre").value;
    var edad = parseFloat(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var alergias = document.getElementById("alergia").value;
  
    var imc = (peso / (altura * altura)).toFixed(2) ;

    var cR18= document.createElement("p");
    var cR24= document.createElement("p");
    var cR29= document.createElement("p");
    var cRo= document.createElement("p");

    cR18.innerHTML="<h4>Usted se encuentra en un peso bajo.</h4>Las personas con bajo peso deben aumentar su consumo de calorías para aumentar su masa corporal. Los alimentos que pueden ayudar a las personas con bajo peso a ganar peso incluyen:<br><ul><li>Frutas secas y nueces</li><li>Semillas</li><li>Legumbres</li><li>Mantequilla de nueces</li><li>Almendras</li><li>Proteínas magras, como pollo, pescado, huevos y legumbres</li><li>Cereales integrales</li><li>Ensalada de aguacate, quinoa y garbanzos.</li><li>Salmón a la parrilla con espárragos.</li><li>Tacos de pollo con tortillas de maíz y ensalada.</li></ul>"
    cR24.innerHTML="<h4>Usted se encuentra en un peso saludable.</h4>Las personas con peso normal no necesitan hacer cambios drásticos en su dieta. Sin embargo, pueden mejorar su salud general comiendo una dieta equilibrada que incluya una variedad de alimentos de todos los grupos alimenticios. Algunas comidas que podrian ayudarlo  mantener su salud son:<br><ul><li>Pechuga de pollo al horno con papas asadas.</li><li>Ensalada griega con queso feta y aceitunas.</li><li>Tacos de pescado con lechuga y salsa de yogur</li></ul>"
    cR29.innerHTML="<h4>Usted se encuentra en sobrepeso.</h4>Es importante que las personas con sobrepeso limiten su consumo de calorías, grasas saturadas, grasas trans y azúcares añadidos. Las comidas recomendadas para estas personas son:<br><ul><li>Salmón al horno con brócoli y arroz integral.</li><li>Ensalada de pollo con aderezo ligero.</li><li>Tacos de pavo con tortillas de trigo integral y ensalada.</li></ul>"
    cRo.innerHTML="<h4>Usted se encuentra en obesidad.</h4>Buscar asesoramiento profesional para establecer un plan de alimentación adecuado. Se debe priorizar alimentos frescos, reducir el consumo de alimentos procesados y controlar las porciones. Por lo que las siguientes comidas pueden ayudarle: <br><ul><li>Pechuga de pollo a la plancha con vegetales al vapor.</li><li>Ensalada de atún con vegetales frescos.</li><li>Sopa de verduras con frijoles.</li></ul>"

    var comidaRecom;
    if (imc < 18.5) {
      comidaRecom = cR18;
    } else if (imc >= 18.5 && imc <= 24.9) {
      comidaRecom = cR24;
    } else if (imc >= 25 && imc <= 29.9) {
      comidaRecom = cR29;
    } else {
      comidaRecom = cRo;
    }
    
    var eRn= document.createElement("p");
    var eRj= document.createElement("p");
    var eRa= document.createElement("p");
    var eRam= document.createElement("p");

    eRn.innerHTML="<h4>Actividad fisica</h4>Los niños necesitan al menos 60 minutos de actividad física de intensidad moderada o vigorosa al día.Los ejercicios pueden incluir:<br><ul><li>Correr</li><li>Saltar</li><li>Jugar</li><li>Bailar</li><li>Andar en bicicleta</li></ul>"
    eRj.innerHTML="<h4>Actividad fisica</h4>Los adolescentes necesitan al menos 60 minutos de actividad física de intensidad moderada o vigorosa al día.Los ejercicios pueden incluir:<br><ul><li>Correr</li><li>Saltar</li><li>Bailar</li><li>Andar en bicicleta</li><li>Deportes</li></ul>"
    eRa.innerHTML="<h4>Actividad fisica</h4>Los adultos necesitan al menos 150 minutos de actividad física de intensidad moderada o 75 minutos de actividad física de intensidad vigorosa a la semana.Los ejercicios pueden incluir:<br><ul><li>Correr</li><li>Bailar</li><li>Andar en bicicleta</li><li>Deportes</li><li>Ejercicios de fuerza</li></ul>"
    eRam.innerHTML="<h4>Actividad fisica</h4>Los adultos mayores necesitan al menos 150 minutos de actividad física de intensidad moderada o 75 minutos de actividad física de intensidad vigorosa a la semana.Los ejercicios pueden incluir:<br><ul><li>Caminar</li><li>Bailar</li><li>Yoga</li><li>Tai chi</li><li>Ejercicios de fuerza</li></ul>"

    var ejercicio;
    if (edad < 11) {
      ejercicio = eRn;
    } else if (edad >= 11 && edad < 19) {
      ejercicio = eRj;
    } else if (edad >= 19 && edad < 50) {
      ejercicio = eRa;
    } else {
      ejercicio = eRam;
    }
    
    
    var ref= document.getElementById("info");


    ref.innerHTML = "<h3>"+nombre+" el resumen de tu analisis es el siguiente:<br><br> Datos</h3><p>Edad: "+ 
    edad +"   Peso: "+ peso+"kg   Altura: "+ altura +"cm   Alergias: "+alergias+"<br><br> <h3>Dieta saludable</h3> Una dieta equilibrada es aquella que incluye una variedad de alimentos de todos los grupos alimenticios. Los grupos alimenticios son: <li>Frutas</li><li>Verduras</li><li>Cereales integrales</li><li>Lácteos</li><li>Carnes, aves, pescados y huevos</li>"+
    comidaRecom.innerHTML+"<br><br> <h3>Movilidad</h3> El ejercicio es una de las mejores maneras de mejorar la movilidad. Las actividades de bajo impacto, como caminar, nadar y andar en bicicleta, son buenas opciones para las personas de todas las edades y niveles de condición física."+
    ejercicio.innerHTML+"</p>";
    

    document.querySelector('.formulario').style.display = "none";



}