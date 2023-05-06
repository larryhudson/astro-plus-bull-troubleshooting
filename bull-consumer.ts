import { Worker } from "bullmq";
import { logToConsole } from "./src/utils/my-util";

const worker = new Worker(
  "my-queue",
  async (job) => {
    logToConsole(job);
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);

worker.on("ready", () => {
  console.log("Worker is ready");
});
