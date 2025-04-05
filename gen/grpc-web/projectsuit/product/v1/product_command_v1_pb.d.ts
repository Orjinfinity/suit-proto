import * as jspb from 'google-protobuf'

import * as projectsuit_product_v1_product_common_v1_pb from '../../../projectsuit/product/v1/product_common_v1_pb'; // proto import: "projectsuit/product/v1/product_common_v1.proto"


export class CreateProductRequest extends jspb.Message {
  getProduct(): projectsuit_product_v1_product_common_v1_pb.ProductInput | undefined;
  setProduct(value?: projectsuit_product_v1_product_common_v1_pb.ProductInput): CreateProductRequest;
  hasProduct(): boolean;
  clearProduct(): CreateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
  static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
  export type AsObject = {
    product?: projectsuit_product_v1_product_common_v1_pb.ProductInput.AsObject,
  }
}

export class CreateProductResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductResponse): CreateProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductResponse;
  static deserializeBinaryFromReader(message: CreateProductResponse, reader: jspb.BinaryReader): CreateProductResponse;
}

export namespace CreateProductResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProductRequest;

  getProduct(): projectsuit_product_v1_product_common_v1_pb.ProductInput | undefined;
  setProduct(value?: projectsuit_product_v1_product_common_v1_pb.ProductInput): UpdateProductRequest;
  hasProduct(): boolean;
  clearProduct(): UpdateProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
  static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
  export type AsObject = {
    id: string,
    product?: projectsuit_product_v1_product_common_v1_pb.ProductInput.AsObject,
  }
}

export class UpdateProductResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductResponse): UpdateProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductResponse;
  static deserializeBinaryFromReader(message: UpdateProductResponse, reader: jspb.BinaryReader): UpdateProductResponse;
}

export namespace UpdateProductResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
  static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteProductResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductResponse): DeleteProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductResponse;
  static deserializeBinaryFromReader(message: DeleteProductResponse, reader: jspb.BinaryReader): DeleteProductResponse;
}

export namespace DeleteProductResponse {
  export type AsObject = {
    success: boolean,
  }
}

