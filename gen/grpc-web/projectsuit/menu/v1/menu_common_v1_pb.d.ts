import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class MenuSection extends jspb.Message {
  getId(): string;
  setId(value: string): MenuSection;

  getTitle(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setTitle(value?: projectsuit_common_v1_translation_v1_pb.Translation): MenuSection;
  hasTitle(): boolean;
  clearTitle(): MenuSection;

  getProductIdsList(): Array<string>;
  setProductIdsList(value: Array<string>): MenuSection;
  clearProductIdsList(): MenuSection;
  addProductIds(value: string, index?: number): MenuSection;

  getSortOrder(): number;
  setSortOrder(value: number): MenuSection;

  getIsActive(): boolean;
  setIsActive(value: boolean): MenuSection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuSection.AsObject;
  static toObject(includeInstance: boolean, msg: MenuSection): MenuSection.AsObject;
  static serializeBinaryToWriter(message: MenuSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuSection;
  static deserializeBinaryFromReader(message: MenuSection, reader: jspb.BinaryReader): MenuSection;
}

export namespace MenuSection {
  export type AsObject = {
    id: string,
    title?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    productIdsList: Array<string>,
    sortOrder: number,
    isActive: boolean,
  }
}

export class Menu extends jspb.Message {
  getId(): string;
  setId(value: string): Menu;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): Menu;
  hasName(): boolean;
  clearName(): Menu;

  getSectionsList(): Array<MenuSection>;
  setSectionsList(value: Array<MenuSection>): Menu;
  clearSectionsList(): Menu;
  addSections(value?: MenuSection, index?: number): MenuSection;

  getIsActive(): boolean;
  setIsActive(value: boolean): Menu;

  getCreatedAt(): number;
  setCreatedAt(value: number): Menu;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Menu;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Menu.AsObject;
  static toObject(includeInstance: boolean, msg: Menu): Menu.AsObject;
  static serializeBinaryToWriter(message: Menu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Menu;
  static deserializeBinaryFromReader(message: Menu, reader: jspb.BinaryReader): Menu;
}

export namespace Menu {
  export type AsObject = {
    id: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    sectionsList: Array<MenuSection.AsObject>,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class MenuInput extends jspb.Message {
  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): MenuInput;
  hasName(): boolean;
  clearName(): MenuInput;

  getSectionsList(): Array<MenuSection>;
  setSectionsList(value: Array<MenuSection>): MenuInput;
  clearSectionsList(): MenuInput;
  addSections(value?: MenuSection, index?: number): MenuSection;

  getIsActive(): boolean;
  setIsActive(value: boolean): MenuInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuInput.AsObject;
  static toObject(includeInstance: boolean, msg: MenuInput): MenuInput.AsObject;
  static serializeBinaryToWriter(message: MenuInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuInput;
  static deserializeBinaryFromReader(message: MenuInput, reader: jspb.BinaryReader): MenuInput;
}

export namespace MenuInput {
  export type AsObject = {
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    sectionsList: Array<MenuSection.AsObject>,
    isActive: boolean,
  }
}

