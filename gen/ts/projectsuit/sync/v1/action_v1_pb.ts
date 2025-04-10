// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file projectsuit/sync/v1/action_v1.proto (package projectsuit.sync.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file projectsuit/sync/v1/action_v1.proto.
 */
export const file_projectsuit_sync_v1_action_v1: GenFile = /*@__PURE__*/
  fileDesc("CiNwcm9qZWN0c3VpdC9zeW5jL3YxL2FjdGlvbl92MS5wcm90bxITcHJvamVjdHN1aXQuc3luYy52MSJzCgpTeW5jQWN0aW9uEgoKAmlkGAEgASgJEgwKBHR5cGUYAiABKAkSJQoHcGF5bG9hZBgDIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSEQoJZGV2aWNlX2lkGAQgASgJEhEKCXRpbWVzdGFtcBgFIAEoA0LbAQoXY29tLnByb2plY3RzdWl0LnN5bmMudjFCDUFjdGlvblYxUHJvdG9QAVpDZ2l0aHViLmNvbS9vcmppbmZpbml0eS9zdWl0LXByb3RvL2dlbi9nby9wcm9qZWN0c3VpdC9zeW5jL3YxO3N5bmN2MaICA1BTWKoCE1Byb2plY3RzdWl0LlN5bmMuVjHKAhNQcm9qZWN0c3VpdFxTeW5jXFYx4gIfUHJvamVjdHN1aXRcU3luY1xWMVxHUEJNZXRhZGF0YeoCFVByb2plY3RzdWl0OjpTeW5jOjpWMWIGcHJvdG8z", [file_google_protobuf_any]);

/**
 * @generated from message projectsuit.sync.v1.SyncAction
 */
export type SyncAction = Message<"projectsuit.sync.v1.SyncAction"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * @generated from field: google.protobuf.Any payload = 3;
   */
  payload?: Any;

  /**
   * @generated from field: string device_id = 4;
   */
  deviceId: string;

  /**
   * @generated from field: int64 timestamp = 5;
   */
  timestamp: bigint;
};

/**
 * Describes the message projectsuit.sync.v1.SyncAction.
 * Use `create(SyncActionSchema)` to create a new message.
 */
export const SyncActionSchema: GenMessage<SyncAction> = /*@__PURE__*/
  messageDesc(file_projectsuit_sync_v1_action_v1, 0);

