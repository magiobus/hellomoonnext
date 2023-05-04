// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sdk = require("api")("@hellomoon/v1.0#gvgqwhlgedguwe");

export default async function handler(req, res) {
  sdk.auth(process.env.HELLOMOON_API_KEY); //auth

  try {
    const response = await sdk.post({
      jsonrpc: "2.0",
      id: 1,
      method: "getEpochInfo",
    });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}
