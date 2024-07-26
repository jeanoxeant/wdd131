// use the date object
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}</span>`;


const projects = [
    {
        projectName: "Concre Anchor",
        location: "Miches, Impulsion Line",
        Constructed: "2023",
        image: "images/jean2-large.jpg"
    },
    {
        projectName: "Construction of Aqueduct",
        location: "Miches, Rio Lleguada",
        Constructed: "2023",
        image: "images/base-concrete-carcamo.jpg"
    },
    {
        projectName: "Construction of Aqueduct",
        location: "Miches, Rio Lleguada",
        Constructed: "2023",
        image: "images/rebars-carcamo.jpg"
    },
    {
        projectName: "Construction of Aqueduct",
        location: "Miches, Rio Llegaguada",
        Constructed: "2023",
        image: "images/wall-carcamo.jpg"
    },
    {
        projectName: "Remodeling Aqueduct",
        location: "Miches, Arroyo Santiago",
        Constructed: "2023",
        image: "images/concrete-arrsantiago.jpg"
    },
    {
        projectName: "Remodeling Aqueduct",
        location: "Miches, Arroyo Santiago",
        Constructed: "2023",
        image: "images/aqueduct-arrsantiago.jpg"
    }

  ];


  createProjectCard(projects);


    
  function createProjectCard(filteredProjects) {
    document.querySelector(".pictures").innerHTML = "";
    filteredProjects.forEach(project => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let construction = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = project.projectName;
        location.innerHTML = `<span class="label">Location:</span> ${project.location}`;
        construction.innerHTML = `<span class="label">Constructed:</span> ${project.Constructed}`;
        img.setAttribute("src", project.image);
        img.setAttribute("alt", `${project.projectName} Project`);
        img.setAttribute("loading", "lazy");
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(construction);
        card.appendChild(img);

        document.querySelector(".pictures").appendChild(card);
    });
  }