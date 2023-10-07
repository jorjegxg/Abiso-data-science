module.exports.getNullEmploymentDate = async (db) => {
  var numberOfDocs = 0;
  try {
    const collectionRef = db.collection("EmployeeXLocation");
    const snapshot = await collectionRef.get();

    snapshot.forEach((doc) => {
      if (doc.data().EmploymentDate == null) {
        console.log("EmploymentDate is null");
        numberOfDocs++;
      }
    });

    console.log("Number of documents with null EmploymentDate: ", numberOfDocs);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
