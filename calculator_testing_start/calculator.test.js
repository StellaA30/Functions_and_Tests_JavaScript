const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  // checking to make sure sum of 2 and 3 ais not equal to 6
  test('can add two small positive numbers and get the wrong answer', () => {
    expected = 6;
    actual = sum(2, 3);
    expect(actual).not.toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100_000;
    actual = sum(70_000, 30_000);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -12;
    actual = sum(-4, -8);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 30;
    actual = sum(0, 30);
    expect(actual).toBe(expected);
  });

  test('can add two zeros', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(7, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two small positive numbers and get the wrong answer', () => {
    expected = 3;
    actual = subtract(7, 5);
    expect(actual).not.toBe(expected);
  });



  test('can subtract two large positive numbers', () => { 
    expected = 40_000;
    actual = subtract(70_000, 30_000);
    expect(actual).toBe(expected);
    
  });

  test('can subtract two negative numbers', () => {
    expected = -12;
    actual = subtract(-13, -1);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 2_100_000_000;
    actual = multiply(70_000, 30_000);
    expect(actual).toBe(expected);
    
  });

  test('can multiply two negative numbers', () => {
    expected = 32;
    actual = multiply(-4, -8);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(0, 30);
    expect(actual).toBe(expected);
  });

  test('can multiply negative and positive numbers', () => {
    expected = -60;
    actual = multiply(-2, 30);
    expect(actual).toBe(expected);
  });


});

describe('divide', () => {
  test('can multiply two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 3;
    actual = divide(900_000, 300_000);
    expect(actual).toBe(expected);
    
  });

  test('can divide using two negative numbers', () => {
    expected = 3;
    actual = divide(-12, -4);
    expect(actual).toBe(expected);
  });

  test('can 0 divide by a positive integer', () => {
    expected = 0;
    actual = divide(0, 30);
    expect(actual).toBe(expected);
  });

  test('can 0 divide by a negative integer', () => {
    expected = -0;
    actual = divide(0, -30);
    expect(actual).toBe(expected);
  });

  test('can positive integer divide by negative integer', () => {
    expected = -11;
    actual = divide(22, -2);
    expect(actual).toBe(expected);
  });

  test('can negative integer divide by positive integer', () => {
    expected = -11;
    actual = divide(-22, 2);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(22, 0);
    expect(actual).toBe(expected);
  });


});


describe('modulus', () => {
  test('can find the modulo of two small positive numbers', () => {
    expected = 1;
    actual = modulus(7, 3);
    expect(actual).toBe(expected);
  });

  test('can find the modulo of two large positive numbers', () => { 
    expected = 1_000_000;
    actual = modulus(7_000_000, 2_000_000);
    expect(actual).toBe(expected);
    
  });

  describe('modulus', () => {
    test('can find the modulo of a positive and negative numbers', () => {
      expected = -1;
      actual = modulus(-7, 3);
      expect(actual).toBe(expected);
    });
  
    test('can find the modulo of zero and a positive number', () => { 
      expected = 0;
      actual = modulus(0, 7);
      expect(actual).toBe(expected);
      
    });

    test('can find the modulo of zero and a negative number', () => { 
      expected = 0;
      actual = modulus(0, -7);
      expect(actual).toBe(expected);
      
    });

    test('can find the modulo between two negative numbers', () => { 
      expected = -2;
      actual = modulus(-9, -7);
      expect(actual).toBe(expected);
      
    });

    test('can find the modulo between two negative numbers resulting in 0 as the answer', () => { 
      expected = -0;
      actual = modulus(-14, -7);
      expect(actual).toBe(expected);
      
    });
  })
});


describe('even', () => {
  test('can check small positive even numbers', () => {
    expected = true;
    actual = even(8);
    expect(actual).toBe(expected);
  });

  test('can return false for odd numbers', () => { 
    expected = false;
    actual = even(7);
    expect(actual).toBe(expected);
    
  });

  test('can check negative even numbers', () => {
    expected = true;
    actual = even(-200);
    expect(actual).toBe(expected);
  });

  test('can check zero', () => { 
    expected = false;
    actual = even(0);
    expect(actual).toBe(expected);
    
  });

  test('can check negative odd numbers', () => {
    expected = true;
    actual = even(-300);
    expect(actual).toBe(expected);
  });


});

describe('odd', () => {

  test('can check small positive even numbers', () => {
    expected = false;
    actual = odd(8);
    expect(actual).toBe(expected);
  });

  test('can return false for odd numbers', () => { 
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
    
  });

  test('can check negative even numbers', () => {
    expected = false;
    actual = odd(-200);
    expect(actual).toBe(expected);
  });

  
  test('can check zero', () => { 
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
    
  });

  test('can check negative odd numbers', () => {
    expected = true;
    actual = odd(-45);
    expect(actual).toBe(expected);
  });


});
