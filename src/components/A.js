import logB from "./B";

const logAandB = () => {
  console.log("from A");
  logB();
};

const unusedFunction = () => {
  console.log("unused function");
};

const render = (content) => {
  console.log("from component A");
  document.querySelector('main').textContent = content
}

export { logAandB, unusedFunction, render };
