const { userAuth } = require("./firebase");

const newUser = {
  email: "elai@gmail.com",
  firstName: "Nitai",
  lastName: "Zuberman", 
  age: 15,
  password: "123456",
};

newUser.height = 1.99;

userAuth(newUser);



