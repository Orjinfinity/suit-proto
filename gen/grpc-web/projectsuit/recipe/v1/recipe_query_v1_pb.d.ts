import * as jspb from 'google-protobuf'

import * as projectsuit_recipe_v1_recipe_common_v1_pb from '../../../projectsuit/recipe/v1/recipe_common_v1_pb'; // proto import: "projectsuit/recipe/v1/recipe_common_v1.proto"


export class GetRecipeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRecipeResponse extends jspb.Message {
  getRecipe(): projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView | undefined;
  setRecipe(value?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView): GetRecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): GetRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeResponse): GetRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeResponse;
  static deserializeBinaryFromReader(message: GetRecipeResponse, reader: jspb.BinaryReader): GetRecipeResponse;
}

export namespace GetRecipeResponse {
  export type AsObject = {
    recipe?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView.AsObject,
  }
}

export class ListRecipesRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListRecipesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipesRequest;

  getProductId(): string;
  setProductId(value: string): ListRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesRequest): ListRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesRequest;
  static deserializeBinaryFromReader(message: ListRecipesRequest, reader: jspb.BinaryReader): ListRecipesRequest;
}

export namespace ListRecipesRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
    productId: string,
  }
}

export class ListRecipesResponse extends jspb.Message {
  getItemsList(): Array<projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView>;
  setItemsList(value: Array<projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView>): ListRecipesResponse;
  clearItemsList(): ListRecipesResponse;
  addItems(value?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView, index?: number): projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView;

  getTotal(): number;
  setTotal(value: number): ListRecipesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesResponse): ListRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesResponse;
  static deserializeBinaryFromReader(message: ListRecipesResponse, reader: jspb.BinaryReader): ListRecipesResponse;
}

export namespace ListRecipesResponse {
  export type AsObject = {
    itemsList: Array<projectsuit_recipe_v1_recipe_common_v1_pb.RecipeView.AsObject>,
    total: number,
  }
}

