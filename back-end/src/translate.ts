import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";

const Translate = async ({
  message,
  source,
  destination,
}: {
  message: string;
  source: string;
  destination: string;
}) => {
  console.log(`Translating ${message} from ${source} to ${destination}...`);

  if (!process.env.ACCESS_KEY_ID || !process.env.SECRET_ACCESS_KEY) {
    throw new Error("AWS credentials are not defined");
  }

  const config = {
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID as string,
      secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
    },
  };
  const client = new TranslateClient(config);
  const input = {
    // TranslateTextRequest
    Text: message, // required
    SourceLanguageCode: source, // required
    TargetLanguageCode: destination, // required
  };
  const command = new TranslateTextCommand(input);
  const response = await client.send(command);
  console.log(response);
  return response.TranslatedText;
};

export default Translate;
