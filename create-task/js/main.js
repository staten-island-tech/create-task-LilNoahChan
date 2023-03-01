import "../styles/style.css";
import { DOMSelectors } from "./dom"
import { items } from "./array"



const commands = {
    createcards: function () {
      items.forEach((items) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `
                  <div class="inner">
                  <h2>${items.itemName}</h2>
                  <p><img class="picture" src=${items.img}></p>
                  <p>Section: ${items.section}</p>
                  <p>Price: ${items.itemCost}</p>
                  </div>
                `
        );
      });
    }};


        function () {
        items.filter((items) => items.section.includes("personal"))
          .forEach((items) => {
            DOMselectors.box.insertAdjacentHTML(
                "beforeend",
                `
                        <div class="inner">
                        <h2>${items.itemName}</h2>
                        <p><img class="picture" src=${items.img}></p>
                        <p>Section: ${items.section}</p>
                        <p>Price: ${items.itemCost}</p>
                        </div>
                      `
            );
          });
      },