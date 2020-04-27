import express from "express";
import createUser from "./services/CreateUser";
const app = express();

app.get("/", (request, response) => {
  const user = createUser({
    email: "crisman@hotmail.com",
    password: "123456",
    techs: [
      "NodeJs",
      "ReactJs",
      "React",
      {
        title: "JavaScript",
        experience: 100,
      },
    ],
  });

  return response.json({ message: "Hello World!" });
});

app.listen(3333);
