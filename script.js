const btn=document.getElementsByClassName("btn")[0];
const navbar=document.getElementsByClassName('header-links')[0];
btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})

const btn1=document.getElementsByClassName("btn1")[0];
const navbar0=document.getElementsByClassName('qn-1')[0];
const navbar1=document.getElementsByClassName('qn-2')[0];
btn1.addEventListener('click',()=>{
    navbar0.classList.toggle('active');
    navbar1.classList.toggle('active');
})

const btn2=document.getElementsByClassName("btn2")[0];
const navbar2=document.getElementsByClassName('qn-3')[0];
btn2.addEventListener('click',()=>{
    navbar1.classList.toggle('active');
    navbar2.classList.toggle('active');
})

const btn3=document.getElementsByClassName("btn3")[0];
const navbar3=document.getElementsByClassName('qn-4')[0];
btn3.addEventListener('click',()=>{
    navbar2.classList.toggle('active');
    navbar3.classList.toggle('active');
})

const btn4=document.getElementsByClassName("btn4")[0];
const navbar4=document.getElementsByClassName('qn-5')[0];
btn4.addEventListener('click',()=>{
    navbar3.classList.toggle('active');
    navbar4.classList.toggle('active');
})

const btn5=document.getElementsByClassName("btn5")[0];
const navbar5=document.getElementsByClassName('qn-6')[0];
btn5.addEventListener('click',()=>{
    navbar4.classList.toggle('active');
    navbar5.classList.toggle('active');
})

const btn6=document.getElementsByClassName("btn6")[0];
const navbar6=document.getElementsByClassName('qn-7')[0];
btn6.addEventListener('click',()=>{
    navbar5.classList.toggle('active');
    navbar6.classList.toggle('active');
})

const btn7=document.getElementsByClassName("btn7")[0];
const navbar7=document.getElementsByClassName('qn-8')[0];
btn7.addEventListener('click',()=>{
    navbar6.classList.toggle('active');
    navbar7.classList.toggle('active');
})

const btn8=document.getElementsByClassName("btn8")[0];
const navbar8=document.getElementsByClassName('qn-9')[0];
btn8.addEventListener('click',()=>{
    navbar7.classList.toggle('active');
    navbar8.classList.toggle('active');
})

const btn9=document.getElementsByClassName("btn9")[0];
const navbar9=document.getElementsByClassName('qn-10')[0];
btn9.addEventListener('click',()=>{
    navbar8.classList.toggle('active');
    navbar9.classList.toggle('active');
})

const btn10=document.getElementsByClassName("btn10")[0];
const navbar10=document.getElementsByClassName('form')[0];
btn10.addEventListener('click',()=>{
    navbar9.classList.toggle('active');
    navbar10.classList.toggle('active');
})

function tot(){
    var one = document.getElementsByName('one');
    var two = document.getElementsByName('two');
    var three = document.getElementsByName('three');
    var four = document.getElementsByName('four');
    var five = document.getElementsByName('five');
    var six = document.getElementsByName('six');
    var seven = document.getElementsByName('seven');
    var eight = document.getElementsByName('eight');
    var nine = document.getElementsByName('nine');
    var ten = document.getElementsByName('ten');
    var val,total=0;

    for(var i=0;i<one.length;i++){
        if(one[i].checked){
            val=one[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(total);
            
        }
    }
    for(var i=0;i<two.length;i++){
        if(two[i].checked){
            val=two[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(total);
        }
    }
    for(var i=0;i<three.length;i++){
        if(three[i].checked){
            val=three[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<four.length;i++){
        if(four[i].checked){
            val=four[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<five.length;i++){
        if(five[i].checked){
            val=five[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<six.length;i++){
        if(six[i].checked){
            val=six[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<seven.length;i++){
        if(seven[i].checked){
            val=seven[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<eight.length;i++){
        if(eight[i].checked){
            val=eight[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<nine.length;i++){
        if(nine[i].checked){
            val=nine[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    for(var i=0;i<ten.length;i++){
        if(ten[i].checked){
            val=ten[i].value;
            console.log(val);
            for(var j=0;j<val;j++){total++;}
            //alert(val);
        }
    }
    console.log(total);
    localStorage.setItem("tota",total);

}
function fun(){
    console.log("hello");
    let total1 = localStorage.getItem("tota");
    localStorage.clear();

    var tex;
    if(total1<10){
     tex="normal";
    }
    else if(total1<20){
    tex="usual";
    }
    else if(total1<30){
    tex="not normal";
    }
    else if(total1<40){
        tex="depressed";
    }
    else if(total1==40){
        tex="deep depression";
    };
   
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: total1,
          title: { text: tex },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 40] },
          bar: { color: "darkblue" } },
          DelayNode:5000
        }
      ];
      
    var layout = { width: 600, height: 400,paper_bgcolor:"white" };
    Plotly.newPlot("myPlot", data, layout, {displaylogo: false});
      
    
    /*if(window.innerWidth > 600){
        var layout = { width: 600, height: 400 };
    }
    else if(window.innerWidth < 600){
        var layout = { width: 385, height: 290 };
    }
    Plotly.newPlot("myPlot", data, layout);*/
}
