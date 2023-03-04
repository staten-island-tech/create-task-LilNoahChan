

import "../styles/style.css";
import { DOMSelectors } from "./dom"
import { items } from "./array"

const commands = {
  createcards: function () {
    items.forEach((items) => {
      DOMSelectors.box.insertAdjacentHTML(
        // "beforeend",
        // `
        //         <div class="inner">
        //         <h2>${items.itemName}</h2>
        //         <p><img class="picture" src="${items.img}" alt="picture of ${items.img}"> </p>
        //         <p>Category: ${items.section}</p>
        //         <p>Price: ${items.itemCost}</p>
        //         <button class="addbutton" id="addbutton">add to shopping list</button>
        //         </div>
        //       `
        "beforeend",
        `
              <div class="wholeThing">
              <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
    
              <div class="nameAndStuff">
              <h1> ${items.itemName} </h1>
   

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
    items.filter((items) => items.cvs.includes("yes"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${items.itemName} </h1>
     
  
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

  FilterGrocery: function () {
    items.filter((items) => items.section.includes("grocery"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${items.itemName} </h1>
     
  
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

  FilterVitamins: function () {
    items.filter((items) => items.section.includes("vitamins"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${items.itemName} </h1>
     
  
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

  FilterHousehold: function () {
    items.filter((items) => items.section.includes("household"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${items.itemName} </h1>
     
  
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


  FilterPersonal: function () {
    items.filter((items) => items.section.includes("personal"))
      .forEach((items) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div class="wholeThing">
                <img src="${items.img}" alt="Image of ${items.img}" class="theImage">
      
                <div class="nameAndStuff">
                <h1> ${items.itemName} </h1>
     
  
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

  remove: function () {
    let card = document.querySelectorAll(".inner");
    card.forEach((card) => {
      card.remove();
    });
  },
}

commands.createcards();

//everything
DOMSelectors.button.addEventListener("click", function () {
  commands.remove();
  commands.FilterAll();
});

//grocery
DOMSelectors.button2.addEventListener("click", function () {
  commands.remove();
  commands.FilterGrocery();
});

DOMSelectors.button3.addEventListener("click", function () {
  commands.remove();
  commands.FilterVitamins();
});

DOMSelectors.button4.addEventListener("click", function () {
  commands.remove();
  commands.FilterHousehold();
});

DOMSelectors.button5.addEventListener("click", function () {
  commands.remove();
  commands.FilterPersonal();
});