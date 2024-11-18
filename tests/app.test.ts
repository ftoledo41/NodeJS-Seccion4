
describe("Test in the App File", () => {
  
  test('should be 30', () => {
    
    // 1.Arrange
    const num1:number = 10;
    const num2:number = 20;

    // 2. ACT
    const result:number = num1 + num2;

    // 3.Accert
    expect(result).toBe(30);
  })

})