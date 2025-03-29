import * as jspb from 'google-protobuf'



export class Translation extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): Translation;

  getValue(): string;
  setValue(value: string): Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    language: string,
    value: string,
  }
}

