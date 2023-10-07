module.exports = async (db, locationId) => {
  var numberOfDocs = 0;
  var employeesIdArray = [];
  try {
    var thirtyDaysago = new Date(new Date().setDate(new Date().getDate() - 30));

    //ResignationDate is null
    const collection = await db
      .collection("EmployeeXLocation")
      .where("LocationId", "==", locationId)
      .where("ResignationDate", "==", null)
      .get();

    collection.forEach((element) => {
      //anti duplicates
      if (!employeesIdArray.includes(element.data().EmployeeId)) {
        employeesIdArray.push(element.data().EmployeeId);
        numberOfDocs++;
        console.log("EmployeeId : " + element.data().EmployeeId);
      }
    });

    // ResignationDate < 30 days ago
    const collection2 = await db
      .collection("EmployeeXLocation")
      .where("LocationId", "==", locationId)
      .where("ResignationDate", ">=", thirtyDaysago)
      .get();

    collection2.forEach((element) => {
      //anti duplicates
      if (!employeesIdArray.includes(element.data().EmployeeId)) {
        employeesIdArray.push(element.data().EmployeeId);
        numberOfDocs++;
        console.log("EmployeeId : " + element.data().EmployeeId);
      }
    });

    console.log("Number of employees from location: ", numberOfDocs);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
