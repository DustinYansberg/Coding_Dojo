function like(currElem) {
  elem = currElem.parentElement.children[1].children[0];
  elem.innerText = parseInt(elem.innerText) + 1;
}
