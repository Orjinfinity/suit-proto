import * as jspb from 'google-protobuf'

import * as projectsuit_order_v1_order_common_v1_pb from '../../../projectsuit/order/v1/order_common_v1_pb'; // proto import: "projectsuit/order/v1/order_common_v1.proto"


export class CreateOrderRequest extends jspb.Message {
  getOrder(): projectsuit_order_v1_order_common_v1_pb.Order | undefined;
  setOrder(value?: projectsuit_order_v1_order_common_v1_pb.Order): CreateOrderRequest;
  hasOrder(): boolean;
  clearOrder(): CreateOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
  static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
  export type AsObject = {
    order?: projectsuit_order_v1_order_common_v1_pb.Order.AsObject,
  }
}

export class CreateOrderResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
  static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
  export type AsObject = {
    id: string,
  }
}

