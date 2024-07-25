// use the date object
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}</span>`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  createProductCard(products);

  function createProductCard(filteredProducts) {
    document.querySelector(".sonel").innerHTML = "";
    filteredProducts.forEach(product => {
        let card = document.createElement("option");
        let name = document.createElement("option");
        
        
        name.innerHTML = `<option value="${product.id}">${product.name}</option>`;
        
        card.appendChild(name);
        
        document.querySelector(".sonel").appendChild(card);
    });
  }
