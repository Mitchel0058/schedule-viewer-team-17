# Schedule viewer
An view on the schedule.

## Schedule API
A docker container responsible for tranferring an JSON output to different routes.

### Routes
Base uri: `http:/localhost/api/v1/schdule`

`schedule/term/{number}`

`schedule/term/{number}`

## Viewer
A viewer, responsible for viewing the schedule in different ways and filtering through the data

## Installation

Prerequsities
- Docker is installed on your system

Installation steps.
- run `docker compose up` to install the required containers.
- Visit `localhost:3020` to view the viewer.
- Visit `localhost:3010` to visit the schedule API.