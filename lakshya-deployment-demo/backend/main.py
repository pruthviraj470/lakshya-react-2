from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Lakshya Demo API")

# Demo setting: allows the Netlify page to call this API.
# For a real deployment, replace ["*"] with your exact Netlify site URL.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok", "message": "Lakshya API is running"}

@app.get("/api/hello")
def hello():
    return {"message": "Hello from Python FastAPI on Render!"}
