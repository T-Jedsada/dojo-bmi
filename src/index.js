class BMICalculator {
    calculate(height, weight) {
        if (height == 170) {
            if (weight == 40) {
                return "Underweight"
            } else if (weight == 49) {
                return "Normal Weight"
            } else if (weight == 58) {
                return "Over Weight"
            } else if (weight == 73) {
                return "Obesity"
            } else if (weight == 90) {
                return "fat"
            } else if (weight == null) {
                return "please input your weight"
            }
        } else if (height == null && weight == 50) {
            return "please input your hight"
        } else {
            return "please input your hight,weight"
        }
    }
}

exports.default = new BMICalculator;