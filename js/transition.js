const bus = document.querySelector('.bus')
const road = document.querySelector('.road')
const preload = document.querySelector('.pre')

function busIn() {
  return gsap
    .to(bus, { 
        duration: 1.5, 
        left:'110%',
        animation: 'loading 1.5s linear',
    }
    )
}


function roadIn() {
    return gsap
      .to(road,{
          duration: 1.5, 
          left:'0%'
      })
  }


function preIn(container) {
    return gsap 
      .set(preload, { 
        duration: 1.5, 
        display:'block'
      })
      
  }

function busOut(container) {
  return gsap 
    .set(bus, { 
        duration: 1.5, 
        left:'-600px',
        animation:'',
    })    
}

function roadOut(container) {
    return gsap
      .to(road, {
          duration: 1.5, 
          left:'100%'
      })      
  }

  function roadOut2(container) {
    return gsap
    .set(road, {
      left:'-100%'
    })      
  }
  
  function preOut(container) {
    return gsap 
      .set(preload, { 
          display:'none'
      })
  }


$(function() {
  barba.init({
    transitions: [{
      async leave(data) {
        await preIn()
        await busIn()
        data.current.container.remove()
      },

      async enter(data) {
        await busOut(data.next.container)
        await preOut(data.next.container)
      }
    }],
    views:[{
      namespace: 'index',
      beforeEnter(data){
          Ftrs()
          StckBlck()
      }},{
      namespace: 'media',
      beforeEnter(data){
          Sldr()
          StckBlck()
      }},{
      namespace: 'faqs',
      beforeEnter(data){
        StckBlck()
        document.getElementById('guide').addEventListener('click', function(){
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }) 
      }},{
      namespace: 'guide',
      beforeEnter(data){
        StckBlck()
      }
  }]
  });

});





