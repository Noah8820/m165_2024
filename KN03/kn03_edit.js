use boxclub;

const mitgliedToUpdate = ObjectId("60c72b2f9af1f9b3b4dcef57");
db.mitglied.updateOne(
    { _id: mitgliedToUpdate },
    { $set: { alter: 26 } }
);

db.trainer.updateMany(
    {
        $or: [
            { name: "Peter Trainer" },
            { name: "Susanne Coach" }
        ]
    },
    { $set: { alter: 50 } }
);

const gewichtsklasseToReplace = ObjectId("gewichtsklasse3Id");
db.gewichtsklassen.replaceOne(
    { _id: gewichtsklasseToReplace },
    {
        _id: gewichtsklasseToReplace,
        minweight: 75.0,
        maxweight: 85.0,
        name: "Schwergewicht Neu"
    }
);
