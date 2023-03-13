const accordion = document.querySelectorAll('.accordion-single')
const accordionContent = document.querySelector('.single-content')

accordion.forEach(item => {
  item.addEventListener('click', () => {
    accordionContent.style.display = 'block'
  })
})