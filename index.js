const { userAuth } = require("./firebase");

const newUser = {
  email: "elai@gmail.com",
  name: "Nitai",
  age: 15,
  password: "123456",
};

newUser.height = 1.99;

userAuth(newUser);
