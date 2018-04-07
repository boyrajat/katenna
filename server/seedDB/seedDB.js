const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


const taskSeed =
  //Array for Company info, Employee info and Jobs info objects
  [
    //Company Info object

    {
      company: {
        name: "Katenna Hotel Miami",
        address: {
          street: "1220 Ocean Drive",
          city: "Miami Beach",
          state: "Florida",
          zip: 33139
        },
        phone: "305-604-5070",
        url: "http://www.katennahotelmiami.com",
        location: "in the heart of South Beach on Ocean Drive, between 12th and 13th streets",
        rooms: 45,
        built: 1936,
        architect: "L. Murray Dixon",
        features: [
          'Guaranteed direct ocean views from all rooms and suites',
          'Large, spacious rooms averaging 550 sq ft or more in size',
          'Complimentary WiFi in all guest rooms and public spaces',
          'The Katenna Restaurant, featuring all day indoor/outdoor dining',
          'Outdoor heated pool exclusively for hotel guests',
          'Fitness Center (open 24 hours)'
        ],
        services: [
          'Complimentary beach set-up of two beach chairs, one umbrella and two towels',
          'Complimentary "Katenna Sunrise" welcome cocktail upon arrival',
          'Valet parking ($35 per night)',
          '24-hour concierge service',
          'Same day laundering and dry cleaning services',
          'Pressing and steaming services',
          'Shoe shine services',
          'Well-stocked lending library featuring award-winning DVDs',
        ],
        amenities: [
          'In-room dining serving breakfast, lunch and dinner',
          'Nespresso coffee & tea machines',
          'Fully stocked honor bar',
          'In-room safe',
          'Flat-screen televisions with DVD players',
          'iPod docking stations in all rooms and suites',
          'Large walk -in closets',
          'Iron and ironing board available upon request',
          'In - room spa treatments'
        ],
        dining: [
          {
            outlet: {
              name: 'Tides Restaurant and Terrace',
              cuisine: 'International and American',
              hours: {
                breakfast: {
                  open: 7,
                  close: 11
                },
                lunch: {
                  open: 11,
                  close: 16
                },
                dinner: {
                  open: 16,
                  close: 23
                }
              }
            }
          },
          {
            outlet: {
              name: 'Turtle Bar',
              cuisine: 'Alcolohol, wine and beer',
              hours: {
                breakfast: {
                  open: 9,
                  close: 11
                },
                lunch: {
                  open: 11,
                  close: 16
                },
                dinner: {
                  open: 16,
                  close: 23
                }
              }
            }
          }
        ]
      }
    },

    // Employee info object
    {
      employees: [
        {
          name: "Mariela Pascual",
          email: "mariela2pascual@gmail.com",
          phone: "NONE",
          position: "Front Office"


        }
      ]
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
