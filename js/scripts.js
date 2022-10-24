addEventListener("load", function() {

const flavors = ["rocky road", "mint chocolate chip", "strawberry", "vanilla", "mango"];

let body = document.querySelector("body");
const ul = document.createElement("ul");

flavors.forEach(function(scoop) {
 
  const li = document.createElement("li");
  li.append(scoop);
  body.append(ul);
  ul.append(li);
  
})
})