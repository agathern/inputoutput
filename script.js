let result = document.querySelector("#result");

// Detect when we are pressing a key anywhere on the webpage (document)
document.addEventListener("keydown", function(event){
  
  // Print out the event details to the console
  console.log(event);
  // Print out what key we just pressed
  console.log("what did we just press:")
  console.log(event.key)

  if (event.key == "a"){
    result2.innerText = "avion";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/lettera.png')";
  }

  if (event.key == "b"){
    result2.innerText = "banane";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterb.png')";

  }

   if (event.key == "c"){
    result2.innerText = "chapeau";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterc.png')";
  }

    if (event.key == "d"){
    result2.innerText = "dent";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letterd.png')";
  }

  if (event.key == "e"){
    result2.innerText = "escargot";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettere.png')";
  }
  if (event.key == "f"){
    result2.innerText = "fromage";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterf.png')";
  }
  if (event.key == "g"){
    result2.innerText = "gateau";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterg.png')";
  }
  if (event.key == "h"){
    result2.innerText = "hérisson";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterh.png')";
  }
  if (event.key == "i"){
    result2.innerText = "insecte";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letteri.png')";
  }
  if (event.key == "j"){
    result2.innerText = "jupe";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/letterj.png')";
  }
  if (event.key == "k"){
    result2.innerText = "kiwi";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterk.png')";
  }
  if (event.key == "l"){
    result2.innerText = "lune";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterl.png')";
  }
  if (event.key == "m"){
    result2.innerText = "mouton";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterm.png')";
  }
  if (event.key == "n"){
    result2.innerText = "nuage";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/lettern.png')";
  }
  if (event.key == "o"){
    result2.innerText = "oiseau";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettero.png')";
  }
  if (event.key == "p"){
    result2.innerText = "pomme";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterp.png')";
  }
  if (event.key == "q"){
    result2.innerText = "question";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterq.png')";
  }
  if (event.key == "r"){
    result2.innerText = "rose";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterr.png')";
  }
  if (event.key == "s"){
    result2.innerText = "soleil";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letters.png')";
  }
  if (event.key == "t"){
    result2.innerText = "toucan";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettert.png')";
  }
  if (event.key == "u"){
    result2.innerText = "ukulélé";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letteru.png')";
  }
  if (event.key == "v"){
    result2.innerText = "vache";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterv.png')";
  }
  if (event.key == "w"){
    result2.innerText = "wagon";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterw.png')";
  }
  if (event.key == "x"){
    result2.innerText = "xylophone";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letterx.png')";
  }
   if (event.key == "y"){
    result2.innerText = "yaourt";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettery.png')";
  }
   if (event.key == "z"){
    result2.innerText = "zèbre";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterz.png')";
  }
  // Change the inside of the result paragraph to include the key we just pressed
  result.innerText = event.key + " is for...";
})

a.onclick = function(){
  result.innerText = " a is for...";
  result2.innerText = "avion";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/lettera.png')";
}
  
b.onclick = function(){
  result.innerText = " b is for...";
  result2.innerText = "banane";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterb.png')";

}

c.onclick = function(){
  result.innerText = " b is for...";
   result2.innerText = "chapeau";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterc.png')";
}

d.onclick = function(){
  result.innerText = " d is for...";
   result2.innerText = "dent";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letterd.png')";
}

e.onclick = function(){
  result.innerText = " e is for...";
  result2.innerText = "escargot";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettere.png')";
  }
f.onclick = function(){
  result.innerText = " f is for...";
    result2.innerText = "fromage";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterf.png')";
  }
g.onclick = function(){
  result.innerText = " g is for...";
    result2.innerText = "gateau";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterg.png')";
  }
h.onclick = function(){
  result.innerText = " h is for...";
    result2.innerText = "hérisson";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterh.png')";
  }
i.onclick = function(){
  result.innerText = " i is for...";
    result2.innerText = "insecte";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letteri.png')";
  }
j.onclick = function(){
  result.innerText = " j is for...";
    result2.innerText = "jupe";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/letterj.png')";
  }
k.onclick = function(){
  result.innerText = " k is for...";
    result2.innerText = "kiwi";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterk.png')";
  }
l.onclick = function(){
  result.innerText = " l is for...";
    result2.innerText = "lune";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterl.png')";
  }
m.onclick = function(){
  result.innerText = " m is for...";
    result2.innerText = "mouton";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterm.png')";
  }
n.onclick = function(){
  result.innerText = " n is for...";
    result2.innerText = "nuage";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/lettern.png')";
  }
o.onclick = function(){
  result.innerText = " o is for...";
    result2.innerText = "oiseau";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettero.png')";
  }
p.onclick = function(){
  result.innerText = " p is for...";
    result2.innerText = "pomme";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterp.png')";
  }
  q.onclick = function(){
  result.innerText = " q is for...";
    result2.innerText = "question";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterq.png')";
  }
  r.onclick = function(){
  result.innerText = " r is for...";
    result2.innerText = "rose";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterr.png')";
  }
  s.onclick = function(){
  result.innerText = " s is for...";
    result2.innerText = "soleil";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letters.png')";
  }
  t.onclick = function(){
  result.innerText = " t is for...";
    result2.innerText = "toucan";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettert.png')";
  }
  u.onclick = function(){
  result.innerText = " u is for...";
    result2.innerText = "ukulélé";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letteru.png')";
  }
  v.onclick = function(){
  result.innerText = " v is for...";
    result2.innerText = "vache";
    document.body.style.background = ("#EFBBD9");
    document.getElementById("box").style.backgroundImage= "url('assets/letterv.png')";
  }
  w.onclick = function(){
  result.innerText = " w is for...";
    result2.innerText = "wagon";
    document.body.style.background = ("#7FCBBE");
    document.getElementById("box").style.backgroundImage= "url('assets/letterw.png')";
  }
  x.onclick = function(){
  result.innerText = " x is for...";
    result2.innerText = "xylophone";
    document.body.style.background = ("#32AAC3");
    document.getElementById("box").style.backgroundImage= "url('assets/letterx.png')";
  }
  y.onclick = function(){
  result.innerText = " y is for...";
    result2.innerText = "yaourt";
    document.body.style.background = ("#F59D8F");
    document.getElementById("box").style.backgroundImage= "url('assets/lettery.png')";
  }
 z.onclick = function(){
  result.innerText = " z is for...";
    result2.innerText = "zèbre";
    document.body.style.background = ("#F2EC96");
    document.getElementById("box").style.backgroundImage= "url('assets/letterz.png')";
  }
  
