import { Context, Telegraf } from "telegraf";
import dotenv from "dotenv";
import { BotCtx } from "./types/context";
import startFn from "./controllers/commands/start";
dotenv.config();

const TOKEN = process.env.BOT_TOKEN || "";

const bot = new Telegraf(TOKEN);

bot.start((ctx: Context) => startFn(ctx as BotCtx));

bot.launch({ dropPendingUpdates: true });
