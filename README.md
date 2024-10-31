> [<img src="https://img.shields.io/badge/Telegram-%40Me-orange">](https://t.me/roddyfred)

# Use Node.Js 18 or greater

## Functionality

| Functional                                                    | Supported |
| ------------------------------------------------------------- | :-------: |
| Auto creating wallet and linking                              |    ✅     |
| Auto completing quests                                        |    ✅     |
| Multithreading                                                |    ✅     |
| Binding a proxy to a session                                  |    ✅     |
| Auto-purchase of items if you have coins (multitap, attempts) |    ✅     |
| Binding a proxy to a session/query_id                         |    ✅     |
| Random sleep time between clicks                              |    ✅     |

## [How to add query id](https://github.com/Freddywhest/RockyRabbitBot/blob/main/AddQueryId.md)

## [Settings](https://github.com/FreddyWhest/PawsBot/blob/main/.env-example)

| Settings                           | Description                                                                |
| ---------------------------------- | -------------------------------------------------------------------------- |
| **API_ID / API_HASH**              | Platform data from which to launch a Telegram session (stock - Android)    |
| **WORD_PHRASE_LENGTH**             | The length of key phrase to generate for thr wallet (12 or 24)             |
| **AUTO_CREATE_AND_CONNECT_WALLET** | Whether the bot should auto create and connect wallet (True / False)       |
| **REFERRAL_CODE**                  | Referral code to use                                                       |
| **AUTO_COMPLETE_QUESTS**           | Whether the bot should complete quests (True / False)                      |
| **DELAY_BETWEEN_QUEST**            | Delay between quests in seconds (eg. [20, 30])                             |
| **DELAY_BETWEEN_STARTING_BOT**     | Delay between starting in seconds (eg. [20, 30])                           |
| **USE_PROXY_FROM_JS_FILE**         | Whether to use proxy from the `bot/config/proxies.js` file (True / False)  |
| **USE_PROXY_FROM_TXT_FILE**        | Whether to use proxy from the `bot/config/proxies.txt` file (True / False) |

### More configurations [Click Here](/README-UPDATE.md)

## Installation

You can download [**Repository**](https://github.com/FreddyWhest/PawsBot) by cloning it to your system and installing the necessary dependencies:

```shell
~ >>> git clone https://github.com/FreddyWhest/PawsBot.git
~ >>> cd PawsBot

#Linux and MocOS
~/PawsBot >>> chmod +x check_node.sh
~/PawsBot >>> ./check_node.sh

OR

~/PawsBot >>> npm install
~/PawsBot >>> cp .env-example .env
~/PawsBot >>> nano .env # Here you must specify your API_ID and API_HASH , the rest is taken by default
~/PawsBot >>> node index.js

#Windows
1. Double click on INSTALL.bat in PawsBot directory to install the dependencies
2. Double click on START.bat in PawsBot directory to start the bot

OR

~/PawsBot >>> npm install
~/PawsBot >>> cp .env-example .env
~/PawsBot >>> # Specify your API_ID and API_HASH, the rest is taken by default
~/PawsBot >>> node index.js
```

Also for quick launch you can use arguments, for example:

```shell
~/PawsBot >>> node index.js --action=1

OR

~/PawsBot >>> node index.js --action=2

#1 - Create session
#2 - Run clicker
```
