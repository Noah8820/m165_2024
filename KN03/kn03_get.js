use boxclub;

db.mitglied.find({ alter: { $gt: 25 } }).forEach(printjson);

db.trainer.find({ alter: { $gt: 40 } }).forEach(printjson);

db.gewichtsklassen.find({
    $or: [
        { name: "Leichtgewicht" },
        { name: "Mittelgewicht" }
    ]
}).forEach(printjson);

db.trainer.find({
    geschlecht: "weiblich",
    alter: { $gt: 35 }
}).forEach(printjson);

// Findet alle Mitglieder mit Namen, die auf "Muster" enden
db.mitglied.find({ name: { $regex: /Muster$/ } }).forEach(printjson);

// Findet alle Trainer mit Namen, die mit "Susanne" beginnen
db.trainer.find({ name: { $regex: /^Susanne/ } }).forEach(printjson);

// Findet alle Gewichtsklassen mit Namen, die "Schwergewicht" enthalten
db.gewichtsklassen.find({ name: { $regex: /Schwergewicht/ } }).forEach(printjson);
