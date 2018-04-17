const express = require('express');
const validator = require('validator');
const passport = require('passport');
const User = require("../models/user");
const Tasks = require("../models/task");
const Employee = require("../models/employee");
const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 10) {
    isFormValid = false;
    errors.password = 'Password must have at least 10 characters';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name';
  }

  if (!isFormValid) {
    message = 'Oops the form have some errors';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password';
  }

  if (!isFormValid) {
    message = 'Oops the form have some errors';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Oops the form have some errors',
          errors: {
            email: 'This email is already taken'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form'
      });
    }

    // Employee.find().each(
    //   function (x) {
    //     console.log(x);
    //     // User.update(
    //     //   // query 
    //     //   { name: 'Alexander' },
    //     //   // update 
    //     //   { $set: { tasks: x.name } },
    //     //   // options:
    //     //   { "multi": true } // Update all matching documents
    //     // );
    //   }
    // );
    // User.update(
    //   { name: 'Alexander' }, { name: 'Peter Parker' },
    //   { multi: true }, function (err, res) {
    //     if (err) {
    //       console.log(err);

    //     } else {
    //       console.log(res);
    //     } // Update all matching documents

    //   }
    // );

    // this is a test to set or unset fields base on a filter
    // Employee.update({ 'name': 'Angelo Oneill' }, { $unset: { "isOpen": false } }, { multi: true }, function (err, res) {
    //   if (err) {
    //     console.log(err);

    //   } else {
    //     console.log(res);
    //   } // Update all matching documents

    // })

    // Tasks.find({ 'name': 'Front Office' }, 'tasks', function (err, tasks) {
    //   if (err) return handleError(err);
    //   console.log("here");
    //   //creating an array with the tasks length and setting initial values as 0
    //   let newTaskArray = [];
    //   for (let i = 0; i < tasks[0].tasks.length; i++) {
    //     console.log("here");
    //     newTaskArray[i] = true;
    //     if (i === (tasks[0].tasks.length - 1)) {
    //       console.log("here");
    //       console.log(newTaskArray);
    //     }
    //   }
    User.update({}, { $set: { "position": 'Front Office' } }, { multi: true }, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      } // Update all matching documents
    });
    //   // Prints".
    //   console.log('%s %s is a %s.', tasks);
    // });


    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Please proceed to log in'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
