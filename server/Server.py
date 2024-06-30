from flask import Flask, jsonify, request, session
from flask_cors import CORS
import pickle
import numpy as np

# Load the model from the .pkl file
with open('final_xgb_model.pkl', 'rb') as file:
    model = pickle.load(file)

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = 'your_secret_key'  # Set a secret key for the session
app.config.update(
    SESSION_COOKIE_SAMESITE="None",
    SESSION_COOKIE_SECURE=False,  # Set to True in production
)

# Simulated user database
users = {
    'adil': '233'
}
session_ = {}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('userName')
    password = data.get('password')
    print(f"Login attempt with username: {username} and password: {password}")  # Print login attempt
    if username in users and users[username] == password:
        session_['username'] = username
        print(session)
        return jsonify({'message': 'Logged in successfully'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    print('logggg ouuuut')
    session_.pop('username', None)
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/api/predict', methods=['POST'])
def create_item():
    print(f"Session before prediction: {session_}")
    print(session_)
    if 'username' not in session_:
        return jsonify({'message': 'Unauthorized'}), 401

    data = request.json
    features = np.array([
        data['height'],
        data['weight'],
        data['work_rate'],
        data['pace'],
        data['physic'],
        data['position'],
        data['age'],
        data['cumulativeMinutes'],
        data['minPerGame'],
        data['avgDaysInjuredInPreviosSessons'],
        data['Significant_Injury_in_previous_Seasons'],
        data['Cumulative_Days_Injured'],

        # Add more features as needed
    ]).reshape(1, -1)  # Reshape to 2D array for prediction
    
    # Make prediction using the loaded model
    prediction_result = model.predict(features)
    
    # print(prediction)
    # return the value u predicted , replace the 20 with predicted value
    # prediction_result = ( - int(data['height'])/2)  - int(data['weight']) - int(data['physic']) + int(data['pace']) + (int(data['work_rate']) * 12) + (int(data['position'])*7) + (int(data['cumulativeMinutes'])/100) + int(data['minPerGame']) + (int(data['avgDaysInjuredInPreviosSessons'])*4) + (int(data['Significant_Injury_in_previous_Seasons'])*2) + (int(data['Cumulative_Days_Injured'])) + (int(data['age'])/10)
    
    return jsonify(prediction_result - 100), 201

if __name__ == '__main__':
    app.run(debug=True)
