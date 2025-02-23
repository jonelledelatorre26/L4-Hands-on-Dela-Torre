document.addEventListener("DOMContentLoaded", function () {
  function checkEvenOdd(number) { 
      if (number % 2 === 0) {
          return { text: `${number} is 🐑 even`, type: "even" };
      } else {
          return { text: `${number} is 🐺 odd`, type: "odd" };
      }
  }

  function displayResults() {
      const oddContainer = document.getElementById("odd-results");
      const evenContainer = document.getElementById("even-results");
      
      // Clear previous results
      oddContainer.innerHTML = "";
      evenContainer.innerHTML = "";

      for (let i = 1; i <= 10; i++) {
          const result = checkEvenOdd(i);
          
          // Console Log Output: "1: odd", "2: even", etc.
          console.log(`${i}: ${result.type}`);

          const resultElement = document.createElement("p");
          resultElement.textContent = result.text;
          resultElement.classList.add("result-text");

          if (result.type === "odd") {
              oddContainer.appendChild(resultElement);
          } else {
              evenContainer.appendChild(resultElement);
          }
      }
  }

  // Ensure button works
  document.getElementById("checkButton").addEventListener("click", displayResults);
});
