# Troubleshooting Astro + Bull

What I'm trying to do:

- Run simple Astro app using the [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) adapter
- Use the `bullmq` library to create a queue and add a job to it
- Run the queue worker (`bull-consumer.ts`) in a separate process, alongside serving the Astro app

Where I'm getting stuck:

- I'm not sure how to compile and run the `bull-consumer.ts` file. I've tried using `ts-node` and `tsc` but I'm having trouble with ES modules error messages.
