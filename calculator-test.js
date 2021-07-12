
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 20, rate: 3})).toEqual('55.46')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 20, rate: 3.107})).toEqual('56.00')
});

