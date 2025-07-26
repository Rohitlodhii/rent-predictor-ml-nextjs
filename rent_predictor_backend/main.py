from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel, Field
import pickle
import pandas as pd

# Load model
with open("rent_prediction_model.pkl", "rb") as f:
    model = pickle.load(f)

# FastAPI app
app = FastAPI()

# 🔓 Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🚨 Allow all origins (temporary)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body schema
class RentRequest(BaseModel):
    location: str = Field(..., example="Bhopal")
    area: float = Field(..., example=1200)
    bhk: int = Field(..., example=2)

# Root endpoint
@app.get("/")
def root():
    return {"message": "Server is running!"}

# Prediction endpoint
@app.post("/predict")
def predict_rent(data: RentRequest):
    try:
        input_df = pd.DataFrame([{
            "BHK": data.bhk,
            "Sqft": data.area,
            "Location": data.location
        }])

        prediction = model.predict(input_df)[0]

        return {"predicted_rent": round(prediction, 2)}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run("main:app" , host="0.0.0.0" , port=8000)