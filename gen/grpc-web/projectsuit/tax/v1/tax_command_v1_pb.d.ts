import * as jspb from 'google-protobuf'

import * as projectsuit_tax_v1_tax_common_v1_pb from '../../../projectsuit/tax/v1/tax_common_v1_pb'; // proto import: "projectsuit/tax/v1/tax_common_v1.proto"


export class CreateTaxRateRequest extends jspb.Message {
  getTax(): projectsuit_tax_v1_tax_common_v1_pb.TaxRate | undefined;
  setTax(value?: projectsuit_tax_v1_tax_common_v1_pb.TaxRate): CreateTaxRateRequest;
  hasTax(): boolean;
  clearTax(): CreateTaxRateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaxRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaxRateRequest): CreateTaxRateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaxRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaxRateRequest;
  static deserializeBinaryFromReader(message: CreateTaxRateRequest, reader: jspb.BinaryReader): CreateTaxRateRequest;
}

export namespace CreateTaxRateRequest {
  export type AsObject = {
    tax?: projectsuit_tax_v1_tax_common_v1_pb.TaxRate.AsObject,
  }
}

export class CreateTaxRateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTaxRateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaxRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaxRateResponse): CreateTaxRateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaxRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaxRateResponse;
  static deserializeBinaryFromReader(message: CreateTaxRateResponse, reader: jspb.BinaryReader): CreateTaxRateResponse;
}

export namespace CreateTaxRateResponse {
  export type AsObject = {
    id: string,
  }
}

