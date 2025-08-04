document.addEventListener("DOMContentLoaded", () => {
  const internName = localStorage.getItem('internName');

  if (!internName) {
    console.log("No internName found in localStorage - redirecting to /");
    window.location.href = '/';
    return;
  }

  fetch(`/api/intern?name=${encodeURIComponent(internName)}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error("Invalid session or user not found");
      }
      return res.json();
    })
    .then(data => {
      document.getElementById("internName").textContent = data.name;
      document.getElementById("referralCode").textContent = data.referral_code;
      document.getElementById("totalRaised").textContent = data.total_raised;

      const rewardsList = document.getElementById("rewardsList");
      rewardsList.innerHTML = "";
      data.rewards.forEach(reward => {
        const li = document.createElement("li");
        li.textContent = reward;
        rewardsList.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Dashboard error:", err.message);
      alert("Session expired or intern not found. Please log in again.");
      localStorage.removeItem('internName');
      window.location.href = '/';
    });
});
