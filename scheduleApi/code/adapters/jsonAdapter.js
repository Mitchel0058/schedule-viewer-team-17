import fs from 'fs';

/**
 * Function to read the csv file and response the data
 */
export async function getTheSchedule() {
  fs.readFile('../data/student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
  });
}