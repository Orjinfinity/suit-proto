import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class SyncAction extends jspb.Message {
  getId(): string;
  setId(value: string): SyncAction;

  getType(): string;
  setType(value: string): SyncAction;

  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): SyncAction;
  hasPayload(): boolean;
  clearPayload(): SyncAction;

  getDeviceId(): string;
  setDeviceId(value: string): SyncAction;

  getTimestamp(): number;
  setTimestamp(value: number): SyncAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncAction.AsObject;
  static toObject(includeInstance: boolean, msg: SyncAction): SyncAction.AsObject;
  static serializeBinaryToWriter(message: SyncAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncAction;
  static deserializeBinaryFromReader(message: SyncAction, reader: jspb.BinaryReader): SyncAction;
}

export namespace SyncAction {
  export type AsObject = {
    id: string,
    type: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
    deviceId: string,
    timestamp: number,
  }
}

