# Schedule viewer
An view on the schedule.

## Schedule API
A docker container responsible for tranferring an JSON output to different routes.

### Routes
Base uri: `http:/localhost/api/v1/schedule`

`schedule/term/{number}`

`schedule/term/{number}`

## Viewer
A viewer, responsible for viewing the schedule in different ways and filtering through the data

## Error reporting (enhancement)
Based on business rules; the error reporting container checks whether or not some rules are not met.

Rules
- availability of teachers
- amount of students that fits in one room
- Still VACATURES
- Amount of hours spent by a teacher

## Add your own excel (enhancement)
Save an excel file to the system and let

## Installation

Prerequsities
- Docker is installed on your system

Installation steps.
- run `docker compose up` to install the required containers.
- Visit `localhost:3020` to view the viewer.
- Visit `localhost:3010` to visit the schedule API.