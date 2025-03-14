const encrypt = require("./script");
const secretKey = "689620b3affd2ae0369c1785b24f6d796b95babe1f1c0729f48e59ede141da55";

const token = encrypt({ userId: 123, name: "Issac" }, secretKey);
console.log("Generated Token:", token);
