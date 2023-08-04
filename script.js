//your code here
function swapTheme() {
      var appDiv = document.getElementById("app");
      var swapButton = document.getElementById("swap");

      // Toggle the 'day' and 'night' classes of the main div
      if (appDiv.classList.contains("day")) {
        appDiv.classList.remove("day");
        appDiv.classList.add("night");
      } else {
        appDiv.classList.remove("night");
        appDiv.classList.add("day");
      }

      // Toggle the 'button_day' and 'button_night' classes of the button
      if (swapButton.classList.contains("button_day")) {
        swapButton.classList.remove("button_day");
        swapButton.classList.add("button_night");
      } else {
        swapButton.classList.remove("button_night");
        swapButton.classList.add("button_day");
      }
    }
