var getEmployeesFromLocation = require("./getIdsFromEmployeesLocation.js");

module.exports = async (db, companyId) => {
  var numberOfEmployees = 0;
  var employeesIdArray = [];

  try {
    const locations = await db
      .collection("Location")
      .where("CompanyId", "==", companyId)
      .get();

    // Crează un array de promisiuni pentru a aștepta finalizarea tuturor operațiunilor asincrone
    const promises = locations.docs.map(async (location) => {
      var employeesIdsFromLocation = await getEmployeesFromLocation(
        db,
        location.data().LocationId
      );

      employeesIdsFromLocation.forEach((employeeId) => {
        if (!employeesIdArray.includes(employeeId)) {
          numberOfEmployees++;
          employeesIdArray.push(employeeId);
        }
      });
    });

    // Așteaptă finalizarea tuturor promisiunilor
    await Promise.all(promises);

    // Returnează numărul total de angajați
    return employeesIdArray;
  } catch (error) {
    console.error("Error adding document: ", error);
    // În caz de eroare, poți să arunci o excepție sau să returnezi un alt cod de eroare, în funcție de necesități
    throw error;
  }
};
