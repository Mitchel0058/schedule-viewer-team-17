'use strict';
import excelToJson from 'convert-excel-to-json';
export function convertExcelToJson(fileName) {
  const result = excelToJson({
    sourceFile: fileName,
    header: {
      rows: 1,
    },
    sheets: ['sem3'],
    columnToKey: {
      A: '{{A1}}',
      B: '{{B1}}',
      C: '{{C1}}',
      D: '{{D1}}',
      E: '{{E1}}',
      F: '{{F1}}',
      G: '{{G1}}',
      H: '{{H1}}',
      I: '{{I1}}',
      J: '{{J1}}',
      K: '{{K1}}',
      L: '{{L1}}',
      M: '{{M1}}',
      N: '{{N1}}',
      O: '{{O1}}',
      P: '{{P1}}',
      Q: '{{Q1}}',
      R: '{{R1}}',
    },
  });

  // new json setup
  const schedule = {
    meta: {
      title: 'Schedule',
      program: 'hbo-ict',
      year: 2,
      semester: 1,
      version: Date.now()
    },
    data: [],
  };

  // json template for a week
  let week = {
    weeknr: 36,
    mo: [],
    tu: [],
    we: [],
    th: [],
    fr: [],
  };

  addToSchedule(result);

  function addToSchedule(resultArr) {
    //TODO: this is the first week magic number -> best to change it based on the first rows weeknumber
    let oldWeek = 36;
    // foreach loop to get each element
    for (let index = 0; index < resultArr.sem3.length; index++) {
      let element = resultArr.sem3[index];
      element.id = index;
      element.teachers = splitTeachersString(element.teachers);
      console.log(element);

      // if the element belongs to the current week
      if (element.week === oldWeek) {
        console.log('CurrentWeek', element.week);
        // add each element tot the right day
        addElementToRightDay(element.dow, element);
        // last element needs to be saved as well
        if (index === resultArr.sem3.length - 1) {
          schedule.data.push(week);
        }
      } else {
        // new week
        // 1. save the last week to the schedule,
        schedule.data.push(week);
        // 2. clear the week template
        week = {
          weeknr: element.week,
          mo: [],
          tu: [],
          we: [],
          th: [],
          fr: [],
        };
        // 3. add the first element to the week
        addElementToRightDay(element.dow, element);
        // 4. update the oldweek to the current week
        oldWeek = element.week;
      }
    }
  }

  function addElementToRightDay(currentDay, element) {
    switch (currentDay) {
      case 'Mo':
        week.mo.push(element);
        break;
      case 'Tu':
        week.tu.push(element);
        break;
      case 'We':
        week.we.push(element);
        break;
      case 'Th':
        week.th.push(element);
        break;
      case 'Fr':
        week.fr.push(element);
        break;
      default:
        break;
    }
  }

  function splitTeachersString(teachers) {
    //console.log('wow aHere's the continuation of the file:

        //console.log('wow a teacher', teachers);
        return teachers.split(';');
    }

    // Return the schedule
    return schedule;
}

