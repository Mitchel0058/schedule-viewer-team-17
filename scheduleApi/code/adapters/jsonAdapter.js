import fs from 'fs';

/**
 * Get the right json from the data folder based on the request
 */


/**
 * Function to read the csv file and response the data
 */
export async function getTheSchedule(year) {
  fs.readFile('../data/student.json', (err, data) => {
    if (err) throw err;
    //find all teachers strings
    let student = JSON.parse(data);
    console.log(student);
  });
}