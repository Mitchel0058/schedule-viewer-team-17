import schedule from '../data/output.json' assert { type: 'json' };

export async function excelToJson(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    console.log("NO FILE AAAAAAAAA");
    return
    // return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/somewhere/on/your/server/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

  // res.send(418);
  // console.log(req);
  // console.log(req.body, req.file);
  // console.log("gteste");
}

export async function getScheduleData(req, res) {
  res.send(schedule);
}

export async function getProperties(req, res) {
  const properties = ['Course_name', 'Start', 'End', 'Subject', 'Groepen', 'Docenten', 'Lokalen'];
  res.send(properties);
}

export async function getGroups(req, res) {
  let allGroups = getUniqueElements('groups');
  res.send(allGroups);
}
export async function getWeeks(req, res) {
  let allWeeks = [];
  schedule.data.forEach((week) => {
    allWeeks.push(week.weeknr);
  });
  res.send(allWeeks);
}

export async function getTeacher(req, res) {
  let allTeachers = getUniqueTeachers('teachers');
  res.send(allTeachers);
  // let teachers = [];
  // let uniqueNames;
  // schedule.data.forEach((week) => {
  //   [...week.mo].forEach((day) => {
  //     const str = day.Docenten;
  //     let explodedTeacher = str.split(';');
  //     teachers = teachers.concat(explodedTeacher);
  //     uniqueNames = [...new Set(teachers)];
  //   });
  //   [...week.tu].forEach((day) => {
  //     const str = day.Docenten;
  //     let explodedTeacher = str.split(';');
  //     teachers = teachers.concat(explodedTeacher);
  //     uniqueNames = [...new Set(teachers)];
  //   });
  //   [...week.we].forEach((day) => {
  //     const str = day.Docenten;
  //     let explodedTeacher = str.split(';');
  //     teachers = teachers.concat(explodedTeacher);
  //     uniqueNames = [...new Set(teachers)];
  //   });
  //   [...week.th].forEach((day) => {
  //     const str = day.Docenten;
  //     let explodedTeacher = str.split(';');
  //     teachers = teachers.concat(explodedTeacher);
  //     uniqueNames = [...new Set(teachers)];
  //   });
  //   [...week.fr].forEach((day) => {
  //     const str = day.Docenten;
  //     let explodedTeacher = str.split(';');
  //     teachers = teachers.concat(explodedTeacher);
  //     uniqueNames = [...new Set(teachers)];
  //   });
  // })
  // res.send(uniqueNames);
}

export async function getAllSchedules(req, res) {
  res.status(200).send('Please be more specific');
}
export async function getAllYears(req, res) {
  res.status(200).send('Please be more specific');
}
export async function getAllTerms(req, res) {
  res.status(200).send('Please be more specific');
}
export async function getScheduleDataPerTerm(req, res) {
  const year = req.params.yearid;
  const term = req.params.termid;

  /**
   * 1. find the folder of the year
   * 2. read the filename
   * 2.1 if the filename contains the term -> serve the data
   */

}

function getUniqueTeachers(searchTerm) {
  //let allElements = [];
  let uniqueElements = [];
  schedule.data.forEach((week) => {
    [...week.mo].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      // const str = day[searchTerm];
      // console.log(str);
      // let explodedElements = str.split(';');
      // allElements = allElements.concat(explodedElements);
      const allTeachers = day[searchTerm];
      allTeachers.forEach((teacher) => {
        uniqueElements.push(teacher)
      });
      // uniqueElements.push(day[searchTerm]);
      // uniqueElements = [...new Set(day[searchTerm])];
    });
    [...week.tu].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      // const str = day[searchTerm];
      // let explodedElements = str.split(';');
      // allElements = allElements.concat(explodedElements);
      // uniqueElements.push(day[searchTerm]);
      const allTeachers = day[searchTerm];
      allTeachers.forEach((teacher) => {
        uniqueElements.push(teacher)
      });
      // uniqueElements = [...new Set(day[searchTerm])];
    });
    [...week.we].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      // const str = day[searchTerm];
      // let explodedElements = str.split(';');
      // allElements = allElements.concat(explodedElements);
      // uniqueElements.push(day[searchTerm]);
      const allTeachers = day[searchTerm];
      allTeachers.forEach((teacher) => {
        uniqueElements.push(teacher)
      });
      // uniqueElements = [...new Set(day[searchTerm])];
    });
    [...week.th].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      // const str = day[searchTerm];
      // let explodedElements = str.split(';');
      // allElements = allElements.concat(explodedElements);
      // uniqueElements.push(day[searchTerm]);
      const allTeachers = day[searchTerm];
      allTeachers.forEach((teacher) => {
        uniqueElements.push(teacher)
      });
      // uniqueElements = [...new Set(day[searchTerm])];
    });
    [...week.fr].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      // const str = day[searchTerm];
      // let explodedElements = str.split(';');
      // allElements = allElements.concat(explodedElements);
      // uniqueElements.push(day[searchTerm]);
      const allTeachers = day[searchTerm];
      allTeachers.forEach((teacher) => {
        uniqueElements.push(teacher)
      });
      // uniqueElements = [...new Set(day[searchTerm])];
    });
  });
  let reallyUniqueElements = [...new Set(uniqueElements)]
  return reallyUniqueElements;
}

function getUniqueElements(searchTerm) {
  let allElements = [];
  let uniqueElements;
  schedule.data.forEach((week) => {
    [...week.mo].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      const str = day[searchTerm];
      // console.log(str);
      let explodedElements = str.split(';');
      allElements = allElements.concat(explodedElements);
      uniqueElements = [...new Set(allElements)];
    });
    [...week.tu].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      const str = day[searchTerm];
      let explodedElements = str.split(';');
      allElements = allElements.concat(explodedElements);
      uniqueElements = [...new Set(allElements)];
    });
    [...week.we].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      const str = day[searchTerm];
      let explodedElements = str.split(';');
      allElements = allElements.concat(explodedElements);
      uniqueElements = [...new Set(allElements)];
    });
    [...week.th].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      const str = day[searchTerm];
      let explodedElements = str.split(';');
      allElements = allElements.concat(explodedElements);
      uniqueElements = [...new Set(allElements)];
    });
    [...week.fr].forEach((day) => {
      // console.log(`week: ${day.Week} = ${day[searchTerm]}`);
      const str = day[searchTerm];
      let explodedElements = str.split(';');
      allElements = allElements.concat(explodedElements);
      uniqueElements = [...new Set(allElements)];
    });
  });
  return uniqueElements;
}