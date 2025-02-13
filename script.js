//Loader Animation 
setInterval(anim,1000)
function anim(){
    var Target = document.getElementById('setint');
Target.style.display = 'none';
}

//Show content
setTimeout(timeout,1000)
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
    div2.style.height = hei + 'px';
    div2.style.width = Width + 'px';
    div2.style.backgroundColor = bg  ;
    div2.style.borderRadius = br + '%';
    
}