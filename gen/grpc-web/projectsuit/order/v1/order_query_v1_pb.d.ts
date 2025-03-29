import * as jspb from 'google-protobuf'

import * as projectsuit_order_v1_order_common_v1_pb from '../../../projectsuit/order/v1/order_common_v1_pb'; // proto import: "projectsuit/order/v1/order_common_v1.proto"


export class GetOrderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderRequest): GetOrderRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderRequest;
  static deserializeBinaryFromReader(message: GetOrderRequest, reader: jspb.BinaryReader): GetOrderRequest;
}

export namespace GetOrderRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetOrderResponse extends jspb.Message {
  getOrder(): projectsuit_order_v1_order_common_v1_pb.Order | undefined;
  setOrder(value?: projectsuit_order_v1_order_common_v1_pb.Order): GetOrderResponse;
  hasOrder(): boolean;
  clearOrder(): GetOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderResponse): GetOrderResponse.AsObject;
  static serializeBinaryToWriter(message: GetOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderResponse;
  static deserializeBinaryFromReader(message: GetOrderResponse, reader: jspb.BinaryReader): GetOrderResponse;
}

export namespace GetOrderResponse {
  export type AsObject = {
    order?: projectsuit_order_v1_order_common_v1_pb.Order.AsObject,
  }
}

