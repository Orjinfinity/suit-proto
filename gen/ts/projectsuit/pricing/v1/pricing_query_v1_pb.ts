// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file projectsuit/pricing/v1/pricing_query_v1.proto (package projectsuit.pricing.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PricingRule } from "./pricing_common_v1_pb";
import { file_projectsuit_pricing_v1_pricing_common_v1 } from "./pricing_common_v1_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file projectsuit/pricing/v1/pricing_query_v1.proto.
 */
export const file_projectsuit_pricing_v1_pricing_query_v1: GenFile = /*@__PURE__*/
  fileDesc("Ci1wcm9qZWN0c3VpdC9wcmljaW5nL3YxL3ByaWNpbmdfcXVlcnlfdjEucHJvdG8SFnByb2plY3RzdWl0LnByaWNpbmcudjEiIwoVR2V0UHJpY2luZ1J1bGVSZXF1ZXN0EgoKAmlkGAEgASgJIksKFkdldFByaWNpbmdSdWxlUmVzcG9uc2USMQoEcnVsZRgBIAEoCzIjLnByb2plY3RzdWl0LnByaWNpbmcudjEuUHJpY2luZ1J1bGUyhgEKE1ByaWNpbmdRdWVyeVNlcnZpY2USbwoOR2V0UHJpY2luZ1J1bGUSLS5wcm9qZWN0c3VpdC5wcmljaW5nLnYxLkdldFByaWNpbmdSdWxlUmVxdWVzdBouLnByb2plY3RzdWl0LnByaWNpbmcudjEuR2V0UHJpY2luZ1J1bGVSZXNwb25zZUL2AQoaY29tLnByb2plY3RzdWl0LnByaWNpbmcudjFCE1ByaWNpbmdRdWVyeVYxUHJvdG9QAVpJZ2l0aHViLmNvbS9vcmppbmZpbml0eS9zdWl0LXByb3RvL2dlbi9nby9wcm9qZWN0c3VpdC9wcmljaW5nL3YxO3ByaWNpbmd2MaICA1BQWKoCFlByb2plY3RzdWl0LlByaWNpbmcuVjHKAhZQcm9qZWN0c3VpdFxQcmljaW5nXFYx4gIiUHJvamVjdHN1aXRcUHJpY2luZ1xWMVxHUEJNZXRhZGF0YeoCGFByb2plY3RzdWl0OjpQcmljaW5nOjpWMWIGcHJvdG8z", [file_projectsuit_pricing_v1_pricing_common_v1]);

/**
 * @generated from message projectsuit.pricing.v1.GetPricingRuleRequest
 */
export type GetPricingRuleRequest = Message<"projectsuit.pricing.v1.GetPricingRuleRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message projectsuit.pricing.v1.GetPricingRuleRequest.
 * Use `create(GetPricingRuleRequestSchema)` to create a new message.
 */
export const GetPricingRuleRequestSchema: GenMessage<GetPricingRuleRequest> = /*@__PURE__*/
  messageDesc(file_projectsuit_pricing_v1_pricing_query_v1, 0);

/**
 * @generated from message projectsuit.pricing.v1.GetPricingRuleResponse
 */
export type GetPricingRuleResponse = Message<"projectsuit.pricing.v1.GetPricingRuleResponse"> & {
  /**
   * @generated from field: projectsuit.pricing.v1.PricingRule rule = 1;
   */
  rule?: PricingRule;
};

/**
 * Describes the message projectsuit.pricing.v1.GetPricingRuleResponse.
 * Use `create(GetPricingRuleResponseSchema)` to create a new message.
 */
export const GetPricingRuleResponseSchema: GenMessage<GetPricingRuleResponse> = /*@__PURE__*/
  messageDesc(file_projectsuit_pricing_v1_pricing_query_v1, 1);

/**
 * @generated from service projectsuit.pricing.v1.PricingQueryService
 */
export const PricingQueryService: GenService<{
  /**
   * @generated from rpc projectsuit.pricing.v1.PricingQueryService.GetPricingRule
   */
  getPricingRule: {
    methodKind: "unary";
    input: typeof GetPricingRuleRequestSchema;
    output: typeof GetPricingRuleResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_projectsuit_pricing_v1_pricing_query_v1, 0);

