import * as jspb from 'google-protobuf'

import * as projectsuit_unit_v1_unit_common_v1_pb from '../../../projectsuit/unit/v1/unit_common_v1_pb'; // proto import: "projectsuit/unit/v1/unit_common_v1.proto"


export class GetUnitRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUnitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnitRequest): GetUnitRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnitRequest;
  static deserializeBinaryFromReader(message: GetUnitRequest, reader: jspb.BinaryReader): GetUnitRequest;
}

export namespace GetUnitRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUnitResponse extends jspb.Message {
  getUnit(): projectsuit_unit_v1_unit_common_v1_pb.UnitView | undefined;
  setUnit(value?: projectsuit_unit_v1_unit_common_v1_pb.UnitView): GetUnitResponse;
  hasUnit(): boolean;
  clearUnit(): GetUnitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnitResponse): GetUnitResponse.AsObject;
  static serializeBinaryToWriter(message: GetUnitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnitResponse;
  static deserializeBinaryFromReader(message: GetUnitResponse, reader: jspb.BinaryReader): GetUnitResponse;
}

export namespace GetUnitResponse {
  export type AsObject = {
    unit?: projectsuit_unit_v1_unit_common_v1_pb.UnitView.AsObject,
  }
}

export class ListUnitsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListUnitsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListUnitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnitsRequest): ListUnitsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUnitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnitsRequest;
  static deserializeBinaryFromReader(message: ListUnitsRequest, reader: jspb.BinaryReader): ListUnitsRequest;
}

export namespace ListUnitsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class ListUnitsResponse extends jspb.Message {
  getItemsList(): Array<projectsuit_unit_v1_unit_common_v1_pb.UnitView>;
  setItemsList(value: Array<projectsuit_unit_v1_unit_common_v1_pb.UnitView>): ListUnitsResponse;
  clearItemsList(): ListUnitsResponse;
  addItems(value?: projectsuit_unit_v1_unit_common_v1_pb.UnitView, index?: number): projectsuit_unit_v1_unit_common_v1_pb.UnitView;

  getTotal(): number;
  setTotal(value: number): ListUnitsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnitsResponse): ListUnitsResponse.AsObject;
  static serializeBinaryToWriter(message: ListUnitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnitsResponse;
  static deserializeBinaryFromReader(message: ListUnitsResponse, reader: jspb.BinaryReader): ListUnitsResponse;
}

export namespace ListUnitsResponse {
  export type AsObject = {
    itemsList: Array<projectsuit_unit_v1_unit_common_v1_pb.UnitView.AsObject>,
    total: number,
  }
}

