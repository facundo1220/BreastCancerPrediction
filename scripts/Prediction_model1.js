
function predict() {

  if (document.getElementById("i4").value=="" || document.getElementById("i4").value<=0) {

    alert("Llene correctamente los campos requeridos");

  }

  else {

    // model 1

    var w0=-2.4768;
    var w1=1.6565;
    var w2=1.2350;
    var w3=2.1481;
    var w4=-2.8944;
    var w5=0;

    // model 2

    var w0_2=-2.4695;
    var w1_2=1.5443;
    var w2_2=1.2347;
    var w3_2=2.1505;
    var w4_2=-2.8592;
    var w5_2=0;

    // input

    var i1=document.getElementById("i1").value;
    var i2=document.getElementById("i2").value;
    var i3=document.getElementById("i3").value;
    var i4=document.getElementById("i4").value/100;
    var i5=document.getElementById("i5").value;

    // output

    var z1=w0+w1*i1+w2*i2+w3*i3+w4*i4+w5*i5;
    var z2=w0_2+w1_2*i1+w2_2*i2+w3_2*i3+w4_2*i4+w5_2*i5;

    // logistic regression

    var y1=1/(1+Math.exp(-z1));

    if (y1>=0.5) {


      document.getElementById("pred1").innerHTML="Masa en seno izquierdo: SI";

    }

    else {


      document.getElementById("pred1").innerHTML="Masa en seno izquierdo: NO";

    }

    var y2=1/(1+Math.exp(-z2));

    if (y2>=0.5) {


      document.getElementById("pred2").innerHTML="Masa en seno derecho: SI";

    }

    else {


      document.getElementById("pred2").innerHTML="Masa en seno derecho: NO";

    }

  }

}
