const scrollToPage = () => {
  var targetSection = document.querySelector('.page')
  goto(targetSection)
}

const scrollToContact = () => { 
  var targetSection = document.querySelector('.contact-us-form')
  goto(targetSection)
}

const scrollToInfos = () => { 
  var targetSection = document.querySelector('.about-us')
  goto(targetSection)
}

const goto = (target) => {
  window.scrollTo({top: target.offsetTop, behavior: 'smooth'})
}
