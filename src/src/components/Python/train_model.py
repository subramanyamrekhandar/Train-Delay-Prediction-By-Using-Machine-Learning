import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_absolute_error
import joblib

# 1. Load Dataset
data = pd.read_csv('indian_railway_data.csv')

# 2. Data Preprocessing
# Convert categorical columns to numeric using LabelEncoder
label_encoder = LabelEncoder()
data['Train Type'] = label_encoder.fit_transform(data['Train Type'])
data['Weather'] = label_encoder.fit_transform(data['Weather'])

# Split features (X) and target (y)
X = data[['Train Type', 'Time of Travel', 'Weather', 'Historical Delay (min)']]
y = data['Delay (min)']

# Convert 'Time of Travel' to numeric features (hours and minutes)
X['Time of Travel'] = pd.to_datetime(X['Time of Travel'], format='%H:%M').dt.hour + \
                      pd.to_datetime(X['Time of Travel'], format='%H:%M').dt.minute / 60

# 3. Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Train the Model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 5. Evaluate the Model
predictions = model.predict(X_test)
mae = mean_absolute_error(y_test, predictions)
print(f"Mean Absolute Error: {mae:.2f} minutes")

# 6. Save the Model
joblib.dump(model, 'train_delay_model.joblib')
print("Model saved as train_delay_model.joblib")
