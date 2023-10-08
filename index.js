var admin = require("firebase-admin");
var serviceAccount = require("./smart-business-ro-firebase-adminsdk-idxlk-0228c799a9.json");

var getNumberOfEmployeesFromCompany = require("./lib/la_final_de_luna/getNumberOfEmployeesFromCompany.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Get a Firestore instance
const db = admin.firestore();

getNumberOfEmployeesFromCompany(db, "mpxcWADEI4ZAXOqwM4mo").then((result) => {
  // console.log("Number of employees: ", result);
  console.log("Number of employees: ", result.length);
  console.log("Employees: ", result);
});
