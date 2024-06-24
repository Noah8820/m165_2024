use boxclub;

var mitglied1Id = new ObjectId();
var mitglied2Id = new ObjectId();
var mitglied3Id = new ObjectId();
var mitglied4Id = new ObjectId();
var mitglied5Id = new ObjectId();

var trainer1Id = new ObjectId();
var trainer2Id = new ObjectId();
var trainer3Id = new ObjectId();
var trainer4Id = new ObjectId();
var trainer5Id = new ObjectId();

var gewichtsklasse1Id = new ObjectId();
var gewichtsklasse2Id = new ObjectId();
var gewichtsklasse3Id = new ObjectId();
var gewichtsklasse4Id = new ObjectId();
var gewichtsklasse5Id = new ObjectId();

db.mitglied.insertMany([
    { _id: mitglied1Id, name: "Max Mustermann", geschlecht: "männlich", alter: 25 },
    { _id: mitglied2Id, name: "Erika Musterfrau", geschlecht: "weiblich", alter: 30 },
    { _id: mitglied3Id, name: "Hans Müller", geschlecht: "männlich", alter: 22 },
    { _id: mitglied4Id, name: "Anna Schmidt", geschlecht: "weiblich", alter: 28 },
    { _id: mitglied5Id, name: "Peter Fischer", geschlecht: "männlich", alter: 35 }
]);

db.trainer.insertMany([
    { _id: trainer1Id, name: "Peter Trainer", geschlecht: "männlich", alter: 45 },
    { _id: trainer2Id, name: "Susanne Coach", geschlecht: "weiblich", alter: 38 },
    { _id: trainer3Id, name: "Thomas Lehrer", geschlecht: "männlich", alter: 50 },
    { _id: trainer4Id, name: "Julia Ausbilder", geschlecht: "weiblich", alter: 42 },
    { _id: trainer5Id, name: "Michael Betreuer", geschlecht: "männlich", alter: 37 }
]);

db.gewichtsklassen.insertMany([
    { _id: gewichtsklasse1Id, minweight: 50.0, maxweight: 60.0, name: "Leichtgewicht" },
    { _id: gewichtsklasse2Id, minweight: 60.1, maxweight: 70.0, name: "Mittelgewicht" },
    { _id: gewichtsklasse3Id, minweight: 70.1, maxweight: 80.0, name: "Schwergewicht" },
    { _id: gewichtsklasse4Id, minweight: 80.1, maxweight: 90.0, name: "Super Schwergewicht" },
    { _id: gewichtsklasse5Id, minweight: 90.1, maxweight: 100.0, name: "Ultra Schwergewicht" }
]);
