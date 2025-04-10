// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file projectsuit/common/v1/money_v1.proto (package projectsuit.common.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file projectsuit/common/v1/money_v1.proto.
 */
export const file_projectsuit_common_v1_money_v1: GenFile = /*@__PURE__*/
  fileDesc("CiRwcm9qZWN0c3VpdC9jb21tb24vdjEvbW9uZXlfdjEucHJvdG8SFXByb2plY3RzdWl0LmNvbW1vbi52MSIpCgVNb25leRIQCghjdXJyZW5jeRgBIAEoCRIOCgZhbW91bnQYAiABKAFC6AEKGWNvbS5wcm9qZWN0c3VpdC5jb21tb24udjFCDE1vbmV5VjFQcm90b1ABWkdnaXRodWIuY29tL29yamluZmluaXR5L3N1aXQtcHJvdG8vZ2VuL2dvL3Byb2plY3RzdWl0L2NvbW1vbi92MTtjb21tb252MaICA1BDWKoCFVByb2plY3RzdWl0LkNvbW1vbi5WMcoCFVByb2plY3RzdWl0XENvbW1vblxWMeICIVByb2plY3RzdWl0XENvbW1vblxWMVxHUEJNZXRhZGF0YeoCF1Byb2plY3RzdWl0OjpDb21tb246OlYxYgZwcm90bzM");

/**
 * @generated from message projectsuit.common.v1.Money
 */
export type Money = Message<"projectsuit.common.v1.Money"> & {
  /**
   * @generated from field: string currency = 1;
   */
  currency: string;

  /**
   * @generated from field: double amount = 2;
   */
  amount: number;
};

/**
 * Describes the message projectsuit.common.v1.Money.
 * Use `create(MoneySchema)` to create a new message.
 */
export const MoneySchema: GenMessage<Money> = /*@__PURE__*/
  messageDesc(file_projectsuit_common_v1_money_v1, 0);

