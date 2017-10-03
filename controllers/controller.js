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
            country: survey.country,
            startTime: survey.startTime,
            q1: survey.q1,
            timeQ1: survey.tq1,
            q2: survey.q2,
            timeQ2: survey.tq2,
            q3: survey.q3,
            timeQ3: survey.tq3,
            q4: survey.q4,
            timeQ4: survey.tq4,
            q5: survey.q5,
            timeQ5: survey.tq5,
            q6: survey.q6,
            timeQ6: survey.tq6,
            q7: survey.q7,
            timeQ7: survey.tq7,
            q8: survey.q8,
            timeQ8: survey.tq8,
            q9: survey.q9,
            timeQ9: survey.tq9,
            q10: survey.q10,
            timeQ10: survey.tq10,
            q11: survey.q11,
            timeQ11: survey.tq11,
            q12: survey.q12,
            timeQ12: survey.tq12,
            q13: survey.q13,
            timeQ13: survey.tq13,
            q14: survey.q14,
            timeQ14: survey.tq14,
            q15: survey.q15,
            timeQ15: survey.tq15,
            q16: survey.q16,
            timeQ16: survey.tq16,
            q17: survey.q17,
            timeQ17: survey.tq17,
            q18: survey.q18,
            timeQ18: survey.tq18,
            q19: survey.q19,
            timeQ19: survey.tq19,
            q20: survey.q20,
            timeQ20: survey.tq20,
            f1: survey.f1,
            timeF1: survey.tf1,
            f2: survey.f2,
            timeF2: survey.tf2,
            f3: survey.f3,
            timeF3: survey.tf3,
            f4: survey.f4,
            timeF4: survey.tf4,
            f5: survey.f5,
            timeF5: survey.tf5,
            f6: survey.f6,
            timeF6: survey.tf6,
            f7: survey.f7,
            timeF7: survey.tf7,
            f8: survey.f8,
            timeF8: survey.tf8,
            f9: survey.f9,
            timeF9: survey.tf9,
            f10: survey.f10,
            timeF10: survey.tf10,
            f11: survey.f11,
            timeF11: survey.tf11,
            f12: survey.f12,
            timeF12: survey.tf12,
            f13: survey.f13,
            timeF13: survey.tf13,
            f14: survey.f14,
            timeF14: survey.tf14,
            f15: survey.f15,
            timeF15: survey.tf15,
            f16: survey.f16,
            timeF16: survey.tf16,
            f17: survey.f17,
            timeF17: survey.tf17,
            f18: survey.f18,
            timeF18: survey.tf18,
            f19: survey.f19,
            timeF19: survey.tf19,
            f20: survey.f20,
            timeF20: survey.tf20
        }).then(function() {
            response.redirect('/'); 
            // look into this
        }).catch(function(err) {
            console.log(err);
        });
    })
};
