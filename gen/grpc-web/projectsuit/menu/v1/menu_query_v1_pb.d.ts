import * as jspb from 'google-protobuf'

import * as projectsuit_product_v1_product_common_v1_pb from '../../../projectsuit/product/v1/product_common_v1_pb'; // proto import: "projectsuit/product/v1/product_common_v1.proto"
import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class GetMenuRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuRequest): GetMenuRequest.AsObject;
  static serializeBinaryToWriter(message: GetMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuRequest;
  static deserializeBinaryFromReader(message: GetMenuRequest, reader: jspb.BinaryReader): GetMenuRequest;
}

export namespace GetMenuRequest {
  export type AsObject = {
    id: string,
  }
}

export class MenuSectionView extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MenuSectionView;

  getProductsList(): Array<projectsuit_product_v1_product_common_v1_pb.ProductView>;
  setProductsList(value: Array<projectsuit_product_v1_product_common_v1_pb.ProductView>): MenuSectionView;
  clearProductsList(): MenuSectionView;
  addProducts(value?: projectsuit_product_v1_product_common_v1_pb.ProductView, index?: number): projectsuit_product_v1_product_common_v1_pb.ProductView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuSectionView.AsObject;
  static toObject(includeInstance: boolean, msg: MenuSectionView): MenuSectionView.AsObject;
  static serializeBinaryToWriter(message: MenuSectionView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuSectionView;
  static deserializeBinaryFromReader(message: MenuSectionView, reader: jspb.BinaryReader): MenuSectionView;
}

export namespace MenuSectionView {
  export type AsObject = {
    title: string,
    productsList: Array<projectsuit_product_v1_product_common_v1_pb.ProductView.AsObject>,
  }
}

export class MenuView extends jspb.Message {
  getId(): string;
  setId(value: string): MenuView;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): MenuView;
  hasName(): boolean;
  clearName(): MenuView;

  getSectionsList(): Array<MenuSectionView>;
  setSectionsList(value: Array<MenuSectionView>): MenuView;
  clearSectionsList(): MenuView;
  addSections(value?: MenuSectionView, index?: number): MenuSectionView;

  getIsActive(): boolean;
  setIsActive(value: boolean): MenuView;

  getCreatedAt(): number;
  setCreatedAt(value: number): MenuView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MenuView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuView.AsObject;
  static toObject(includeInstance: boolean, msg: MenuView): MenuView.AsObject;
  static serializeBinaryToWriter(message: MenuView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuView;
  static deserializeBinaryFromReader(message: MenuView, reader: jspb.BinaryReader): MenuView;
}

export namespace MenuView {
  export type AsObject = {
    id: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    sectionsList: Array<MenuSectionView.AsObject>,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class GetMenuResponse extends jspb.Message {
  getMenu(): MenuView | undefined;
  setMenu(value?: MenuView): GetMenuResponse;
  hasMenu(): boolean;
  clearMenu(): GetMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuResponse): GetMenuResponse.AsObject;
  static serializeBinaryToWriter(message: GetMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuResponse;
  static deserializeBinaryFromReader(message: GetMenuResponse, reader: jspb.BinaryReader): GetMenuResponse;
}

export namespace GetMenuResponse {
  export type AsObject = {
    menu?: MenuView.AsObject,
  }
}

export class ListMenusRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListMenusRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMenusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMenusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMenusRequest): ListMenusRequest.AsObject;
  static serializeBinaryToWriter(message: ListMenusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMenusRequest;
  static deserializeBinaryFromReader(message: ListMenusRequest, reader: jspb.BinaryReader): ListMenusRequest;
}

export namespace ListMenusRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class ListMenusResponse extends jspb.Message {
  getItemsList(): Array<MenuView>;
  setItemsList(value: Array<MenuView>): ListMenusResponse;
  clearItemsList(): ListMenusResponse;
  addItems(value?: MenuView, index?: number): MenuView;

  getTotal(): number;
  setTotal(value: number): ListMenusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMenusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMenusResponse): ListMenusResponse.AsObject;
  static serializeBinaryToWriter(message: ListMenusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMenusResponse;
  static deserializeBinaryFromReader(message: ListMenusResponse, reader: jspb.BinaryReader): ListMenusResponse;
}

export namespace ListMenusResponse {
  export type AsObject = {
    itemsList: Array<MenuView.AsObject>,
    total: number,
  }
}

