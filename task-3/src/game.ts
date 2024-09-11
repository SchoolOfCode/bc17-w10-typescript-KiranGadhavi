const JokesBtn = document.querySelector(".jokes-btn");
const display_jokes = document.querySelector(".jokes-display");

async function getJokes(): Promise<string> {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.joke;
}
async function displayJokes() {
  const joke = await getJokes();
  if (display_jokes) {
    display_jokes.textContent = joke;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  displayJokes();
  if (JokesBtn) {
    JokesBtn.addEventListener("click", () => {
      displayJokes();
    });
  }
});

// JokesBtn?.addEventListener("click", () => {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data.joke);
//       if (display_jokes) {
//         display_jokes.textContent = data.joke;
//       }
//     });
// });
