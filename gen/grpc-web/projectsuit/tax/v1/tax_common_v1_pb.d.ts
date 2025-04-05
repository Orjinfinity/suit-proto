import * as jspb from 'google-protobuf'



export class TaxRate extends jspb.Message {
  getId(): string;
  setId(value: string): TaxRate;

  getName(): string;
  setName(value: string): TaxRate;

  getPercentage(): number;
  setPercentage(value: number): TaxRate;

  getIsActive(): boolean;
  setIsActive(value: boolean): TaxRate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaxRate.AsObject;
  static toObject(includeInstance: boolean, msg: TaxRate): TaxRate.AsObject;
  static serializeBinaryToWriter(message: TaxRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaxRate;
  static deserializeBinaryFromReader(message: TaxRate, reader: jspb.BinaryReader): TaxRate;
}

export namespace TaxRate {
  export type AsObject = {
    id: string,
    name: string,
    percentage: number,
    isActive: boolean,
  }
}

