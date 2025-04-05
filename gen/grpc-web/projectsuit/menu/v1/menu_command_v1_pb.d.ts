import * as jspb from 'google-protobuf'

import * as projectsuit_menu_v1_menu_common_v1_pb from '../../../projectsuit/menu/v1/menu_common_v1_pb'; // proto import: "projectsuit/menu/v1/menu_common_v1.proto"


export class CreateMenuRequest extends jspb.Message {
  getMenu(): projectsuit_menu_v1_menu_common_v1_pb.MenuInput | undefined;
  setMenu(value?: projectsuit_menu_v1_menu_common_v1_pb.MenuInput): CreateMenuRequest;
  hasMenu(): boolean;
  clearMenu(): CreateMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMenuRequest): CreateMenuRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMenuRequest;
  static deserializeBinaryFromReader(message: CreateMenuRequest, reader: jspb.BinaryReader): CreateMenuRequest;
}

export namespace CreateMenuRequest {
  export type AsObject = {
    menu?: projectsuit_menu_v1_menu_common_v1_pb.MenuInput.AsObject,
  }
}

export class CreateMenuResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMenuResponse): CreateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMenuResponse;
  static deserializeBinaryFromReader(message: CreateMenuResponse, reader: jspb.BinaryReader): CreateMenuResponse;
}

export namespace CreateMenuResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateMenuRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMenuRequest;

  getMenu(): projectsuit_menu_v1_menu_common_v1_pb.MenuInput | undefined;
  setMenu(value?: projectsuit_menu_v1_menu_common_v1_pb.MenuInput): UpdateMenuRequest;
  hasMenu(): boolean;
  clearMenu(): UpdateMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuRequest): UpdateMenuRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuRequest;
  static deserializeBinaryFromReader(message: UpdateMenuRequest, reader: jspb.BinaryReader): UpdateMenuRequest;
}

export namespace UpdateMenuRequest {
  export type AsObject = {
    id: string,
    menu?: projectsuit_menu_v1_menu_common_v1_pb.MenuInput.AsObject,
  }
}

export class UpdateMenuResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMenuResponse): UpdateMenuResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMenuResponse;
  static deserializeBinaryFromReader(message: UpdateMenuResponse, reader: jspb.BinaryReader): UpdateMenuResponse;
}

export namespace UpdateMenuResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteMenuRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMenuRequest): DeleteMenuRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMenuRequest;
  static deserializeBinaryFromReader(message: DeleteMenuRequest, reader: jspb.BinaryReader): DeleteMenuRequest;
}

export namespace DeleteMenuRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteMenuResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMenuResponse): DeleteMenuResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMenuResponse;
  static deserializeBinaryFromReader(message: DeleteMenuResponse, reader: jspb.BinaryReader): DeleteMenuResponse;
}

export namespace DeleteMenuResponse {
  export type AsObject = {
    success: boolean,
  }
}

