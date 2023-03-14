const accordion = document.querySelectorAll('.accordion-single')
const arrow = document.querySelectorAll('.arrow')
const title = document.querySelectorAll('.single-title')
const accordionContent = document.querySelectorAll('.single-content')


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    closeAll()
    openItem(i)
  })
}

function openItem(i){
  arrow[i].style.transform = 'rotateX(180deg)'
  title[i].style.fontWeight = '700'
  accordionContent[i].style.display = 'block'
}


function closeAll(){
  for (let i = 0; i < accordion.length; i++){
    arrow[i].style.transform = 'rotateX(0deg)'
    title[i].style.fontWeight = '500'
    accordionContent[i].style.display = 'none'
  }
}