document.addEventListener("DOMContentLoaded", () => {
  const openLog = document.getElementById("openLog");
  const closeLog = document.getElementById("closeLog");
  const right1 = document.getElementById("right1")
  const right2 = document.getElementById("right2")

  openLog.addEventListener("click", () => {
      openLog.style.display = "none";
      closeLog.style.display = "inline-block";
      right1.style.display = "none";
      right2.style.display = "flex";
  });

  closeLog.addEventListener("click", () => {
      closeLog.style.display = "none";
      openLog.style.display = "inline-block";
      right1.style.display = "flex";
      right2.style.display = "none";
  });
});