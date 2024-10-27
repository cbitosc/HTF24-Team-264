import express from "express";
import Translate from "./translate";
import SendMessage from "./message";
import { measure } from "react-native-reanimated";

const app = express();
const port = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/chat", async (req, res) => {
  const translated_text = await Translate(req.body);

  if (translated_text) {
    const message = SendMessage(translated_text, req.body);
    res.send(message);
    res.status(200);
  } else {
    res.status(500);
  }
});

app.post("/translate", async (req, res) => {
  const translated_text = await Translate(req.body);
  res.send(translated_text);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
