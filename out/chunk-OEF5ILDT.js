// src/components/B.js
var logB = () => {
  console.log("from B");
};
var B_default = logB;

// src/components/A.js
var logAandB = () => {
  console.log("from A");
  B_default();
};

export {
  logAandB
};
