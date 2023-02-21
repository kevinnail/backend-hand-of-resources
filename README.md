### This a backend Express app that demonstrates how to:

 - Create and deploy a POST endpoint that creates a resource and responds created object
 - Create and deploy a GET endpoint that returns an array of objects
 - Create and deploy a GET endpoint that returns a single matching object based on the id in the path and req.params.id
 - Create and deploy a PUT/PATCH endpoint that updates a resource with the matching id and responds the updated object
 - Create and deploy a DELETE endpoint that deletes a resource with the matching id and responds the deleted object
 - Add JSON deserialization middleware and use the body in a route
 - Use params to simplify the extraction of “id” from a router
 - Utilize Router to implement a horizontally scalable Express App architecture
 - Use the pg library with $1, $2, $3 syntax to sanitize our SQL queries to prevent SQL injection.
 - Use pg to make queries against a Postgres DB
 - Connect to a Postgres DB using the pg node module

### This app uses:

- Nodejs
- Express 
- PostgreSQL
