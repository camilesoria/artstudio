// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {document.getElementById("barradenav").style.top = "0";} else {document.getElementById("barradenav").style.top = "-50px";}}
/*
<div id="barradenav">
<div id="dropdown">
<button onclick="myFunction()" id="dropbtn">Artes</button>
<div id="myDropdown" id="dropdown-content">
  <a href="arquitetura.html">Arquitetura</a>
  <a href="artedigital.html">Arte digital</a>
  <a href="cinema.html">Cinema</a>
  <a href="dança.html">Dança</a>
  <a href="escultura.html">Escultura</a>
  <a href="fotografia.html">Fotografia</a>
  <a href="hq.html">Histórias em quadrinhos</a>
  <a href="jogoseletronicos.html">Jogos eletrônicos</a>
  <a href="literatura.html">Literatura</a>
  <a href="musica.html">Música</a>
  <a href="pintura.html">Pintura</a>
  <a href="teatro.html">Teatro</a>
</div>
</div>
<a href="#news">News</a>
<a href="#contact">Contact</a>
</div>*/