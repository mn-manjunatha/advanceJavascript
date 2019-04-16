    var obj = { num: 2 };
    var addToThis = function (a, b, c) {
      return this.num + a + b + c;
    }

    console.log('call', addToThis.call(obj, 1, 2, 3));

    console.log('apply', addToThis.apply(obj, [2, 3, 4]));

    var bound = addToThis.bind(obj);

    console.log('bound', bound(1, 2, 3));