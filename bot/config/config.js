const _isArray = require("../utils/_isArray");

require("dotenv").config();
let code = [];
if (!process.env.REFERRAL_CODE) {
  code = ["UL3P8qnd"];
} else {
  code = process.env.REFERRAL_CODE.split(",");
}
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  MAX_CONCURRENT_ACCOUNT:
    process.env.MAX_CONCURRENT_ACCOUNT &&
    /^\d+$/.test(process.env.MAX_CONCURRENT_ACCOUNT)
      ? parseInt(process.env.MAX_CONCURRENT_ACCOUNT)
      : 2,

  DELAY_BETWEEN_STARTING_BOT:
    process.env.DELAY_BETWEEN_STARTING_BOT &&
    _isArray(process.env.DELAY_BETWEEN_STARTING_BOT)
      ? JSON.parse(process.env.DELAY_BETWEEN_STARTING_BOT)
      : [15, 20],

  DELAY_BETWEEN_QUEST:
    process.env.DELAY_BETWEEN_QUEST && _isArray(process.env.DELAY_BETWEEN_QUEST)
      ? JSON.parse(process.env.DELAY_BETWEEN_QUEST)
      : [5, 10],

  USE_PROXY_FROM_TXT_FILE: process.env.USE_PROXY_FROM_TXT_FILE
    ? process.env.USE_PROXY_FROM_TXT_FILE.toLowerCase() === "true"
    : false,

  USE_PROXY_FROM_JS_FILE: process.env.USE_PROXY_FROM_JS_FILE
    ? process.env.USE_PROXY_FROM_JS_FILE.toLowerCase() === "true"
    : false,

  AUTO_CREATE_AND_CONNECT_WALLET: process.env.AUTO_CREATE_AND_CONNECT_WALLET
    ? process.env.AUTO_CREATE_AND_CONNECT_WALLET.toLowerCase() === "true"
    : true,

  AUTO_COMPLETE_QUESTS: process.env.AUTO_COMPLETE_QUESTS
    ? process.env.AUTO_COMPLETE_QUESTS.toLowerCase() === "true"
    : true,

  REFERRAL_CODE: code,

  CAN_CREATE_SESSION: false,
};

module.exports = settings;
