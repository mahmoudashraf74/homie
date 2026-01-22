/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment memberAddressFields on MemberAddressTypeExtend {\n  id\n  key\n  name\n  firstName\n  middleName\n  lastName\n  line1\n  city\n  governorate\n  countryCode\n  countryName\n  postalCode @include(if: $withPostalCode)\n  zip\n  isDefault\n  phone\n  email\n  description\n  addressType\n  buildingNumber\n  floorNumber\n  apartmentNumber\n  regionName\n  latitude\n  longitude\n  outerId\n}": typeof types.MemberAddressFieldsFragmentDoc,
    "mutation requestRegistration($command: InputRequestRegistrationType!) {\n  requestRegistration(command: $command) {\n    account {\n      id\n      email\n    }\n    organization {\n      id\n    }\n    contact {\n      id\n    }\n    result {\n      succeeded\n      requireEmailVerification\n      errors {\n        code\n        description\n        parameter\n      }\n    }\n  }\n}": typeof types.RequestRegistrationDocument,
    "mutation resetPasswordByOTP($command: ResetPasswordByOtpInput!) {\n  resetPasswordByOtp(command: $command) {\n    succeeded\n  }\n}": typeof types.ResetPasswordByOtpDocument,
    "mutation updatePersonalData($command: InputUpdatePersonalDataTypeExtend!) {\n  updatePersonalData(command: $command) {\n    succeeded\n    errors {\n      code\n      description\n    }\n  }\n}": typeof types.UpdatePersonalDataDocument,
    "query evaluateDynamicContent($storeId: String!, $cultureName: String!, $placeName: String) {\n  evaluateDynamicContent(\n    storeId: $storeId\n    cultureName: $cultureName\n    placeName: $placeName\n  ) {\n    items {\n      id\n      contentType\n      name\n      description\n      priority\n      dynamicProperties(cultureName: $cultureName) {\n        name\n        valueType\n        dynamicPropertyValueType\n        value\n      }\n    }\n  }\n}": typeof types.EvaluateDynamicContentDocument,
    "query me($withPostalCode: Boolean = false) {\n  me {\n    id\n    memberId\n    photoUrl\n    userName\n    email\n    emailConfirmed\n    phoneNumber\n    phoneNumberConfirmed\n    contact {\n      id\n      outerId\n      phones\n      firstName\n      lastName\n      fullName\n      gender\n      birthDate\n      addresses {\n        totalCount\n        items {\n          ...memberAddressFields\n        }\n      }\n    }\n  }\n}": typeof types.MeDocument,
    "query requestPasswordReset($loginOrEmail: String!) {\n  requestPasswordReset(loginOrEmail: $loginOrEmail)\n}": typeof types.RequestPasswordResetDocument,
    "query sendVerifyPhoneNumber($command: InputSendVerifyPhoneNumberType!) {\n  sendVerifyPhoneNumber(command: $command)\n}": typeof types.SendVerifyPhoneNumberDocument,
    "query slugInfo($slug: String, $storeId: String, $cultureName: String, $permalink: String) {\n  slugInfo(\n    slug: $slug\n    storeId: $storeId\n    cultureName: $cultureName\n    permalink: $permalink\n  ) {\n    entityInfo {\n      id\n      name\n      semanticUrl\n      pageTitle\n      metaDescription\n      imageAltDescription\n      metaKeywords\n      storeId\n      objectId\n      objectType\n      isActive\n      languageCode\n    }\n  }\n}": typeof types.SlugInfoDocument,
    "query validateOTP($username: String!, $otp: String!) {\n  validateOTP(command: {username: $username, otp: $otp}) {\n    succeeded\n  }\n}": typeof types.ValidateOtpDocument,
};
const documents: Documents = {
    "fragment memberAddressFields on MemberAddressTypeExtend {\n  id\n  key\n  name\n  firstName\n  middleName\n  lastName\n  line1\n  city\n  governorate\n  countryCode\n  countryName\n  postalCode @include(if: $withPostalCode)\n  zip\n  isDefault\n  phone\n  email\n  description\n  addressType\n  buildingNumber\n  floorNumber\n  apartmentNumber\n  regionName\n  latitude\n  longitude\n  outerId\n}": types.MemberAddressFieldsFragmentDoc,
    "mutation requestRegistration($command: InputRequestRegistrationType!) {\n  requestRegistration(command: $command) {\n    account {\n      id\n      email\n    }\n    organization {\n      id\n    }\n    contact {\n      id\n    }\n    result {\n      succeeded\n      requireEmailVerification\n      errors {\n        code\n        description\n        parameter\n      }\n    }\n  }\n}": types.RequestRegistrationDocument,
    "mutation resetPasswordByOTP($command: ResetPasswordByOtpInput!) {\n  resetPasswordByOtp(command: $command) {\n    succeeded\n  }\n}": types.ResetPasswordByOtpDocument,
    "mutation updatePersonalData($command: InputUpdatePersonalDataTypeExtend!) {\n  updatePersonalData(command: $command) {\n    succeeded\n    errors {\n      code\n      description\n    }\n  }\n}": types.UpdatePersonalDataDocument,
    "query evaluateDynamicContent($storeId: String!, $cultureName: String!, $placeName: String) {\n  evaluateDynamicContent(\n    storeId: $storeId\n    cultureName: $cultureName\n    placeName: $placeName\n  ) {\n    items {\n      id\n      contentType\n      name\n      description\n      priority\n      dynamicProperties(cultureName: $cultureName) {\n        name\n        valueType\n        dynamicPropertyValueType\n        value\n      }\n    }\n  }\n}": types.EvaluateDynamicContentDocument,
    "query me($withPostalCode: Boolean = false) {\n  me {\n    id\n    memberId\n    photoUrl\n    userName\n    email\n    emailConfirmed\n    phoneNumber\n    phoneNumberConfirmed\n    contact {\n      id\n      outerId\n      phones\n      firstName\n      lastName\n      fullName\n      gender\n      birthDate\n      addresses {\n        totalCount\n        items {\n          ...memberAddressFields\n        }\n      }\n    }\n  }\n}": types.MeDocument,
    "query requestPasswordReset($loginOrEmail: String!) {\n  requestPasswordReset(loginOrEmail: $loginOrEmail)\n}": types.RequestPasswordResetDocument,
    "query sendVerifyPhoneNumber($command: InputSendVerifyPhoneNumberType!) {\n  sendVerifyPhoneNumber(command: $command)\n}": types.SendVerifyPhoneNumberDocument,
    "query slugInfo($slug: String, $storeId: String, $cultureName: String, $permalink: String) {\n  slugInfo(\n    slug: $slug\n    storeId: $storeId\n    cultureName: $cultureName\n    permalink: $permalink\n  ) {\n    entityInfo {\n      id\n      name\n      semanticUrl\n      pageTitle\n      metaDescription\n      imageAltDescription\n      metaKeywords\n      storeId\n      objectId\n      objectType\n      isActive\n      languageCode\n    }\n  }\n}": types.SlugInfoDocument,
    "query validateOTP($username: String!, $otp: String!) {\n  validateOTP(command: {username: $username, otp: $otp}) {\n    succeeded\n  }\n}": types.ValidateOtpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment memberAddressFields on MemberAddressTypeExtend {\n  id\n  key\n  name\n  firstName\n  middleName\n  lastName\n  line1\n  city\n  governorate\n  countryCode\n  countryName\n  postalCode @include(if: $withPostalCode)\n  zip\n  isDefault\n  phone\n  email\n  description\n  addressType\n  buildingNumber\n  floorNumber\n  apartmentNumber\n  regionName\n  latitude\n  longitude\n  outerId\n}"): (typeof documents)["fragment memberAddressFields on MemberAddressTypeExtend {\n  id\n  key\n  name\n  firstName\n  middleName\n  lastName\n  line1\n  city\n  governorate\n  countryCode\n  countryName\n  postalCode @include(if: $withPostalCode)\n  zip\n  isDefault\n  phone\n  email\n  description\n  addressType\n  buildingNumber\n  floorNumber\n  apartmentNumber\n  regionName\n  latitude\n  longitude\n  outerId\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation requestRegistration($command: InputRequestRegistrationType!) {\n  requestRegistration(command: $command) {\n    account {\n      id\n      email\n    }\n    organization {\n      id\n    }\n    contact {\n      id\n    }\n    result {\n      succeeded\n      requireEmailVerification\n      errors {\n        code\n        description\n        parameter\n      }\n    }\n  }\n}"): (typeof documents)["mutation requestRegistration($command: InputRequestRegistrationType!) {\n  requestRegistration(command: $command) {\n    account {\n      id\n      email\n    }\n    organization {\n      id\n    }\n    contact {\n      id\n    }\n    result {\n      succeeded\n      requireEmailVerification\n      errors {\n        code\n        description\n        parameter\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation resetPasswordByOTP($command: ResetPasswordByOtpInput!) {\n  resetPasswordByOtp(command: $command) {\n    succeeded\n  }\n}"): (typeof documents)["mutation resetPasswordByOTP($command: ResetPasswordByOtpInput!) {\n  resetPasswordByOtp(command: $command) {\n    succeeded\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updatePersonalData($command: InputUpdatePersonalDataTypeExtend!) {\n  updatePersonalData(command: $command) {\n    succeeded\n    errors {\n      code\n      description\n    }\n  }\n}"): (typeof documents)["mutation updatePersonalData($command: InputUpdatePersonalDataTypeExtend!) {\n  updatePersonalData(command: $command) {\n    succeeded\n    errors {\n      code\n      description\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query evaluateDynamicContent($storeId: String!, $cultureName: String!, $placeName: String) {\n  evaluateDynamicContent(\n    storeId: $storeId\n    cultureName: $cultureName\n    placeName: $placeName\n  ) {\n    items {\n      id\n      contentType\n      name\n      description\n      priority\n      dynamicProperties(cultureName: $cultureName) {\n        name\n        valueType\n        dynamicPropertyValueType\n        value\n      }\n    }\n  }\n}"): (typeof documents)["query evaluateDynamicContent($storeId: String!, $cultureName: String!, $placeName: String) {\n  evaluateDynamicContent(\n    storeId: $storeId\n    cultureName: $cultureName\n    placeName: $placeName\n  ) {\n    items {\n      id\n      contentType\n      name\n      description\n      priority\n      dynamicProperties(cultureName: $cultureName) {\n        name\n        valueType\n        dynamicPropertyValueType\n        value\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query me($withPostalCode: Boolean = false) {\n  me {\n    id\n    memberId\n    photoUrl\n    userName\n    email\n    emailConfirmed\n    phoneNumber\n    phoneNumberConfirmed\n    contact {\n      id\n      outerId\n      phones\n      firstName\n      lastName\n      fullName\n      gender\n      birthDate\n      addresses {\n        totalCount\n        items {\n          ...memberAddressFields\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query me($withPostalCode: Boolean = false) {\n  me {\n    id\n    memberId\n    photoUrl\n    userName\n    email\n    emailConfirmed\n    phoneNumber\n    phoneNumberConfirmed\n    contact {\n      id\n      outerId\n      phones\n      firstName\n      lastName\n      fullName\n      gender\n      birthDate\n      addresses {\n        totalCount\n        items {\n          ...memberAddressFields\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query requestPasswordReset($loginOrEmail: String!) {\n  requestPasswordReset(loginOrEmail: $loginOrEmail)\n}"): (typeof documents)["query requestPasswordReset($loginOrEmail: String!) {\n  requestPasswordReset(loginOrEmail: $loginOrEmail)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query sendVerifyPhoneNumber($command: InputSendVerifyPhoneNumberType!) {\n  sendVerifyPhoneNumber(command: $command)\n}"): (typeof documents)["query sendVerifyPhoneNumber($command: InputSendVerifyPhoneNumberType!) {\n  sendVerifyPhoneNumber(command: $command)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query slugInfo($slug: String, $storeId: String, $cultureName: String, $permalink: String) {\n  slugInfo(\n    slug: $slug\n    storeId: $storeId\n    cultureName: $cultureName\n    permalink: $permalink\n  ) {\n    entityInfo {\n      id\n      name\n      semanticUrl\n      pageTitle\n      metaDescription\n      imageAltDescription\n      metaKeywords\n      storeId\n      objectId\n      objectType\n      isActive\n      languageCode\n    }\n  }\n}"): (typeof documents)["query slugInfo($slug: String, $storeId: String, $cultureName: String, $permalink: String) {\n  slugInfo(\n    slug: $slug\n    storeId: $storeId\n    cultureName: $cultureName\n    permalink: $permalink\n  ) {\n    entityInfo {\n      id\n      name\n      semanticUrl\n      pageTitle\n      metaDescription\n      imageAltDescription\n      metaKeywords\n      storeId\n      objectId\n      objectType\n      isActive\n      languageCode\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query validateOTP($username: String!, $otp: String!) {\n  validateOTP(command: {username: $username, otp: $otp}) {\n    succeeded\n  }\n}"): (typeof documents)["query validateOTP($username: String!, $otp: String!) {\n  validateOTP(command: {username: $username, otp: $otp}) {\n    succeeded\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;