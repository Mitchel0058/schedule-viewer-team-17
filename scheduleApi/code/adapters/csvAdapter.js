import csv from 'csvtojson';

const csvFilePath = './data/3-semester-schedule.csv';
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  })

/**
 * Function to read the csv file and response the data
 */
export async function getTheSchedule() {
  console.log('👀 for id:', id);
  // const jsonArr = await csv().fromFile('./data/3-semester-schedule.csv')
  // return jsonArr;
}