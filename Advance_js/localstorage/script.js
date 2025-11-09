// Food items data (name + image URL)
const foods = [
  { name: "Pizza", img: "https://img.icons8.com/color/100/pizza.png" },
  { name: "Samosa", img: "https://img.icons8.com/color/100/samosa.png" },
  { name: "Chinese", img: "https://img.icons8.com/color/100/noodles.png" },
  { name: "Burger", img: "https://img.icons8.com/color/100/hamburger.png" },
  { name: "Momo", img: "https://img.icons8.com/color/100/dumplings.png" },
  { name: "Rolls", img: "https://img.icons8.com/color/100/burrito.png" },
  { name: "Shawarma", img: "https://img.icons8.com/color/100/wrap.png" },
  { name: "Pure Veg", img: "https://img.icons8.com/color/100/vegetarian-food.png" },
  { name: "Chole Bhature", img: "https://img.icons8.com/color/100/indian-food.png" },
  { name: "Cake", img: "https://img.icons8.com/color/100/cake.png" },
  { name: "Dosa", img: "https://img.icons8.com/color/100/pancake.png" },
  { name: "Pav Bhaji", img: "https://img.icons8.com/color/100/stew.png" },
  { name: "Noodles", img: "https://img.icons8.com/color/100/noodles.png" },
  { name: "Pakoda", img: "https://img.icons8.com/color/100/meatball.png" }
];

// Get container
const container = document.getElementById("foodContainer");

// Dynamically create food items
foods.forEach(food => {
  const div = document.createElement("div");
  div.classList.add("food-item");

  div.innerHTML = `
    <img src="${food.img}" alt="${food.name}">
    <p>${food.name}</p>
  `;
  
  container.appendChild(div);
});
