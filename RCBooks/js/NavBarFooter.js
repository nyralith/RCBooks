let navBar = document.getElementById('navBar');

navBar.innerHTML += `
<nav class="navbar navbar-expand-lg navbar-custom">
     <a class="navbar-brand" href="index.html">
       <img src="https://i.ibb.co/S3JJBTX/LOGO-NUEVO.png" loading="lazy">
     </a>
   <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item">
         <a class="nav-link" href="./Index.html">Home<span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="./booksColection.html">Colección</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="./form.html">Ingresar</a>
       </li>
       <li class="nav-item">
       <a class="nav-link" href="./aboutus.html">Conócenos!</a>
       </li>
     </ul>
   </div>
</nav>
`

let footerRC = document.getElementById('footerRC');
footerRC.innerHTML += `
<footer class="text-muted">
    <div class="container footer d-flex col-md-12">
         <div class="align-self-center">
           <a href="#"><img src="./img/LOGO NUEVO.png" alt=""></a>
         </div>
         <div class="justify-content-end">
              <a href="https://www.twitter.com/"><img class="footericon" src="./img/twitter.png" alt=""></a>
              <!-- facebook -->
              <a href="https://www.facebook.com/"><img class="footericon" src="./img/facebook.png" alt=""></a>
              <!-- Google +-->
              <a href="https://www.google.com/"><img class="footericon" src="./img/googleplus.png" alt=""></a>
              <!--whatsapp -->
              <a href="https://www.whatsapp.com/?lang=es"><img class="footericon" src="./img/whatsapp.png" alt=""></a>
              <!--Instagram-->
              <a href="https://www.instagram.com/"><img class="footericon" src="./img/instagram.png" alt=""></a>
         </div>     
         <button onclick="topFunction()" id="myBtn" title="Go to top"><span class="material-icons">north</span></button>
     </div>  
   </div>
    <div class="justify-content-center footersec text-light">
       <div class="container mr-1 col-lg-md-12">
        Copyright 2020 &copy; RCBooks, Todos los derechos reservados.
     </div>
    </div>
</footer>
`
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}