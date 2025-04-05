import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_money_v1_pb from '../../../projectsuit/common/v1/money_v1_pb'; // proto import: "projectsuit/common/v1/money_v1.proto"
import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class Material extends jspb.Message {
  getId(): string;
  setId(value: string): Material;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): Material;
  hasName(): boolean;
  clearName(): Material;

  getUnit(): string;
  setUnit(value: string): Material;

  getCost(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setCost(value?: projectsuit_common_v1_money_v1_pb.Money): Material;
  hasCost(): boolean;
  clearCost(): Material;

  getIsActive(): boolean;
  setIsActive(value: boolean): Material;

  getCreatedAt(): number;
  setCreatedAt(value: number): Material;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Material;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Material.AsObject;
  static toObject(includeInstance: boolean, msg: Material): Material.AsObject;
  static serializeBinaryToWriter(message: Material, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Material;
  static deserializeBinaryFromReader(message: Material, reader: jspb.BinaryReader): Material;
}

export namespace Material {
  export type AsObject = {
    id: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    unit: string,
    cost?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class MaterialInput extends jspb.Message {
  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): MaterialInput;
  hasName(): boolean;
  clearName(): MaterialInput;

  getUnit(): string;
  setUnit(value: string): MaterialInput;

  getCost(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setCost(value?: projectsuit_common_v1_money_v1_pb.Money): MaterialInput;
  hasCost(): boolean;
  clearCost(): MaterialInput;

  getIsActive(): boolean;
  setIsActive(value: boolean): MaterialInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterialInput.AsObject;
  static toObject(includeInstance: boolean, msg: MaterialInput): MaterialInput.AsObject;
  static serializeBinaryToWriter(message: MaterialInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterialInput;
  static deserializeBinaryFromReader(message: MaterialInput, reader: jspb.BinaryReader): MaterialInput;
}

export namespace MaterialInput {
  export type AsObject = {
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    unit: string,
    cost?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    isActive: boolean,
  }
}

export class MaterialView extends jspb.Message {
  getId(): string;
  setId(value: string): MaterialView;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): MaterialView;
  hasName(): boolean;
  clearName(): MaterialView;

  getUnit(): string;
  setUnit(value: string): MaterialView;

  getCost(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setCost(value?: projectsuit_common_v1_money_v1_pb.Money): MaterialView;
  hasCost(): boolean;
  clearCost(): MaterialView;

  getIsActive(): boolean;
  setIsActive(value: boolean): MaterialView;

  getCreatedAt(): number;
  setCreatedAt(value: number): MaterialView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MaterialView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterialView.AsObject;
  static toObject(includeInstance: boolean, msg: MaterialView): MaterialView.AsObject;
  static serializeBinaryToWriter(message: MaterialView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterialView;
  static deserializeBinaryFromReader(message: MaterialView, reader: jspb.BinaryReader): MaterialView;
}

export namespace MaterialView {
  export type AsObject = {
    id: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    unit: string,
    cost?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

