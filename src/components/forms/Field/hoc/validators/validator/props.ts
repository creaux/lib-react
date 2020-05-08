import { Messages } from "../types";
import { Validation } from "./validator";

export interface ValidatorProps {
  validator: [Validation, Validation, Validation];
}

export interface MessagesProps {
  messages: Messages;
}
