import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_money_v1_pb from '../../../projectsuit/common/v1/money_v1_pb'; // proto import: "projectsuit/common/v1/money_v1.proto"


export class PricingRule extends jspb.Message {
  getId(): string;
  setId(value: string): PricingRule;

  getProductId(): string;
  setProductId(value: string): PricingRule;

  getRegion(): string;
  setRegion(value: string): PricingRule;

  getDiscountedPrice(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setDiscountedPrice(value?: projectsuit_common_v1_money_v1_pb.Money): PricingRule;
  hasDiscountedPrice(): boolean;
  clearDiscountedPrice(): PricingRule;

  getStartTime(): number;
  setStartTime(value: number): PricingRule;

  getEndTime(): number;
  setEndTime(value: number): PricingRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PricingRule.AsObject;
  static toObject(includeInstance: boolean, msg: PricingRule): PricingRule.AsObject;
  static serializeBinaryToWriter(message: PricingRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PricingRule;
  static deserializeBinaryFromReader(message: PricingRule, reader: jspb.BinaryReader): PricingRule;
}

export namespace PricingRule {
  export type AsObject = {
    id: string,
    productId: string,
    region: string,
    discountedPrice?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    startTime: number,
    endTime: number,
  }
}

