//API HELLOMOON EXAMPLE

//IMPORTS
const { RestClient, SolanaTxnsByUserRequest } = require("@hellomoon/api");

//nextjs api function
export default async function handler(req, res) {
  try {
    //create a new client using hello moon api key
    const client = new RestClient(process.env.HELLOMOON_API_KEY);

    //send a request to the api of hellomoon
    //in this case we are gonna get all the transactions of a user account
    //using the public key of the user account
    const response = await client.send(
      new SolanaTxnsByUserRequest({
        userAccount: "YOURPUBLICKEYHERE",
      })
    );

    res.status(200).json({ data: response });
  } catch (error) {
    console.error("ERRRROOOR =>", error.message);
    res.status(500).json({ error: error.message });
  }
}
