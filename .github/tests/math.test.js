function add(a, b) {
    return a + b;
  }
  
  // Simple test
  if (add(2, 3) !== 5) {
    throw new Error('Test failed: 2 + 3 should be 5');
  } else {
    console.log('✅ Test passed!');
  }
  