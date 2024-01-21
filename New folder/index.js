// Sample data (you can replace this with your own data)
const cardData = [
  {
    id: 1,
    name: "Hero",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs" , ],
  },
  {
    id: 1,
    name: "Hero1",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero2",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero3",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero4",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero5",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero6",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 1,
    name: "Hero7",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero8",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero9",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero10",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero11",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero12",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero13",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero14",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 2,
    name: "Hero15",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero16",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero17",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero18",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero19",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero20",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero21",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero22",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
  {
    id: 3,
    name: "Hero23",
    desc: "description goes here",
    languages: ["javascript", "angular", "angularJs", "ReactJs"],
  },
];

// Variables for pagination
let limit = 6; // Change this value as needed
let currentPage = 1; // Change this value as needed
let cardContainer = document.getElementById("card-container");
let paginationContainer = document.getElementById("pagination");

// Call the loadItem function initially
loadItem();

// Function to load items based on pagination
function loadItem() {
  // Clear existing content in the container
  cardContainer.innerHTML = "";

  let beginGet = limit * (currentPage - 1);
  let endGet = limit * currentPage - 1;

  // Loop through the data and create cards
  cardData.slice(beginGet, endGet + 1).forEach((data) => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });

  // Update pagination controls
  updatePagination();
}

function createCard(data) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = data.name;

  const descElement = document.createElement("p");
  descElement.textContent = data.desc;

  const cardLang = data.languages;
 
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descElement);
  cardLang.map((data) => {
    const langElement = document.createElement("button");
    langElement.textContent = data;
    langElement.style.color = "white";
    langElement.style.background = "blue";
    langElement.style.margin = "2px";
    cardElement.appendChild(langElement);
  });

  return cardElement;
}



// pagination functions for cards 
function updatePagination() {
  const totalPages = Math.ceil(cardData.length / limit);

  // Clear existing pagination controls
  paginationContainer.innerHTML = "";

  // Previous page button
  const prevButton = document.createElement("button");
  prevButton.style.background = "blue"
  prevButton.style.color = "white"
  prevButton.style.marginRight = "5px"
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      loadItem();
    }
  });

  // Next page button
  const nextButton = document.createElement("button");
  nextButton.style.background = "blue"
  nextButton.style.color = "white"
  nextButton.style.marginLeft = "5px"

    nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      loadItem();
    }
  });

  // Display current page and total pages
  const pageInfo = document.createElement("span");
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  // Append elements to the pagination container
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
}
