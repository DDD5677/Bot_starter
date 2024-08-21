import { BotCtx } from "../../types/context";
import errorHandler from "../../utils/errorHandler";

const fn = (ctx: BotCtx) => {
   ctx.reply("Assalomu alaykum");
};

const startFn = (ctx: BotCtx) => errorHandler(ctx, fn);

export default startFn;
