import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class Unit extends jspb.Message {
  getId(): string;
  setId(value: string): Unit;

  getCode(): string;
  setCode(value: string): Unit;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): Unit;
  hasName(): boolean;
  clearName(): Unit;

  getBaseUnitId(): string;
  setBaseUnitId(value: string): Unit;

  getConversionFactor(): number;
  setConversionFactor(value: number): Unit;

  getIsActive(): boolean;
  setIsActive(value: boolean): Unit;

  getCreatedAt(): number;
  setCreatedAt(value: number): Unit;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Unit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unit.AsObject;
  static toObject(includeInstance: boolean, msg: Unit): Unit.AsObject;
  static serializeBinaryToWriter(message: Unit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unit;
  static deserializeBinaryFromReader(message: Unit, reader: jspb.BinaryReader): Unit;
}

export namespace Unit {
  export type AsObject = {
    id: string,
    code: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    baseUnitId: string,
    conversionFactor: number,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class UnitInput extends jspb.Message {
  getCode(): string;
  setCode(value: string): UnitInput;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): UnitInput;
  hasName(): boolean;
  clearName(): UnitInput;

  getBaseUnitId(): string;
  setBaseUnitId(value: string): UnitInput;

  getConversionFactor(): number;
  setConversionFactor(value: number): UnitInput;

  getIsActive(): boolean;
  setIsActive(value: boolean): UnitInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitInput.AsObject;
  static toObject(includeInstance: boolean, msg: UnitInput): UnitInput.AsObject;
  static serializeBinaryToWriter(message: UnitInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitInput;
  static deserializeBinaryFromReader(message: UnitInput, reader: jspb.BinaryReader): UnitInput;
}

export namespace UnitInput {
  export type AsObject = {
    code: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    baseUnitId: string,
    conversionFactor: number,
    isActive: boolean,
  }
}

export class UnitView extends jspb.Message {
  getId(): string;
  setId(value: string): UnitView;

  getCode(): string;
  setCode(value: string): UnitView;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): UnitView;
  hasName(): boolean;
  clearName(): UnitView;

  getBaseUnitId(): string;
  setBaseUnitId(value: string): UnitView;

  getConversionFactor(): number;
  setConversionFactor(value: number): UnitView;

  getIsActive(): boolean;
  setIsActive(value: boolean): UnitView;

  getCreatedAt(): number;
  setCreatedAt(value: number): UnitView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UnitView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitView.AsObject;
  static toObject(includeInstance: boolean, msg: UnitView): UnitView.AsObject;
  static serializeBinaryToWriter(message: UnitView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitView;
  static deserializeBinaryFromReader(message: UnitView, reader: jspb.BinaryReader): UnitView;
}

export namespace UnitView {
  export type AsObject = {
    id: string,
    code: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    baseUnitId: string,
    conversionFactor: number,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

