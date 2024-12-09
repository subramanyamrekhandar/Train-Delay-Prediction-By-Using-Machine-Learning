import sys
import joblib
import numpy as np

# Load the trained model
model = joblib.load('train_delay_model.joblib')

# Extract inputs from command line arguments
train_type = sys.argv[1]
weather = sys.argv[2]
historical_delay = float(sys.argv[3])
time_of_travel = sys.argv[4]

# Preprocess and transform the inputs as necessary
# Example: You may need to convert train_type and weather to numerical features

# Make a prediction using the model
prediction = model.predict([[historical_delay, time_of_travel]])  # Modify as per your features

# Output the prediction
print(prediction[0])
