use boxclub;

db.mitglied.find({ alter: { $gt: 25 } }).forEach(printjson);

db.trainer.find({ alter: { $gt: 40 } }).forEach(printjson);

db.gewichtsklassen.find({
    $or: [
        { name: "Leichtgewicht" },
        { name: "Mittelgewicht" }
    ]
}).forEach(printjson);

print("Weibliche Trainer über 35 Jahre:");
db.trainer.find({
    geschlecht: "weiblich",
    alter: { $gt: 35 }
}).forEach(printjson);

db.mitglied.find({ name: { $regex: ".*er.*" } }).forEach(printjson);

db.gewichtsklassen.find({}, { _id: 1, name: 1, minweight: 1, maxweight: 1 }).forEach(printjson);

print("Trainer ohne _id:");
db.trainer.find({}, { _id: 0, name: 1, geschlecht: 1, alter: 1 }).forEach(printjson);
