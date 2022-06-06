document.getElementById("Print").addEventListener("click", myFunction);

function myFunction() {
  var element =  document.getElementById("Main");
  html2pdf(element);
}

