/**
 * @fileoverview gRPC-Web generated client stub for projectsuit.recipe.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: projectsuit/recipe/v1/recipe_command_v1.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as projectsuit_recipe_v1_recipe_command_v1_pb from '../../../projectsuit/recipe/v1/recipe_command_v1_pb'; // proto import: "projectsuit/recipe/v1/recipe_command_v1.proto"


export class RecipeCommandServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateRecipe = new grpcWeb.MethodDescriptor(
    '/projectsuit.recipe.v1.RecipeCommandService/CreateRecipe',
    grpcWeb.MethodType.UNARY,
    projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeRequest,
    projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse,
    (request: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeRequest) => {
      return request.serializeBinary();
    },
    projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse.deserializeBinary
  );

  createRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse>;

  createRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse) => void): grpcWeb.ClientReadableStream<projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse>;

  createRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.CreateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/projectsuit.recipe.v1.RecipeCommandService/CreateRecipe',
        request,
        metadata || {},
        this.methodDescriptorCreateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/projectsuit.recipe.v1.RecipeCommandService/CreateRecipe',
    request,
    metadata || {},
    this.methodDescriptorCreateRecipe);
  }

  methodDescriptorUpdateRecipe = new grpcWeb.MethodDescriptor(
    '/projectsuit.recipe.v1.RecipeCommandService/UpdateRecipe',
    grpcWeb.MethodType.UNARY,
    projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeRequest,
    projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse,
    (request: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeRequest) => {
      return request.serializeBinary();
    },
    projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse.deserializeBinary
  );

  updateRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse>;

  updateRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse) => void): grpcWeb.ClientReadableStream<projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse>;

  updateRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.UpdateRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/projectsuit.recipe.v1.RecipeCommandService/UpdateRecipe',
        request,
        metadata || {},
        this.methodDescriptorUpdateRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/projectsuit.recipe.v1.RecipeCommandService/UpdateRecipe',
    request,
    metadata || {},
    this.methodDescriptorUpdateRecipe);
  }

  methodDescriptorDeleteRecipe = new grpcWeb.MethodDescriptor(
    '/projectsuit.recipe.v1.RecipeCommandService/DeleteRecipe',
    grpcWeb.MethodType.UNARY,
    projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeRequest,
    projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse,
    (request: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeRequest) => {
      return request.serializeBinary();
    },
    projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse.deserializeBinary
  );

  deleteRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse>;

  deleteRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse) => void): grpcWeb.ClientReadableStream<projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse>;

  deleteRecipe(
    request: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: projectsuit_recipe_v1_recipe_command_v1_pb.DeleteRecipeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/projectsuit.recipe.v1.RecipeCommandService/DeleteRecipe',
        request,
        metadata || {},
        this.methodDescriptorDeleteRecipe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/projectsuit.recipe.v1.RecipeCommandService/DeleteRecipe',
    request,
    metadata || {},
    this.methodDescriptorDeleteRecipe);
  }

}

