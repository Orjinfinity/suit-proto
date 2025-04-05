import * as jspb from 'google-protobuf'

import * as projectsuit_tax_v1_tax_common_v1_pb from '../../../projectsuit/tax/v1/tax_common_v1_pb'; // proto import: "projectsuit/tax/v1/tax_common_v1.proto"


export class GetTaxRateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTaxRateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaxRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaxRateRequest): GetTaxRateRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaxRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaxRateRequest;
  static deserializeBinaryFromReader(message: GetTaxRateRequest, reader: jspb.BinaryReader): GetTaxRateRequest;
}

export namespace GetTaxRateRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTaxRateResponse extends jspb.Message {
  getTax(): projectsuit_tax_v1_tax_common_v1_pb.TaxRate | undefined;
  setTax(value?: projectsuit_tax_v1_tax_common_v1_pb.TaxRate): GetTaxRateResponse;
  hasTax(): boolean;
  clearTax(): GetTaxRateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaxRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaxRateResponse): GetTaxRateResponse.AsObject;
  static serializeBinaryToWriter(message: GetTaxRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaxRateResponse;
  static deserializeBinaryFromReader(message: GetTaxRateResponse, reader: jspb.BinaryReader): GetTaxRateResponse;
}

export namespace GetTaxRateResponse {
  export type AsObject = {
    tax?: projectsuit_tax_v1_tax_common_v1_pb.TaxRate.AsObject,
  }
}

