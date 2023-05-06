import { Queue } from "bullmq";

export async function get() {
  const queue = new Queue("my-queue", {
    connection: {
      host: "localhost",
      port: 6379,
    },
  });

  queue.add("my-job", { foo: "bar" });

  return true;
}
