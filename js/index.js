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


