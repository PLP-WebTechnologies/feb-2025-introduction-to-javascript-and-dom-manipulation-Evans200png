function changeTextAndStyle() {
    const message = document.getElementById("message");
    message.textContent = "Welcome to my homepage!";
    message.style.color = "white";
    message.style.backgroundColor = "#007BFF";
    message.style.padding = "10px";
    message.style.borderRadius = "8px";
  }
  
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "dynamic-box";
      newBox.textContent = "Added a login page!";
      newBox.style.marginTop = "10px";
      newBox.style.padding = "15px";
      newBox.style.backgroundColor = "#28a745";
      newBox.style.color = "white";
      container.appendChild(newBox);
    }
  }
  