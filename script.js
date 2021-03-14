function incomeOverTime(selling_price, time) {
    //create an array to store the sheds
    var sheds = [];
    //push all the sheds into the array
    sheds.push(document.getElementById("num1").value);
    sheds.push(document.getElementById("num2").value);
    sheds.push(document.getElementById("num3").value);
    sheds.push(document.getElementById("num4").value);
    //assign the values of the array to variables a,b,c,d
    var [a,b,c,d] = sheds;
    var display = document.getElementById("display");
    var explanation = document.getElementById("explanation");
    if(a.input === 0 || b.input === 0 || c.input === 0 || d.input === 0) {
      //check whether the user has typed something
      display.innerHTML = "<p>Please <span class='fill'>insert</span> your text</p>" 
    } else {
      //convert the strings to numbers
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      d = parseFloat(d);
      //track the incomeOverTime(selling_price, time)
      track(a,b,c,d);
    }
  }
  function track(a,b,c,d) {
    if(a + b > c && b + c > a && c + a > b && d + c > a) {
    
      if(a === b && a === c && d === a) {
        display.innerHTML = "<p class='display-text'>Please indicate correct<span class='type'>Records</span> t<p><span class='fill'>INVALID</span>daily records";
      } 
    
    else (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)); { 
        display.innerHTML = "<p class='display-text'>That is <span class='not'>INVALID</span> a number</p>";
    } 
}
}
  

  function reset() {
    location.reload();
  }