# Micro-test
Micro service test app.

# Configuration
The data is laid out as follows: the store-service connects to the DB and gives routes supports routes for getting all resources, one specific resource by ID, and createing new resources. The car-service handles the GET /cars and GET /cars/:id routes. These routes are forwarded to the store-service and the res.data is returned as json. 

# Docker
Each service has a DockerFile attached. The store-service is ran on port 4001 and the car-service is ran on port 4000. 

# Event broker / event bus 
I followed the instructions of letting one service foward a route directly to another service, that service interact with the database, and then return that data to the original service. I think that another solution would have been to use an event bus - another service to handle routes and then echo back to the original service (and all needed parallel services) - however, since this was a small API I just did what I was asked. 
