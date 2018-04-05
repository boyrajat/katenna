const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

//This file empties the Tasks collection and inserts the Tasks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jobdescriptions",
  {
    useMongoClient: true
  }
);

 const taskSeed = [
   {
    department: "Concierge",
    task: "Stephen King",
    description:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',
    date: new Date(Date.now())
  },
  {
    department: "Bellman",
    task: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now())
  }
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
