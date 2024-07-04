<b>Execution commands:</b>

npm init -y (for package.json) <br>
npm install express joi (for node_modules folder and package-lock.json)<br>
node index.js <br>
<br>
<b>We can use Postman to Test Routes:</b>
<br>
GET All Records: <br>
Method: GET <br>
URL: http://localhost:3000/api/records<br>
Description: Retrieves all records.<br>
Response: Array of records.<br>
<br>
GET record by ID:<br>
Method: GET<br>
URL: http://localhost:3000/api/records/{id}<br>
Description: Retrieves a record by its ID.<br>
Response: Single record object or 404 if not found.<br>
<br>
POST New record:<br>
Method: POST<br>
URL: http://localhost:3000/api/records<br>
Body: JSON { "record": "new record" }<br>
Description: Adds a new record.<br>
Response: The created record object or 400 if validation fails.<br>
<br>
PUT Update record by ID:<br>
Method: PUT<br>
URL: http://localhost:3000/api/records/{id}<br>
Body: JSON { "record": "updated record" }<br>
Description: Updates the entire record object by its ID.<br>
Response: The updated record object or 404 if not found or 400 if validation fails.<br>
<br>
PATCH Partial Update record by ID:<br>
Method: PATCH<br>
URL: http://localhost:3000/api/records/{id}<br>
Body: JSON { "record": "partially updated record" }<br>
Description: Partially updates the record object by its ID.<br>
Response: The updated record object or 404 if not found or 400 if validation fails.<br>
DELETE record by ID:<br>
<br>
Method: DELETE<br>
URL: http://localhost:3000/api/records/{id}<br>
Description: Deletes a genre by its ID.<br>
Response: The deleted genre object or 404 if not found.<br>
<br>
<b>Screenshots</b>
<img width="960" alt="2024-07-04" src="https://github.com/pratzie100/Simple-CRUD-operations-for-Student-Record-using-Express.js-RestfulAPI-and-Postman/assets/135763048/9975b943-2962-4657-b17d-57d3cd677b24">
<img width="960" alt="2024-07-04 (1)" src="https://github.com/pratzie100/Simple-CRUD-operations-for-Student-Record-using-Express.js-RestfulAPI-and-Postman/assets/135763048/fa88de99-4127-4a4f-b7ff-48e9eb11ce09">
<img width="960" alt="2024-07-04 (2)" src="https://github.com/pratzie100/Simple-CRUD-operations-for-Student-Record-using-Express.js-RestfulAPI-and-Postman/assets/135763048/7e2ab740-574e-4d0c-b6d2-c0ce3fbbe8d9">


