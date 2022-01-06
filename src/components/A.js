import logB from "./B";

const logAandB = () => {
  console.log("from A");
  logB();
};

const unusedFunction = () => {
  console.log("unused function");
};

export { logAandB, unusedFunction };
