/* ===============================
   Part 2: JavaScript Functions
   Demonstrating Scope, Parameters, Return Values
   =============================== */

// Global variable
let globalMessage = "I'm a global variable";

function demonstrateScope() {
  // Local variable
  let localMessage = "I'm a local variable";
  console.log(localMessage);  // ✅ Accessible inside
  console.log(globalMessage); // ✅ Accessible globally
}

demonstrateScope();
// console.log(localMessage); // ❌ Error if uncommented (local scope)

/* Function with parameters & return value */
function calculateArea(width, height) {
  return width * height;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(7, 3);

console.log("Area 1:", area1); // 50
console.log("Area 2:", area2); // 21

/* Function to trigger animation dynamically */
function triggerAnimation(elementId) {
  let element = document.getElementById(elementId);

  // Reset any existing animation
  element.classList.remove("animate");

  // Timeout allows re-triggering
  setTimeout(() => {
    element.classList.add("animate");
  }, 10);
}

/* ===============================
   Part 3: Combining CSS & JS
   =============================== */

// Event listener to animate box when button clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerAnimation("animateBox");
});
