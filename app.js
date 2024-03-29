const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//FRUIT SCHEMA
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Why no names bruh?"],
  },
  rating: {
    type: Number,
    min: [1, "Minimum is 1"],
    max: [10, "Maximum is 10"],
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

//PERSON SCHEMA
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Put your name bruh!"],
  },
  age: Number,
  favoriteFruit: fruitSchema // EMBEDDED DATA FROM FRUIT
});

const Person = mongoose.model("Person", personSchema);

//UPDATING AN OLD PERSON DATA TO EMBED THE FRUIT DATA
// const pineapple = new Fruit ({
//   name: 'pineapple',
//   rating: 10,
//   review: 'Thumbs up from heaven'
// });
// pineapple.save();
// Person.updateOne({name: 'Henry Kaye'}, {favoriteFruit: pineapple}).then(function(){
//   console.log('Update succesfull');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });
//------------------------------------------------------------------------------------

//INSERTING A EMBBED DATA OF FRUIT INSIDE PERSON IN THE DATABASE
// const mango = new Fruit ({
//   name: 'mango',
//   rating: 10,
//   review: 'The best fruit ever!'
// });
// mango.save();
// const person = new Person ({
//   name: 'Bot15',
//   age: 15,
//   favoriteFruit: mango
// })
// person.save().then(function(){
//   console.log('Combined!');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });
//--------------------------------------------------------------

// THIS IS THE DELETEMANY FOR PERSON SCHEMA
// Person.deleteMany({age: 15}).then(function(){
//   console.log('Deleted');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE DELETE FOR PERSON SCHEMA
// Person.deleteOne({name:'Bot1'}).then(function(){
//   console.log('Deleted');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE UPDATE FOR FRUIT (GRAPE)
// Fruit.updateOne({_id: '6606b72ca308d9806dae1b92'}, {review: 'Super sweet!'}).then(function(){
//   console.log('Update Succesfully');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

// THIS IS THE UPDATE FOR PEOPLE, NOTICE! THAT I ADDED THE AGE OF THE 1ST ENTRY USING ID
// Person.updateOne({_id: '6606c868eaa16499022aab68'}, {age: 15}).then(function(){
//   console.log('Update Succesfully');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE READ DATABASE FOR PEOPLE
// Person.find({}).then(function(people){
//   console.log(people);
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE READ DATABASE FOR FRUIT
// Fruit.find({}).then(function(fruits){
// console.log(fruits)
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// })

//THIS IS THE INSERT MANY FOR PERSON
// Person.insertMany([
//   { name: "Bot1", age: 15 },
//   { name: "Bot2", age: 15 },
// ]).then(function(){
//   console.log('Many has been inserted!');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE INSERT ONE FOR PERSON SCHEMA
// const person = new Person ({
  // name: 'Bot3'
// NOTICE! I DID NOT INSERT AGE IN MY ENTRY
// });

// SAVING THE INSERT ONE IN DATABASE FROM PERSON SCHEMA
// person.save().then(function(){
//   console.log(person.name+' is Saved in the Database');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close()
// });

//THIS IS THE INSERT MANY FOR FRUIT SCHEMA
// Fruit.insertMany([
//   { name: 'Orange', rating: 9, review: 'Love it!'},
//   { name: 'Grape', rating: 9, review: 'Fire!'}
// ]).then(function(){
//   console.log('InsertMany has been saved!');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });

//THIS IS THE INSERT ONE FOR FRUIT SCHEMA
// const fruit = new Fruit({
//   name: 'Apple',
//   rating: 5,
//   review: 'Pretty good for an Apple!'
// })

//SAVING THE INSERT ONE IN DATABASE FROM FRUIT SCHEMA
// fruit.save().then(function(){
//   console.log(fruit.name+' is saved');
//   mongoose.connection.close();
// }).catch(function(err){
//   console.log(err);
//   mongoose.connection.close();
// });
