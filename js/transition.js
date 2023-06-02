// Better to traverse the DOM thenleast possible
// you can use `var` instead of `const` for legacy browser support
const bus = document.querySelector('.bus')
const road = document.querySelector('.road')
const preload = document.querySelector('.pre')

// Function to add and remove the page transition screen
function busIn() {
  // GSAP methods can be chained and return directly a promise
  // but here, a simple tween is enough
  return gsap
    // .timeline()
    // .set(loadingScreen, { transformOrigin: 'bottom left'})
    // .to(loadingScreen, { duration: .5, scaleY: 1 })
    
    .to(bus, { 
        duration: 1.5, 
        left:'110%',
        animation: 'loading 1.5s linear',
    }
    )
}


function roadIn() {
    // GSAP methods can be chained and return directly a promise
    // but here, a simple tween is enough
    return gsap
      // .timeline()
      // .set(loadingScreen, { transformOrigin: 'bottom left'})
      // .to(loadingScreen, { duration: .5, scaleY: 1 })
      
      .to(road,{
          duration: 1.5, 
          left:'0%'
      }
      )
  }


  function preIn(container) {
    // GSAP methods can be chained and return directly a promise
    return gsap // More readable to put it here
      .set(preload, { 
        duration: 1.5, 
        display:'block'
      })
      
  }



// Function to add and remove the page transition screen
function busOut(container) {
  // GSAP methods can be chained and return directly a promise
  return gsap // More readable to put it here
    .set(bus, { 
        duration: 1.5, 
        left:'-600px',
        animation:'',
    })
    
}


function roadOut(container) {
    // GSAP methods can be chained and return directly a promise
    return gsap
      .to(road, {
          duration: 1.5, 
          left:'100%'
      })
      
  }

  function roadOut2(container) {
    // GSAP methods can be chained and return directly a promise
    return gsap
    .set(road, {
      left:'-100%'
    })
      
  }
  
  function preOut(container) {
    // GSAP methods can be chained and return directly a promise
    return gsap // More readable to put it here
      .set(preload, { 
          display:'none'
      })
      
  }


$(function() {
  barba.init({
    // We don't want "synced transition"
    // because both content are not visible at the same time
    // and we don't need next content is available to start the page transition
    // sync: true,
    transitions: [{
      // NB: `data` was not used.
      // But usually, it's safer (and more efficient)
      // to pass the right container as a paramater to the function
      // and get DOM elements directly from it
      async leave(data) {
        // Not needed with async/await or promises
        // const done = this.async();

        await preIn()
        /* await roadIn() */
        await busIn()
        // No more needed as we "await" for pageTransition
        // And i we change the transition duration, no need to update the delay…
        // await delay(1000)

        // Not needed with async/await or promises
        // done()

        // Loading screen is hiding everything, time to remove old content!
        data.current.container.remove()
      },

      async enter(data) {
        await busOut(data.next.container)
        await preOut(data.next.container)
      }
    }],
    views:[{
      namespace: 'home',
      beforeEnter(data){
          Ftrs()
          document.querySelector('.stickyBlock').style.height = document.querySelector('.back').getBoundingClientRect().height + 230 + 'px'
      }},{
      namespace: 'media',
      beforeEnter(data){
          Sldr()
          document.querySelector('.stickyBlock').style.height = document.querySelector('.back').getBoundingClientRect().height + 230 + 'px'
      }
  },{
    namespace: 'faqs',
    beforeEnter(data){
      document.querySelector('.stickyBlock').style.height = document.querySelector('.back').getBoundingClientRect().height + 230 + 'px'
    }
  }, {
    namespace: 'guide',
    beforeEnter(data){
      document.querySelector('.stickyBlock').style.height = document.querySelector('.back').getBoundingClientRect().height + 230 + 'px'
    }
  }]
  });

});





