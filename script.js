// Function to change the text and style of the element with id "message"
function changeTextAndStyle() { 
  const message = document.getElementById("message"); // Get the element by ID

  // Change the text content
  message.textContent = "Text and style changed via JavaScript!";

  // Apply new styles
  message.style.color = "white";
  message.style.backgroundColor = "#007BFF";
  message.style.padding = "10px";
  message.style.borderRadius = "8px";
}

// Function to toggle a box: add it if it's not there, remove it if it is
function toggleBox() {
  const container = document.getElementById("box-container"); // Get container element
  const existingBox = document.getElementById("dynamic-box"); // Check if the box already exists

  if (existingBox) {
    container.removeChild(existingBox);    // If the box exists, remove it
  } else {      // If it doesn't exist, create it
    const newBox = document.createElement("div"); // Create a new div element
    newBox.id = "dynamic-box"; // Set its ID
    newBox.textContent = "I'm a dynamically added box!"; // Add some text inside

    // Style the new box
    newBox.style.marginTop = "10px";
    newBox.style.padding = "15px";
    newBox.style.backgroundColor = "#28a745";
    newBox.style.color = "white";
    container.appendChild(newBox);    // Add the box to the container
  }
}

  