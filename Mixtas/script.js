
  var data = [];
  var products = document.getElementById('data');

  async function AllProducts() {
    try {
      let res = await fetch('product.json');
      data = await res.json();
      renderProducts(data);
    }
    catch (error) {
      console.error("Error fetching data product", error);
    }
  }

  function renderProducts(productList) {
    products.innerHTML = productList.map(product => `
  <div class="filterDiv ${product.Productname} " >
  <div class="card" style="width: 16rem;  onmouseout="hidden()" onmouseleave="show()">
             <div id="hide-i " >
                <div id="hide-icons"  class=" bicon1">
                  <span id="heart" class="bicon"><i id="bi" class="bi bi-heart"></i></span>
                  <span id="myBtn" class="bicon"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i id="bi" class="bi bi-search"></i>
                  </span>
                  <span id="cart" class="bicon"><i id="bi" class="bi bi-cart2" style="width:20px;"></i></span>
                 </div>
                <img src="${product.image}" class="card-img-top" alt="..." style="height: 13rem;">
            </div>
              <div class="card-body">
                <h5 class="card-title text-uppercase " id="productnam" style="color:#bbb; ">${product.Productname}</h5>
                <p class="card-text" style="color:#100;">${product.Producttext}</p>
                <p class="price" style="color:#bbb;">$${product.Price}</p>
              </div>
   </div>
 </div>

 
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content" style="  max-width: 80rem;">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                          <div class="row">

                  <div class="col col-6"><img class="image-top" style="width:400px;"
                      src="${product.image}" alt="">
                  </div>
                  <div class="col col-6">
                    <h4>${product.Producttext}</h4><br>
                    <h6>$${product.Price}</h6><br>
                    <p>A product short description is a concise and brief overview of a product, providing key
                      information to potential customers. Typically, it is a brief summary that highlights the
                      most important features, benefits, and characteristics of the product
                    <h5>Color : Black</h5> <br>
                    <ul class="list-group list-inline-item " style="width:200px; display: flex; flex-direction: row; padding-left: 0; margin-bottom: 10px; border-radius: 0.25rem;
                          justify-content: space-between;">
                      <li class="list-group-item border-0"
                        style="padding:9px; border-radius: 0; background-color:rgb(231, 12, 12)" ;></li>
                      <li class="list-group-item border-0" style="padding:9px; background-color:rgb(243, 144, 16)"
                        ;></li>
                      <li class="list-group-item border-0" style="padding:9px; background-color:rgb(240, 224, 10)"
                        ;></li>
                      <li class="list-group-item border-0" style="padding:9px; background-color:rgb(98, 248, 28)"
                        ;></li>
                      <li class="list-group-item border-0" style="padding:9px; background-color:rgb(39, 102, 238)"
                        ;></li>
                      <li class="list-group-item border-0"
                        style="padding:9px;  border-radius: 0;background-color:rgb(238, 16, 201)" ;></li>
                    </ul> <br>
                    <div class=" py-1 d-flex justify-content-start" role="button">
                      <div style="width:120px; " class="d-flex justify-content-between border  mx-3"><span
                          class="fs-5 px-3">-</span>
                        <span class="fs-5 px-3">1</span>
                        <span class="fs-5 px-3">+</span>
                      </div>

                      <button class="btn btn-dark"> Add To Cart</button>
                    </div>

                    <br><br>
                    <h6><i id="bi" class="bi bi-heart"></i> Add to wishList</h6>
                  </div>
                </div>
                </div>
             
              </div>
            </div>
          </div>
  `).join('');
  }

  AllProducts();

  // function hideic() {
  //   let hicon = document.getElementById("hide-icons");
  //   let hdiv = document.getElementById('hide-i');
  //   card.addEventListener('mouseover', show)
  //   card.addEventListener('mouseout', hidden)

  //   function show() {
  //     hicon.style.backgroundColor = "red";
  //   }
  //   function hidden() {
  //     hicon.style.display = "flex";

  //   }
  // }


// let hicon = document.getElementById('hide-icons');
// let card=document.getElementsByClassName('hide-i');
// card.onmouseover = function() {
//   hicon.style.display = "flex";
//   hicon.style.backgroundColor = "#000";
// }
// card.onmouseout = function() {
//   hicon.style.display = "none";
// }

// let hicon = document.getElementById('hide-icons');
// let card=document.getElementsByClassName('hide-i');
// card.addEventListener('mouseover',show);
// card.addEventListener('mouseout',hidden);

// function show() {
//   hicon.style.display="none";
// }
// function hidden() {
//   hicon.style.display="flex";
  
// } 
