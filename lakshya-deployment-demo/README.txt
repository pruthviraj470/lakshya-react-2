LAKSHYA FRONTEND + FASTAPI BACKEND DEPLOYMENT DEMO

Folder layout:
  frontend/  -> deploy this folder as a Netlify site
  backend/   -> deploy this folder as a Render Web Service

1) Push the complete lakshya-deployment-demo folder contents to one GitHub repository.
   Keep frontend/ and backend/ as separate folders at the repository root.

2) Deploy backend first on Render:
   - New > Web Service
   - Connect the GitHub repository
   - Root Directory: backend
   - Runtime: Python 3
   - Build Command: pip install -r requirements.txt
   - Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
   - Deploy.
   - After it is live, open https://YOUR-SERVICE.onrender.com/ and
     https://YOUR-SERVICE.onrender.com/docs to test it.

3) Update frontend/script.js:
   Replace https://YOUR-FASTAPI-SERVICE.onrender.com with the actual Render URL.
   Save and push the change to GitHub.

4) Deploy frontend on Netlify:
   - Add new project > Import from Git
   - Select the same GitHub repository
   - Base directory / package directory: frontend (if Netlify asks)
   - Build command: leave blank
   - Publish directory: . (the frontend folder itself)
   - Deploy.

5) Open the Netlify URL, click "Check backend connection".
   Expected result: "Hello from Python FastAPI on Render!"

Notes:
- This is a minimal connection test, not the complete Lakshya backend.
- The demo CORS setting allows all origins for ease of testing. Restrict it to
  your exact Netlify URL before production.
- Render free instances may sleep when idle, so the first request can take time.
- Never commit API keys, passwords, or .env files to GitHub.
