const updateEmployeeXLocation = async () => {
  try {
    const collectionRef = db.collection("EmployeeXLocation");

    //for each document in the collection update with ({ ResignationDate: null })
    const snapshot = await collectionRef.get();

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      //console.log(doc.data().ResignationDate);
      //console.log(doc.data().ResignationDate === undefined);
      if (doc.data().ResignationDate === undefined) {
        console.log("ResignationDate is undefined");
        collectionRef
          .doc(doc.id)
          .update({ ResignationDate: null })
          .then(() => {
            console.log("Document successfully updated!");
          });
      }
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
