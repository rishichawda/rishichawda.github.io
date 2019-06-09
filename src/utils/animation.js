import { throttle } from './throttle'

const animateHTML = () => {
  let elems
  let windowHeight
  let animType
  function init(type) {
    elems = document.querySelectorAll('.hidden')
    windowHeight = window.innerHeight
    animType = type
    addEventHandlers()
    checkPosition()
  }
  function addEventHandlers() {
    window.addEventListener('scroll', throttle(checkPosition, 101, { leading: true, trailing: true }))
    window.addEventListener('resize', throttle(checkPosition, 101, { leading: true, trailing: true }))
  }
  function checkPosition() {
    for (let i = 0; i < elems.length; i += 1) {
      const positionFromTop = elems[i].getBoundingClientRect().top
      if (positionFromTop - windowHeight < 0) {
        elems[i].className = elems[i].className.replace('hidden', animType)
        elems[i].style.opacity = 1
      } else if (positionFromTop > windowHeight) {
        elems[i].className = elems[i].className.replace(animType, 'hidden')
      }
    }
  }
  function unload() {
    window.removeEventListener('scroll', checkPosition)
    window.removeEventListener('resize', checkPosition)
  }
  return {
    init,
    unload,
  }
}

export default animateHTML()
