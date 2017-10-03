// Sequelized response model
module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define('Survey', {
        // Set the ID in the DB
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cohort: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        code: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        startTime: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ1: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ2: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ3: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ4: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ5: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ6: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ7: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ8: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ9: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ10: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q11: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ11: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q12: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ12: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q13: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ13: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q14: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ14: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q15: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ15: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q16: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ16: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q17: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ17: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q18: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ18: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q19: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ19: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        q20: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeQ20: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF1: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF2: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF3: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF4: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF5: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF6: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF7: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF8: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF9: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF10: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f11: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF11: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f12: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF12: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f13: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF13: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f14: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF14: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f15: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF15: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f16: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF16: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f17: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF17: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f18: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF18: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f19: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF19: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        f20: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeF20: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
    // Returns the model
    return Survey;
};
