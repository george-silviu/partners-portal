require("dotenv").config();

const http = require("http");

const app = require("./app");
const { connectToDatabase } = require("./services/postgres");

const PORT = process.env.PORT || 3004;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectToDatabase();

    server.listen(PORT, () => {
      const host =
        server.address().address === "::"
          ? "localhost"
          : server.address().address;
      const port = server.address().port;

      console.log(
        `\x1b[33m Message: API listens for requests at http://${host}:${port} \x1b[0m`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
