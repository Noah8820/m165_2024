use boxclub;

var mitgliedIdToDelete = ObjectId("60c72b2f9af1f9b3b4dcef57");
var trainerIdsToDelete = [ObjectId("60c72b2f9af1f9b3b4dcef60"), ObjectId("60c72b2f9af1f9b3b4dcef61")];

db.mitglied.deleteOne({ _id: mitgliedIdToDelete });

db.trainer.deleteMany({ 
    $or: [
        { _id: trainerIdsToDelete[0] },
        { _id: trainerIdsToDelete[1] }
    ] 
});
