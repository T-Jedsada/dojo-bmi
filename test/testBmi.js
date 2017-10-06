var assert = require('assert');
const bmiCalculate = require("../src/index").default

describe('BMI', function () {
    it('#Underweight', function () {
        assert.equal("Underweight", bmiCalculate.calculate(170, 40));
    });

    it('#Normal_Weight', function () {
        assert.equal("Normal Weight", bmiCalculate.calculate(170, 49));
    });

    it('#Over_weight', function () {
        assert.equal("Over Weight", bmiCalculate.calculate(170, 58));
    });

    it('#Obesity', function () {
        assert.equal("Obesity", bmiCalculate.calculate(170, 73));
    });

    it('#fat', function () {
        assert.equal("fat", bmiCalculate.calculate(170, 90));
    });

    it('#null', function () {
        assert.equal("please input your hight,weight", bmiCalculate.calculate(null, null));
    });

    it('#weigth_null', function () {
        assert.equal("please input your weight", bmiCalculate.calculate(170, null));
    });

    it('#hight_null', function () {
        assert.equal("please input your hight", bmiCalculate.calculate(null, 50));
    });
});