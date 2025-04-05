import * as jspb from 'google-protobuf'

import * as projectsuit_category_v1_category_common_v1_pb from '../../../projectsuit/category/v1/category_common_v1_pb'; // proto import: "projectsuit/category/v1/category_common_v1.proto"


export class GetCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryRequest): GetCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryRequest;
  static deserializeBinaryFromReader(message: GetCategoryRequest, reader: jspb.BinaryReader): GetCategoryRequest;
}

export namespace GetCategoryRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCategoryResponse extends jspb.Message {
  getCategory(): projectsuit_category_v1_category_common_v1_pb.CategoryView | undefined;
  setCategory(value?: projectsuit_category_v1_category_common_v1_pb.CategoryView): GetCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): GetCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryResponse): GetCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryResponse;
  static deserializeBinaryFromReader(message: GetCategoryResponse, reader: jspb.BinaryReader): GetCategoryResponse;
}

export namespace GetCategoryResponse {
  export type AsObject = {
    category?: projectsuit_category_v1_category_common_v1_pb.CategoryView.AsObject,
  }
}

export class ListCategoriesRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListCategoriesRequest;

  getLimit(): number;
  setLimit(value: number): ListCategoriesRequest;

  getSearch(): string;
  setSearch(value: string): ListCategoriesRequest;

  getParentId(): string;
  setParentId(value: string): ListCategoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesRequest): ListCategoriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCategoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesRequest;
  static deserializeBinaryFromReader(message: ListCategoriesRequest, reader: jspb.BinaryReader): ListCategoriesRequest;
}

export namespace ListCategoriesRequest {
  export type AsObject = {
    page: number,
    limit: number,
    search: string,
    parentId: string,
  }
}

export class ListCategoriesResponse extends jspb.Message {
  getCategoriesList(): Array<projectsuit_category_v1_category_common_v1_pb.CategoryView>;
  setCategoriesList(value: Array<projectsuit_category_v1_category_common_v1_pb.CategoryView>): ListCategoriesResponse;
  clearCategoriesList(): ListCategoriesResponse;
  addCategories(value?: projectsuit_category_v1_category_common_v1_pb.CategoryView, index?: number): projectsuit_category_v1_category_common_v1_pb.CategoryView;

  getTotal(): number;
  setTotal(value: number): ListCategoriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesResponse): ListCategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesResponse;
  static deserializeBinaryFromReader(message: ListCategoriesResponse, reader: jspb.BinaryReader): ListCategoriesResponse;
}

export namespace ListCategoriesResponse {
  export type AsObject = {
    categoriesList: Array<projectsuit_category_v1_category_common_v1_pb.CategoryView.AsObject>,
    total: number,
  }
}

