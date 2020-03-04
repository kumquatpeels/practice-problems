

function removeClassFromElement(element, remove){
  const el = document.querySelector(element)
  $(el).removeClass(remove)
}

function toggleClassOnElement(element, toggle){
  const el = document.querySelector(element)
  $(el).toggleClass(toggle)
}

function hideElements(target, remove){
  console.log('target:', target)
  console.log('remove:', remove)
  const el = document.querySelector(target)
  switch (remove) {
    case 'hide':
      $(el).addClass('hide')
      break
    case 'removeChildren':
      $(el).removeChild(remove)
      break
    case 'removeSelf':
      $(el).removeSelf()
      break
  }
}

function addAttributeToElement( ){

}

function putPosInElement(  ){

}
