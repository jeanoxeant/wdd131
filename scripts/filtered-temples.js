// use the date object
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}</span>`;


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Port-au-Prince Haiti",
        location: "Port-au-Prince, Haiti",
        dedicated: "2019, September, 1",
        area: 10396,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/01-Port-au-Prince-Haiti-Temple-2264538.jpg"
    },
    {
        templeName: "Santo Domingo",
        location: "Santo Domingo, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-761308-wallpaper.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11-14",
        area: 190614,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    }
    // Add more temple objects here...
  ];


  createTempleCard(temples);

      const homeLink = document.querySelector("#home");
      homeLink.addEventListener("click", () => { 
      
        createTempleCard(temples.filter(temple => temple.templeName.includes(" ")));
        
      });
    
      const oldLink = document.querySelector("#old");
      oldLink.addEventListener("click", () => { 
      
        createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(' ')[0]) < 1900));
        
      });

      const newLink = document.querySelector("#new");
      newLink.addEventListener("click", () => { 
      
        createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(' ')[0]) > 2000));
        
      });

      const largeLink = document.querySelector("#large");
      largeLink.addEventListener("click", () => { 
      
        createTempleCard(temples.filter(temple => temple.area > 90000));
        
      });

      const smallLink = document.querySelector("#small");
      smallLink.addEventListener("click", () => { 
      
        createTempleCard(temples.filter(temple => temple.area < 10000));
        
      });

    
  function createTempleCard(filteredTemples) {
    document.querySelector(".pictures").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="lavel">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".pictures").appendChild(card);
    });
  }

