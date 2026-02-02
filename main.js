/* ===============================
   Asia Facts Hub - Main JS
   =============================== */

/* Smooth scroll for navigation */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* Random Asia Facts */
const asiaFacts = [
  "Asia covers about 30% of the Earth's land surface.",
  "More than 60% of the world's population lives in Asia.",
  "Mount Everest, the highest mountain on Earth, is in Asia.",
  "Asia is home to some of the oldest civilizations.",
  "The Yangtze River is the longest river in Asia.",
  "Asia has the most spoken languages in the world."
];

function showRandomFact() {
  const factBox = document.getElementById("randomFact");
  if (!factBox) return;

  const randomIndex = Math.floor(Math.random() * asiaFacts.length);
  factBox.textContent = asiaFacts[randomIndex];
}

showRandomFact();

/* Optional: refresh fact every 10 seconds */
setInterval(showRandomFact, 10000);

/* Placeholder for future country search */
function searchCountries(query) {
  console.log("Searching for:", query);
  // Later: filter JSON data here
}
