Execution commands:

npm init -y (for package.json)
npm install express joi (for node_modules folder and package-lock.json)
node index.js 

We can use Postman to Test Routes:

GET All Records:
Method: GET
URL: http://localhost:3000/api/records
Description: Retrieves all records.
Response: Array of records.

GET record by ID:
Method: GET
URL: http://localhost:3000/api/records/{id}
Description: Retrieves a record by its ID.
Response: Single record object or 404 if not found.

POST New record:
Method: POST
URL: http://localhost:3000/api/records
Body: JSON { "record": "new record" }
Description: Adds a new record.
Response: The created record object or 400 if validation fails.
PUT Update record by ID:

Method: PUT
URL: http://localhost:3000/api/records/{id}
Body: JSON { "record": "updated record" }
Description: Updates the entire record object by its ID.
Response: The updated record object or 404 if not found or 400 if validation fails.

PATCH Partial Update record by ID:
Method: PATCH
URL: http://localhost:3000/api/records/{id}
Body: JSON { "record": "partially updated record" }
Description: Partially updates the record object by its ID.
Response: The updated record object or 404 if not found or 400 if validation fails.
DELETE record by ID:

Method: DELETE
URL: http://localhost:3000/api/records/{id}
Description: Deletes a genre by its ID.
Response: The deleted genre object or 404 if not found.
