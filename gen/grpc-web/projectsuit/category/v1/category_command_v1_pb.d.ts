import * as jspb from 'google-protobuf'

import * as projectsuit_category_v1_category_common_v1_pb from '../../../projectsuit/category/v1/category_common_v1_pb'; // proto import: "projectsuit/category/v1/category_common_v1.proto"


export class CreateCategoryRequest extends jspb.Message {
  getCategory(): projectsuit_category_v1_category_common_v1_pb.CategoryInput | undefined;
  setCategory(value?: projectsuit_category_v1_category_common_v1_pb.CategoryInput): CreateCategoryRequest;
  hasCategory(): boolean;
  clearCategory(): CreateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
  static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
  export type AsObject = {
    category?: projectsuit_category_v1_category_common_v1_pb.CategoryInput.AsObject,
  }
}

export class CreateCategoryResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
  static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCategoryRequest;

  getCategory(): projectsuit_category_v1_category_common_v1_pb.CategoryInput | undefined;
  setCategory(value?: projectsuit_category_v1_category_common_v1_pb.CategoryInput): UpdateCategoryRequest;
  hasCategory(): boolean;
  clearCategory(): UpdateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryRequest): UpdateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryRequest, reader: jspb.BinaryReader): UpdateCategoryRequest;
}

export namespace UpdateCategoryRequest {
  export type AsObject = {
    id: string,
    category?: projectsuit_category_v1_category_common_v1_pb.CategoryInput.AsObject,
  }
}

export class UpdateCategoryResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryResponse): UpdateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryResponse, reader: jspb.BinaryReader): UpdateCategoryResponse;
}

export namespace UpdateCategoryResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryRequest): DeleteCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryRequest, reader: jspb.BinaryReader): DeleteCategoryRequest;
}

export namespace DeleteCategoryRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCategoryResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryResponse): DeleteCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryResponse;
  static deserializeBinaryFromReader(message: DeleteCategoryResponse, reader: jspb.BinaryReader): DeleteCategoryResponse;
}

export namespace DeleteCategoryResponse {
  export type AsObject = {
    success: boolean,
  }
}

