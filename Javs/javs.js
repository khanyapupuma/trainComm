// 
let products = JSON.parse(localStorage.getItem('products'))
             ? JSON.parse(localStorage.getItem('products'))
             : localStorage.setItem('products',
             JSON.stringify(
                [
                 
      {
        productName: "swegga.jpg",
        category: "picture",
        description: "Just a picture",
        amount: 20000.89,
        img_url: "https://khanyapupuma.github.io/all-images/Images/swegga.jpg"
      },
      {
        productName: "delivery.jpg",
        category: "picture",
        description: "Dell Latitude E5450 i3 5th GEN 1 for bussiness. RAM: 8GB, HDD: 1TB",
        amount: 20000.89,
        img_url: "https://postimg.cc/NLCRMgC2"
      },
      {
        productName: "link.jpg",
        category: "picture",
        description: "Dell Latitude E5450 i3 5th GEN 1 for bussiness. RAM: 8GB, HDD: 1TB",
        amount: 20000.89,
        img_url: "https://khanyapupuma.github.io/all-images/Images/delivery.gif"
      },
      {
       productName: "HTML logo",
        category: "picture",
        description: "Dell Latitude E5450 i3 5th GEN 1 for bussiness. RAM: 8GB, HDD: 1TB",
        amount: 20000.89,
        img_url: "https://khanyapupuma.github.io/all-images/Images/HTML logo.png"
      },
      {
        productName: "Bootstrap",
        category: "picture",
        description: "Dell Latitude E5450 i3 5th GEN 1 for bussiness. RAM: 8GB, HDD: 1TB",
        amount: 20000.89,
        img_url: "https://khanyapupuma.github.io/all-images/Images/bootatrap-1.jpeg"
      }
    ]
  
                
             ))

             function recentProducts(params) {
                let arrSize = products.length
                let latestProducts = products.reverse().slice(0, arrSize >> 1)
                latestProducts.forEach(product => {
                    wrapper.innerHTML += 
                    `<div class = "card">
                    <img src = "${product.img_url}"
                    class = "card-img-top" alt = "${product.productName}"
                    loading = 'lazy'>

                    <div class= "card-body"><h5 class= "card-title">${product.productName}</h5></div>
                    <p class = "card-text">${product.description}</p>
                    </div>
                    `
                })
                
             }
recentProducts()