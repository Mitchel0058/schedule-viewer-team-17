# Schedule viewer
This is a project aimed at displaying schedule information for the HBO-ICT program of the HZ.

It contains multiple containers / services

## excelToJSON
This project parses an excel to workable json file. This is currently not a micro service that runs in the docker environment. This service should be combined with the ScheduleAPI (container 1)

## Container 1 - Schedule API
A docker container responsible for tranferring an JSON output via different routes.

## Container 2 - Viewer
A viewer, responsible for viewing the schedule in different ways and filtering through the data

## Container 3 - Error reporting (enhancement)
Based on business rules; the error reporting container checks whether or not some rules are not met. This container is not working at the moment.

## Installation

Prerequsities
- Docker is installed on your system

Installation steps.
- run `docker compose up` to install the required containers.
- Visit `localhost:3020` to view the viewer.
- Visit `localhost:3010` to visit the schedule API.