let btnStarters = document.getElementById("btnStarters");
let btnEntrees = document.getElementById("btnEntrees");
let btnDeserts = document.getElementById("btnDesserts");
let btnAllItems = document.getElementById("btnAllItems");

btnStarters.addEventListener("click", function () {
  dishesUL.innerHTML = "";
  let starters = dishes.filter(function (dish) {
    return dish.course == "Starters";
  });

  for (let index = 0; index < starters.length; index++) {
    let starter = starters[index];

    let starterItem = `
              <div class="box">
                  <img src="${starter.imageURL}" width="200" height="200" class="menuImage"></img>
                  <div class="details">
                      <div class="titlePrice">
                          <p>${starter.title} $${starter.price}</p>
                          <p><em>${starter.description}</em></p>
                          </div>
                  </div>
              </div>               
          `;
    dishesUL.insertAdjacentHTML("beforeend", starterItem);
  }
});

btnEntrees.addEventListener("click", function () {
  dishesUL.innerHTML = "";
  let entrees = dishes.filter(function (dish) {
    return dish.course == "Entrees";
  });

  for (let index = 0; index < entrees.length; index++) {
    let entree = entrees[index];

    let entreeItem = `
            <div class="box">
                <img src="${entree.imageURL}" width="200" height="200" class="menuImage"></img>
                <div class="details">
                    <div class="titlePrice">
                        <p>${entree.title} $${entree.price}</p>
                        <p><em>${entree.description}</em></p>
                        </div>
                </div>
            </div>               
        `;
    dishesUL.insertAdjacentHTML("beforeend", entreeItem);
  }
});
btnDesserts.addEventListener("click", function () {
  dishesUL.innerHTML = "";
  let desserts = dishes.filter(function (dish) {
    return dish.course == "Desserts";
  });

  for (let index = 0; index < desserts.length; index++) {
    let dessert = desserts[index];

    let dessertItem = `
              <div class="box">
                  <img src="${dessert.imageURL}" width="200" height="200" class="menuImage"></img>
                  <div class="details">
                      <div class="titlePrice">
                          <p>${dessert.title} $${dessert.price}</p>
                          <p><em>${dessert.description}</em></p>
                          </div>
                  </div>
              </div>               
          `;
    dishesUL.insertAdjacentHTML("beforeend", dessertItem);
  }
});

btnAllItems.addEventListener("click", function () {
  dishesUL.innerHTML = "";

  for (let index = 0; index < dishes.length; index++) {
    let all = dishes[index];

    let allItems = `
              <div class="box">
                  <img src="${all.imageURL}" width="200" height="200" class="menuImage"></img>
                  <div class="details">
                      <div class="titlePrice">
                          <p>${all.title} $${all.price}</p>
                          <p><em>${all.description}</em></p>
                          </div>
                  </div>
              </div>               
          `;
    dishesUL.insertAdjacentHTML("beforeend", allItems);
  }
});
