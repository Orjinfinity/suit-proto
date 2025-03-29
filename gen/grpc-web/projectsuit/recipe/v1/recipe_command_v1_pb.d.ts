import * as jspb from 'google-protobuf'

import * as projectsuit_recipe_v1_recipe_common_v1_pb from '../../../projectsuit/recipe/v1/recipe_common_v1_pb'; // proto import: "projectsuit/recipe/v1/recipe_common_v1.proto"


export class CreateRecipeRequest extends jspb.Message {
  getRecipe(): projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput | undefined;
  setRecipe(value?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput): CreateRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): CreateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
  export type AsObject = {
    recipe?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput.AsObject,
  }
}

export class CreateRecipeResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeResponse): CreateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeResponse;
  static deserializeBinaryFromReader(message: CreateRecipeResponse, reader: jspb.BinaryReader): CreateRecipeResponse;
}

export namespace CreateRecipeResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateRecipeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRecipeRequest;

  getRecipe(): projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput | undefined;
  setRecipe(value?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput): UpdateRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): UpdateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
  export type AsObject = {
    id: string,
    recipe?: projectsuit_recipe_v1_recipe_common_v1_pb.RecipeInput.AsObject,
  }
}

export class UpdateRecipeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeResponse): UpdateRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeResponse;
  static deserializeBinaryFromReader(message: UpdateRecipeResponse, reader: jspb.BinaryReader): UpdateRecipeResponse;
}

export namespace UpdateRecipeResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteRecipeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRecipeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeResponse): DeleteRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeResponse;
  static deserializeBinaryFromReader(message: DeleteRecipeResponse, reader: jspb.BinaryReader): DeleteRecipeResponse;
}

export namespace DeleteRecipeResponse {
  export type AsObject = {
    success: boolean,
  }
}

