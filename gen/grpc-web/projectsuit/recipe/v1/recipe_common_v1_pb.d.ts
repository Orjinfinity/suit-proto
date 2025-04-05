import * as jspb from 'google-protobuf'



export class RecipeItem extends jspb.Message {
  getMaterialId(): string;
  setMaterialId(value: string): RecipeItem;

  getQuantity(): number;
  setQuantity(value: number): RecipeItem;

  getUnit(): string;
  setUnit(value: string): RecipeItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeItem.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeItem): RecipeItem.AsObject;
  static serializeBinaryToWriter(message: RecipeItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeItem;
  static deserializeBinaryFromReader(message: RecipeItem, reader: jspb.BinaryReader): RecipeItem;
}

export namespace RecipeItem {
  export type AsObject = {
    materialId: string,
    quantity: number,
    unit: string,
  }
}

export class Recipe extends jspb.Message {
  getId(): string;
  setId(value: string): Recipe;

  getProductId(): string;
  setProductId(value: string): Recipe;

  getItemsList(): Array<RecipeItem>;
  setItemsList(value: Array<RecipeItem>): Recipe;
  clearItemsList(): Recipe;
  addItems(value?: RecipeItem, index?: number): RecipeItem;

  getIsActive(): boolean;
  setIsActive(value: boolean): Recipe;

  getCreatedAt(): number;
  setCreatedAt(value: number): Recipe;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    id: string,
    productId: string,
    itemsList: Array<RecipeItem.AsObject>,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class RecipeInput extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): RecipeInput;

  getItemsList(): Array<RecipeItem>;
  setItemsList(value: Array<RecipeItem>): RecipeInput;
  clearItemsList(): RecipeInput;
  addItems(value?: RecipeItem, index?: number): RecipeItem;

  getIsActive(): boolean;
  setIsActive(value: boolean): RecipeInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeInput.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeInput): RecipeInput.AsObject;
  static serializeBinaryToWriter(message: RecipeInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeInput;
  static deserializeBinaryFromReader(message: RecipeInput, reader: jspb.BinaryReader): RecipeInput;
}

export namespace RecipeInput {
  export type AsObject = {
    productId: string,
    itemsList: Array<RecipeItem.AsObject>,
    isActive: boolean,
  }
}

export class RecipeView extends jspb.Message {
  getId(): string;
  setId(value: string): RecipeView;

  getProductId(): string;
  setProductId(value: string): RecipeView;

  getItemsList(): Array<RecipeItem>;
  setItemsList(value: Array<RecipeItem>): RecipeView;
  clearItemsList(): RecipeView;
  addItems(value?: RecipeItem, index?: number): RecipeItem;

  getIsActive(): boolean;
  setIsActive(value: boolean): RecipeView;

  getCreatedAt(): number;
  setCreatedAt(value: number): RecipeView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RecipeView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeView.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeView): RecipeView.AsObject;
  static serializeBinaryToWriter(message: RecipeView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeView;
  static deserializeBinaryFromReader(message: RecipeView, reader: jspb.BinaryReader): RecipeView;
}

export namespace RecipeView {
  export type AsObject = {
    id: string,
    productId: string,
    itemsList: Array<RecipeItem.AsObject>,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

