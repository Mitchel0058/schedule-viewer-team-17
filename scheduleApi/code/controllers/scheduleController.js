import schedule from '../data/output.json' assert { type: 'json' };

export async function getScheduleData(req, res) {
  res.send(schedule);
}

export async function getProperties(req, res){
  const properties = ['Course_name', 'Start', 'End', 'Subject', 'Groepen', 'Docenten', 'Lokalen'];
  res.send(properties);
}

export async function getGroups(req,res){
  let allGroups = getUniqueElements('Groepen');
  res.send(allGroups);
}
export async function getWeeks(req,res){
  let allWeeks = [];
  schedule.data.forEach((week)=>{
    allWeeks.push(week.weeknr);
  });
  res.send(allWeeks);
}

export async function getTeacher(req, res) {
  let allTeachers = getUniqueElements('Docenten');
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

function getUniqueElements(searchTerm){
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