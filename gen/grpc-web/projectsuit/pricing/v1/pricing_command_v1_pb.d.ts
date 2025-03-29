import * as jspb from 'google-protobuf'

import * as projectsuit_pricing_v1_pricing_common_v1_pb from '../../../projectsuit/pricing/v1/pricing_common_v1_pb'; // proto import: "projectsuit/pricing/v1/pricing_common_v1.proto"


export class CreatePricingRuleRequest extends jspb.Message {
  getRule(): projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule | undefined;
  setRule(value?: projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule): CreatePricingRuleRequest;
  hasRule(): boolean;
  clearRule(): CreatePricingRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePricingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePricingRuleRequest): CreatePricingRuleRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePricingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePricingRuleRequest;
  static deserializeBinaryFromReader(message: CreatePricingRuleRequest, reader: jspb.BinaryReader): CreatePricingRuleRequest;
}

export namespace CreatePricingRuleRequest {
  export type AsObject = {
    rule?: projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule.AsObject,
  }
}

export class CreatePricingRuleResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreatePricingRuleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePricingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePricingRuleResponse): CreatePricingRuleResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePricingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePricingRuleResponse;
  static deserializeBinaryFromReader(message: CreatePricingRuleResponse, reader: jspb.BinaryReader): CreatePricingRuleResponse;
}

export namespace CreatePricingRuleResponse {
  export type AsObject = {
    id: string,
  }
}

