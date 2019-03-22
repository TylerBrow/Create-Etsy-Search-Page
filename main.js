
var itemcontainer = document.querySelector("#itemcontainer")

var htmlstr = items.map(item => {
   return `<div class="items">
     <img id="image" src="${unescape(item.Images[0].url_75x75)}" />
     <p class="name">${item.title.substring(0, 28)}</p>
     <p class="whomade">${item.Shop.shop_name}</p>
     <p class="price">$${item.price}</p>
 </div>`
}).join('')

console.log(htmlstr)

itemcontainer.innerHTML = htmlstr