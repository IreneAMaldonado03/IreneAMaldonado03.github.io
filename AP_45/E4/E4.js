var c = document.getElementById('caballete');
var preI = document.querySelectorAll('.selectionImage');
var imgBtn1= document.getElementById("img1");
var imgBtn2= document.getElementById("img2");
var imgBtn3= document.getElementById("img3");
var imgBtn4= document.getElementById("img4");

preI.forEach(selectionImage => {

    selectionImage.addEventListener('mouseup', () => {
        c.src = 'media/easel-6991106_1280.png';
    });
});

imgBtn1.onmousedown = function() {
    c.src = "media/p1.png";
 }
 imgBtn2.onmousedown = function() {
    c.src = "media/p2.png";
 }
 imgBtn3.onmousedown = function() {
    c.src = "media/p3.png";
 }
 imgBtn4.onmousedown = function() {
    c.src = "media/p4.png";
 }