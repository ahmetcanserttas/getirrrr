import LogT from "logt";

const LOG_TAG = "sample tag";
let logger;
if (process.env.NODE_ENV === "production") {
  logger = new LogT("error"); // or logger = new LogT("none");
} else {
  logger = new LogT("silly");
}

// See documentation for `readConsole()` for usage
// uncomment following line if you want to override default console methods
logger.readConsole();

logger.error(LOG_TAG, new Error("example error"));

export default logger;