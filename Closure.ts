    var passed = 2;

    var addTo = function () {
      var inner = 3
      return passed + inner;
    }
    console.dir(addTo)

    //example 2 as inner function
    var addTo1 = function (passed1) {
      var add = function (inner1) {
        return passed1 + inner1
      };

      return add;
    };

    var addThree = new addTo1(3);
    var addFour = new addTo1(4);

    console.log('addThree', addThree(1));
    console.log('addFour', addFour(1));