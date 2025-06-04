//mobile menu on off
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
const recipes = [
  {
    title: "Creamy Garlic Butter Chicken",
    imgSrc: "../images/home-page-images/Creamy-Garlic-Chicken-Pan.jpg",
    likes: 120,
    rating: 4.9,
    selling: 10,
    description: "Indulge in the rich and savory flavors...",
    chefImg: "../images/home-page-images/man1.jpeg",
    chefName: "Anthony",
    time: "40mins.",
  },
  {
    title: "Spicy Thai Noodles",
    imgSrc: "../images/home-page-images/fruit-salad.jpg",
    likes: 95,
    rating: 4.7,
    selling: 13,
    description: "Enjoy bold flavors with these spicy noodles...",
    chefImg: "../images/home-page-images/woman2.jpeg",
    chefName: "Sophia",
    time: "25mins.",
  },
  {
    title: "Grilled Salmon Delight",
    imgSrc: "../images/home-page-images/salmon.jpeg",
    likes: 134,
    rating: 4.8,
    selling: 14,
    description: "A simple yet delicious grilled salmon recipe...",
    chefImg: "../images/home-page-images/man1.jpeg",
    chefName: "Chef Oliver",
    time: "30mins.",
  },
  {
    title: "Spring Roll",
    imgSrc: "../images/home-page-images/roll.jpeg",
    likes: 95,
    rating: 4.7,
    selling: 16,
    description: "Enjoy bold flavors with these spicy noodles...",
    chefImg: "../images/home-page-images/woman1.jpeg",
    chefName: "Sophia",
    time: "25mins.",
  },

  {
    title: "Masala Chicken Curry",
    imgSrc: "../images/home-page-images/masala-chicken.jpg",
    likes: 212,
    rating: 4.9,
    selling: 20,
    description: "Rich, spicy and creamy chicken masala made...",
    chefImg: "../images/home-page-images/woman2.jpeg",
    chefName: "Chef Priya",
    time: "45mins.",
  },
  {
    title: "Egg Power Bowl",
    imgSrc: "../images/home-page-images/rice-bwl.jpg",
    likes: 78,
    rating: 4.5,
    selling: 21,
    description: "A healthy and filling bowl of eggs, avocado...",
    chefImg: "../images/home-page-images/man2.jpeg",
    chefName: "Chef Liam",
    time: "20mins.",
  },
  {
    title: "Fresh Fruit Salad",
    imgSrc: "../images/home-page-images/fruit-salad2.jpg",
    likes: 150,
    rating: 4.6,
    selling: 32,
    description: "A colorful mix of fresh seasonal fruits topped...",
    chefImg: "../images/home-page-images/woman1.jpeg",
    chefName: "Chef Emma",
    time: "15mins.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recipeContainer");
  const bestSellingContainer = document.getElementById("bestSellingContainer");

  recipes.slice(0, 3).forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
          <div class="book-mark">
            <i class="fa-solid fa-bookmark"></i>
          </div>
          <div class="recipe-img">
            <img src="${recipe.imgSrc}" alt="${recipe.title}" />
          </div>
          <div class="recipe-details">
            <div class="recipe-reaction">
              <span><i class="fa-solid fa-thumbs-up"></i> ${recipe.likes} likes</span>
              <span><i class="fa-solid fa-star"></i>${recipe.rating}</span>
            </div>
            <p class="recipe-title">${recipe.title}</p>
            <p class="recipe-p">${recipe.description}</p>
            <div class="card-bottom">
              <div class="chef-img-name">
                <div class="chef-img">
                  <img src="${recipe.chefImg}" alt="${recipe.chefName}" />
                </div>
                <p>${recipe.chefName}</p>
              </div>
              <p class="card-bottom-time">
                <i class="fa-solid fa-clock"></i> ${recipe.time}
              </p>
            </div>
          </div>
        `;
    container.appendChild(card);
  });

  recipes
    .sort((a, b) => b.selling - a.selling)
    .slice(0, 3)
    .forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
          <div class="book-mark">
            <i class="fa-solid fa-bookmark"></i>
          </div>
          <div class="recipe-img">
            <img src="${recipe.imgSrc}" alt="${recipe.title}" />
          </div>
          <div class="recipe-details">
            <div class="recipe-reaction">
              <span><i class="fa-solid fa-thumbs-up"></i> ${recipe.likes} likes</span>
              <span><i class="fa-solid fa-star"></i>${recipe.rating}</span>
            </div>
            <p class="recipe-title">${recipe.title}</p>
            <p class="recipe-p">${recipe.description}</p>
            <div class="card-bottom">
              <div class="chef-img-name">
                <div class="chef-img">
                  <img src="${recipe.chefImg}" alt="${recipe.chefName}" />
                </div>
                <p>${recipe.chefName}</p>
              </div>
              <p class="card-bottom-time">
                <i class="fa-solid fa-clock"></i> ${recipe.time}
              </p>
            </div>
          </div>
        `;
      bestSellingContainer.appendChild(card);
    });
});
