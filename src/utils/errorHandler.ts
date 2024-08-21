import { BotCtx } from "../types/context";

const errorHandler = (ctx: BotCtx, handler: Function) => {
   try {
      handler(ctx);
   } catch (error) {
      console.log(error);
      ctx.reply(`Sizda xatolik chiqdi \n Xatolik matni: \n ${String(error)}`);
   }
};
export default errorHandler;
