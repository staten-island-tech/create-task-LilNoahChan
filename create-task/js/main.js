import "../styles/style.css";
import { DOMSelectors } from "./dom"
import { items } from "./array"

const commands = {
  createcards: function () {
    items.forEach((items)=>{
      DOMSelectors.box.insertAdjacentElement(
        "beforeend",
        `
                <div class="inner">
                <h2>${items.itemName}</h2>
                <p><img class="picture" src="${items.img}" alt="picture of ${items.img}"> a</p>
                <p>Category: ${items.section}</p>
                <p>Price: ${items.itemCost}</p>
                </div>
              `
      );
    });
  },
  FilterAll: function () {
    items.filter((items)=> items.section.includes("personal"))
    .forEach((items)=> {
      DOMSelectors.box.insertAdjacentElement(
      "beforeend",
      `
              <div class="inner">
              <h2>${items.itemName}</h2>
              <p><img class="picture" src="${items.img}" alt="picture of ${items.img}"> a</p>
              <p>Category: ${items.section}</p>
              <p>Price: ${items.itemCost}</p>
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
DOMSelectors.button.addEventListener("click", function (){
  commands.remove();
  commands.FilterAll()
})