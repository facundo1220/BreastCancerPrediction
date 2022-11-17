
function predict2() {

  if (document.getElementById("i1").value=="" || document.getElementById("i2").value=="" || document.getElementById("i3").value=="" || document.getElementById("i4").value=="" || document.getElementById("i5").value=="" || document.getElementById("i6").value=="" || document.getElementById("i7").value=="" || document.getElementById("i8").value=="" || document.getElementById("i9").value=="") {

    alert("Llene correctamente los campos requeridos");

  }

  else {

    // model

    var w0=0.6904;
    var w1=-0.1328;
    var w2= -0.5858;
    var w3= 1.2641;
    var w4=0.4633;
    var w5=0.4625;
    var w6=-0.0933;
    var w7=0.0256;
    var w8=1.3122;
    var w9=-0.3302;

    // input

    var i1=document.getElementById("i1").value;
    var i2=document.getElementById("i2").value;
    var i3=document.getElementById("i3").value;
    var i4=document.getElementById("i4").value;
    var i5=document.getElementById("i5").value;
    var i6=document.getElementById("i6").value;
    var i7=document.getElementById("i7").value;
    var i8=document.getElementById("i8").value;
    var i9=document.getElementById("i9").value;

    // output

    var z1=w0+w1*i1+w2*i2+w3*i3+w4*i4+w5*i5+w6*i6+w7*i7+w8*i8+w9*i9;

    // logistic regression

    var y1=1/(1+Math.exp(-z1));

    if (y1>=0.5) {


      document.getElementById("pred1").innerHTML="Posibilidad de cancer: SI";

    }

    else {


      document.getElementById("pred1").innerHTML="Posibilidad de cancer: NO";

    }

  }

}
