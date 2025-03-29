import * as jspb from 'google-protobuf'

import * as projectsuit_product_v1_product_common_v1_pb from '../../../projectsuit/product/v1/product_common_v1_pb'; // proto import: "projectsuit/product/v1/product_common_v1.proto"


export class GetProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductRequest;
  static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetProductResponse extends jspb.Message {
  getProduct(): projectsuit_product_v1_product_common_v1_pb.ProductView | undefined;
  setProduct(value?: projectsuit_product_v1_product_common_v1_pb.ProductView): GetProductResponse;
  hasProduct(): boolean;
  clearProduct(): GetProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductResponse): GetProductResponse.AsObject;
  static serializeBinaryToWriter(message: GetProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductResponse;
  static deserializeBinaryFromReader(message: GetProductResponse, reader: jspb.BinaryReader): GetProductResponse;
}

export namespace GetProductResponse {
  export type AsObject = {
    product?: projectsuit_product_v1_product_common_v1_pb.ProductView.AsObject,
  }
}

export class ListProductsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListProductsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsRequest): ListProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsRequest;
  static deserializeBinaryFromReader(message: ListProductsRequest, reader: jspb.BinaryReader): ListProductsRequest;
}

export namespace ListProductsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class ListProductsResponse extends jspb.Message {
  getItemsList(): Array<projectsuit_product_v1_product_common_v1_pb.ProductView>;
  setItemsList(value: Array<projectsuit_product_v1_product_common_v1_pb.ProductView>): ListProductsResponse;
  clearItemsList(): ListProductsResponse;
  addItems(value?: projectsuit_product_v1_product_common_v1_pb.ProductView, index?: number): projectsuit_product_v1_product_common_v1_pb.ProductView;

  getTotal(): number;
  setTotal(value: number): ListProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsResponse): ListProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsResponse;
  static deserializeBinaryFromReader(message: ListProductsResponse, reader: jspb.BinaryReader): ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    itemsList: Array<projectsuit_product_v1_product_common_v1_pb.ProductView.AsObject>,
    total: number,
  }
}

export class SearchProductsRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchProductsRequest;

  getPage(): number;
  setPage(value: number): SearchProductsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProductsRequest): SearchProductsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProductsRequest;
  static deserializeBinaryFromReader(message: SearchProductsRequest, reader: jspb.BinaryReader): SearchProductsRequest;
}

export namespace SearchProductsRequest {
  export type AsObject = {
    keyword: string,
    page: number,
    pageSize: number,
  }
}

export class SearchProductsResponse extends jspb.Message {
  getItemsList(): Array<projectsuit_product_v1_product_common_v1_pb.ProductView>;
  setItemsList(value: Array<projectsuit_product_v1_product_common_v1_pb.ProductView>): SearchProductsResponse;
  clearItemsList(): SearchProductsResponse;
  addItems(value?: projectsuit_product_v1_product_common_v1_pb.ProductView, index?: number): projectsuit_product_v1_product_common_v1_pb.ProductView;

  getTotal(): number;
  setTotal(value: number): SearchProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProductsResponse): SearchProductsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProductsResponse;
  static deserializeBinaryFromReader(message: SearchProductsResponse, reader: jspb.BinaryReader): SearchProductsResponse;
}

export namespace SearchProductsResponse {
  export type AsObject = {
    itemsList: Array<projectsuit_product_v1_product_common_v1_pb.ProductView.AsObject>,
    total: number,
  }
}

