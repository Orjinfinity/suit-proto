// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file projectsuit/category/v1/category_query_v1.proto (package projectsuit.category.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { CategoryView } from "./category_common_v1_pb";
import { file_projectsuit_category_v1_category_common_v1 } from "./category_common_v1_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file projectsuit/category/v1/category_query_v1.proto.
 */
export const file_projectsuit_category_v1_category_query_v1: GenFile = /*@__PURE__*/
  fileDesc("Ci9wcm9qZWN0c3VpdC9jYXRlZ29yeS92MS9jYXRlZ29yeV9xdWVyeV92MS5wcm90bxIXcHJvamVjdHN1aXQuY2F0ZWdvcnkudjEiIAoSR2V0Q2F0ZWdvcnlSZXF1ZXN0EgoKAmlkGAEgASgJIk4KE0dldENhdGVnb3J5UmVzcG9uc2USNwoIY2F0ZWdvcnkYASABKAsyJS5wcm9qZWN0c3VpdC5jYXRlZ29yeS52MS5DYXRlZ29yeVZpZXciVwoVTGlzdENhdGVnb3JpZXNSZXF1ZXN0EgwKBHBhZ2UYASABKAUSDQoFbGltaXQYAiABKAUSDgoGc2VhcmNoGAMgASgJEhEKCXBhcmVudF9pZBgEIAEoCSJiChZMaXN0Q2F0ZWdvcmllc1Jlc3BvbnNlEjkKCmNhdGVnb3JpZXMYASADKAsyJS5wcm9qZWN0c3VpdC5jYXRlZ29yeS52MS5DYXRlZ29yeVZpZXcSDQoFdG90YWwYAiABKAUy9wEKFENhdGVnb3J5UXVlcnlTZXJ2aWNlEmoKC0dldENhdGVnb3J5EisucHJvamVjdHN1aXQuY2F0ZWdvcnkudjEuR2V0Q2F0ZWdvcnlSZXF1ZXN0GiwucHJvamVjdHN1aXQuY2F0ZWdvcnkudjEuR2V0Q2F0ZWdvcnlSZXNwb25zZSIAEnMKDkxpc3RDYXRlZ29yaWVzEi4ucHJvamVjdHN1aXQuY2F0ZWdvcnkudjEuTGlzdENhdGVnb3JpZXNSZXF1ZXN0Gi8ucHJvamVjdHN1aXQuY2F0ZWdvcnkudjEuTGlzdENhdGVnb3JpZXNSZXNwb25zZSIAQv4BChtjb20ucHJvamVjdHN1aXQuY2F0ZWdvcnkudjFCFENhdGVnb3J5UXVlcnlWMVByb3RvUAFaS2dpdGh1Yi5jb20vb3JqaW5maW5pdHkvc3VpdC1wcm90by9nZW4vZ28vcHJvamVjdHN1aXQvY2F0ZWdvcnkvdjE7Y2F0ZWdvcnl2MaICA1BDWKoCF1Byb2plY3RzdWl0LkNhdGVnb3J5LlYxygIXUHJvamVjdHN1aXRcQ2F0ZWdvcnlcVjHiAiNQcm9qZWN0c3VpdFxDYXRlZ29yeVxWMVxHUEJNZXRhZGF0YeoCGVByb2plY3RzdWl0OjpDYXRlZ29yeTo6VjFiBnByb3RvMw", [file_projectsuit_category_v1_category_common_v1]);

/**
 * @generated from message projectsuit.category.v1.GetCategoryRequest
 */
export type GetCategoryRequest = Message<"projectsuit.category.v1.GetCategoryRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message projectsuit.category.v1.GetCategoryRequest.
 * Use `create(GetCategoryRequestSchema)` to create a new message.
 */
export const GetCategoryRequestSchema: GenMessage<GetCategoryRequest> = /*@__PURE__*/
  messageDesc(file_projectsuit_category_v1_category_query_v1, 0);

/**
 * @generated from message projectsuit.category.v1.GetCategoryResponse
 */
export type GetCategoryResponse = Message<"projectsuit.category.v1.GetCategoryResponse"> & {
  /**
   * @generated from field: projectsuit.category.v1.CategoryView category = 1;
   */
  category?: CategoryView;
};

/**
 * Describes the message projectsuit.category.v1.GetCategoryResponse.
 * Use `create(GetCategoryResponseSchema)` to create a new message.
 */
export const GetCategoryResponseSchema: GenMessage<GetCategoryResponse> = /*@__PURE__*/
  messageDesc(file_projectsuit_category_v1_category_query_v1, 1);

/**
 * @generated from message projectsuit.category.v1.ListCategoriesRequest
 */
export type ListCategoriesRequest = Message<"projectsuit.category.v1.ListCategoriesRequest"> & {
  /**
   * @generated from field: int32 page = 1;
   */
  page: number;

  /**
   * @generated from field: int32 limit = 2;
   */
  limit: number;

  /**
   * @generated from field: string search = 3;
   */
  search: string;

  /**
   * @generated from field: string parent_id = 4;
   */
  parentId: string;
};

/**
 * Describes the message projectsuit.category.v1.ListCategoriesRequest.
 * Use `create(ListCategoriesRequestSchema)` to create a new message.
 */
export const ListCategoriesRequestSchema: GenMessage<ListCategoriesRequest> = /*@__PURE__*/
  messageDesc(file_projectsuit_category_v1_category_query_v1, 2);

/**
 * @generated from message projectsuit.category.v1.ListCategoriesResponse
 */
export type ListCategoriesResponse = Message<"projectsuit.category.v1.ListCategoriesResponse"> & {
  /**
   * @generated from field: repeated projectsuit.category.v1.CategoryView categories = 1;
   */
  categories: CategoryView[];

  /**
   * @generated from field: int32 total = 2;
   */
  total: number;
};

/**
 * Describes the message projectsuit.category.v1.ListCategoriesResponse.
 * Use `create(ListCategoriesResponseSchema)` to create a new message.
 */
export const ListCategoriesResponseSchema: GenMessage<ListCategoriesResponse> = /*@__PURE__*/
  messageDesc(file_projectsuit_category_v1_category_query_v1, 3);

/**
 * @generated from service projectsuit.category.v1.CategoryQueryService
 */
export const CategoryQueryService: GenService<{
  /**
   * @generated from rpc projectsuit.category.v1.CategoryQueryService.GetCategory
   */
  getCategory: {
    methodKind: "unary";
    input: typeof GetCategoryRequestSchema;
    output: typeof GetCategoryResponseSchema;
  },
  /**
   * @generated from rpc projectsuit.category.v1.CategoryQueryService.ListCategories
   */
  listCategories: {
    methodKind: "unary";
    input: typeof ListCategoriesRequestSchema;
    output: typeof ListCategoriesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_projectsuit_category_v1_category_query_v1, 0);

