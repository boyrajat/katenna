const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
name: {
    type: String,
    index: { unique: true },
    required: true
},

address: {
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    }
},

phone: {
    type: String,
    required: true
},

url: {
    type: String,
    required: false
},

location: {
    type: String,
    required: false
},

rooms: {
    type: Number,
    required: false
},

built: {
    type: Number,
    required: false
},

architect: {
    type: String,
    required: false
},

features: [
    {
        type: String,
        required: false
    }
],

services: [
    {
        type: String,
        required: false
    }
],

amenities: [
    {
        type: String,
        required: false
    }
],

dining: [
    {
        outlet: {
            name: {
                type: String,
                required: false
            },
            cuisine: {
                type: String,
                required: false
            },
            hours: {
                breakfast: {
                    open: {
                        type: Number,
                        required: false
                    },
                    close: {
                        type: Number,
                        required: false
                    }
                },
                lunch: {
                    open: {
                        type: Number,
                        required: false
                    },
                    close: {
                        type: Number,
                        required: false
                    }
                   
                },
                dinner: {
                    open: {
                        type: Number,
                        required: false
                    },
                    close: {
                        type: Number,
                        required: false
                    }
                }
                
            }
        }
    }
]


});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
