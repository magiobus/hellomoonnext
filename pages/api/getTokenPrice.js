//API HELLOMOON EXAMPLE

//IMPORTS
const {
  RestClient,
  SolanaTxnsByUserRequest,
  TokenPriceRequest,
} = require("@hellomoon/api");

//nextjs api function
export default async function handler(req, res) {
  //haga su codigo aqui....
  const client = new RestClient(process.env.HELLOMOON_API_KEY);

  const response = await client.send(
    new TokenPriceRequest({
      mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    })
  );
  res.status(200).json(response);
}
