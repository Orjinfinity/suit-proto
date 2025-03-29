import * as jspb from 'google-protobuf'

import * as projectsuit_pricing_v1_pricing_common_v1_pb from '../../../projectsuit/pricing/v1/pricing_common_v1_pb'; // proto import: "projectsuit/pricing/v1/pricing_common_v1.proto"


export class GetPricingRuleRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetPricingRuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPricingRuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPricingRuleRequest): GetPricingRuleRequest.AsObject;
  static serializeBinaryToWriter(message: GetPricingRuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPricingRuleRequest;
  static deserializeBinaryFromReader(message: GetPricingRuleRequest, reader: jspb.BinaryReader): GetPricingRuleRequest;
}

export namespace GetPricingRuleRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetPricingRuleResponse extends jspb.Message {
  getRule(): projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule | undefined;
  setRule(value?: projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule): GetPricingRuleResponse;
  hasRule(): boolean;
  clearRule(): GetPricingRuleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPricingRuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPricingRuleResponse): GetPricingRuleResponse.AsObject;
  static serializeBinaryToWriter(message: GetPricingRuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPricingRuleResponse;
  static deserializeBinaryFromReader(message: GetPricingRuleResponse, reader: jspb.BinaryReader): GetPricingRuleResponse;
}

export namespace GetPricingRuleResponse {
  export type AsObject = {
    rule?: projectsuit_pricing_v1_pricing_common_v1_pb.PricingRule.AsObject,
  }
}

