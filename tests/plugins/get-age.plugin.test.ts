import { getAge } from "./../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin", () => {
  test("getAge() should return teh age of a person", () => {
    const birthdate = "1981-05-14";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge() should return current age", () => {
    const birthdate = "1981-05-14";
    const age = getAge(birthdate);

    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    
    expect(age).toBe(calculateAge);
  });


  test("getAge should return 0 years", () => {
    
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthdate = "1991-10-21";
    const age = getAge(birthdate);

    expect(age).toBe(0);

    // expect(spy).toHaveBeenCalledWith({ a: 1 });

    // console.log({spy})


  });
});
