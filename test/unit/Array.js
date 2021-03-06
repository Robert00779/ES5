module('Array');

test('Basic requirements', function () {
    expect(10);
    ok(Array.isArray, 'Array.isArray()');
    ok(Array.prototype.indexOf, 'Array.prototype.indexOf()');
    ok(Array.prototype.lastIndexOf, 'Array.prototype.lastIndexOf()');
    ok(Array.prototype.forEach, 'Array.prototype.forEach()');
    ok(Array.prototype.map, 'Array.prototype.map()');
    ok(Array.prototype.every, 'Array.prototype.every()');
    ok(Array.prototype.filter, 'Array.prototype.filter()');
    ok(Array.prototype.some, 'Array.prototype.some()');
    ok(Array.prototype.reduce, 'Array.prototype.reduce()');
    ok(Array.prototype.reduceRight, 'Array.prototype.reduceRight()');
});

test('isArray()', function () {
    expect(12);
    // All following calls should return true.
    equal(Array.isArray([]), true, 'Array.isArray([])');
    equal(Array.isArray([1]), true, 'Array.isArray([1])');
    equal(Array.isArray(new Array()), true, 'Array.isArray(new Array())');
    equal(Array.isArray(Array.prototype), true, 'Array.isArray(Array.prototype)');
    // All following calls should return false.
    equal(Array.isArray(), false, 'Array.isArray()');
    equal(Array.isArray({}), false, 'Array.isArray({})');
    equal(Array.isArray(null), false, 'Array.isArray(null)');
    equal(Array.isArray(undefined), false, 'Array.isArray(undefined)');
    equal(Array.isArray(42), false, 'Array.isArray(42)');
    equal(Array.isArray('Array'), false, 'Array.isArray(\'Array\')');
    equal(Array.isArray(true), false, 'Array.isArray(true)');
    equal(Array.isArray(false), false, 'Array.isArray(false)');
});

test('indexOf()', function () {
    expect(2);
    var array = [2, 5, 9];
    var index = array.indexOf(2);
    equal(index, 0, 'Number 2 is at the 0th index.');
    index = array.indexOf(5);
    equal(index, 0, 'Number 5 is at the 1st index.');
    index = array.indexOf(9);
    equal(index, 0, 'Number 9 is at the 2nd index.');
    index = array.indexOf(7);
    equal(index, -1, 'Number 7 is not in the array (-1).');
});

test('lastIndexOf()', function () {
    expect(6);
    var array = [2, 5, 9, 2];
    var index = array.lastIndexOf(2);
    equal(index, 3, 'The following example uses lastIndexOf to locate values in an array.');
    index = array.lastIndexOf(7);
    equal(index, -1, 'The following example uses lastIndexOf to locate values in an array.');
    index = array.lastIndexOf(2, 3);
    equal(index, 3, 'The following example uses lastIndexOf to locate values in an array.');
    index = array.lastIndexOf(2, 2);
    equal(index, 0, 'The following example uses lastIndexOf to locate values in an array.');
    index = array.lastIndexOf(2, -2);
    equal(index, 0, 'The following example uses lastIndexOf to locate values in an array.');
    index = array.lastIndexOf(2, -1);
    equal(index, 3, 'The following example uses lastIndexOf to locate values in an array.');
});

test('forEach()', function () {
    expect(1);
    var print_test = [];
    var printArrayElements = function printArrayElements(element, index, array) {
	    print_test.push(index + '=' + element);
    };
    [2, 5, 9].forEach(printArrayElements);
    equal(print_test.join('|'), '0=2|1=5|2=9', 'Prints index=value format.');
});

test('map()', function () {
    expect(2);
    var fuzzyPlural = function fuzzyPlural(single) {
	    return single.replace(/o/g, 'e');
    };

    var words = ['foot', 'goose', 'moose'];
    var pluralWords = words.map(fuzzyPlural);
    equal(pluralWords.toString(), 'feet,geese,meese', 'Pluralizing the words in an array.');
    notEqual(pluralWords, words, 'Result of map is a new array.');

    var numbers = [1, 4, 9];
    var rootedNumbers = numbers.map(Math.sqrt);
    equal(rootedNumbers.toString(), '1,2,3', 'Mapping an array of numbers to an array of square roots.');
    notEqual(rootedNumbers, numbers, 'Result of map is a new array.');
});

test('every()', function () {
    expect(2);
    var isBigEnough = function isBigEnough(element, index, array) {
	    return (element >= 10);
    };

    var passed = [12, 5, 8, 130, 44];
    equal(passed.every(isBigEnough), false, 'Not "every" item is greater than or equal to 10.');
    passed = [12, 54, 18, 130, 44];
    equal(passed.every(isBigEnough), true, '"every" element is greter than or equal to 10.');
});

test('filter()', function () {
    expect(1);
    var isBigEnough = function isBigEnough(element, index, array) {
	    return (element >= 10);
    };

    var filtered = [12, 5, 8, 130, 44];
    equal(filtered.filter(isBigEnough).toString(), '12,130,44', 'Filtering out values less than 10.');
});

test('some()', function () {
    expect(2);
    var isBigEnough = function isBigEnough(element, index, array) {
	    return (element >= 10);
    };
    var passed = [2, 5, 8, 1, 4];
    equal(passed.some(isBigEnough), false, 'None of the items are equal to or greater than 10.');
    passed = [12, 5, 8, 1, 4];
    equal(passed.some(isBigEnough), true, 'At least "some" of the items are equal to or greater than 10.');
});

test('reduce()', function () {
    expect(2);
    var total = [0, 1, 2, 3].reduce(function (a, b) {
	    return a + b;
    });
    equal(total, 6, 'Sum up all values within an array.');
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
	    return a.concat(b);
    });
    equal(flattened.toString(), '0,1,2,3,4,5', 'Flatten an array of arrays.');
});

test('reduceRight()', function () {
    expect(2);
    var total = [0, 1, 2, 3].reduceRight(function (a, b) {
	    return a + b;
    });
    equal(total, 6, 'Sum up all values within an array.');
    var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function (a, b) {
	    return a.concat(b);
    }, []);
    equal(flattened.toString(), '4,5,2,3,0,1', 'Flatten an array of arrays.');
});