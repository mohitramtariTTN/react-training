function createClock() {
    const messageElement = document.getElementById("message");
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours < 12 ? "AM" : "PM";
      const formattedHours = hours % 12 || 12;
      const message =
        hours >= 6 && hours < 12
          ? "It's morning"
          : hours >= 12 && hours < 18
          ? "It's afternoon"
          : "It's evening";
  
      clockElement.textContent = `${formattedHours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")} ${ampm}`;
      dateElement.textContent = now.toLocaleDateString();
      messageElement.textContent = message;
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  }