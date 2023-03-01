import { DOMSelectors } from "./dom"
import { items } from "./array"

function clearData() {
    DOMSelectors.everything.innerHTML = ""
}

items.forEach((x) => {
    DOMSelectors.wholecard.insertAdjacentElement("beforeend",
    `<div class="wholeThing">
    <img src="${x.img}" alt="Image of ${x.itemName}" class="theImage">
    
    </div>`
    );
});