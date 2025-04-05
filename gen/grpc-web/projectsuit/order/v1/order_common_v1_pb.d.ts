import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_money_v1_pb from '../../../projectsuit/common/v1/money_v1_pb'; // proto import: "projectsuit/common/v1/money_v1.proto"


export class OrderItem extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): OrderItem;

  getQuantity(): number;
  setQuantity(value: number): OrderItem;

  getUnitPrice(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setUnitPrice(value?: projectsuit_common_v1_money_v1_pb.Money): OrderItem;
  hasUnitPrice(): boolean;
  clearUnitPrice(): OrderItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderItem): OrderItem.AsObject;
  static serializeBinaryToWriter(message: OrderItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderItem;
  static deserializeBinaryFromReader(message: OrderItem, reader: jspb.BinaryReader): OrderItem;
}

export namespace OrderItem {
  export type AsObject = {
    productId: string,
    quantity: number,
    unitPrice?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
  }
}

export class Order extends jspb.Message {
  getId(): string;
  setId(value: string): Order;

  getCustomerId(): string;
  setCustomerId(value: string): Order;

  getTableId(): string;
  setTableId(value: string): Order;

  getItemsList(): Array<OrderItem>;
  setItemsList(value: Array<OrderItem>): Order;
  clearItemsList(): Order;
  addItems(value?: OrderItem, index?: number): OrderItem;

  getTotal(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setTotal(value?: projectsuit_common_v1_money_v1_pb.Money): Order;
  hasTotal(): boolean;
  clearTotal(): Order;

  getStatus(): string;
  setStatus(value: string): Order;

  getCreatedAt(): number;
  setCreatedAt(value: number): Order;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string,
    customerId: string,
    tableId: string,
    itemsList: Array<OrderItem.AsObject>,
    total?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    status: string,
    createdAt: number,
    updatedAt: number,
  }
}

