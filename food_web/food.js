
const docs=document.getElementById("text");
const image=document.getElementById("image");
 Image.style.display="none";

  function xyz(){
    showText = !showText;
    if(showText){
      docs.style.display="block";
      Image.style.display="none";
    }
    else{
      docs.style.display="none";
    Image.style.display="block";
    }
}
 