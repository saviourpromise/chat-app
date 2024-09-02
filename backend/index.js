const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      {
        headers: { "private-key": "b90f979b-95ef-4b3a-a337-105a495fcf9d" },
        timeout: 10000
      }
    );
    
    return res.status(response.status).json(response.data);
  } catch (e) {
    if (e.response) {
      // Server responded with a status other than 2xx
      return res.status(e.response.status).json(e.response.data);
    } else if (e.request) {
      // No response was received
      return res.status(500).json({ message: "No response from server" });
    } else {
      // Something else went wrong
      return res.status(500).json({ message: e.message });
    }
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
