let buyBtn = document.querySelector('.buy')

buyBtn.addEventListener('mouseenter', function(){
    document.querySelector('.buy img').style.animation = 'buy 1.5s ease 0s 1 normal'
})

buyBtn.addEventListener('mouseleave', function(){
    document.querySelector('.buy img').style.animation = ''
})

buyBtn.addEventListener('click', function(){
    if(document.querySelector('.l2').style.display === 'block')
    {
        document.querySelector('.l2').style.display = 'none'
    }
    else 
    {
        document.querySelector('.l2').style.display = 'block'
    }
})


function End(){
    document.getElementById('jukebox').src = 'img/Mini-Jukebox_Off.png'
    document.getElementById('play').src = 'img/playBtn.svg'
    a = false
}

function Play(){
    document.querySelector('.audioSrc').play()
    document.getElementById('jukebox').src = 'img/Mini-Jukebox.gif'
    document.getElementById('play').src = 'img/pauseBtn.svg'
    a = true
}

let playBtn = document.querySelector('.play')

let a = false

playBtn.addEventListener('click', function(){
    if(a === false)
    {
        Play()
    }
    else
    {
        document.querySelector('.audioSrc').pause()
        End()
    }
})

document.querySelector('.playlist').style.transform = 'translateY(150px)'

document.querySelector('.track').addEventListener('click', function(){
    if(document.querySelector('.playlist').style.transform === 'translateY(150px)')
    {
        document.querySelector('.playlist').style.transform = 'translateY(0px)'
    }
    else 
    {
        document.querySelector('.playlist').style.transform = 'translateY(150px)'
    }
})

document.getElementById('track1').addEventListener('click', function(){
    document.getElementById('track').textContent = "Overture"
    document.querySelector('.audioSrc').src = 'audio/01. Stardew Valley Overture.mp3'
    Play()
    document.querySelector('.playlist').style.transform = 'translateY(150px)'
})

document.getElementById('track2').addEventListener('click', function(){
    document.getElementById('track').textContent = 'Cloud Country'
    document.querySelector('.audioSrc').src = 'audio/02. Cloud Country.mp3'
    Play()
    document.querySelector('.playlist').style.transform = 'translateY(150px)'
})

document.getElementById('track3').addEventListener('click', function(){
    document.getElementById('track').textContent = "Grandpa's Theme"
    document.querySelector('.audioSrc').src = "audio/03. Grandpa's Theme.mp3"
    Play()
    document.querySelector('.playlist').style.transform = 'translateY(150px)'
})



window.addEventListener("orientationchange", (event) => {
    if(screen.orientation.type == 'landscape-primary')
    {
        document.querySelector('.head').style.transform = 'scaleY(1)'
        document.querySelector('.logo').style.transform = 'translateY(0%)'
    }
    else{
        if(b === false)
        {
            document.querySelector('.head').style.transform = 'scaleY(0)'
            document.getElementById('menu').src = 'img/mobMenu.svg'
            document.querySelector('.logo').style.transform = 'translateY(0)'
        }
        else
        {
            setTimeout(()=>{
                document.querySelector('.logo').style.transform = 'translateY(15vh) scale(1.3)'
            },100)
            document.querySelector('.head').style.transform = 'scaleY(1)'
            document.getElementById('menu').src = 'img/mobMenuLeave.svg'
        }
    }
});


let b = false

document.querySelector('.mobilenav').addEventListener('click', function(){
    if(b === true)
    {
        
        document.querySelector('.head').style.transform = 'scaleY(0)'
        document.getElementById('menu').src = 'img/mobMenu.svg'
        document.querySelector('.logo').style.transform = 'translateY(0%)'
        b = false
    }
    else
    {
        setTimeout(()=>{
            document.querySelector('.logo').style.transform = 'translateY(15vh) scale(1.3)'
        },100)
        document.querySelector('.head').style.transform = 'scaleY(1)'
        document.getElementById('menu').src = 'img/mobMenuLeave.svg'
        
        b = true
    }
})

document.querySelector('.logo').addEventListener('click', function(){
    if(screen.orientation.type == 'portrait-primary'){
        document.querySelector('.head').style.transform = 'scaleY(0)'
        document.getElementById('menu').src = 'img/mobMenu.svg'
        document.querySelector('.logo').style.transform = 'translateY(0px)'
        b = false
    }
})

