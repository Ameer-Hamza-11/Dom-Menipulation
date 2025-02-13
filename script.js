//Loader Animation 
setInterval(anim,3000)
function anim(){
    var Target = document.getElementById('setint');
Target.style.display = 'none';
}

//Show content
setTimeout(timeout,3000)
function timeout(){
    var Target1 = document.getElementById('box-1')
    Target1.style.visibility = 'visible'
    var Target2 = document.getElementById('div2')
    Target2.style.visibility = 'visible'
}

//Dom Menupulation//
function submit(){
    var hei = document.getElementById('height').value;
    var Width = document.getElementById('width').value;
    var bg = document.getElementById('bgcolor').value;
    var br = document.getElementById('b-r').value;
    var div2 = document.getElementById('div2');
    var colr = document.getElementById('color').value;
    var bodies = document.getElementById('col');
    var Text = document.getElementById('text')
    var textcolor = document.getElementById('txtclr').value;
    Text.style.color = textcolor;
    bodies.style.backgroundColor = colr;
    div2.style.height = hei + 'px';
    div2.style.width = Width + 'px';
    div2.style.backgroundColor = bg  ;
    div2.style.borderRadius = br + '%';
    
}