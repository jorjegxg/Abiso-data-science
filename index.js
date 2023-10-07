var admin = require("firebase-admin");
var serviceAccount = require("./smart-business-ro-firebase-adminsdk-idxlk-0228c799a9.json");

var getEmployeesFromLocation = require("./lib/important/get_number_of_employees_from_location.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Get a Firestore instance
const db = admin.firestore();

// getEmployeesFromLocation(db, "9ccc4930-64eb-11ee-addc-cbd93ef8d338");

