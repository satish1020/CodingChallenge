## UI details:
This client folder has the UI code.

## Both the Server and Client should be started

a) run npm start in the root directory for the server to start.
b) run npm start in the client directory for the ui to start.

## Error handling
We have try catch blocks in the server side to handle the error. If there is an error the catch block will be invoked, and the custom error message is thrown along with the status code 500. This Custom message is shown in the UI.

### Success
If the api call is a success, then the server will send the response data along with status code 200 to the UI.


