import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { items } from "./array";


const commands = {
  createcards: function () {
    items.forEach((items) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
              <div class="wholeThing">
              <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
    
              <div class="nameAndStuff">
              <h1>Product: ${items.itemName} </h1>
   
    <div class= "bio">
    <h2>Section: ${items.section} </h2>
    <h2>Cost: $${items.itemCost} </h2>
    <button class="addbutton" id="addbutton">add to shopping list</button>
    </div>
    </div>
    </div>
    `
      );
    });
  },
  FilterAll: function () {
    items
      .filter((items) => items.cvs.includes("yes"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> Product: ${items.itemName} </h1>
     
  
      <div class= "bio">
      <h2>Section: ${items.section} </h2>
      <h2>Cost: $${items.itemCost} </h2>
              </div>
            </div>
          </div>
          `
        );
      });
  },

  FilterType: function (param) {
    items
      .filter((items) => items.section.includes(param))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
          <div class="wholeThing">
            <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
            <div class="nameAndStuff">
              <h1>Product: ${items.itemName} </h1>
     
  
              <div class= "bio">
                <h2>Section: ${items.section} </h2>
                <h2>Cost: $${items.itemCost} </h2>
              </div>
            </div>
          </div>
          `
        );
      });
  },

  remove: function () {
    let card = document.querySelectorAll(".wholeThing");
    card.forEach((card) => {
      card.remove();
    });
  },
};

commands.FilterAll();

//everything
DOMSelectors.button.addEventListener("click", function () {
  commands.remove();
  commands.FilterAll();
});

//grocery
DOMSelectors.button2.addEventListener("click", function () {
  commands.remove();
  commands.FilterType("grocery");
});

DOMSelectors.button3.addEventListener("click", function () {
  commands.remove();
  commands.FilterType("vitamins");
});

DOMSelectors.button4.addEventListener("click", function () {
  commands.remove();
  commands.FilterType("household");
});

DOMSelectors.button5.addEventListener("click", function () {
  commands.remove();
  commands.FilterType("personal");
});

let totalCost = 0;

DOMSelectors.btn.addEventListener("click", function () {
  const inputValue = DOMSelectors.input.value;
  DOMSelectors.input.value = '';

  const itemNames = items.map(item => (item.itemName))

  if (itemNames.some(item => item == inputValue)) {
    
    document.getElementById("totalCost").innerHTML = ''

    const foundItem = items.find(item => item.itemName == inputValue)
    totalCost += foundItem.itemCost;

    DOMSelectors.list.insertAdjacentHTML("beforeend", 
    `
    <h1>${foundItem.itemName} - $${foundItem.itemCost}</h1>
    `)
    
    document.getElementById("totalCost").insertAdjacentHTML("beforeend", 
    `
    <h1>Total - $${totalCost}</h1>
    `)
  }
})
