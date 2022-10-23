
let workout_main_div = document.getElementById("workout-main-div");
let randerPosts = async () => {
  let res = await fetch(url);
  let workout_data = await res.json();
  let template = "";
  workout_data.forEach((element) => {
    template += `
    <div class="workout-posts">
    <img class="workout-images" src="${element.images}" alt="">
    <h2 class="drink-name">${element.name}</h2>
    <h3 class="prices">${element.price}</h3>
    <h3 class="click-to-buy">${element.buy}</h3>
  </div>
    `;
  });
  workout_main_div.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => randerPosts());



const workout_list = document.getElementById("workout_list");
const search = document.getElementById("search");
let workout_names = [];

search.addEventListener("keyup", (e) => {
  const search_string = e.target.value.toLowerCase();

  const filtered_workout = workout_names.filter((workout) => {
    return workout.name.toLowerCase().includes(search_string);
  });
  display_workout(filtered_workout);
});

const load_workout = async () => {
  try {
    const res = await fetch
    workout_names = await res.json();
    display_workout(workout_names);
  } catch (err) {
    console.error(err);
  }
};

const display_workout = (workout_data) => {
  const html_string = workout_data
    .map((workout) => {
      return `
            <li class="character">
                <h2>${workout.name}</h2>
            </li>
        `;
    })
    .join("");
    workout_list.innerHTML = html_string;
};

load_whiskey();


let scroll_button = document.querySelector(".scroll-up1");

scroll_button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



let burger_bar = document.querySelector(".burger_bar");
let nav_menu = document.querySelector(".nav_menu");

burger_bar.addEventListener("click", function () {
  burger_bar.classList.toggle("active");
  nav_menu.classList.toggle("active");
});
document.querySelectorAll(".nav_item").forEach((y) =>
  y.addEventListener("click", function () {
    burger_bar.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);