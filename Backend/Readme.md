# Backend Setup

To run the backend, follow these steps:

1. Open the backend file in Google Colab.
2. Insert your ngrok token to establish a secure tunnel.

### Steps to Follow:

1. **Run the Backend on Google Colab**

   - Open your backend file in Google Colab.
   - Insert your ngrok token when prompted to establish a secure tunnel.
   - Run all the cells in the Colab notebook.

2. **Retrieve the ngrok URL**

   - After running the notebook, you'll receive an ngrok URL.
   - Copy this URL.

3. **Update the Frontend**

   - Navigate to the `api.js` file located in the frontend folder.
   - Replace the value of the `ngrokUrl` variable with the copied ngrok URL.

```javascript
// api.js

export const ngrokUrl = "YOUR_NGROK_URL_HERE";

// rest of the code