document.querySelector('.navigation').addEventListener('click', function(){
    if(screen.orientation.type == 'portrait-primary'){
        document.querySelector('.head').style.transform = 'scaleY(0)'
        document.getElementById('menu').src = 'img/mobMenu.svg'
        document.querySelector('.logo').style.transform = 'translateY(0px)'
        b = false
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}) 


function StckBlck(){
    document.querySelector('.stickyBlock').style.height = document.querySelector('.back').getBoundingClientRect().height + 230 + 'px'
}
StckBlck()
function Ftrs(){
    const cells = document.querySelectorAll('.cell');
    const blocks = document.querySelectorAll('.block');
    let description = document.getElementById('dscrptnT')
    let title = document.getElementById('title')
    let blockIndex = 0


    cells.forEach((cell,index)=>{
        cell.addEventListener('mouseenter', function(){
            blockIndex = index
            blocks[index].style.display = 'block'
            this.style.transform = 'translateY(-20px)'
            blocks[index].addEventListener('click', function(){
                document.querySelector('.blockFtrs').style.display = 'block'
                document.querySelector('.bckgrnd').src = 'img/features/'+[index]+'.png'
                document.querySelector('.imgDscrptn').style.backgroundImage = 'url(img/features/'+[index]+'.png)'
                switch(index){
                    case 0:
                        title.textContent = "Создайте ферму своей мечты"
                        description.textContent = "Превратите свои заросшие поля в оживленную и обильную ферму!"
                        break;
                    case 1:
                        title.textContent = "Учитесь жить за счет земли"
                        description.textContent = "Разводите животных, ходите на рыбалку, ухаживайте за урожаем, создавайте предметы - или делайте все это!"
                        break;
                    case 2:
                        title.textContent = "Станьте частью местного сообщества"
                        description.textContent = "В городе Пеликан проживает более 30 жителей, с которыми вы можете подружиться!"
                        break;
                    case 3:
                        title.textContent = "Познакомьтесь с кем-нибудь особенным"
                        description.textContent = "На сегодняшний день здесь есть 12 горожан, среди которых вы можете найти кого-то, с кем можно создать семью!"
                        break;
                    case 4:
                        title.textContent = "Исследуйте таинственные пещеры"
                        description.textContent = "Встречайте опасных монстров и ценные сокровища глубоко под землей!"
                        break;
                    case 5:
                        title.textContent = "Настройте персонажа под себя"
                        description.textContent = "Есть сотни вариантов персонажей и оформления дома на выбор!"
                        break;
                    default: 
                        description.textContent = "что-то пошло не так"
                        break;
                }

            })
            

        })
        cell.addEventListener('mouseleave', function(){
            blocks[index].style.display = 'none'
            this.style.transform = 'translateY(0px)'
        })
        
        
    })

    document.querySelector('.leftBtn').addEventListener('click', function(){
        if(blockIndex == 0){
            blockIndex = 5
        }
        else{
            blockIndex--
        }
        document.querySelector('.bckgrnd').src = 'img/features/'+[blockIndex]+'.png'
            document.querySelector('.imgDscrptn').style.backgroundImage = 'url(img/features/'+[blockIndex]+'.png)'
            switch(blockIndex){
                case 0:
                    title.textContent = "Создайте ферму своей мечты"
                    description.textContent = "Превратите свои заросшие поля в оживленную и обильную ферму!"
                    break;
                case 1:
                    title.textContent = "Учитесь жить за счет земли"
                    description.textContent = "Разводите животных, ходите на рыбалку, ухаживайте за урожаем, создавайте предметы - или делайте все это!"
                    break;
                case 2:
                    title.textContent = "Станьте частью местного сообщества"
                    description.textContent = "В городе Пеликан проживает более 30 жителей, с которыми вы можете подружиться!"
                    break;
                case 3:
                    title.textContent = "Познакомьтесь с кем-нибудь особенным"
                    description.textContent = "На сегодняшний день здесь есть 12 горожан, среди которых вы можете найти кого-то, с кем можно создать семью!"
                    break;
                case 4:
                    title.textContent = "Исследуйте таинственные пещеры"
                    description.textContent = "Встречайте опасных монстров и ценные сокровища глубоко под землей!"
                    break;
                case 5:
                    title.textContent = "Настройте персонажа под себя"
                    description.textContent = "Есть сотни вариантов персонажей и оформления дома на выбор!"
                    break;
                default: 
                    description.textContent = "что-то пошло не так"
                    break;
            }
    })

    document.querySelector('.rightBtn').addEventListener('click', function(){
        if(blockIndex == 5){
            blockIndex = 0
        }
        else{
            blockIndex++
        }
        document.querySelector('.bckgrnd').src = 'img/features/'+[blockIndex]+'.png'
            document.querySelector('.imgDscrptn').style.backgroundImage = 'url(img/features/'+[blockIndex]+'.png)'
            switch(blockIndex){
                case 0:
                    title.textContent = "Создайте ферму своей мечты"
                    description.textContent = "Превратите свои заросшие поля в оживленную и обильную ферму!"
                    break;
                case 1:
                    title.textContent = "Учитесь жить за счет земли"
                    description.textContent = "Разводите животных, ходите на рыбалку, ухаживайте за урожаем, создавайте предметы - или делайте все это!"
                    break;
                case 2:
                    title.textContent = "Станьте частью местного сообщества"
                    description.textContent = "В городе Пеликан проживает более 30 жителей, с которыми вы можете подружиться!"
                    break;
                case 3:
                    title.textContent = "Познакомьтесь с кем-нибудь особенным"
                    description.textContent = "На сегодняшний день здесь есть 12 горожан, среди которых вы можете найти кого-то, с кем можно создать семью!"
                    break;
                case 4:
                    title.textContent = "Исследуйте таинственные пещеры"
                    description.textContent = "Встречайте опасных монстров и ценные сокровища глубоко под землей!"
                    break;
                case 5:
                    title.textContent = "Настройте персонажа под себя"
                    description.textContent = "Есть сотни вариантов персонажей и оформления дома на выбор!"
                    break;
                default: 
                    description.textContent = "что-то пошло не так"
                    break;
            }
    })

    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.blockFtrs').style.display = 'none'
    })
}


function Sldr(){
    let offset = document.querySelector('.scrn').getBoundingClientRect().width
    let left = -offset
    document.querySelector('.scrnshts').style.left = left + 'px'
    setTimeout(()=>{
        document.querySelector('.scrnshts').classList.add("anim")},100)

    document.querySelector('.sldrLft').addEventListener('click', function(){
        console.log(document.querySelector('.scrnshts').style.left)
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
        console.log(document.querySelector('.scrnshts').style.left)
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