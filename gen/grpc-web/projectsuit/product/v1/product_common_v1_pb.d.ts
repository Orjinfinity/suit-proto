import * as jspb from 'google-protobuf'

import * as projectsuit_common_v1_money_v1_pb from '../../../projectsuit/common/v1/money_v1_pb'; // proto import: "projectsuit/common/v1/money_v1.proto"
import * as projectsuit_common_v1_translation_v1_pb from '../../../projectsuit/common/v1/translation_v1_pb'; // proto import: "projectsuit/common/v1/translation_v1.proto"


export class ProductPrice extends jspb.Message {
  getUnitId(): string;
  setUnitId(value: string): ProductPrice;

  getPrice(): projectsuit_common_v1_money_v1_pb.Money | undefined;
  setPrice(value?: projectsuit_common_v1_money_v1_pb.Money): ProductPrice;
  hasPrice(): boolean;
  clearPrice(): ProductPrice;

  getRegion(): string;
  setRegion(value: string): ProductPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductPrice.AsObject;
  static toObject(includeInstance: boolean, msg: ProductPrice): ProductPrice.AsObject;
  static serializeBinaryToWriter(message: ProductPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductPrice;
  static deserializeBinaryFromReader(message: ProductPrice, reader: jspb.BinaryReader): ProductPrice;
}

export namespace ProductPrice {
  export type AsObject = {
    unitId: string,
    price?: projectsuit_common_v1_money_v1_pb.Money.AsObject,
    region: string,
  }
}

export class ProductVariant extends jspb.Message {
  getId(): string;
  setId(value: string): ProductVariant;

  getName(): string;
  setName(value: string): ProductVariant;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): ProductVariant;

  getPricesList(): Array<ProductPrice>;
  setPricesList(value: Array<ProductPrice>): ProductVariant;
  clearPricesList(): ProductVariant;
  addPrices(value?: ProductPrice, index?: number): ProductPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductVariant.AsObject;
  static toObject(includeInstance: boolean, msg: ProductVariant): ProductVariant.AsObject;
  static serializeBinaryToWriter(message: ProductVariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductVariant;
  static deserializeBinaryFromReader(message: ProductVariant, reader: jspb.BinaryReader): ProductVariant;
}

export namespace ProductVariant {
  export type AsObject = {
    id: string,
    name: string,
    attributesMap: Array<[string, string]>,
    pricesList: Array<ProductPrice.AsObject>,
  }
}

export class ProductInput extends jspb.Message {
  getSku(): string;
  setSku(value: string): ProductInput;

  getBarcode(): string;
  setBarcode(value: string): ProductInput;

  getCategoryId(): string;
  setCategoryId(value: string): ProductInput;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): ProductInput;
  hasName(): boolean;
  clearName(): ProductInput;

  getDescription(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setDescription(value?: projectsuit_common_v1_translation_v1_pb.Translation): ProductInput;
  hasDescription(): boolean;
  clearDescription(): ProductInput;

  getPricesList(): Array<ProductPrice>;
  setPricesList(value: Array<ProductPrice>): ProductInput;
  clearPricesList(): ProductInput;
  addPrices(value?: ProductPrice, index?: number): ProductPrice;

  getType(): ProductType;
  setType(value: ProductType): ProductInput;

  getVariantsList(): Array<ProductVariant>;
  setVariantsList(value: Array<ProductVariant>): ProductInput;
  clearVariantsList(): ProductInput;
  addVariants(value?: ProductVariant, index?: number): ProductVariant;

  getRecipeIdsList(): Array<string>;
  setRecipeIdsList(value: Array<string>): ProductInput;
  clearRecipeIdsList(): ProductInput;
  addRecipeIds(value: string, index?: number): ProductInput;

  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): ProductInput;
  clearImageUrlsList(): ProductInput;
  addImageUrls(value: string, index?: number): ProductInput;

  getTrackInventory(): boolean;
  setTrackInventory(value: boolean): ProductInput;

  getAllowOutOfStockSale(): boolean;
  setAllowOutOfStockSale(value: boolean): ProductInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductInput.AsObject;
  static toObject(includeInstance: boolean, msg: ProductInput): ProductInput.AsObject;
  static serializeBinaryToWriter(message: ProductInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductInput;
  static deserializeBinaryFromReader(message: ProductInput, reader: jspb.BinaryReader): ProductInput;
}

export namespace ProductInput {
  export type AsObject = {
    sku: string,
    barcode: string,
    categoryId: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    description?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    pricesList: Array<ProductPrice.AsObject>,
    type: ProductType,
    variantsList: Array<ProductVariant.AsObject>,
    recipeIdsList: Array<string>,
    imageUrlsList: Array<string>,
    trackInventory: boolean,
    allowOutOfStockSale: boolean,
  }
}

export class ProductView extends jspb.Message {
  getId(): string;
  setId(value: string): ProductView;

  getName(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setName(value?: projectsuit_common_v1_translation_v1_pb.Translation): ProductView;
  hasName(): boolean;
  clearName(): ProductView;

  getDescription(): projectsuit_common_v1_translation_v1_pb.Translation | undefined;
  setDescription(value?: projectsuit_common_v1_translation_v1_pb.Translation): ProductView;
  hasDescription(): boolean;
  clearDescription(): ProductView;

  getPrice(): number;
  setPrice(value: number): ProductView;

  getIsActive(): boolean;
  setIsActive(value: boolean): ProductView;

  getCreatedAt(): number;
  setCreatedAt(value: number): ProductView;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ProductView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductView.AsObject;
  static toObject(includeInstance: boolean, msg: ProductView): ProductView.AsObject;
  static serializeBinaryToWriter(message: ProductView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductView;
  static deserializeBinaryFromReader(message: ProductView, reader: jspb.BinaryReader): ProductView;
}

export namespace ProductView {
  export type AsObject = {
    id: string,
    name?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    description?: projectsuit_common_v1_translation_v1_pb.Translation.AsObject,
    price: number,
    isActive: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export enum ProductType { 
  PRODUCT_TYPE_UNSPECIFIED = 0,
  PRODUCT_TYPE_SIMPLE = 1,
  PRODUCT_TYPE_VARIANT = 2,
  PRODUCT_TYPE_RECIPE = 3,
  PRODUCT_TYPE_SERVICE = 4,
}
