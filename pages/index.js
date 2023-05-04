import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const [tokenPrice, setTokenPrice] = useState(0);

  //connects to rpc node using nextjs api
  const conectRpc = async () => {
    const { data } = await axios.get("/api/connectrpc");
    console.log(data.data.result);
  };

  const transactionsByUser = async () => {
    const { data } = await axios.post("/api/transactionsbyuser");
    console.log(data);
  };

  const getTokenPrice = async () => {
    const { data } = await axios.post("/api/getTokenPrice");
    console.log(data);

    setTokenPrice(data.data[0].price);
  };

  return (
    <div className="container flex flex-col items-center justify-center my-4 space-y-4">
      <button
        className="bg-red-400 px-2 py-1 rounded-md"
        onClick={() => conectRpc()}
      >
        Conectar RPC
      </button>
      <button
        className="bg-red-400 px-2 py-1 rounded-md"
        onClick={() => transactionsByUser()}
      >
        Transactions By User
      </button>
      <div>
        <button
          className="bg-red-400 px-2 py-1 rounded-md"
          onClick={() => getTokenPrice()}
        >
          Get token price
        </button>
        <p className="text-center font-semibold">{tokenPrice}</p>
      </div>
    </div>
  );
};

export default HomePage;
