const updateTasks = async () => {
  try {
    const collectionRef = db.collection("Task");
    const snapshot = await collectionRef.get();

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      //console.log(doc.data().ResignationDate);
      //console.log(doc.data().ResignationDate === undefined);
      if (doc.data().TaskPoints === undefined) {
        console.log("TaskPoints is undefined");
        collectionRef
          .doc(doc.id)
          .update({ TaskPoints: 0 })
          .then(() => {
            console.log("Document successfully updated!");
          });
      }
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};