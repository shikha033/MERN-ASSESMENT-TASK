function calculateAge() {
  const birthDate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  if (!birthDate || birthDate > today) {
    alert("Please enter a valid past date.");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent = years.toString().padStart(2, '0');
  document.getElementById("months").textContent = months.toString().padStart(2, '0');
  document.getElementById("days").textContent = days.toString().padStart(2, '0');
}
