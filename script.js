// Function to update the current time
function updateTime() {
    // Create a new Date object
    var currentTime = new Date();
  
    // Get the hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Construct the time string
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    // Update the content of the span element with the current time
    document.getElementById("current-time").textContent = timeString;
  }
  
  // Call the updateTime function every second to update the time
  setInterval(updateTime, 1000);
  