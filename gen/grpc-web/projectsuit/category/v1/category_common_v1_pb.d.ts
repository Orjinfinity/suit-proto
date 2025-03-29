import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class CategoryInput extends jspb.Message {
  getName(): string;
  setName(value: string): CategoryInput;

  getDescription(): string;
  setDescription(value: string): CategoryInput;

  getTranslationsList(): Array<projectsuit_common_v1_translation_v1_pb.Translation>;
  setTranslationsList(value: Array<projectsuit_common_v1_translation_v1_pb.Translation>): CategoryInput;
  clearTranslationsList(): CategoryInput;
  addTranslations(value?: projectsuit_common_v1_translation_v1_pb.Translation, index?: number): projectsuit_common_v1_translation_v1_pb.Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryInput.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryInput): CategoryInput.AsObject;
  static serializeBinaryToWriter(message: CategoryInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryInput;
  static deserializeBinaryFromReader(message: CategoryInput, reader: jspb.BinaryReader): CategoryInput;
}

export namespace CategoryInput {
  export type AsObject = {
    name: string,
    description: string,
    translationsList: Array<projectsuit_common_v1_translation_v1_pb.Translation.AsObject>,
  }
}

export class Category extends jspb.Message {
  getId(): string;
  setId(value: string): Category;

  getName(): string;
  setName(value: string): Category;

  getDescription(): string;
  setDescription(value: string): Category;

  getTranslationsList(): Array<projectsuit_common_v1_translation_v1_pb.Translation>;
  setTranslationsList(value: Array<projectsuit_common_v1_translation_v1_pb.Translation>): Category;
  clearTranslationsList(): Category;
  addTranslations(value?: projectsuit_common_v1_translation_v1_pb.Translation, index?: number): projectsuit_common_v1_translation_v1_pb.Translation;

  getCreatedAt(): string;
  setCreatedAt(value: string): Category;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    translationsList: Array<projectsuit_common_v1_translation_v1_pb.Translation.AsObject>,
    createdAt: string,
    updatedAt: string,
  }
}

export class CategoryView extends jspb.Message {
  getId(): string;
  setId(value: string): CategoryView;

  getParentId(): string;
  setParentId(value: string): CategoryView;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): CategoryView;
  hasName(): boolean;
  clearName(): CategoryView;

  getDescription(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setDescription(value?: projectsuit_common_v1_translation_v1_pb.Translation): CategoryView;
  hasDescription(): boolean;
  clearDescription(): CategoryView;

  getImageUrl(): string;
  setImageUrl(value: string): CategoryView;

  getIsActive(): boolean;
  setIsActive(value: boolean): CategoryView;

  getCreatedAt(): number;
  setCreatedAt(value: number): CategoryView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CategoryView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryView.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryView): CategoryView.AsObject;
  static serializeBinaryToWriter(message: CategoryView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryView;
  static deserializeBinaryFromReader(message: CategoryView, reader: jspb.BinaryReader): CategoryView;
}

export namespace CategoryView {
  export type AsObject = {
    id: string,
    parentId: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    description?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    imageUrl: string,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

