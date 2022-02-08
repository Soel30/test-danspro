const config = {
  name: "My Application",
  port: 3000,
  baseUrl: "http://localhost:3000",
  database: {
    connectionString: "mongodb://localhost:27017/ppobbs",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  authentication: {
    jwtSecret: "my-application-secret",
  },
  email: {
    service: "gmail",
    account: "",
    password: "",
    sender: "",
    senderName: "",
  },
};

export default config;
