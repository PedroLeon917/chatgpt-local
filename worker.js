// *** Ejemplo uso del Web Worker
// onmessage = msg => {
//   console.log("Worker: Message received from Main Thread")
//   console.log(msg)
//   if (msg.data.name === 'Leon') {
//     console.log("Worker: Message send to Main Thread")
//     postMessage({
//       name: `Wellcome Back ${msg.data.name}`,
//       token: 'jdjdhkjs889dkkd7dj5jd7ekfd'
//     })
//   }
// }

// Web Worker usando la lib web-llm para uso del LLM
import { WebWorkerMLCEngineHandler } from "https://esm.run/@mlc-ai/web-llm";

// Hookup an engine to a worker handler
const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => {
  handler.onmessage(msg);
};