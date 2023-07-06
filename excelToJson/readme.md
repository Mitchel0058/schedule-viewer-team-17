# Excel to Json parser

## Current status
In this state, we can parse a excel file to a json file manually using the command `node index.js`. 

## Future plans
In the future we want this microservice to parse any excel file you throw at it. In our vision there is a large drag and drop area where you drop your excel file and then it will ask questions like

- (show the column names) - what columns do you want parse
- what is the meta data of the json file
- at the final step it does not store the data in a JSON file but in a sqlite db.
- maybe this service can be combined with the scheduleApi microservices that serves data out of the JSON file.

## Routes
We probably want one rout to rule them all:

**api/v1/parse**
options
post


