use boxclub;

const mitglied1Id = ObjectId();
const mitglied2Id = ObjectId();
const mitglied3Id = ObjectId();
const mitglied4Id = ObjectId();
const mitglied5Id = ObjectId();

const trainer1Id = ObjectId();
const trainer2Id = ObjectId();
const trainer3Id = ObjectId();
const trainer4Id = ObjectId();
const trainer5Id = ObjectId();

const gewichtsklasse1Id = ObjectId();
const gewichtsklasse2Id = ObjectId();
const gewichtsklasse3Id = ObjectId();
const gewichtsklasse4Id = ObjectId();
const gewichtsklasse5Id = ObjectId();

// Daten für die Collection 'mitglied'
const mitglied1 = {
    _id: mitglied1Id,
    name: "Max Mustermann",
    geschlecht: "männlich",
    alter: 25
};
const mitglied2 = {
    _id: mitglied2Id,
    name: "Erika Musterfrau",
    geschlecht: "weiblich",
    alter: 30
};
const mitglied3 = {
    _id: mitglied3Id,
    name: "Hans Müller",
    geschlecht: "männlich",
    alter: 22
};
const mitglied4 = {
    _id: mitglied4Id,
    name: "Anna Schmidt",
    geschlecht: "weiblich",
    alter: 28
};
const mitglied5 = {
    _id: mitglied5Id,
    name: "Peter Fischer",
    geschlecht: "männlich",
    alter: 35
};

// insertMany für die Collection 'mitglied'
db.mitglied.insertMany([mitglied1, mitglied2, mitglied3, mitglied4, mitglied5]);
print("Mitglied documents inserted");

// Daten für die Collection 'trainer'
const trainer1 = {
    _id: trainer1Id,
    name: "Peter Trainer",
    geschlecht: "männlich",
    alter: 45
};
const trainer2 = {
    _id: trainer2Id,
    name: "Susanne Coach",
    geschlecht: "weiblich",
    alter: 38
};
const trainer3 = {
    _id: trainer3Id,
    name: "Thomas Lehrer",
    geschlecht: "männlich",
    alter: 50
};
const trainer4 = {
    _id: trainer4Id,
    name: "Julia Ausbilder",
    geschlecht: "weiblich",
    alter: 42
};
const trainer5 = {
    _id: trainer5Id,
    name: "Michael Betreuer",
    geschlecht: "männlich",
    alter: 37
};

// insertOne für die Collection 'trainer'
db.trainer.insertOne(trainer1);
print("Trainer document inserted");

// insertMany für die Collection 'trainer'
db.trainer.insertMany([trainer2, trainer3, trainer4, trainer5]);
print("Trainer documents inserted");

// Daten für die Collection 'gewichtsklassen'
const gewichtsklasse1 = {
    _id: gewichtsklasse1Id,
    minweight: 50.0,
    maxweight: 60.0,
    name: "Leichtgewicht"
};
const gewichtsklasse2 = {
    _id: gewichtsklasse2Id,
    minweight: 60.1,
    maxweight: 70.0,
    name: "Mittelgewicht"
};
const gewichtsklasse3 = {
    _id: gewichtsklasse3Id,
    minweight: 70.1,
    maxweight: 80.0,
    name: "Schwergewicht"
};
const gewichtsklasse4 = {
    _id: gewichtsklasse4Id,
    minweight: 80.1,
    maxweight: 90.0,
    name: "Super Schwergewicht"
};
const gewichtsklasse5 = {
    _id: gewichtsklasse5Id,
    minweight: 90.1,
    maxweight: 100.0,
    name: "Ultra Schwergewicht"
};

// insertMany für die Collection 'gewichtsklassen'
db.gewichtsklassen.insertMany([gewichtsklasse1, gewichtsklasse2, gewichtsklasse3, gewichtsklasse4, gewichtsklasse5]);
print("Gewichtsklassen documents inserted");
