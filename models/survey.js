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
        q1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q11: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q12: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q13: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q14: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q15: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q16: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q17: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q18: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q19: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q20: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f11: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f12: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f13: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f14: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f15: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f16: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f17: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f18: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f19: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        f20: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // Returns the model
    return Survey;
};
