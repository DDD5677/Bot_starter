import { Context, Scenes } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram";

// interface sessionData extends Scenes.WizardSession {
//    name: string;
// }

export interface BotCtx extends Context {
   //session: sessionData;
   //scene: Scenes.SceneContextScene<BotCtx, Scenes.WizardSessionData>;
   //wizard: Scenes.WizardContextWizard<BotCtx>;
   //callback_query: CallbackQuery.DataQuery;
   message: Update.New &
      Update.NonChannel &
      Message &
      Message.TextMessage &
      Message.PhotoMessage &
      Message.AudioMessage &
      Message.VoiceMessage &
      Message.VideoMessage;
}
