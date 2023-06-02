function Sldr(){
    let offset = document.querySelector('.scrn').getBoundingClientRect().width
    let left = -offset
    document.querySelector('.scrnshts').style.left = left + 'px'
    setTimeout(()=>{
        document.querySelector('.scrnshts').classList.add("anim")},100)

    document.querySelector('.sldrLft').addEventListener('click', function(){
        left +=offset
        if(left> -offset){
            document.querySelector('.scrnshts').style.left = left + 'px'
            setTimeout(()=>{
                document.querySelector('.scrnshts').classList.remove("anim")
                left=offset*-8
                document.querySelector('.scrnshts').style.left = left + 'px'
            },1000)
            setTimeout(()=>{
                document.querySelector('.scrnshts').classList.add("anim")
            },1100)
        }
        else{
            document.querySelector('.scrnshts').style.left = left + 'px'
        }
    })

    document.querySelector('.sldrRght').addEventListener('click', function(){
        left -=offset
        if(left< offset*-8){
            document.querySelector('.scrnshts').style.left = left + 'px'
            setTimeout(()=>{
                document.querySelector('.scrnshts').classList.remove("anim")
                left=-offset
                document.querySelector('.scrnshts').style.left = left + 'px'
            },1000)
            setTimeout(()=>{
                document.querySelector('.scrnshts').classList.add("anim")
            },1100)
        }
        else{
            document.querySelector('.scrnshts').style.left = left + 'px'
        }
        

    })
}
