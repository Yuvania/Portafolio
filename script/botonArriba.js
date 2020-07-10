function botonArriba(){
    window.addEventListener('scroll' ,()=>{
        var scroll= document.documentElement.scrollTop;
        console.log(scroll);

        var top=document.getElementById('top');

        if(scroll>400){
            top.style.right= 20+"px";
        }else{
            top.style.right= -100+"px";
        }
    })
}

botonArriba();