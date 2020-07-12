import { BuilderInterface } from '@pyxismedia/lib-model';

export enum MessageType {
  valid,
  invalid,
  default
}

export class MessageBuilder implements BuilderInterface<Message> {
  private type!: MessageType;
  private value!: string;

  withType(type: MessageType) {
    this.type = type;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  build(): Message {
    return {
      value: this.value,
      type: this.type
    };
  }
}

export interface Message {
  type: MessageType;
  value: string;
}

export type Messages = [string, string, string];

export type Validators = [];
