var seleccion=document.getElementsByName("sel");
var p = document.getElementById('ip');
var inf = document.getElementById("if");

seleccion[0].onselect=function () {
    p.src = "media/mercurio.png";
    inf.textContent = "Es el planeta más pequeño del Sistema Solar. Tiene una superficie rocosa y craterizada, y no tiene atmósfera.";
}
seleccion[1].onselect=function () {
    p.src = "media/venus.png";
    inf.textContent ="Es el planeta más caliente del Sistema Solar. Tiene una atmósfera densa y tóxica, compuesta principalmente de dióxido de carbono";
}
seleccion[2].onselect=function () {
    p.src = "media/tierra.png";
    inf.textContent ="Es el único planeta del Sistema Solar conocido por albergar vida. Tiene una atmósfera rica en oxígeno y nitrógeno, y una superficie cubierta de agua.";
}
seleccion[3].onselect=function () {
    p.src = "media/marte.png";
    inf.textContent ="Es el planeta más parecido a la Tierra. Tiene una atmósfera delgada y fría, y una superficie con cráteres, volcanes y llanuras.";
}
seleccion[4].onselect=function () {
    p.src = "media/jupiter.png";
    inf.textContent ="Es el planeta más grande del Sistema Solar. Tiene una atmósfera densa y gaseosa, compuesta principalmente de hidrógeno y helio.";
}
seleccion[5].onselect=function () {
    p.src = "media/saturno.png";
    inf.textContent ="Es el planeta con más anillos del Sistema Solar. Tiene una atmósfera densa y gaseosa, compuesta principalmente de hidrógeno y helio.";
}
seleccion[6].onselect=function () {
    p.src = "media/urano.png";
    inf.textContent ="Es el planeta más frío del Sistema Solar. Tiene una atmósfera densa y gaseosa, compuesta principalmente de hidrógeno y helio.";
}
seleccion[7].onselect=function () {
    p.src = "media/neptuno.png";
    inf.textContent ="Es el planeta más alejado del Sol. Tiene una atmósfera densa y gaseosa, compuesta principalmente de hidrógeno y helio.";
}
seleccion[8].onselect=function () {
    p.src = "media/sol.jpeg";
    inf.textContent ="El Sol es la estrella central del Sistema Solar. Los planetas orbitan alrededor del Sol en trayectorias elípticas.";
}

for (var i = 0; i < seleccion.length; i++) {
    seleccion[i].onblur = function () {
       p.src = "media/planetas.png";
       inf.textContent ="\nEl Sistema Solar. \n\nSe compone de ocho planetas, un planeta enano y una gran cantidad de otros cuerpos celestes, como asteroides, cometas y satélites. Los planetas se clasifican en dos grupos: los planetas interiores, que son Mercurio, Venus, la Tierra y Marte, y los planetas exteriores, que son Júpiter, Saturno, Urano y Neptuno.";
    }
  }