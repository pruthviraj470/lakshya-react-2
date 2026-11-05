/*
  After deploying the FastAPI backend on Render, replace the placeholder below
  with its public URL, for example: https://your-service-name.onrender.com
  Do not add a trailing slash.
*/
const API_BASE_URL = "https://YOUR-FASTAPI-SERVICE.onrender.com";

const button = document.getElementById("check");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  button.disabled = true;
  result.textContent = "Contacting backend...";
  try {
    const response = await fetch(`${API_BASE_URL}/api/hello`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    result.textContent = `Backend connected: ${data.message}`;
  } catch (error) {
    result.textContent = `Connection failed: ${error.message}. Check the Render URL and backend deployment.`;
  } finally {
    button.disabled = false;
  }
});
