export const deleteEmployeeXLocation = async () => {
  var numberOfDocs = 0;
  try {
    const collectionRef = db.collection("EmployeeXLocation");
    const snapshot = await collectionRef.get();

    snapshot.forEach((doc) => {
      if (
        doc.data().ResignationDate == null &&
        doc.data().CurrentlyEmployed == false
      ) {
        console.log("ResignationDate is null and CurrentlyEmployed is false");
        numberOfDocs++;
        collectionRef
          .doc(doc.id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          });
      }
    });

    console.log("Number of documents to delete: ", numberOfDocs);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
