let header = document.querySelector('#page-header')//"find the page header"
header.style.textAlign = "left"  //Move header to left alignment

let dogImages = document.querySelectorAll('.dog-image')//"find all the dog images your document"
for(let i =0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'//"add a border radius around the pictures"
}