// Require dependencies
var express = require('express');
var db = require('../models');
var path = require('path');

// Export controller defined routes
module.exports = function(app) {
    app.get('/:id', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Post function to add new survey
    app.post('/:id', function(request, response) {
        var survey = request.body;
        // if no survey is defined just return
        if (survey === '') {
            response.redirect('/' + mTurkCohort);
            return;
        }
        // Create the new survey in DB
        db.Survey.create({
            cohort: survey.cohort,
            code: survey.code,
            q1: survey.q1,
            q2: survey.q2,
            q3: survey.q3,
            q4: survey.q4,
            q5: survey.q5,
            q6: survey.q6,
            q7: survey.q7,
            q8: survey.q8,
            q9: survey.q9,
            q10: survey.q10,
            q11: survey.q11,
            q12: survey.q12,
            q13: survey.q13,
            q14: survey.q14,
            q15: survey.q15,
            q16: survey.q16,
            q17: survey.q17,
            q18: survey.q18,
            q19: survey.q19,
            q20: survey.q20,
            f1: survey.f1,
            f2: survey.f2,
            f3: survey.f3,
            f4: survey.f4,
            f5: survey.f5,
            f6: survey.f6,
            f7: survey.f7,
            f8: survey.f8,
            f9: survey.f9,
            f10: survey.f10,
            f11: survey.f11,
            f12: survey.f12,
            f13: survey.f13,
            f14: survey.f14,
            f15: survey.f15,
            f16: survey.f16,
            f17: survey.f17,
            f18: survey.f18,
            f19: survey.f19,
            f20: survey.f20
        }).then(function() {
            response.redirect('/'); 
            // look into this
        }).catch(function(err) {
            console.log(err);
        });
    })
};
