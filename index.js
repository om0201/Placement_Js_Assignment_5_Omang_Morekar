const add = (num1) => {
  return function curriedAdd(num2) {
    return num1 + num2;
  };
};

const addBy7 = add(7);
addBy7(4);
