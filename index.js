let header = document.querySelector('#page-header')//"find the page header"
header.style.textAlign = "left"  //Move header to left alignment
header.style.backgroundColor = 'blue'

let dogImages = document.querySelectorAll('.dog-image')//"find all the dog images your document"
for(let i =0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'//"add a border radius around the pictures"
    dogImages[i].style.border = '4px inset brown'                                                                 
    dogImages[i].style.outline = '4px solid yellow'              
}let footer= document.querySelector('.footer')//find the footer 
footer.style.textAlign = 'right'
footer.style.backgroundColor = 'pink'
let dogName = document.querySelectorAll('.dog-name')//"find all dog names"
for(i = 0; i < dogName.length; i++)
dogName.style.textAlign = "left"
