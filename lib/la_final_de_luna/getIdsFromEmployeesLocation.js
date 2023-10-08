module.exports = async (db, locationId) => {
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
      employeesIdArray.push(element.data().EmployeeId);
    });

    // ResignationDate < 30 days ago
    const collection2 = await db
      .collection("EmployeeXLocation")
      .where("LocationId", "==", locationId)
      .where("ResignationDate", ">=", thirtyDaysago)
      .get();

    collection2.forEach((element) => {
      employeesIdArray.push(element.data().EmployeeId);
    });

    return employeesIdArray;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
