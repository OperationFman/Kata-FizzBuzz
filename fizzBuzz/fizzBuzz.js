const fizzBuzz = {
    output: [],
    total_numbers: 100,
    start_number: 1,
    fizzbuzz_multiple: 15,
    fizz_multiple: 3,
    buzz_multiple: 5,
    fizzAndBuzz: function(number) {
        if (number % this.fizzbuzz_multiple == 0) {
            return true
        };
        return false
    },
    fizz: function(number) {
        if (number % this.fizz_multiple == 0) {
            return true
        };
        return false;
    },
    buzz: function(number) {
        if (number % this.buzz_multiple == 0) {
            return true
        };
        return false;
    },
    check: function(number) {
        if (this.fizzAndBuzz(number) == true) {
            return "FizzBuzz"
        } else if (this.fizz(number) == true) {
            return "Fizz"
        } else if (this.buzz(number) == true) {
            return "Buzz"
        } else {
            return number
        };
    },
    run: function() {
        for (i = this.start_number; i < this.total_numbers; i++) {
            result = fizzBuzz.check(i);
            this.output.push(result);
        };
    }
};
fizzBuzz.run()
console.log(fizzBuzz.output)

module.exports = fizzBuzz