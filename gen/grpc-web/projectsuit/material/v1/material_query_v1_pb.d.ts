import * as jspb from 'google-protobuf'

import * as projectsuit_material_v1_material_common_v1_pb from '../../../projectsuit/material/v1/material_common_v1_pb'; // proto import: "projectsuit/material/v1/material_common_v1.proto"


export class GetMaterialRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMaterialRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMaterialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMaterialRequest): GetMaterialRequest.AsObject;
  static serializeBinaryToWriter(message: GetMaterialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMaterialRequest;
  static deserializeBinaryFromReader(message: GetMaterialRequest, reader: jspb.BinaryReader): GetMaterialRequest;
}

export namespace GetMaterialRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMaterialResponse extends jspb.Message {
  getMaterial(): projectsuit_material_v1_material_common_v1_pb.MaterialView | undefined;
  setMaterial(value?: projectsuit_material_v1_material_common_v1_pb.MaterialView): GetMaterialResponse;
  hasMaterial(): boolean;
  clearMaterial(): GetMaterialResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMaterialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMaterialResponse): GetMaterialResponse.AsObject;
  static serializeBinaryToWriter(message: GetMaterialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMaterialResponse;
  static deserializeBinaryFromReader(message: GetMaterialResponse, reader: jspb.BinaryReader): GetMaterialResponse;
}

export namespace GetMaterialResponse {
  export type AsObject = {
    material?: projectsuit_material_v1_material_common_v1_pb.MaterialView.AsObject,
  }
}

export class ListMaterialsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListMaterialsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMaterialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMaterialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMaterialsRequest): ListMaterialsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMaterialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMaterialsRequest;
  static deserializeBinaryFromReader(message: ListMaterialsRequest, reader: jspb.BinaryReader): ListMaterialsRequest;
}

export namespace ListMaterialsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class ListMaterialsResponse extends jspb.Message {
  getItemsList(): Array<projectsuit_material_v1_material_common_v1_pb.MaterialView>;
  setItemsList(value: Array<projectsuit_material_v1_material_common_v1_pb.MaterialView>): ListMaterialsResponse;
  clearItemsList(): ListMaterialsResponse;
  addItems(value?: projectsuit_material_v1_material_common_v1_pb.MaterialView, index?: number): projectsuit_material_v1_material_common_v1_pb.MaterialView;

  getTotal(): number;
  setTotal(value: number): ListMaterialsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMaterialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMaterialsResponse): ListMaterialsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMaterialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMaterialsResponse;
  static deserializeBinaryFromReader(message: ListMaterialsResponse, reader: jspb.BinaryReader): ListMaterialsResponse;
}

export namespace ListMaterialsResponse {
  export type AsObject = {
    itemsList: Array<projectsuit_material_v1_material_common_v1_pb.MaterialView.AsObject>,
    total: number,
  }
}

