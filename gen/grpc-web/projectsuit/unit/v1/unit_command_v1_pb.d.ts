import * as jspb from 'google-protobuf'

import * as projectsuit_unit_v1_unit_common_v1_pb from '../../../projectsuit/unit/v1/unit_common_v1_pb'; // proto import: "projectsuit/unit/v1/unit_common_v1.proto"


export class CreateUnitRequest extends jspb.Message {
  getUnit(): projectsuit_unit_v1_unit_common_v1_pb.UnitInput | undefined;
  setUnit(value?: projectsuit_unit_v1_unit_common_v1_pb.UnitInput): CreateUnitRequest;
  hasUnit(): boolean;
  clearUnit(): CreateUnitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUnitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUnitRequest): CreateUnitRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUnitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUnitRequest;
  static deserializeBinaryFromReader(message: CreateUnitRequest, reader: jspb.BinaryReader): CreateUnitRequest;
}

export namespace CreateUnitRequest {
  export type AsObject = {
    unit?: projectsuit_unit_v1_unit_common_v1_pb.UnitInput.AsObject,
  }
}

export class CreateUnitResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUnitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUnitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUnitResponse): CreateUnitResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUnitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUnitResponse;
  static deserializeBinaryFromReader(message: CreateUnitResponse, reader: jspb.BinaryReader): CreateUnitResponse;
}

export namespace CreateUnitResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateUnitRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUnitRequest;

  getUnit(): projectsuit_unit_v1_unit_common_v1_pb.UnitInput | undefined;
  setUnit(value?: projectsuit_unit_v1_unit_common_v1_pb.UnitInput): UpdateUnitRequest;
  hasUnit(): boolean;
  clearUnit(): UpdateUnitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUnitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUnitRequest): UpdateUnitRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUnitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUnitRequest;
  static deserializeBinaryFromReader(message: UpdateUnitRequest, reader: jspb.BinaryReader): UpdateUnitRequest;
}

export namespace UpdateUnitRequest {
  export type AsObject = {
    id: string,
    unit?: projectsuit_unit_v1_unit_common_v1_pb.UnitInput.AsObject,
  }
}

export class UpdateUnitResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateUnitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUnitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUnitResponse): UpdateUnitResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUnitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUnitResponse;
  static deserializeBinaryFromReader(message: UpdateUnitResponse, reader: jspb.BinaryReader): UpdateUnitResponse;
}

export namespace UpdateUnitResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteUnitRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUnitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUnitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUnitRequest): DeleteUnitRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUnitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUnitRequest;
  static deserializeBinaryFromReader(message: DeleteUnitRequest, reader: jspb.BinaryReader): DeleteUnitRequest;
}

export namespace DeleteUnitRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUnitResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteUnitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUnitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUnitResponse): DeleteUnitResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUnitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUnitResponse;
  static deserializeBinaryFromReader(message: DeleteUnitResponse, reader: jspb.BinaryReader): DeleteUnitResponse;
}

export namespace DeleteUnitResponse {
  export type AsObject = {
    success: boolean,
  }
}

