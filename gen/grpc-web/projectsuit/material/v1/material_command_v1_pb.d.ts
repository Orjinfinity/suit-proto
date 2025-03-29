import * as jspb from 'google-protobuf'

import * as projectsuit_material_v1_material_common_v1_pb from '../../../projectsuit/material/v1/material_common_v1_pb'; // proto import: "projectsuit/material/v1/material_common_v1.proto"


export class CreateMaterialRequest extends jspb.Message {
  getMaterial(): projectsuit_material_v1_material_common_v1_pb.MaterialInput | undefined;
  setMaterial(value?: projectsuit_material_v1_material_common_v1_pb.MaterialInput): CreateMaterialRequest;
  hasMaterial(): boolean;
  clearMaterial(): CreateMaterialRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMaterialRequest): CreateMaterialRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMaterialRequest;
  static deserializeBinaryFromReader(message: CreateMaterialRequest, reader: jspb.BinaryReader): CreateMaterialRequest;
}

export namespace CreateMaterialRequest {
  export type AsObject = {
    material?: projectsuit_material_v1_material_common_v1_pb.MaterialInput.AsObject,
  }
}

export class CreateMaterialResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateMaterialResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMaterialResponse): CreateMaterialResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMaterialResponse;
  static deserializeBinaryFromReader(message: CreateMaterialResponse, reader: jspb.BinaryReader): CreateMaterialResponse;
}

export namespace CreateMaterialResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateMaterialRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMaterialRequest;

  getMaterial(): projectsuit_material_v1_material_common_v1_pb.MaterialInput | undefined;
  setMaterial(value?: projectsuit_material_v1_material_common_v1_pb.MaterialInput): UpdateMaterialRequest;
  hasMaterial(): boolean;
  clearMaterial(): UpdateMaterialRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMaterialRequest): UpdateMaterialRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMaterialRequest;
  static deserializeBinaryFromReader(message: UpdateMaterialRequest, reader: jspb.BinaryReader): UpdateMaterialRequest;
}

export namespace UpdateMaterialRequest {
  export type AsObject = {
    id: string,
    material?: projectsuit_material_v1_material_common_v1_pb.MaterialInput.AsObject,
  }
}

export class UpdateMaterialResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateMaterialResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMaterialResponse): UpdateMaterialResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMaterialResponse;
  static deserializeBinaryFromReader(message: UpdateMaterialResponse, reader: jspb.BinaryReader): UpdateMaterialResponse;
}

export namespace UpdateMaterialResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteMaterialRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMaterialRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMaterialRequest): DeleteMaterialRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMaterialRequest;
  static deserializeBinaryFromReader(message: DeleteMaterialRequest, reader: jspb.BinaryReader): DeleteMaterialRequest;
}

export namespace DeleteMaterialRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteMaterialResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteMaterialResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMaterialResponse): DeleteMaterialResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMaterialResponse;
  static deserializeBinaryFromReader(message: DeleteMaterialResponse, reader: jspb.BinaryReader): DeleteMaterialResponse;
}

export namespace DeleteMaterialResponse {
  export type AsObject = {
    success: boolean,
  }
}

