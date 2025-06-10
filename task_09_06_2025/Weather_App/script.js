async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "8defd7f170d5dd3ab936fc7bc0fd4dff";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("📍 City:", city);
  console.log("🔗 URL:", url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("📦 Response JSON:", data);

    if (!response.ok || data.cod !== 200) {
      throw new Error(data.message || "City not found");
    }

    // Update UI
    document.getElementById("temperature").innerText = Math.round(data.main.temp);
    document.getElementById("city").innerText = data.name;

    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("time").innerText =
      `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")} ${days[now.getDay()]}`;

    document.getElementById("description").innerText = data.weather[0].description;

  } catch (error) {
    console.error("❌ Error:", error);
    alert("Could not find the city. Please try again.");
  }
}

// Optional: Enter key support
document.getElementById("cityInput").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});
