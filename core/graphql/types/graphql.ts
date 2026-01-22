/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  DynamicPropertyValue: { input: any; output: any; }
  Long: { input: any; output: any; }
  ModuleSettingValue: { input: any; output: any; }
  OptionalDecimal: { input: any; output: any; }
  OptionalNullableDecimal: { input: any; output: any; }
  OptionalString: { input: any; output: any; }
  PropertyValue: { input: any; output: any; }
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds in range [-922337203685, 922337203685]. */
  Seconds: { input: any; output: any; }
};

export type AccountCreationResultType = {
  __typename?: 'AccountCreationResultType';
  /** The errors that occurred during the operation. */
  errors?: Maybe<Array<Maybe<RegistrationErrorType>>>;
  requireEmailVerification: Scalars['Boolean']['output'];
  succeeded: Scalars['Boolean']['output'];
};

export type AddAddressToFavoritesCommandType = {
  addressId: Scalars['String']['input'];
};

export type Asset = {
  __typename?: 'Asset';
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** The description of the asset. */
  description?: Maybe<Scalars['String']['output']>;
  /** The group of the asset. */
  group?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the asset. */
  id: Scalars['String']['output'];
  /** The MIME type of the asset. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The name of the asset. */
  name?: Maybe<Scalars['String']['output']>;
  /** The relative URL of the asset. */
  relativeUrl?: Maybe<Scalars['String']['output']>;
  /** The size of the asset in bytes. */
  size: Scalars['Long']['output'];
  /** The type ID of the asset. */
  typeId: Scalars['String']['output'];
  /** The URL of the asset. */
  url: Scalars['String']['output'];
};

export type AuthorizePaymentResultType = {
  __typename?: 'AuthorizePaymentResultType';
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
};

export type AvailabilityData = {
  __typename?: 'AvailabilityData';
  /** Available quantity */
  availableQuantity: Scalars['Long']['output'];
  /** Inventories */
  inventories: Array<InventoryInfo>;
  /** Is active */
  isActive: Scalars['Boolean']['output'];
  /** Is available */
  isAvailable: Scalars['Boolean']['output'];
  /** Is buyable */
  isBuyable: Scalars['Boolean']['output'];
  /** Is estimated */
  isEstimated: Scalars['Boolean']['output'];
  /** Is in stock */
  isInStock: Scalars['Boolean']['output'];
  /** Is track inventory */
  isTrackInventory: Scalars['Boolean']['output'];
};

/** A connection from an object to a list of objects of type `Brand`. */
export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<BrandEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<BrandType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Brand`. */
export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BrandType>;
};

export type BrandType = {
  __typename?: 'BrandType';
  bannerUrl?: Maybe<Scalars['String']['output']>;
  /** Brand property name. */
  brandPropertyName?: Maybe<Scalars['String']['output']>;
  /** Unlocalized brand name. */
  brandPropertyValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Indicates if the brand is featured. */
  featured?: Maybe<Scalars['Boolean']['output']>;
  /** Brand ID. */
  id: Scalars['String']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Brand name. */
  name?: Maybe<Scalars['String']['output']>;
  permalink: Scalars['String']['output'];
};


export type BrandTypeDescriptionArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /** Id of item the breadcrumb calculated for */
  itemId: Scalars['String']['output'];
  /** Semantic URL keyword */
  semanticUrl?: Maybe<Scalars['String']['output']>;
  /** Full path from catalog */
  seoPath?: Maybe<Scalars['String']['output']>;
  /** Name of current breadcrumb */
  title: Scalars['String']['output'];
  /** Catalog, category or product */
  typeName: Scalars['String']['output'];
};

export type BuilderPageItemType = {
  __typename?: 'BuilderPageItemType';
  content?: Maybe<Scalars['String']['output']>;
  /** Page permalink */
  permalink?: Maybe<Scalars['String']['output']>;
};

export type BulkCartType = {
  __typename?: 'BulkCartType';
  /** Cart */
  cart?: Maybe<CartType>;
  /** A set of errors in case the SKUs are invalid */
  errors?: Maybe<Array<Maybe<ValidationErrorType>>>;
};

export type BulkWishlistType = {
  __typename?: 'BulkWishlistType';
  /** Wishlists */
  wishlists?: Maybe<Array<Maybe<WishlistType>>>;
};

export type CartAddressTypeExtend = {
  __typename?: 'CartAddressTypeExtend';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  apartmentNumber?: Maybe<Scalars['Int']['output']>;
  buildingNumber?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  floorNumber?: Maybe<Scalars['Int']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
  zoneId?: Maybe<Scalars['String']['output']>;
};

export type CartConfigurationItemFileType = {
  __typename?: 'CartConfigurationItemFileType';
  /** MIME type of the file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Name of the file */
  name: Scalars['String']['output'];
  /** Size of the file */
  size: Scalars['Long']['output'];
  /** URL of the file */
  url: Scalars['String']['output'];
};

export type CartConfigurationItemType = {
  __typename?: 'CartConfigurationItemType';
  /** Custom text for 'Text' configuration item section */
  customText?: Maybe<Scalars['String']['output']>;
  /** List of files for 'File' configuration item section */
  files?: Maybe<Array<Maybe<CartConfigurationItemFileType>>>;
  /** Configuration item ID */
  id: Scalars['String']['output'];
  /** Configuration item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Configuration item product ID */
  productId?: Maybe<Scalars['String']['output']>;
  /** Configuration item product quantity */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Configuration item section ID */
  sectionId: Scalars['String']['output'];
  /** Configuration item type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
};

/** A connection from an object to a list of objects of type `Cart`. */
export type CartConnection = {
  __typename?: 'CartConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CartEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CartType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Cart`. */
export type CartEdge = {
  __typename?: 'CartEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CartType>;
};

export type CartShipmentItemType = {
  __typename?: 'CartShipmentItemType';
  lineItem?: Maybe<LineItemType>;
  /** Quantity */
  quantity: Scalars['Int']['output'];
};

export type CartType = {
  __typename?: 'CartType';
  /** Addresses */
  addresses: Array<CartAddressTypeExtend>;
  /** Available Gifts */
  availableGifts: Array<GiftItemType>;
  /** Available payment methods */
  availablePaymentMethods: Array<PaymentMethodType>;
  availableShippingMethods: Array<ShippingMethodType>;
  /** Shopping cart channel ID */
  channelId?: Maybe<Scalars['String']['output']>;
  /** Cart checkout ID */
  checkoutId: Scalars['String']['output'];
  /** Shopping cart text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Coupons */
  coupons: Array<CouponType>;
  /** Currency */
  currency: CurrencyType;
  /** Shopping cart user ID */
  customerId: Scalars['String']['output'];
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']['output']>;
  /** Total discount */
  discountTotal: MoneyType;
  /** Total discount with tax */
  discountTotalWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Total extended price */
  extendedPriceTotal: MoneyType;
  /** Total extended price with tax */
  extendedPriceTotalWithTax: MoneyType;
  /** Shopping cart fee */
  fee: MoneyType;
  /** Total fee */
  feeTotal: MoneyType;
  /** Total fee with tax */
  feeTotalWithTax: MoneyType;
  /** Shopping cart fee with tax */
  feeWithTax: MoneyType;
  /** Gifts */
  gifts: Array<GiftItemType>;
  /** Total handling */
  handlingTotal: MoneyType;
  /** Total handling with tax */
  handlingTotalWithTax: MoneyType;
  /** Has physical products */
  hasPhysicalProducts?: Maybe<Scalars['Boolean']['output']>;
  /** Shopping cart ID */
  id: Scalars['String']['output'];
  /** Displays whether the shopping cart is anonymous */
  isAnonymous: Scalars['Boolean']['output'];
  /** Displays whether the shopping cart is recurring */
  isRecuring?: Maybe<Scalars['Boolean']['output']>;
  /** Items */
  items: Array<LineItemType>;
  /** Item count */
  itemsCount: Scalars['Int']['output'];
  /** Quantity of items */
  itemsQuantity: Scalars['Int']['output'];
  /** Shopping cart name */
  name: Scalars['String']['output'];
  /** Shopping cart organization ID */
  organizationId?: Maybe<Scalars['String']['output']>;
  /** Shopping cart organization name */
  organizationName?: Maybe<Scalars['String']['output']>;
  /** Payment price */
  paymentPrice: MoneyType;
  /** Payment price with tax */
  paymentPriceWithTax: MoneyType;
  /** Total payment */
  paymentTotal: MoneyType;
  /** Total payment with tax */
  paymentTotalWithTax: MoneyType;
  /** Payments */
  payments: Array<PaymentType>;
  /** Purchase order number */
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  /** Shipments */
  shipments: Array<ShipmentType>;
  /** Shipping price */
  shippingPrice: MoneyType;
  /** Shipping price with tax */
  shippingPriceWithTax: MoneyType;
  /** Total shipping */
  shippingTotal: MoneyType;
  /** Total shipping with tax */
  shippingTotalWithTax: MoneyType;
  /** Shopping cart status */
  status?: Maybe<Scalars['String']['output']>;
  /** Shopping cart store ID */
  storeId: Scalars['String']['output'];
  /** Shopping cart subtotal */
  subTotal: MoneyType;
  /** Subtotal discount */
  subTotalDiscount: MoneyType;
  /** Subtotal discount with tax */
  subTotalDiscountWithTax: MoneyType;
  /** Subtotal with tax */
  subTotalWithTax: MoneyType;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percentage */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Total tax */
  taxTotal: MoneyType;
  /** Shipping tax type */
  taxType: Scalars['String']['output'];
  /** Shopping cart total */
  total: MoneyType;
  /** Shopping cart type */
  type?: Maybe<Scalars['String']['output']>;
  /** A set of errors in case the cart is invalid */
  validationErrors: Array<ValidationErrorType>;
  /** Shopping cart volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** A set of temporary warnings for a cart user */
  warnings: Array<ValidationErrorType>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Shopping cart weight unit value */
  weightUnit?: Maybe<Scalars['String']['output']>;
};


export type CartTypeValidationErrorsArgs = {
  ruleSet?: InputMaybe<Scalars['String']['input']>;
};

export type CartWithListType = {
  __typename?: 'CartWithListType';
  /** Shopping cart */
  cart?: Maybe<CartType>;
  /** Saved list */
  list?: Maybe<CartType>;
};

export type CatalogDiscountType = {
  __typename?: 'CatalogDiscountType';
  /** Discount amount */
  amount: Scalars['Decimal']['output'];
  /** Discount amount with tax */
  amountWithTax: Scalars['Decimal']['output'];
  /** Coupon */
  coupon?: Maybe<Scalars['String']['output']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount in the specified currency */
  moneyAmount: MoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: MoneyType;
  promotion?: Maybe<Promotion>;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  /** Breadcrumbs */
  breadcrumbs: Array<Breadcrumb>;
  childCategories: Array<Category>;
  /** SKU of category. */
  code: Scalars['String']['output'];
  description?: Maybe<CategoryDescriptionType>;
  descriptions: Array<CategoryDescriptionType>;
  /** Have a parent */
  hasParent: Scalars['Boolean']['output'];
  /** Id of category. */
  id: Scalars['String']['output'];
  /** Images */
  images: Array<ImageType>;
  /** The category image. */
  imgSrc?: Maybe<Scalars['String']['output']>;
  /** Level in hierarchy */
  level: Scalars['Int']['output'];
  /** The name of the category. */
  name: Scalars['String']['output'];
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']['output']>;
  /** Outlines */
  outlines: Array<OutlineType>;
  parent?: Maybe<Category>;
  /** Category path in to the requested catalog  (all parent categories names concatenated. E.g. (parent1/parent2)) */
  path?: Maybe<Scalars['String']['output']>;
  /** The category priority. */
  priority: Scalars['Int']['output'];
  properties: Array<Property>;
  /** Category relevance score */
  relevanceScore?: Maybe<Scalars['Float']['output']>;
  /** Request related SEO info */
  seoInfo: SeoInfo;
  /** Request related slug for category */
  slug?: Maybe<Scalars['String']['output']>;
};


export type CategoryDescriptionArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type CategoryDescriptionsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type CategoryPropertiesArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A connection from an object to a list of objects of type `Category`. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Category>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryDescriptionType = {
  __typename?: 'CategoryDescriptionType';
  /** Description text. */
  content?: Maybe<Scalars['String']['output']>;
  /** Description type. */
  descriptionType?: Maybe<Scalars['String']['output']>;
  /** Description ID. */
  id: Scalars['String']['output'];
  /** Description language code. */
  languageCode?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection from an object to another object of type `Category`. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Category>;
};

export type ChildCategoriesQueryResponseType = {
  __typename?: 'ChildCategoriesQueryResponseType';
  childCategories?: Maybe<Array<Maybe<Category>>>;
};

export type CommonVendor = {
  __typename?: 'CommonVendor';
  /** Vendor ID */
  id: Scalars['String']['output'];
  /** Vendor name */
  name: Scalars['String']['output'];
  /** Vendor rating */
  rating?: Maybe<Rating>;
};

export type ComplaintErrorType = {
  __typename?: 'ComplaintErrorType';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  parameter?: Maybe<Scalars['String']['output']>;
};

export type ComplaintReason = {
  __typename?: 'ComplaintReason';
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  reasonAr: Scalars['String']['output'];
  reasonEn: Scalars['String']['output'];
};

/** A connection from an object to a list of objects of type `ComplaintReason`. */
export type ComplaintReasonConnection = {
  __typename?: 'ComplaintReasonConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ComplaintReasonEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ComplaintReason>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `ComplaintReason`. */
export type ComplaintReasonEdge = {
  __typename?: 'ComplaintReasonEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ComplaintReason>;
};

export type ConfigurableProductOptionInput = {
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity of product */
  quantity: Scalars['Int']['input'];
};

export type ConfigurationItemsResponseType = {
  __typename?: 'ConfigurationItemsResponseType';
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<CartConfigurationItemType>>>;
};

export type ConfigurationLineItemType = {
  __typename?: 'ConfigurationLineItemType';
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Total discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Extended price */
  extendedPrice?: Maybe<MoneyType>;
  /** The unique identifier */
  id?: Maybe<Scalars['String']['output']>;
  /** List price */
  listPrice?: Maybe<MoneyType>;
  product?: Maybe<Product>;
  /** The quantity of the option */
  quantity: Scalars['Int']['output'];
  /** Sale price */
  salePrice?: Maybe<MoneyType>;
  /** The text of the Text-type option */
  text?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationQueryResponseType = {
  __typename?: 'ConfigurationQueryResponseType';
  configurationSections?: Maybe<Array<Maybe<ConfigurationSectionType>>>;
};

export type ConfigurationSectionInput = {
  /** Custom text for 'Text' section */
  customText?: InputMaybe<Scalars['String']['input']>;
  /** List of file links for 'File' section */
  fileUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Configuration section option/product */
  option?: InputMaybe<ConfigurableProductOptionInput>;
  /** Configuration section ID */
  sectionId: Scalars['String']['input'];
  /** Configuration section type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['input'];
};

export type ConfigurationSectionType = {
  __typename?: 'ConfigurationSectionType';
  /** Is custom text allowed for Text-type section */
  allowCustomText: Scalars['Boolean']['output'];
  /** Is predefined text options allowed for Text-type section */
  allowTextOptions: Scalars['Boolean']['output'];
  /** Configuration section description */
  description?: Maybe<Scalars['String']['output']>;
  /** Configuration section id */
  id: Scalars['String']['output'];
  /** Is configuration section required */
  isRequired: Scalars['Boolean']['output'];
  /** Configuration section name */
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<ConfigurationLineItemType>>>;
  /** Configuration section type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
};

export type ConfirmPhoneNumberInput = {
  /** The OTP code received via SMS or email. */
  token: Scalars['String']['input'];
  /** Username (email or phone) of the user. */
  userName: Scalars['String']['input'];
};

export type ContactTypeExtend = {
  __typename?: 'ContactTypeExtend';
  about: Scalars['String']['output'];
  addresses?: Maybe<MemberAddressTypeExtendConnection>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressTypeExtend>;
  defaultLanguage?: Maybe<Scalars['String']['output']>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<OrganizationConnection>;
  organizationsIds: Array<Maybe<Scalars['String']['output']>>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  securityAccounts?: Maybe<Array<Maybe<UserType>>>;
  /** Selected shipping address id. */
  selectedAddressId?: Maybe<Scalars['String']['output']>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};


export type ContactTypeExtendAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type ContactTypeExtendOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type ContactTypeExtendSeoInfoArgs = {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

/** A connection from an object to a list of objects of type `ContactTypeExtend`. */
export type ContactTypeExtendConnection = {
  __typename?: 'ContactTypeExtendConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ContactTypeExtendEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ContactTypeExtend>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `ContactTypeExtend`. */
export type ContactTypeExtendEdge = {
  __typename?: 'ContactTypeExtendEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContactTypeExtend>;
};

/** A connection from an object to a list of objects of type `Contract`. */
export type ContractConnection = {
  __typename?: 'ContractConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ContractEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ContractType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Contract`. */
export type ContractEdge = {
  __typename?: 'ContractEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContractType>;
};

export type ContractType = {
  __typename?: 'ContractType';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** Contract dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storeId?: Maybe<Scalars['String']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
};

export type CountryRegionType = {
  __typename?: 'CountryRegionType';
  /** Code of country region. For example 'AL'. */
  id: Scalars['String']['output'];
  /** Name of country region. For example 'Alabama'. */
  name: Scalars['String']['output'];
};

export type CountryType = {
  __typename?: 'CountryType';
  /** Code of country. For example 'USA'. */
  id: Scalars['String']['output'];
  /** Name of country. For example 'United States of America'. */
  name: Scalars['String']['output'];
  /** Country regions. */
  regions: Array<CountryRegionType>;
};

export type CouponType = {
  __typename?: 'CouponType';
  /** Coupon code */
  code?: Maybe<Scalars['String']['output']>;
  /** Is coupon was applied successfully */
  isAppliedSuccessfully: Scalars['Boolean']['output'];
};

export type CreateComplaintReasonCommandType = {
  reasonAr: Scalars['String']['input'];
  reasonEn: Scalars['String']['input'];
};

export type CreateCustomerComplaintCommandType = {
  complaintReason: Scalars['String']['input'];
  entityId: Scalars['String']['input'];
  entityName: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  message: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type CreateReturnCommandType = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  returnLineItems: Array<InputMaybe<InputReturnLineItem>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateReviewCommandType = {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

export type CreateReviewResult = {
  __typename?: 'CreateReviewResult';
  id?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  /** A set of errors in case the review is invalid */
  validationErrors: Array<ReviewValidationErrorType>;
};

export type CurrencyType = {
  __typename?: 'CurrencyType';
  /** Currency code may be used ISO 4217 */
  code: Scalars['String']['output'];
  /** Currency English name */
  cultureName: Scalars['String']['output'];
  /** Currency custom formatting */
  customFormatting?: Maybe<Scalars['String']['output']>;
  /** Currency English name */
  englishName: Scalars['String']['output'];
  /** Exchange rate */
  exchangeRate: Scalars['Decimal']['output'];
  /** Symbol */
  symbol: Scalars['String']['output'];
};

export type CustomIdentityResultType = {
  __typename?: 'CustomIdentityResultType';
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IdentityErrorInfoType>>>;
  succeeded: Scalars['Boolean']['output'];
};

export type CustomerComplaint = {
  __typename?: 'CustomerComplaint';
  complaintReason: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  entityId: Scalars['String']['output'];
  entityName: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  storeId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

/** A connection from an object to a list of objects of type `CustomerComplaint`. */
export type CustomerComplaintConnection = {
  __typename?: 'CustomerComplaintConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CustomerComplaintEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CustomerComplaint>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CustomerComplaint`. */
export type CustomerComplaintEdge = {
  __typename?: 'CustomerComplaintEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CustomerComplaint>;
};

export type CustomerComplaintResult = {
  __typename?: 'CustomerComplaintResult';
  /** The errors that occurred during the operation. */
  errors?: Maybe<Array<Maybe<ComplaintErrorType>>>;
  succeeded: Scalars['Boolean']['output'];
};

export type CustomerOrderType = {
  __typename?: 'CustomerOrderType';
  addresses: Array<OrderAddressType>;
  /** Available payment methods */
  availablePaymentMethods: Array<OrderPaymentMethodType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  channelId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  coupons: Array<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: CurrencyType;
  customerId: Scalars['String']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  discountAmount: MoneyType;
  discountTotal: MoneyType;
  discountTotalWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: MoneyType;
  feeTotal: MoneyType;
  feeTotalWithTax: MoneyType;
  feeWithTax: MoneyType;
  id: Scalars['String']['output'];
  inPayments: Array<PaymentInType>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isPrototype: Scalars['Boolean']['output'];
  items: Array<OrderLineItemType>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  paymentDiscountTotal: MoneyType;
  paymentDiscountTotalWithTax: MoneyType;
  paymentSubTotal: MoneyType;
  paymentSubTotalWithTax: MoneyType;
  paymentTaxTotal: MoneyType;
  paymentTotal: MoneyType;
  paymentTotalWithTax: MoneyType;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  shipments: Array<OrderShipmentType>;
  shippingDiscountTotal: MoneyType;
  shippingDiscountTotalWithTax: MoneyType;
  shippingSubTotal: MoneyType;
  shippingSubTotalWithTax: MoneyType;
  shippingTaxTotal: MoneyType;
  shippingTotal: MoneyType;
  shippingTotalWithTax: MoneyType;
  shoppingCartId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  storeName?: Maybe<Scalars['String']['output']>;
  subTotal: MoneyType;
  subTotalDiscount: MoneyType;
  subTotalDiscountWithTax: MoneyType;
  subTotalTaxTotal: MoneyType;
  subTotalWithTax: MoneyType;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionNumber?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: MoneyType;
};


export type CustomerOrderTypeInPaymentsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerOrderTypeExtend = {
  __typename?: 'CustomerOrderTypeExtend';
  addresses: Array<OrderAddressType>;
  /** Available payment methods */
  availablePaymentMethods: Array<OrderPaymentMethodType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  channelId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  coupons: Array<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: CurrencyType;
  customerId: Scalars['String']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  discountAmount: MoneyType;
  discountTotal: MoneyType;
  discountTotalWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: MoneyType;
  feeTotal: MoneyType;
  feeTotalWithTax: MoneyType;
  feeWithTax: MoneyType;
  id: Scalars['String']['output'];
  inPayments: Array<PaymentInType>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isPrototype: Scalars['Boolean']['output'];
  items: Array<OrderLineItemType>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  /** Order status change history */
  orderHistory?: Maybe<StatusChangeConnection>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  paymentDiscountTotal: MoneyType;
  paymentDiscountTotalWithTax: MoneyType;
  paymentSubTotal: MoneyType;
  paymentSubTotalWithTax: MoneyType;
  paymentTaxTotal: MoneyType;
  paymentTotal: MoneyType;
  paymentTotalWithTax: MoneyType;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  shipments: Array<OrderShipmentType>;
  shippingDiscountTotal: MoneyType;
  shippingDiscountTotalWithTax: MoneyType;
  shippingSubTotal: MoneyType;
  shippingSubTotalWithTax: MoneyType;
  shippingTaxTotal: MoneyType;
  shippingTotal: MoneyType;
  shippingTotalWithTax: MoneyType;
  shoppingCartId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  storeName?: Maybe<Scalars['String']['output']>;
  subTotal: MoneyType;
  subTotalDiscount: MoneyType;
  subTotalDiscountWithTax: MoneyType;
  subTotalTaxTotal: MoneyType;
  subTotalWithTax: MoneyType;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionNumber?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: MoneyType;
};


export type CustomerOrderTypeExtendInPaymentsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type CustomerOrderTypeExtendOrderHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection from an object to a list of objects of type `CustomerOrderTypeExtend`. */
export type CustomerOrderTypeExtendConnection = {
  __typename?: 'CustomerOrderTypeExtendConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CustomerOrderTypeExtendEdge>>>;
  /** Filter facets */
  filter_facets: Array<FilterFacet>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CustomerOrderTypeExtend>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Range facets */
  range_facets: Array<RangeFacet>;
  /** Term facets */
  term_facets: Array<TermFacet>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CustomerOrderTypeExtend`. */
export type CustomerOrderTypeExtendEdge = {
  __typename?: 'CustomerOrderTypeExtendEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CustomerOrderTypeExtend>;
};

export type CustomerReview = {
  __typename?: 'CustomerReview';
  createdDate: Scalars['DateTime']['output'];
  entityId: Scalars['String']['output'];
  entityName: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Maybe<CustomerReviewImage>>>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Int']['output'];
  review: Scalars['String']['output'];
  reviewStatus?: Maybe<CustomerReviewStatus>;
  storeId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

/** A connection from an object to a list of objects of type `CustomerReview`. */
export type CustomerReviewConnection = {
  __typename?: 'CustomerReviewConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CustomerReviewEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CustomerReview>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `CustomerReview`. */
export type CustomerReviewEdge = {
  __typename?: 'CustomerReviewEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CustomerReview>;
};

export type CustomerReviewImage = {
  __typename?: 'CustomerReviewImage';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum CustomerReviewStatus {
  Approved = 'APPROVED',
  New = 'NEW',
  Rejected = 'REJECTED'
}

export type DeleteFileCommandType = {
  id: Scalars['String']['input'];
};

export type DescriptionType = {
  __typename?: 'DescriptionType';
  /** Description text. */
  content?: Maybe<Scalars['String']['output']>;
  /** Description ID. */
  id: Scalars['String']['output'];
  /** Description language code. */
  languageCode?: Maybe<Scalars['String']['output']>;
  /** Description type. */
  reviewType?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `DictionaryItem`. */
export type DictionaryItemConnection = {
  __typename?: 'DictionaryItemConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DictionaryItemType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `DictionaryItem`. */
export type DictionaryItemEdge = {
  __typename?: 'DictionaryItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DictionaryItemType>;
};

export type DictionaryItemType = {
  __typename?: 'DictionaryItemType';
  /** Id */
  id: Scalars['String']['output'];
  /** Localized dictionary item value */
  label?: Maybe<Scalars['String']['output']>;
  /** Name */
  name: Scalars['String']['output'];
};

export type DiscountType = {
  __typename?: 'DiscountType';
  /** Discount amount */
  amount: Scalars['Decimal']['output'];
  /** Discount amount with tax */
  amountWithTax: Scalars['Decimal']['output'];
  /** Coupon */
  coupon?: Maybe<Scalars['String']['output']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount in the specified currency */
  moneyAmount: MoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: MoneyType;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']['output']>;
};

export type DynamicContentItemType = {
  __typename?: 'DynamicContentItemType';
  contentType: Scalars['String']['output'];
  description: Scalars['String']['output'];
  /** Dynamic content dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
};


export type DynamicContentItemTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
};

/** A connection from an object to a list of objects of type `DynamicProperty`. */
export type DynamicPropertyConnection = {
  __typename?: 'DynamicPropertyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DynamicPropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DynamicPropertyType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `DynamicProperty`. */
export type DynamicPropertyEdge = {
  __typename?: 'DynamicPropertyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DynamicPropertyType>;
};

export type DynamicPropertyType = {
  __typename?: 'DynamicPropertyType';
  dictionaryItems?: Maybe<DictionaryItemConnection>;
  /** The order for the dynamic property to display */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Id */
  id: Scalars['String']['output'];
  /** Is dynamic property value an array */
  isArray: Scalars['Boolean']['output'];
  /** Is dynamic property value a dictionary */
  isDictionary: Scalars['Boolean']['output'];
  /** Is dynamic property value multilingual */
  isMultilingual: Scalars['Boolean']['output'];
  /** Is dynamic property value required */
  isRequired: Scalars['Boolean']['output'];
  /** Localized property name */
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Object type */
  objectType: Scalars['String']['output'];
};


export type DynamicPropertyTypeDictionaryItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type DynamicPropertyValueType = {
  __typename?: 'DynamicPropertyValueType';
  /** Associated dictionary item */
  dictionaryItem?: Maybe<DictionaryItemType>;
  /** Associated dynamic property */
  dynamicProperty?: Maybe<DynamicPropertyType>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Property name */
  name?: Maybe<Scalars['String']['output']>;
  /** Property value */
  value?: Maybe<Scalars['DynamicPropertyValue']['output']>;
  /** Value type */
  valueType: Scalars['String']['output'];
};

/** Dynamic property value type */
export enum DynamicPropertyValueTypes {
  Boolean = 'BOOLEAN',
  DateTime = 'DATE_TIME',
  Decimal = 'DECIMAL',
  Html = 'HTML',
  Image = 'IMAGE',
  Integer = 'INTEGER',
  LongText = 'LONG_TEXT',
  ShortText = 'SHORT_TEXT',
  Undefined = 'UNDEFINED'
}

export type ErrorParameterType = {
  __typename?: 'ErrorParameterType';
  /** key */
  key: Scalars['String']['output'];
  /** Value */
  value: Scalars['String']['output'];
};

export type EvaluateDynamicContentResultType = {
  __typename?: 'EvaluateDynamicContentResultType';
  items?: Maybe<Array<Maybe<DynamicContentItemType>>>;
  totalCount: Scalars['Int']['output'];
};

export type Facet = {
  /** Three facet types: Terms, Range, and Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
};

export type FacetRangeType = {
  __typename?: 'FacetRangeType';
  /** Amount of products for which the values in a field fall into the specified range */
  count: Scalars['Long']['output'];
  /** The range’s lower endpoint in number format */
  from?: Maybe<Scalars['Decimal']['output']>;
  /** The range’s lower endpoint in string format, empty string represents infinity */
  fromStr?: Maybe<Scalars['String']['output']>;
  /** The flag indicates that From exclusive */
  includeFrom: Scalars['Boolean']['output'];
  /** The flag indicates that To exclusive */
  includeTo: Scalars['Boolean']['output'];
  /** is selected state */
  isSelected: Scalars['Boolean']['output'];
  /** Localization label */
  label: Scalars['String']['output'];
  /** Maximum value among all values contained within the range */
  max: Scalars['Decimal']['output'];
  /** Minimum value among all values contained within the range */
  min: Scalars['Decimal']['output'];
  /** The range’s upper endpoint in number format */
  to?: Maybe<Scalars['Decimal']['output']>;
  /** The range’s upper endpoint in string format, empty string represents infinity */
  toStr?: Maybe<Scalars['String']['output']>;
  /** Sum of all values contained in the range */
  total: Scalars['Long']['output'];
};

export type FacetTermType = {
  __typename?: 'FacetTermType';
  /** count */
  count: Scalars['Long']['output'];
  /** is selected state */
  isSelected: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  /** term */
  term: Scalars['String']['output'];
};

export enum FacetTypes {
  Filter = 'FILTER',
  Range = 'RANGE',
  Terms = 'TERMS'
}

export type FcmSettingsType = {
  __typename?: 'FcmSettingsType';
  apiKey: Scalars['String']['output'];
  appId: Scalars['String']['output'];
  authDomain: Scalars['String']['output'];
  messagingSenderId: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  storageBucket: Scalars['String']['output'];
  vapidKey: Scalars['String']['output'];
};

export type FileUploadScopeOptionsType = {
  __typename?: 'FileUploadScopeOptionsType';
  allowAnonymousUpload: Scalars['Boolean']['output'];
  allowedExtensions: Array<Maybe<Scalars['String']['output']>>;
  maxFileSize: Scalars['Long']['output'];
  scope: Scalars['String']['output'];
};

export type FilterFacet = Facet & {
  __typename?: 'FilterFacet';
  /** The number of products matching the value specified in the filter facet expression */
  count: Scalars['Int']['output'];
  /** The three types of facets. Terms, Range, Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
};

export type FulfillmentCenterAddressType = {
  __typename?: 'FulfillmentCenterAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `FulfillmentCenter`. */
export type FulfillmentCenterConnection = {
  __typename?: 'FulfillmentCenterConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<FulfillmentCenterEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FulfillmentCenterType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `FulfillmentCenter`. */
export type FulfillmentCenterEdge = {
  __typename?: 'FulfillmentCenterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FulfillmentCenterType>;
};

export type FulfillmentCenterType = {
  __typename?: 'FulfillmentCenterType';
  /** Fulfillment Center address. */
  address?: Maybe<FulfillmentCenterAddressType>;
  /** Fulfillment Center description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center GEO location. */
  geoLocation?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center ID. */
  id: Scalars['String']['output'];
  /** Fulfillment Center name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Nearest Fulfillment Centers */
  nearest?: Maybe<Array<Maybe<FulfillmentCenterType>>>;
  /** Fulfillment Center outerId. */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center short description. */
  shortDescription?: Maybe<Scalars['String']['output']>;
};


export type FulfillmentCenterTypeNearestArgs = {
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type GetRecentlyBrowsedResponseType = {
  __typename?: 'GetRecentlyBrowsedResponseType';
  products?: Maybe<Array<Maybe<Product>>>;
};

export type GetRecommendationsResponseType = {
  __typename?: 'GetRecommendationsResponseType';
  products?: Maybe<Array<Maybe<Product>>>;
};

export type GiftItemType = {
  __typename?: 'GiftItemType';
  /** Product category ID */
  categoryId?: Maybe<Scalars['String']['output']>;
  /** Artificial ID for this value object */
  id: Scalars['String']['output'];
  /** Value of reward image absolute URL */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Line item ID in case there is a gift in the cart. If there is no gift, it stays null */
  lineItemId?: Maybe<Scalars['String']['output']>;
  /** Measurement unit */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Name of the reward */
  name: Scalars['String']['output'];
  product?: Maybe<Product>;
  /** Product ID */
  productId?: Maybe<Scalars['String']['output']>;
  /** Promotion ID */
  promotionId: Scalars['String']['output'];
  /** Number of gifts in the reward */
  quantity: Scalars['Int']['output'];
};

export type GraphQlSettingsType = {
  __typename?: 'GraphQLSettingsType';
  /** Keep-alive message interval for GraphQL subscription */
  keepAliveInterval: Scalars['Seconds']['output'];
};

export type IdentityErrorInfoType = {
  __typename?: 'IdentityErrorInfoType';
  /** Error code */
  code: Scalars['String']['output'];
  /** Error description */
  description?: Maybe<Scalars['String']['output']>;
  /** Error parameter */
  parameter?: Maybe<Scalars['String']['output']>;
};

export type IdentityErrorType = {
  __typename?: 'IdentityErrorType';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IdentityResultResponse = {
  __typename?: 'IdentityResultResponse';
  /** List of errors if the operation failed. */
  errors?: Maybe<Array<Maybe<IdentityErrorInfoType>>>;
  /** Indicates whether the operation was successful. */
  succeeded: Scalars['Boolean']['output'];
};

export type IdentityResultType = {
  __typename?: 'IdentityResultType';
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IdentityErrorType>>>;
  succeeded: Scalars['Boolean']['output'];
};

export type ImageType = {
  __typename?: 'ImageType';
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** The description of the image */
  description?: Maybe<Scalars['String']['output']>;
  /** The group of the image */
  group?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the image */
  id: Scalars['String']['output'];
  /** The name of the image */
  name?: Maybe<Scalars['String']['output']>;
  /** The relative URL of the image */
  relativeUrl?: Maybe<Scalars['String']['output']>;
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** The URL of the image */
  url: Scalars['String']['output'];
};

export type InitializeCartPaymentResultType = {
  __typename?: 'InitializeCartPaymentResultType';
  actionHtmlForm?: Maybe<Scalars['String']['output']>;
  actionRedirectUrl?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
  paymentActionType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  publicParameters?: Maybe<Array<Maybe<KeyValueType>>>;
  storeId?: Maybe<Scalars['String']['output']>;
};

export type InitializePaymentResultType = {
  __typename?: 'InitializePaymentResultType';
  actionHtmlForm?: Maybe<Scalars['String']['output']>;
  actionRedirectUrl?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  paymentActionType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  publicParameters?: Maybe<Array<Maybe<KeyValueType>>>;
  storeId?: Maybe<Scalars['String']['output']>;
};

export type InputAddBulkItemsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Bulk cart items */
  cartItems: Array<InputMaybe<InputNewBulkItemType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddCouponType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Coupon code */
  couponCode: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddFcmTokenType = {
  token: Scalars['String']['input'];
};

export type InputAddGiftItemsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** IDs of gift rewards to add to the cart */
  ids: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddItemType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Configurable product support. List of configurable product sections */
  configurationSections?: InputMaybe<Array<InputMaybe<ConfigurationSectionInput>>>;
  /** Create date. Optional, to manually control line item position in the cart if required. ISO-8601 format, for example: 2025-01-23T11:46:11Z */
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Price */
  price?: InputMaybe<Scalars['Decimal']['input']>;
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddItemsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Cart items */
  cartItems: Array<InputMaybe<InputNewCartItemType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateCartAddressType = {
  /** Address */
  address: InputAddressType;
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateCartAddressTypeExtend = {
  /** Address */
  address: InputAddressTypeExtend;
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateCartPaymentType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Payment */
  payment: InputPaymentType;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateCartShipmentType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Shipment */
  shipment: InputShipmentType;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateCartShipmentTypeExtend = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** The shipment to add or update. */
  shipment: InputShipmentTypeExtend;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputAddOrUpdateOrderPaymentType = {
  /** Order ID */
  orderId: Scalars['String']['input'];
  /** Payment */
  payment: InputOrderPaymentType;
};

export type InputAddWishlistBulkItemType = {
  /** Configurable product support. List of configurable product sections */
  configurationSections?: InputMaybe<Array<InputMaybe<ConfigurationSectionInput>>>;
  /** Wish list ids */
  listIds: Array<InputMaybe<Scalars['String']['input']>>;
  /** Product id to add */
  productId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type InputAddWishlistItemType = {
  /** Configurable product support. List of configurable product sections */
  configurationSections?: InputMaybe<Array<InputMaybe<ConfigurationSectionInput>>>;
  /** Wish list id */
  listId: Scalars['String']['input'];
  /** Product id to add */
  productId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type InputAddWishlistItemsType = {
  listId: Scalars['String']['input'];
  /** List items */
  listItems: Array<InputNewWishlistItemType>;
};

export type InputAddressType = {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country */
  countryName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  key?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Outer ID */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region */
  regionName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']['input']>;
};

export type InputAddressTypeExtend = {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** Apartment Number */
  apartmentNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Building Number */
  buildingNumber?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Floor Number */
  floorNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Governorate */
  governorate?: InputMaybe<Scalars['String']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** ID */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Latitude */
  latitude?: InputMaybe<Scalars['String']['input']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['String']['input']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** Longitude */
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']['input']>;
  /** Outer ID */
  outerId?: InputMaybe<Scalars['String']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['String']['input']>;
  /** Region */
  regionName?: InputMaybe<Scalars['String']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['String']['input']>;
  /** Zone Id */
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

export type InputApplicationUserLoginType = {
  loginProvider: Scalars['String']['input'];
  providerKey: Scalars['String']['input'];
};

export type InputAssignPermissionScopeType = {
  scope: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type InputAssignPermissionType = {
  assignedScopes?: InputMaybe<Array<InputMaybe<InputAssignPermissionScopeType>>>;
  name: Scalars['String']['input'];
};

export type InputAssignRoleType = {
  concurrencyStamp?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<InputMaybe<InputAssignPermissionType>>;
};

export type InputAuthorizePaymentType = {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Input parameters */
  parameters?: InputMaybe<Array<InputMaybe<InputKeyValueType>>>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
};

export type InputCartItemQuantityType = {
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** New quantity */
  quantity: Scalars['Int']['input'];
};

export type InputChangeAllCartItemsSelectedType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartConfiguredItemType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Configuration sections */
  configurationSections?: InputMaybe<Array<InputMaybe<ConfigurationSectionInput>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartCurrencyType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Second cart currency */
  newCurrencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemCommentType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemPriceType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Price */
  price: Scalars['Decimal']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemQuantityType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemSelectedType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Is item selected for checkout */
  selectedForCheckout: Scalars['Boolean']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemsQuantityType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Cart items */
  cartItems: Array<InputMaybe<InputCartItemQuantityType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCartItemsSelectedType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List of line item Ids */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeCommentType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeOrderStatusTypeExtend = {
  /** Comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Order ID */
  orderId: Scalars['String']['input'];
  /** Reason */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Order status */
  status: Scalars['String']['input'];
};

export type InputChangeOrganizationContactRoleType = {
  /** Role IDs or names to be assigned to the user */
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** User identifier to be changed */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type InputChangePasswordType = {
  /** New password according with system security policy */
  newPassword: Scalars['String']['input'];
  /** Old user password */
  oldPassword: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
};

export type InputChangePurchaseOrderNumber = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Purchase Order Number */
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputChangeWishlistType = {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
  /** New List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
};

export type InputClearCartType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputClearPaymentsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputClearShipmentsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputCloneWishlistType = {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Source List ID */
  listId: Scalars['String']['input'];
  /** List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
};

export type InputConfirmEmailType = {
  /** Confirm email token */
  token: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
};

export type InputConfirmPhoneNumberType = {
  /** Confirm email token */
  token: Scalars['String']['input'];
  /** Username */
  username: Scalars['String']['input'];
};

export type InputCreateApplicationUserType = {
  /** Username of the creator */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** Date of user creation */
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** User Email */
  email: Scalars['String']['input'];
  /** User ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** External logins */
  logins?: InputMaybe<Array<InputMaybe<InputApplicationUserLoginType>>>;
  /** Id of the associated Member */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** User password (nullable, for external logins) */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Password expiration date */
  passwordExpired?: InputMaybe<Scalars['Boolean']['input']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<InputAssignRoleType>>>;
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']['input']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User name */
  userName: Scalars['String']['input'];
  /** User type (Manager, Customer) */
  userType: Scalars['String']['input'];
};

export type InputCreateCartFromWishlistType = {
  /** Wishlist ID */
  listId: Scalars['String']['input'];
};

export type InputCreateConfiguredLineItemCommand = {
  configurableProductId: Scalars['String']['input'];
  configurationSections?: InputMaybe<Array<InputMaybe<ConfigurationSectionInput>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateContactType = {
  about?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateOrderFromCartType = {
  /** Cart ID */
  cartId?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateOrganizationType = {
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputCreateUserType = {
  /** Application user to create */
  applicationUser: InputCreateApplicationUserType;
};

export type InputCreateWishlistType = {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
};

export type InputDeleteContactType = {
  contactId: Scalars['String']['input'];
};

export type InputDeleteFcmTokenType = {
  token: Scalars['String']['input'];
};

export type InputDeleteMemberAddressType = {
  addresses: Array<InputMaybe<InputMemberAddressType>>;
  memberId: Scalars['String']['input'];
};

export type InputDeleteMemberAddressTypeExtend = {
  addresses: Array<InputMaybe<InputMemberAddressTypeExtend>>;
  memberId: Scalars['String']['input'];
};

export type InputDeleteUserType = {
  userNames: Array<InputMaybe<Scalars['String']['input']>>;
};

export type InputDynamicPropertyValueType = {
  /** Culture name ("en-US") for multilingual property */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic property name */
  name: Scalars['String']['input'];
  /** Dynamic property value. ID must be passed for dictionary item */
  value?: InputMaybe<Scalars['DynamicPropertyValue']['input']>;
};

export type InputInitializeCartPaymentType = {
  cartId: Scalars['String']['input'];
  /** Payment Id */
  paymentId: Scalars['String']['input'];
};

export type InputInitializePaymentType = {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
};

export type InputInviteUserType = {
  /** Customer order Id to be associated with this user. */
  customerOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Emails which will receive invites */
  emails: Array<Scalars['String']['input']>;
  /** Optional message to include into email with instructions which invites persons will see */
  message?: InputMaybe<Scalars['String']['input']>;
  /** ID of organization where contact will be added for user */
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** Role IDs or names to be assigned to the invited user */
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ID of store which will send invites */
  storeId: Scalars['String']['input'];
  /** Optional URL suffix: you may provide here relative URL to your page which handle registration by invite */
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
};

export type InputKeyValueType = {
  /** Dictionary key */
  key: Scalars['String']['input'];
  /** Dictionary value */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type InputLockUnlockOrganizationContactType = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type InputMarkPushMessageReadType = {
  messageId: Scalars['String']['input'];
};

export type InputMarkPushMessageUnreadType = {
  messageId: Scalars['String']['input'];
};

export type InputMemberAddressType = {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city: Scalars['String']['input'];
  /** Country code */
  countryCode: Scalars['String']['input'];
  /** Country name */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** key */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Line1 */
  line1: Scalars['String']['input'];
  /** Line2 */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']['input']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['String']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode: Scalars['String']['input'];
  /** Region id */
  regionId?: InputMaybe<Scalars['String']['input']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['String']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type InputMemberAddressTypeExtend = {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** Apartment number */
  apartmentNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Building number */
  buildingNumber?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city: Scalars['String']['input'];
  /** Country code */
  countryCode: Scalars['String']['input'];
  /** Country name */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Floor number */
  floorNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Governorate */
  governorate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** Is default */
  isDefault: Scalars['Boolean']['input'];
  /** key */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Latitude */
  latitude?: InputMaybe<Scalars['String']['input']>;
  /** Line1 */
  line1: Scalars['String']['input'];
  /** Line2 */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** Longitude */
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']['input']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['String']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Region id */
  regionId?: InputMaybe<Scalars['String']['input']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['String']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['String']['input']>;
  /** Zone id */
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

export type InputMergeCartType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Delete second cart after merge */
  deleteAfterMerge?: InputMaybe<Scalars['Boolean']['input']>;
  /** Second cart Id */
  secondCartId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputMoveWishlistItemType = {
  /** Destination List ID */
  destinationListId: Scalars['String']['input'];
  /** Line item ID to move */
  lineItemId: Scalars['String']['input'];
  /** Source List ID */
  listId: Scalars['String']['input'];
};

export type InputNewBulkItemType = {
  /** Product SKU */
  productSku: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type InputNewCartItemType = {
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Product Id */
  productId: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type InputNewWishlistItemType = {
  /** Product Id */
  productId: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type InputOrderAddressType = {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country name */
  countryName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Id */
  key?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region id */
  regionId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']['input']>;
};

export type InputOrderPaymentType = {
  amount?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  billingAddress?: InputMaybe<InputOrderAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']['input']>;
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  /** Payment vendor ID value */
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
};

export type InputOtpValidation = {
  /** The OTP provided for validation. */
  otp: Scalars['String']['input'];
  /** The email address of the user. */
  username: Scalars['String']['input'];
};

export type InputPaymentType = {
  amount?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  billingAddress?: InputMaybe<InputAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']['input']>;
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  purpose?: InputMaybe<Scalars['OptionalString']['input']>;
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
};

export type InputPersonalDataType = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
};

export type InputPushHistoricalEventType = {
  eventType?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};

export type InputRegisterAccountType = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type InputRegisterByInvitationType = {
  /** Customer order Id to be associated with this user. */
  customerOrderId?: InputMaybe<Scalars['String']['input']>;
  /** First name of person */
  firstName: Scalars['String']['input'];
  /** Last name of person */
  lastName: Scalars['String']['input'];
  /** Password */
  password: Scalars['String']['input'];
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Invitation token */
  token: Scalars['String']['input'];
  /** ID of use created for invited email */
  userId: Scalars['String']['input'];
  /** Username */
  username: Scalars['String']['input'];
};

export type InputRegisterContactType = {
  about?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<InputMemberAddressType>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type InputRegisterOrganizationType = {
  address?: InputMaybe<InputMemberAddressType>;
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type InputRejectGiftItemsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Ids of gift lineItems to reject from cart */
  ids: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveCartAddressType = {
  /** Address Id */
  addressId: Scalars['String']['input'];
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveCartType = {
  /** Cart Id */
  cartId: Scalars['String']['input'];
  /** User Id */
  userId: Scalars['String']['input'];
};

export type InputRemoveCouponType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Coupon code */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveItemType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveItemsType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Array of line item Id */
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveMemberFromOrganizationType = {
  contactId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type InputRemoveShipmentType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Shipment Id */
  shipmentId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputRemoveWishlistItemType = {
  /** Line item ID to remove */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
  /** Line item product ID to remove */
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type InputRemoveWishlistItemsType = {
  /** Line item IDs to remove */
  lineItemIds: Array<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
};

export type InputRemoveWishlistType = {
  /** List ID */
  listId: Scalars['String']['input'];
};

export type InputRequestRegistrationType = {
  /** Creating contact's account */
  account: InputRegisterAccountType;
  /** Creating contact */
  contact: InputRegisterContactType;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']['input']>;
  /** company type */
  organization?: InputMaybe<InputRegisterOrganizationType>;
  /** Store ID */
  storeId: Scalars['String']['input'];
};

export type InputResetPasswordByTokenType = {
  /** New password according with system security policy */
  newPassword: Scalars['String']['input'];
  /** User password reset token */
  token: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
};

export type InputReturnLineItem = {
  /** OrderLineItemId */
  orderLineItemId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
  /** Reason */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type InputSaveForLaterType = {
  /** Source Cart ID */
  cartId: Scalars['String']['input'];
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item IDs to save for later */
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
};

export type InputSaveSearchQueryType = {
  query: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

export type InputSendVerifyEmailType = {
  email?: InputMaybe<Scalars['String']['input']>;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type InputSendVerifyPhoneNumberType = {
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type InputShipmentType = {
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Currency value */
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Delivery address */
  deliveryAddress?: InputMaybe<InputAddressType>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Fulfillment center iD */
  fulfillmentCenterId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Height value */
  height?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Shipment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Length value */
  length?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Measurement unit value */
  measureUnit?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Pickup location Id when shipment is Pickup */
  pickupLocationId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Price value */
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  /** Shipping method code */
  shipmentMethodCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Shipping method option */
  shipmentMethodOption?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Vendor ID */
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Volumetric weight value */
  volumetricWeight?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Weight value */
  weight?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Weight unit value */
  weightUnit?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Width value */
  width?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
};

export type InputShipmentTypeExtend = {
  /** Text comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Currency value */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Delivery address */
  deliveryAddress?: InputMaybe<InputAddressTypeExtend>;
  /** Dynamic property values */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Fulfillment center iD */
  fulfillmentCenterId?: InputMaybe<Scalars['String']['input']>;
  /** Height value */
  height?: InputMaybe<Scalars['Decimal']['input']>;
  /** Shipment ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Length value */
  length?: InputMaybe<Scalars['Decimal']['input']>;
  /** Measurement unit value */
  measureUnit?: InputMaybe<Scalars['String']['input']>;
  /** Price value */
  price?: InputMaybe<Scalars['Decimal']['input']>;
  /** Shipping method code */
  shipmentMethodCode?: InputMaybe<Scalars['String']['input']>;
  /** Shipping method option */
  shipmentMethodOption?: InputMaybe<Scalars['String']['input']>;
  /** Vendor ID */
  vendorId?: InputMaybe<Scalars['String']['input']>;
  /** Volumetric weight value */
  volumetricWeight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Weight value */
  weight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Weight unit value */
  weightUnit?: InputMaybe<Scalars['String']['input']>;
  /** Width value */
  width?: InputMaybe<Scalars['Decimal']['input']>;
};

export type InputUpdateApplicationUserType = {
  /** Failed login attempts for the current user */
  accessFailedCount?: InputMaybe<Scalars['Int']['input']>;
  /** User Email */
  email: Scalars['String']['input'];
  /** User ID */
  id: Scalars['String']['input'];
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** Id of the associated Member */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** Password Hash */
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<InputAssignRoleType>>>;
  /** SecurityStamp */
  securityStamp: Scalars['String']['input'];
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']['input']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User name */
  userName: Scalars['String']['input'];
  /** User type (Manager, Customer) */
  userType: Scalars['String']['input'];
};

export type InputUpdateCartDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputUpdateCartItemDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputUpdateCartPaymentDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputUpdateCartQuantity = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<InputUpdateCartQuantityItem>>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputUpdateCartQuantityItem = {
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
};

export type InputUpdateCartShipmentDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Shipment Id */
  shipmentId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type InputUpdateContactTypeExtend = {
  about?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateMemberAddressType = {
  addresses: Array<InputMaybe<InputMemberAddressType>>;
  memberId: Scalars['String']['input'];
};

export type InputUpdateMemberAddressTypeExtend = {
  addresses: Array<InputMaybe<InputMemberAddressTypeExtend>>;
  memberId: Scalars['String']['input'];
};

export type InputUpdateMemberDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  memberId: Scalars['String']['input'];
};

export type InputUpdateOrderDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateOrderItemDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateOrderPaymentDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateOrderShipmentDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  shipmentId?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateOrganizationType = {
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InputUpdatePersonalDataTypeExtend = {
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  personalData: InputPersonalDataType;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateRoleInnerType = {
  /** Concurrency Stamp */
  concurrencyStamp?: InputMaybe<Scalars['String']['input']>;
  /** Role description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Role ID */
  id: Scalars['String']['input'];
  /** Role name */
  name: Scalars['String']['input'];
  /** List of Role permissions */
  permissions: Array<InputMaybe<InputAssignPermissionType>>;
};

export type InputUpdateRoleType = {
  /** Role to update */
  role: InputUpdateRoleInnerType;
};

export type InputUpdateUserType = {
  /** Application user to update */
  applicationUser: InputUpdateApplicationUserType;
};

export type InputUpdateWishlistItemsType = {
  /** Bulk wishlist items */
  items: Array<InputMaybe<InputUpdateWishlistLineItemType>>;
  /** Wish list id */
  listId: Scalars['String']['input'];
};

export type InputUpdateWishlistLineItemType = {
  /** Line Item Id to update */
  lineItemId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity: Scalars['Int']['input'];
};

export type InventoryInfo = {
  __typename?: 'InventoryInfo';
  /** Allow backorder */
  allowBackorder: Scalars['Boolean']['output'];
  /** Allow preorder */
  allowPreorder: Scalars['Boolean']['output'];
  /** Backorder availability date */
  backorderAvailabilityDate?: Maybe<Scalars['DateTime']['output']>;
  fulfillmentCenterId: Scalars['String']['output'];
  fulfillmentCenterName: Scalars['String']['output'];
  /** Inventory in stock quantity */
  inStockQuantity: Scalars['Long']['output'];
  /** Preorder availability date */
  preorderAvailabilityDate?: Maybe<Scalars['DateTime']['output']>;
  /** Inventory reserved quantity */
  reservedQuantity: Scalars['Long']['output'];
};

export type KeyValueType = {
  __typename?: 'KeyValueType';
  /** Dictionary key */
  key: Scalars['String']['output'];
  /** Dictionary value */
  value?: Maybe<Scalars['String']['output']>;
};

export type LanguageType = {
  __typename?: 'LanguageType';
  /** Culture name format (e.g. en-US) */
  cultureName: Scalars['String']['output'];
  /** Is invariant */
  isInvariant: Scalars['Boolean']['output'];
  /** Native name */
  nativeName: Scalars['String']['output'];
  /** ISO 639-2 three-letter code for the language. */
  threeLetterLanguageName: Scalars['String']['output'];
  /** Three-letter code defined in ISO 3166 for the country/region. */
  threeLetterRegionName: Scalars['String']['output'];
  /** ISO 639-1 two-letter code for the language. */
  twoLetterLanguageName: Scalars['String']['output'];
  /** Two-letter code defined in ISO 3166 for the country/region. */
  twoLetterRegionName: Scalars['String']['output'];
};

export type LineItemType = {
  __typename?: 'LineItemType';
  /** Catalog ID value */
  catalogId: Scalars['String']['output'];
  /** Category ID value */
  categoryId?: Maybe<Scalars['String']['output']>;
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<CartConfigurationItemType>>>;
  /** Line item create date */
  createdDate: Scalars['DateTime']['output'];
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Total discount */
  discountTotal: MoneyType;
  /** Total discount with tax */
  discountTotalWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart line item dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Extended price */
  extendedPrice: MoneyType;
  /** Extended price with tax */
  extendedPriceWithTax: MoneyType;
  /** Line item fulfillment center ID value */
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  /** Line item fulfillment center name value */
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  /** Height value */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** Line item ID */
  id: Scalars['String']['output'];
  /** Value of line item image absolute URL */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** In stock quantity */
  inStockQuantity: Scalars['Int']['output'];
  /** flag of line item is a gift */
  isGift: Scalars['Boolean']['output'];
  /** Shows whether this is read-only */
  isReadOnly: Scalars['Boolean']['output'];
  /** Shows whether the line item is recurring */
  isReccuring: Scalars['Boolean']['output'];
  /** Shows whether this is valid */
  isValid: Scalars['Boolean']['output'];
  /** Culture name in the ISO 3166-1 alpha-3 format */
  languageCode?: Maybe<Scalars['String']['output']>;
  /** Length value */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** List price */
  listPrice: MoneyType;
  /** List price with tax */
  listPriceWithTax: MoneyType;
  /** List total */
  listTotal: MoneyType;
  /** List total with tax */
  listTotalWithTax: MoneyType;
  /** Measurement unit value */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Line item name value */
  name: Scalars['String']['output'];
  /** Line item comment */
  note?: Maybe<Scalars['String']['output']>;
  /** Line item quantity value */
  objectType: Scalars['String']['output'];
  /** Placed price */
  placedPrice: MoneyType;
  /** Placed price with tax */
  placedPriceWithTax: MoneyType;
  product?: Maybe<Product>;
  /** Product ID value */
  productId: Scalars['String']['output'];
  /** Product outer Id */
  productOuterId?: Maybe<Scalars['String']['output']>;
  /** Product type: Physical, Digital, or Subscription */
  productType?: Maybe<Scalars['String']['output']>;
  /** Line item quantity value */
  quantity: Scalars['Int']['output'];
  /** Requirement for line item shipping */
  requiredShipping: Scalars['Boolean']['output'];
  /** Sale price */
  salePrice: MoneyType;
  /** Sale price with tax */
  salePriceWithTax: MoneyType;
  /** Shows whether the line item is selected for buying */
  selectedForCheckout: Scalars['Boolean']['output'];
  /** Line item shipping method code value */
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the PlacedPrice should be visible to the customer */
  showPlacedPrice: Scalars['Boolean']['output'];
  /** Product SKU value */
  sku: Scalars['String']['output'];
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Total shipping tax amount value */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: MoneyType;
  /** Shipping tax type value */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Value of line item thumbnail image absolute URL */
  thumbnailImageUrl?: Maybe<Scalars['String']['output']>;
  /** Validation errors */
  validationErrors: Array<ValidationErrorType>;
  vendor?: Maybe<CommonVendor>;
  /** Volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** Warehouse location */
  warehouseLocation?: Maybe<Scalars['String']['output']>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Weight unit value */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Width value */
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type LocalizedSettingResponseType = {
  __typename?: 'LocalizedSettingResponseType';
  items?: Maybe<Array<Maybe<KeyValueType>>>;
};

/** A connection from an object to a list of objects of type `Lookup`. */
export type LookupConnection = {
  __typename?: 'LookupConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<LookupEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<LookupType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Lookup`. */
export type LookupEdge = {
  __typename?: 'LookupEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LookupType>;
};

export type LookupType = {
  __typename?: 'LookupType';
  channel?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  storeId?: Maybe<Scalars['String']['output']>;
  /** List of translations for this lookup */
  translations: Array<TranslationType>;
};

export type MemberAddressTypeExtend = {
  __typename?: 'MemberAddressTypeExtend';
  addressType?: Maybe<Scalars['Int']['output']>;
  apartmentNumber?: Maybe<Scalars['Int']['output']>;
  buildingNumber?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  floorNumber?: Maybe<Scalars['Int']['output']>;
  governorate?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Is default address or not */
  isDefault: Scalars['Boolean']['output'];
  /** Is favorite address or not */
  isFavorite: Scalars['Boolean']['output'];
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
  zoneId?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `MemberAddressTypeExtend`. */
export type MemberAddressTypeExtendConnection = {
  __typename?: 'MemberAddressTypeExtendConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<MemberAddressTypeExtendEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<MemberAddressTypeExtend>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `MemberAddressTypeExtend`. */
export type MemberAddressTypeExtendEdge = {
  __typename?: 'MemberAddressTypeExtendEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MemberAddressTypeExtend>;
};

export type MemberType = {
  __typename?: 'MemberType';
  addresses?: Maybe<MemberAddressTypeExtendConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};


export type MemberTypeAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type MemberTypeSeoInfoArgs = {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

export type MenuLinkListType = {
  __typename?: 'MenuLinkListType';
  items: Array<MenuLinkType>;
  /** Menu name */
  name: Scalars['String']['output'];
  /** Menu outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
};

export type MenuLinkListTypeExtend = {
  __typename?: 'MenuLinkListTypeExtend';
  items: Array<MenuLinkType>;
  itemsExtended: Array<MenuLinkTypeExtend>;
  /** Menu name */
  name: Scalars['String']['output'];
  /** Menu outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
};

export type MenuLinkType = {
  __typename?: 'MenuLinkType';
  /** Menu item object ID */
  associatedObjectId?: Maybe<Scalars['String']['output']>;
  /** Menu item object name */
  associatedObjectName?: Maybe<Scalars['String']['output']>;
  /** Menu item type name */
  associatedObjectType?: Maybe<Scalars['String']['output']>;
  childItems: Array<MenuLinkType>;
  /** Menu item outerID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Menu item priority */
  priority: Scalars['Int']['output'];
  /** Menu item title */
  title: Scalars['String']['output'];
  /** Menu item url */
  url: Scalars['String']['output'];
};

export type MenuLinkTypeExtend = {
  __typename?: 'MenuLinkTypeExtend';
  /** Menu item object ID */
  associatedObjectId?: Maybe<Scalars['String']['output']>;
  /** Menu item object name */
  associatedObjectName?: Maybe<Scalars['String']['output']>;
  /** Menu item type name */
  associatedObjectType?: Maybe<Scalars['String']['output']>;
  childItems: Array<MenuLinkType>;
  childItemsExtended: Array<MenuLinkTypeExtend>;
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  /** Menu item outerID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Menu item priority */
  priority: Scalars['Int']['output'];
  /** Menu item title */
  title: Scalars['String']['output'];
  /** Menu item url */
  url: Scalars['String']['output'];
};

export type ModuleSettingType = {
  __typename?: 'ModuleSettingType';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['ModuleSettingValue']['output']>;
};

export type ModuleSettingsType = {
  __typename?: 'ModuleSettingsType';
  moduleId: Scalars['String']['output'];
  settings: Array<ModuleSettingType>;
};

export type MoneyType = {
  __typename?: 'MoneyType';
  /** A decimal with the amount rounded to the significant number of decimal digits. */
  amount: Scalars['Decimal']['output'];
  /** Currency type */
  currency: CurrencyType;
  /** Number of decimal digits for the associated currency. */
  decimalDigits: Scalars['Int']['output'];
  /** Formatted amount. */
  formattedAmount: Scalars['String']['output'];
  /** Formatted amount without currency. */
  formattedAmountWithoutCurrency: Scalars['String']['output'];
  /** Formatted amount without point. */
  formattedAmountWithoutPoint: Scalars['String']['output'];
  /** Formatted amount without point and currency. */
  formattedAmountWithoutPointAndCurrency: Scalars['String']['output'];
};

export type Mutations = {
  __typename?: 'Mutations';
  addAddressToFavorites?: Maybe<Scalars['Boolean']['output']>;
  addBulkItemsCart?: Maybe<BulkCartType>;
  addCartAddress?: Maybe<CartType>;
  addCoupon?: Maybe<CartType>;
  addFcmToken?: Maybe<Scalars['Boolean']['output']>;
  addGiftItems?: Maybe<CartType>;
  addItem?: Maybe<CartType>;
  addItemsCart?: Maybe<CartType>;
  addOrUpdateCartAddress?: Maybe<CartType>;
  addOrUpdateCartAddressExtend?: Maybe<CartType>;
  addOrUpdateCartPayment?: Maybe<CartType>;
  addOrUpdateCartShipment?: Maybe<CartType>;
  addOrUpdateCartShipmentExtend?: Maybe<CartType>;
  addOrUpdateOrderPayment?: Maybe<CustomerOrderTypeExtend>;
  addWishlistBulkItem?: Maybe<BulkWishlistType>;
  addWishlistItem?: Maybe<WishlistType>;
  addWishlistItems?: Maybe<WishlistType>;
  authorizePayment?: Maybe<AuthorizePaymentResultType>;
  changeCartConfiguredItem?: Maybe<CartType>;
  changeCartCurrency?: Maybe<CartType>;
  changeCartItemComment?: Maybe<CartType>;
  changeCartItemPrice?: Maybe<CartType>;
  changeCartItemQuantity?: Maybe<CartType>;
  changeCartItemSelected?: Maybe<CartType>;
  changeCartItemsQuantity?: Maybe<CartType>;
  changeComment?: Maybe<CartType>;
  changeOrderStatus?: Maybe<Scalars['Boolean']['output']>;
  changeOrganizationContactRole?: Maybe<CustomIdentityResultType>;
  changePassword?: Maybe<CustomIdentityResultType>;
  changePurchaseOrderNumber?: Maybe<CartType>;
  changeWishlist?: Maybe<WishlistType>;
  clearAllPushMessages?: Maybe<Scalars['Boolean']['output']>;
  clearCart?: Maybe<CartType>;
  clearPayments?: Maybe<CartType>;
  clearShipments?: Maybe<CartType>;
  cloneWishlist?: Maybe<WishlistType>;
  confirmEmail?: Maybe<CustomIdentityResultType>;
  confirmPhoneNumber?: Maybe<IdentityResultResponse>;
  createCartFromWishlist?: Maybe<CartType>;
  createComplaintReason?: Maybe<ComplaintReason>;
  createConfiguredLineItem?: Maybe<ConfigurationLineItemType>;
  createContact?: Maybe<ContactTypeExtend>;
  createCustomerComplaint?: Maybe<CustomerComplaintResult>;
  createOrderFromCart?: Maybe<CustomerOrderTypeExtend>;
  createOrganization?: Maybe<Organization>;
  createReturn?: Maybe<Return>;
  createReview?: Maybe<CreateReviewResult>;
  createUser?: Maybe<IdentityResultType>;
  createWishlist?: Maybe<WishlistType>;
  customRegister?: Maybe<CustomIdentityResultType>;
  deleteContact?: Maybe<Scalars['Boolean']['output']>;
  deleteFcmToken?: Maybe<Scalars['Boolean']['output']>;
  deleteFile?: Maybe<Scalars['Boolean']['output']>;
  deleteMemberAddresses?: Maybe<MemberType>;
  deleteMemberAddressesExtend?: Maybe<MemberType>;
  deleteUsers?: Maybe<IdentityResultType>;
  initializeCartPayment?: Maybe<InitializeCartPaymentResultType>;
  initializePayment?: Maybe<InitializePaymentResultType>;
  inviteUser?: Maybe<CustomIdentityResultType>;
  lockOrganizationContact?: Maybe<ContactTypeExtend>;
  markAllPushMessagesRead?: Maybe<Scalars['Boolean']['output']>;
  markAllPushMessagesUnread?: Maybe<Scalars['Boolean']['output']>;
  markPushMessageRead?: Maybe<Scalars['Boolean']['output']>;
  markPushMessageUnread?: Maybe<Scalars['Boolean']['output']>;
  mergeCart?: Maybe<CartType>;
  moveFromSavedForLater?: Maybe<CartWithListType>;
  moveToSavedForLater?: Maybe<CartWithListType>;
  moveWishlistItem?: Maybe<WishlistType>;
  pushHistoricalEvent?: Maybe<Scalars['Boolean']['output']>;
  refreshCart?: Maybe<CartType>;
  registerByInvitation?: Maybe<CustomIdentityResultType>;
  rejectGiftItems?: Maybe<CartType>;
  removeAddressFromFavorites?: Maybe<Scalars['Boolean']['output']>;
  removeCart?: Maybe<Scalars['Boolean']['output']>;
  removeCartAddress?: Maybe<CartType>;
  removeCartItem?: Maybe<CartType>;
  removeCartItems?: Maybe<CartType>;
  removeCoupon?: Maybe<CartType>;
  removeMemberFromOrganization?: Maybe<ContactTypeExtend>;
  removeShipment?: Maybe<CartType>;
  removeWishlist?: Maybe<Scalars['Boolean']['output']>;
  removeWishlistItem?: Maybe<WishlistType>;
  removeWishlistItems?: Maybe<WishlistType>;
  requestPasswordResetOtp?: Maybe<Scalars['Boolean']['output']>;
  requestRegistration?: Maybe<RequestRegistrationType>;
  resetPasswordByOtp?: Maybe<IdentityResultResponse>;
  resetPasswordByToken?: Maybe<CustomIdentityResultType>;
  saveSearchQuery?: Maybe<Scalars['Boolean']['output']>;
  selectAllCartItems?: Maybe<CartType>;
  selectCartItems?: Maybe<CartType>;
  sendPasswordResetEmail?: Maybe<Scalars['Boolean']['output']>;
  sendVerifyEmail?: Maybe<Scalars['Boolean']['output']>;
  unSelectAllCartItems?: Maybe<CartType>;
  unSelectCartItems?: Maybe<CartType>;
  unlockOrganizationContact?: Maybe<ContactTypeExtend>;
  updateCartDynamicProperties?: Maybe<CartType>;
  updateCartItemDynamicProperties?: Maybe<CartType>;
  updateCartPaymentDynamicProperties?: Maybe<CartType>;
  updateCartQuantity?: Maybe<CartType>;
  updateCartShipmentDynamicProperties?: Maybe<CartType>;
  updateContact?: Maybe<ContactTypeExtend>;
  updateMemberAddresses?: Maybe<MemberType>;
  updateMemberAddressesExtended?: Maybe<MemberType>;
  updateMemberDynamicProperties?: Maybe<MemberType>;
  updateOrderDynamicProperties?: Maybe<CustomerOrderTypeExtend>;
  updateOrderItemDynamicProperties?: Maybe<CustomerOrderTypeExtend>;
  updateOrderPaymentDynamicProperties?: Maybe<CustomerOrderTypeExtend>;
  updateOrderShipmentDynamicProperties?: Maybe<CustomerOrderTypeExtend>;
  updateOrganization?: Maybe<Organization>;
  updatePersonalData?: Maybe<IdentityResultType>;
  updateRole?: Maybe<IdentityResultType>;
  updateUser?: Maybe<IdentityResultType>;
  updateWishListItems?: Maybe<WishlistType>;
};


export type MutationsAddAddressToFavoritesArgs = {
  command: AddAddressToFavoritesCommandType;
};


export type MutationsAddBulkItemsCartArgs = {
  command: InputAddBulkItemsType;
};


export type MutationsAddCartAddressArgs = {
  command: InputAddOrUpdateCartAddressType;
};


export type MutationsAddCouponArgs = {
  command: InputAddCouponType;
};


export type MutationsAddFcmTokenArgs = {
  command: InputAddFcmTokenType;
};


export type MutationsAddGiftItemsArgs = {
  command: InputAddGiftItemsType;
};


export type MutationsAddItemArgs = {
  command: InputAddItemType;
};


export type MutationsAddItemsCartArgs = {
  command: InputAddItemsType;
};


export type MutationsAddOrUpdateCartAddressArgs = {
  command: InputAddOrUpdateCartAddressType;
};


export type MutationsAddOrUpdateCartAddressExtendArgs = {
  command: InputAddOrUpdateCartAddressTypeExtend;
};


export type MutationsAddOrUpdateCartPaymentArgs = {
  command: InputAddOrUpdateCartPaymentType;
};


export type MutationsAddOrUpdateCartShipmentArgs = {
  command: InputAddOrUpdateCartShipmentType;
};


export type MutationsAddOrUpdateCartShipmentExtendArgs = {
  command: InputAddOrUpdateCartShipmentTypeExtend;
};


export type MutationsAddOrUpdateOrderPaymentArgs = {
  command: InputAddOrUpdateOrderPaymentType;
};


export type MutationsAddWishlistBulkItemArgs = {
  command: InputAddWishlistBulkItemType;
};


export type MutationsAddWishlistItemArgs = {
  command: InputAddWishlistItemType;
};


export type MutationsAddWishlistItemsArgs = {
  command: InputAddWishlistItemsType;
};


export type MutationsAuthorizePaymentArgs = {
  command: InputAuthorizePaymentType;
};


export type MutationsChangeCartConfiguredItemArgs = {
  command: InputChangeCartConfiguredItemType;
};


export type MutationsChangeCartCurrencyArgs = {
  command: InputChangeCartCurrencyType;
};


export type MutationsChangeCartItemCommentArgs = {
  command?: InputMaybe<InputChangeCartItemCommentType>;
};


export type MutationsChangeCartItemPriceArgs = {
  command: InputChangeCartItemPriceType;
};


export type MutationsChangeCartItemQuantityArgs = {
  command: InputChangeCartItemQuantityType;
};


export type MutationsChangeCartItemSelectedArgs = {
  command?: InputMaybe<InputChangeCartItemSelectedType>;
};


export type MutationsChangeCartItemsQuantityArgs = {
  command: InputChangeCartItemsQuantityType;
};


export type MutationsChangeCommentArgs = {
  command?: InputMaybe<InputChangeCommentType>;
};


export type MutationsChangeOrderStatusArgs = {
  command: InputChangeOrderStatusTypeExtend;
};


export type MutationsChangeOrganizationContactRoleArgs = {
  command: InputChangeOrganizationContactRoleType;
};


export type MutationsChangePasswordArgs = {
  command?: InputMaybe<InputChangePasswordType>;
};


export type MutationsChangePurchaseOrderNumberArgs = {
  command?: InputMaybe<InputChangePurchaseOrderNumber>;
};


export type MutationsChangeWishlistArgs = {
  command: InputChangeWishlistType;
};


export type MutationsClearCartArgs = {
  command: InputClearCartType;
};


export type MutationsClearPaymentsArgs = {
  command: InputClearPaymentsType;
};


export type MutationsClearShipmentsArgs = {
  command: InputClearShipmentsType;
};


export type MutationsCloneWishlistArgs = {
  command: InputCloneWishlistType;
};


export type MutationsConfirmEmailArgs = {
  command: InputConfirmEmailType;
};


export type MutationsConfirmPhoneNumberArgs = {
  command: ConfirmPhoneNumberInput;
};


export type MutationsCreateCartFromWishlistArgs = {
  command: InputCreateCartFromWishlistType;
};


export type MutationsCreateComplaintReasonArgs = {
  command: CreateComplaintReasonCommandType;
};


export type MutationsCreateConfiguredLineItemArgs = {
  command: InputCreateConfiguredLineItemCommand;
};


export type MutationsCreateContactArgs = {
  command: InputCreateContactType;
};


export type MutationsCreateCustomerComplaintArgs = {
  command: CreateCustomerComplaintCommandType;
};


export type MutationsCreateOrderFromCartArgs = {
  command: InputCreateOrderFromCartType;
};


export type MutationsCreateOrganizationArgs = {
  command: InputCreateOrganizationType;
};


export type MutationsCreateReturnArgs = {
  command: CreateReturnCommandType;
};


export type MutationsCreateReviewArgs = {
  command: CreateReviewCommandType;
};


export type MutationsCreateUserArgs = {
  command: InputCreateUserType;
};


export type MutationsCreateWishlistArgs = {
  command: InputCreateWishlistType;
};


export type MutationsDeleteContactArgs = {
  command: InputDeleteContactType;
};


export type MutationsDeleteFcmTokenArgs = {
  command: InputDeleteFcmTokenType;
};


export type MutationsDeleteFileArgs = {
  command: DeleteFileCommandType;
};


export type MutationsDeleteMemberAddressesArgs = {
  command: InputDeleteMemberAddressType;
};


export type MutationsDeleteMemberAddressesExtendArgs = {
  command: InputDeleteMemberAddressTypeExtend;
};


export type MutationsDeleteUsersArgs = {
  command: InputDeleteUserType;
};


export type MutationsInitializeCartPaymentArgs = {
  command: InputInitializeCartPaymentType;
};


export type MutationsInitializePaymentArgs = {
  command: InputInitializePaymentType;
};


export type MutationsInviteUserArgs = {
  command: InputInviteUserType;
};


export type MutationsLockOrganizationContactArgs = {
  command: InputLockUnlockOrganizationContactType;
};


export type MutationsMarkPushMessageReadArgs = {
  command: InputMarkPushMessageReadType;
};


export type MutationsMarkPushMessageUnreadArgs = {
  command: InputMarkPushMessageUnreadType;
};


export type MutationsMergeCartArgs = {
  command: InputMergeCartType;
};


export type MutationsMoveFromSavedForLaterArgs = {
  command: InputSaveForLaterType;
};


export type MutationsMoveToSavedForLaterArgs = {
  command: InputSaveForLaterType;
};


export type MutationsMoveWishlistItemArgs = {
  command: InputMoveWishlistItemType;
};


export type MutationsPushHistoricalEventArgs = {
  command: InputPushHistoricalEventType;
};


export type MutationsRefreshCartArgs = {
  command: RefreshCartType;
};


export type MutationsRegisterByInvitationArgs = {
  command: InputRegisterByInvitationType;
};


export type MutationsRejectGiftItemsArgs = {
  command: InputRejectGiftItemsType;
};


export type MutationsRemoveAddressFromFavoritesArgs = {
  command: RemoveAddressFromFavoritesCommandType;
};


export type MutationsRemoveCartArgs = {
  command: InputRemoveCartType;
};


export type MutationsRemoveCartAddressArgs = {
  command: InputRemoveCartAddressType;
};


export type MutationsRemoveCartItemArgs = {
  command: InputRemoveItemType;
};


export type MutationsRemoveCartItemsArgs = {
  command: InputRemoveItemsType;
};


export type MutationsRemoveCouponArgs = {
  command: InputRemoveCouponType;
};


export type MutationsRemoveMemberFromOrganizationArgs = {
  command: InputRemoveMemberFromOrganizationType;
};


export type MutationsRemoveShipmentArgs = {
  command: InputRemoveShipmentType;
};


export type MutationsRemoveWishlistArgs = {
  command: InputRemoveWishlistType;
};


export type MutationsRemoveWishlistItemArgs = {
  command: InputRemoveWishlistItemType;
};


export type MutationsRemoveWishlistItemsArgs = {
  command: InputRemoveWishlistItemsType;
};


export type MutationsRequestPasswordResetOtpArgs = {
  command: RequestPasswordResetOtpInput;
};


export type MutationsRequestRegistrationArgs = {
  command: InputRequestRegistrationType;
};


export type MutationsResetPasswordByOtpArgs = {
  command: ResetPasswordByOtpInput;
};


export type MutationsResetPasswordByTokenArgs = {
  command?: InputMaybe<InputResetPasswordByTokenType>;
};


export type MutationsSaveSearchQueryArgs = {
  command: InputSaveSearchQueryType;
};


export type MutationsSelectAllCartItemsArgs = {
  command?: InputMaybe<InputChangeAllCartItemsSelectedType>;
};


export type MutationsSelectCartItemsArgs = {
  command?: InputMaybe<InputChangeCartItemsSelectedType>;
};


export type MutationsSendPasswordResetEmailArgs = {
  command: SendPasswordResetEmailCommandType;
};


export type MutationsSendVerifyEmailArgs = {
  command?: InputMaybe<InputSendVerifyEmailType>;
};


export type MutationsUnSelectAllCartItemsArgs = {
  command?: InputMaybe<InputChangeAllCartItemsSelectedType>;
};


export type MutationsUnSelectCartItemsArgs = {
  command?: InputMaybe<InputChangeCartItemsSelectedType>;
};


export type MutationsUnlockOrganizationContactArgs = {
  command: InputLockUnlockOrganizationContactType;
};


export type MutationsUpdateCartDynamicPropertiesArgs = {
  command: InputUpdateCartDynamicPropertiesType;
};


export type MutationsUpdateCartItemDynamicPropertiesArgs = {
  command: InputUpdateCartItemDynamicPropertiesType;
};


export type MutationsUpdateCartPaymentDynamicPropertiesArgs = {
  command: InputUpdateCartPaymentDynamicPropertiesType;
};


export type MutationsUpdateCartQuantityArgs = {
  command: InputUpdateCartQuantity;
};


export type MutationsUpdateCartShipmentDynamicPropertiesArgs = {
  command: InputUpdateCartShipmentDynamicPropertiesType;
};


export type MutationsUpdateContactArgs = {
  command: InputUpdateContactTypeExtend;
};


export type MutationsUpdateMemberAddressesArgs = {
  command: InputUpdateMemberAddressType;
};


export type MutationsUpdateMemberAddressesExtendedArgs = {
  command: InputUpdateMemberAddressTypeExtend;
};


export type MutationsUpdateMemberDynamicPropertiesArgs = {
  command: InputUpdateMemberDynamicPropertiesType;
};


export type MutationsUpdateOrderDynamicPropertiesArgs = {
  command: InputUpdateOrderDynamicPropertiesType;
};


export type MutationsUpdateOrderItemDynamicPropertiesArgs = {
  command: InputUpdateOrderItemDynamicPropertiesType;
};


export type MutationsUpdateOrderPaymentDynamicPropertiesArgs = {
  command: InputUpdateOrderPaymentDynamicPropertiesType;
};


export type MutationsUpdateOrderShipmentDynamicPropertiesArgs = {
  command: InputUpdateOrderShipmentDynamicPropertiesType;
};


export type MutationsUpdateOrganizationArgs = {
  command: InputUpdateOrganizationType;
};


export type MutationsUpdatePersonalDataArgs = {
  command: InputUpdatePersonalDataTypeExtend;
};


export type MutationsUpdateRoleArgs = {
  command: InputUpdateRoleType;
};


export type MutationsUpdateUserArgs = {
  command: InputUpdateUserType;
};


export type MutationsUpdateWishListItemsArgs = {
  command: InputUpdateWishlistItemsType;
};

export type NewsArticleAuthor = {
  __typename?: 'NewsArticleAuthor';
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type NewsArticleContent = {
  __typename?: 'NewsArticleContent';
  author?: Maybe<NewsArticleAuthor>;
  content?: Maybe<Scalars['String']['output']>;
  contentPreview?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isArchived: Scalars['Boolean']['output'];
  listPreview?: Maybe<Scalars['String']['output']>;
  listTitle?: Maybe<Scalars['String']['output']>;
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  seoInfo: SeoInfo;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `NewsArticleContent`. */
export type NewsArticleContentConnection = {
  __typename?: 'NewsArticleContentConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<NewsArticleContentEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<NewsArticleContent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `NewsArticleContent`. */
export type NewsArticleContentEdge = {
  __typename?: 'NewsArticleContentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<NewsArticleContent>;
};

export type OrderAddressType = {
  __typename?: 'OrderAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
};

export type OrderConfigurationItemFileType = {
  __typename?: 'OrderConfigurationItemFileType';
  /** MIME type of the file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Name of the file */
  name: Scalars['String']['output'];
  /** Size of the file */
  size: Scalars['Long']['output'];
  /** URL of the file */
  url: Scalars['String']['output'];
};

export type OrderConfigurationItemType = {
  __typename?: 'OrderConfigurationItemType';
  /** Configuration item custom text */
  customText?: Maybe<Scalars['String']['output']>;
  /** List of files for 'File' configuration item section */
  files?: Maybe<Array<Maybe<OrderConfigurationItemFileType>>>;
  /** Configuration item ID */
  id: Scalars['String']['output'];
  /** Configuration item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Configuration item type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
};

export type OrderDiscountType = {
  __typename?: 'OrderDiscountType';
  /** Order discount amount */
  amount: MoneyType;
  coupon?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the new PromotionDescription field instead */
  description?: Maybe<Scalars['String']['output']>;
  /** Description of the promotion */
  promotionDescription?: Maybe<Scalars['String']['output']>;
  promotionId?: Maybe<Scalars['String']['output']>;
  /** Name of the promotion */
  promotionName?: Maybe<Scalars['String']['output']>;
};

export type OrderLineItemType = {
  __typename?: 'OrderLineItemType';
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  catalogId: Scalars['String']['output'];
  categoryId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<OrderConfigurationItemType>>>;
  currency: CurrencyType;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  discountTotal: MoneyType;
  discountTotalWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order Line item dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  extendedPrice: MoneyType;
  extendedPriceWithTax: MoneyType;
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  fulfillmentLocationCode?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isCancelled: Scalars['Boolean']['output'];
  isGift?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Scalars['Decimal']['output']>;
  listTotal: MoneyType;
  listTotalWithTax: MoneyType;
  measureUnit?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  outerId?: Maybe<Scalars['String']['output']>;
  placedPrice: MoneyType;
  placedPriceWithTax: MoneyType;
  price: MoneyType;
  priceId?: Maybe<Scalars['String']['output']>;
  priceWithTax: MoneyType;
  product?: Maybe<Product>;
  productId: Scalars['String']['output'];
  productOuterId?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  reserveQuantity: Scalars['Int']['output'];
  shippingMethodCode?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the PlacedPrice should be visible to the customer */
  showPlacedPrice: Scalars['Boolean']['output'];
  sku: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderPaymentMethodType = {
  __typename?: 'OrderPaymentMethodType';
  code: Scalars['String']['output'];
  currency: CurrencyType;
  description?: Maybe<Scalars['String']['output']>;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  isActive: Scalars['Boolean']['output'];
  isAvailableForPartial: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Localized name of payment method. */
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodGroupType: Scalars['Int']['output'];
  paymentMethodType: Scalars['Int']['output'];
  price: MoneyType;
  priceWithTax: MoneyType;
  priority: Scalars['Int']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  taxDetails?: Maybe<Array<OrderTaxDetailType>>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: MoneyType;
  totalWithTax: MoneyType;
  typeName: Scalars['String']['output'];
};

export type OrderShipmentItemType = {
  __typename?: 'OrderShipmentItemType';
  barCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lineItem?: Maybe<OrderLineItemType>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type OrderShipmentPackageType = {
  __typename?: 'OrderShipmentPackageType';
  barCode?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  items: Array<OrderShipmentItemType>;
  length?: Maybe<Scalars['Decimal']['output']>;
  measureUnit?: Maybe<Scalars['String']['output']>;
  packageType?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderShipmentType = {
  __typename?: 'OrderShipmentType';
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  currency: CurrencyType;
  customerOrderId?: Maybe<Scalars['String']['output']>;
  deliveryAddress?: Maybe<OrderAddressType>;
  deliveryDate?: Maybe<Scalars['DateTime']['output']>;
  discountAmount: MoneyType;
  discountAmountWithTax: MoneyType;
  discounts: Array<OrderDiscountType>;
  /** Customer order Shipment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: MoneyType;
  feeWithTax: MoneyType;
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  inPayments: Array<PaymentInType>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  items: Array<OrderShipmentItemType>;
  length?: Maybe<Scalars['Decimal']['output']>;
  measureUnit?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  packages: Array<OrderShipmentPackageType>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<PickupLocationType>;
  price: MoneyType;
  priceWithTax: MoneyType;
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  shipmentMethodOption?: Maybe<Scalars['String']['output']>;
  shippingMethod?: Maybe<OrderShippingMethodType>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<OrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: MoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: MoneyType;
  totalWithTax: MoneyType;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type OrderShippingMethodType = {
  __typename?: 'OrderShippingMethodType';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  taxType?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type OrderTaxDetailType = {
  __typename?: 'OrderTaxDetailType';
  amount: MoneyType;
  name: Scalars['String']['output'];
  rate: MoneyType;
};

/** Organization info */
export type Organization = {
  __typename?: 'Organization';
  addresses?: Maybe<MemberAddressTypeExtendConnection>;
  /** Business category */
  businessCategory?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<ContactTypeExtendConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Owner id */
  ownerId?: Maybe<Scalars['String']['output']>;
  /** Parent id */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};


/** Organization info */
export type OrganizationAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** Organization info */
export type OrganizationContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** Organization info */
export type OrganizationSeoInfoArgs = {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

/** A connection from an object to a list of objects of type `Organization`. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Organization`. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Organization>;
};

export type OutlineItemType = {
  __typename?: 'OutlineItemType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** SEO info */
  seoInfos?: Maybe<Array<SeoInfo>>;
  seoObjectType: Scalars['String']['output'];
};

export type OutlineType = {
  __typename?: 'OutlineType';
  /** Outline items */
  items?: Maybe<Array<OutlineItemType>>;
};

/** A connection from an object to a list of objects of type `Page`. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PageType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A connection from an object to a list of objects of type `PageDocument`. */
export type PageDocumentConnection = {
  __typename?: 'PageDocumentConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PageDocumentEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PageDocumentType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `PageDocument`. */
export type PageDocumentEdge = {
  __typename?: 'PageDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PageDocumentType>;
};

export type PageDocumentType = {
  __typename?: 'PageDocumentType';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Page permalink */
  permalink?: Maybe<Scalars['String']['output']>;
  /** Page source */
  source?: Maybe<Scalars['String']['output']>;
  /** Page title */
  title?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection from an object to another object of type `Page`. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PageType>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageType = {
  __typename?: 'PageType';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Page title */
  name?: Maybe<Scalars['String']['output']>;
  /** Page permalink */
  permalink?: Maybe<Scalars['String']['output']>;
  /** Page file relative url */
  relativeUrl: Scalars['String']['output'];
};

export type PasswordOptionsType = {
  __typename?: 'PasswordOptionsType';
  /** Require a digit ('0' - '9'). */
  requireDigit: Scalars['Boolean']['output'];
  /** Require a lower case letter ('a' - 'z'). */
  requireLowercase: Scalars['Boolean']['output'];
  /** Require a non letter or digit character. */
  requireNonAlphanumeric: Scalars['Boolean']['output'];
  /** Require an upper case letter ('A' - 'Z'). */
  requireUppercase: Scalars['Boolean']['output'];
  /** The minimum length a password must be. */
  requiredLength: Scalars['Int']['output'];
  /** The minimum number of unique chars a password must comprised of. */
  requiredUniqueChars: Scalars['Int']['output'];
};

/** A connection from an object to a list of objects of type `PaymentIn`. */
export type PaymentInConnection = {
  __typename?: 'PaymentInConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PaymentInEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PaymentInType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `PaymentIn`. */
export type PaymentInEdge = {
  __typename?: 'PaymentInEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PaymentInType>;
};

export type PaymentInType = {
  __typename?: 'PaymentInType';
  authorizedDate?: Maybe<Scalars['DateTime']['output']>;
  billingAddress?: Maybe<OrderAddressType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  capturedDate?: Maybe<Scalars['DateTime']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: CurrencyType;
  customerId: Scalars['String']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  /** Customer order Payment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  gatewayCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  incomingDate?: Maybe<Scalars['DateTime']['output']>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  /** Associated Order */
  order: CustomerOrderTypeExtend;
  orderId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<OrderPaymentMethodType>;
  price: MoneyType;
  purpose?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  sum: MoneyType;
  tax: MoneyType;
  transactions: Array<PaymentTransactionType>;
  vendor?: Maybe<CommonVendor>;
  voidedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentMethodType = {
  __typename?: 'PaymentMethodType';
  /** Is payment method available for cart payment */
  allowCartPayment: Scalars['Boolean']['output'];
  /** Value of payment gateway code */
  code: Scalars['String']['output'];
  /** Currency */
  currency: CurrencyType;
  /** Payment method description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Is payment method available for partial payments */
  isAvailableForPartial: Scalars['Boolean']['output'];
  /** Value of payment method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Localized name of payment method. */
  name?: Maybe<Scalars['String']['output']>;
  /** Value of payment group type */
  paymentMethodGroupType: Scalars['String']['output'];
  /** Value of payment method type */
  paymentMethodType: Scalars['String']['output'];
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Value of payment method priority */
  priority: Scalars['Int']['output'];
  /** Tax details */
  taxDetails?: Maybe<Array<TaxDetailType>>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
};

export type PaymentTransactionType = {
  __typename?: 'PaymentTransactionType';
  amount: MoneyType;
  gatewayIpAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isProcessed: Scalars['Boolean']['output'];
  note?: Maybe<Scalars['String']['output']>;
  processAttemptCount: Scalars['Int']['output'];
  processError?: Maybe<Scalars['String']['output']>;
  processedDate?: Maybe<Scalars['DateTime']['output']>;
  requestData?: Maybe<Scalars['String']['output']>;
  responseCode?: Maybe<Scalars['String']['output']>;
  responseData?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  /** Amount */
  amount: MoneyType;
  /** Billing address */
  billingAddress?: Maybe<CartAddressTypeExtend>;
  /** Text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency: CurrencyType;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Discounts */
  discounts: Array<Maybe<DiscountType>>;
  /** Cart payment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Payment Id */
  id: Scalars['String']['output'];
  /** Value of payment outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Value of payment gateway code */
  paymentGatewayCode?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  purpose?: Maybe<Scalars['String']['output']>;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
  vendor?: Maybe<CommonVendor>;
};

export type PickupAddressType = {
  __typename?: 'PickupAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** Key */
  key?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `PickupLocation`. */
export type PickupLocationConnection = {
  __typename?: 'PickupLocationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PickupLocationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PickupLocationType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `PickupLocation`. */
export type PickupLocationEdge = {
  __typename?: 'PickupLocationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PickupLocationType>;
};

export type PickupLocationType = {
  __typename?: 'PickupLocationType';
  /** Address */
  address?: Maybe<PickupAddressType>;
  /** ContactEmail */
  contactEmail?: Maybe<Scalars['String']['output']>;
  /** ContactPhone */
  contactPhone?: Maybe<Scalars['String']['output']>;
  /** Days until ready for pickup */
  deliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** GeoLocation */
  geoLocation?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** IsActive */
  isActive: Scalars['Boolean']['output'];
  /** Name */
  name: Scalars['String']['output'];
  /** How long an order will be stored at a pickup point */
  storageDays?: Maybe<Scalars['Int']['output']>;
  /** WorkingHours */
  workingHours?: Maybe<Scalars['String']['output']>;
};

export type PriceType = {
  __typename?: 'PriceType';
  /** Actual price */
  actual: MoneyType;
  /** Actual price with tax */
  actualWithTax: MoneyType;
  /** Currency */
  currency: Scalars['String']['output'];
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  discountPercent: Scalars['Decimal']['output'];
  /** Discounts */
  discounts: Array<CatalogDiscountType>;
  /** End date */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Price list */
  list: MoneyType;
  /** Price list with tax */
  listWithTax: MoneyType;
  /** The product min qty */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** The product price list */
  pricelistId?: Maybe<Scalars['String']['output']>;
  /** The product price list name */
  pricelistName?: Maybe<Scalars['String']['output']>;
  /** Sale price */
  sale: MoneyType;
  /** Sale price with tax */
  saleWithTax: MoneyType;
  /** Start date */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** Tier prices */
  tierPrices: Array<TierPriceType>;
};

export type PricesSumType = {
  __typename?: 'PricesSumType';
  /** Total discount amount */
  discountTotal: MoneyType;
  /** Total price */
  total: MoneyType;
};

/** Products are the sellable goods in an e-commerce project. */
export type Product = {
  __typename?: 'Product';
  /** Assets */
  assets: Array<Asset>;
  associations?: Maybe<ProductAssociationConnection>;
  /** Product availability data */
  availabilityData: AvailabilityData;
  brand?: Maybe<BrandType>;
  /** Get brandName for product. */
  brandName?: Maybe<Scalars['String']['output']>;
  /** Breadcrumbs */
  breadcrumbs: Array<Breadcrumb>;
  /** The unique ID of the catalog */
  catalogId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  /** The product SKU. */
  code: Scalars['String']['output'];
  description?: Maybe<DescriptionType>;
  descriptions: Array<DescriptionType>;
  /** Global Trade Item Number (GTIN) */
  gtin?: Maybe<Scalars['String']['output']>;
  hasVariations: Scalars['Boolean']['output'];
  /** Height */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** The unique ID of the product. */
  id: Scalars['String']['output'];
  /** Product images */
  images: Array<ImageType>;
  /** The product main image URL. */
  imgSrc?: Maybe<Scalars['String']['output']>;
  /** Product added at least in one wishlist */
  inWishlist: Scalars['Boolean']['output'];
  /** Product is configurable */
  isConfigurable: Scalars['Boolean']['output'];
  /** Product was purchased */
  isPurchased: Scalars['Boolean']['output'];
  keyProperties: Array<Property>;
  /** Length */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** Manufacturer Part Number (MPN) */
  manufacturerPartNumber?: Maybe<Scalars['String']['output']>;
  masterVariation?: Maybe<VariationType>;
  /** Max. quantity */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Measure unit */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Min. quantity */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum product variation price */
  minVariationPrice?: Maybe<PriceType>;
  /** The name of the product. */
  name: Scalars['String']['output'];
  /** The outer identifier */
  outerId?: Maybe<Scalars['String']['output']>;
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']['output']>;
  /** Outlines */
  outlines: Array<OutlineType>;
  /** Defines the number of items in a package. Quantity step for your product's. */
  packSize: Scalars['Int']['output'];
  /** Product price */
  price: PriceType;
  /** Product prices */
  prices: Array<PriceType>;
  /** The type of product */
  productType?: Maybe<Scalars['String']['output']>;
  properties: Array<Property>;
  /** Product rating */
  rating?: Maybe<Rating>;
  /** Distribution of product reviews by rating value. */
  ratingStatistics: Array<RatingStatistic>;
  /** Product relevance score */
  relevanceScore?: Maybe<Scalars['Float']['output']>;
  /** Request related SEO info */
  seoInfo: SeoInfo;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']['output']>;
  variations: Array<VariationType>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
  videos?: Maybe<VideoConnection>;
  /** Weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Weight unit */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Width */
  width?: Maybe<Scalars['Decimal']['output']>;
  /** List of wishlist ID with this product */
  wishlistIds: Array<Maybe<Scalars['String']['output']>>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductAssociationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductDescriptionArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductDescriptionsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductKeyPropertiesArgs = {
  take?: InputMaybe<Scalars['Int']['input']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductPropertiesArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** product association. */
export type ProductAssociation = {
  __typename?: 'ProductAssociation';
  associatedObjectId?: Maybe<Scalars['String']['output']>;
  associatedObjectType?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
  tags: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A connection from an object to a list of objects of type `ProductAssociation`. */
export type ProductAssociationConnection = {
  __typename?: 'ProductAssociationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductAssociationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProductAssociation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `ProductAssociation`. */
export type ProductAssociationEdge = {
  __typename?: 'ProductAssociationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductAssociation>;
};

export type ProductSuggestionsQueryResponseType = {
  __typename?: 'ProductSuggestionsQueryResponseType';
  suggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A connection from an object to a list of objects of type `ProductTypeExtension`. */
export type ProductTypeExtensionConnection = {
  __typename?: 'ProductTypeExtensionConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductTypeExtensionEdge>>>;
  /** Filter facets */
  filter_facets: Array<FilterFacet>;
  /** Parsed filters */
  filters?: Maybe<Array<SearchProductFilterResult>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Range facets */
  range_facets: Array<RangeFacet>;
  /** Term facets */
  term_facets: Array<TermFacet>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `ProductTypeExtension`. */
export type ProductTypeExtensionEdge = {
  __typename?: 'ProductTypeExtensionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Product>;
};

/** Represents promotion object */
export type Promotion = {
  __typename?: 'Promotion';
  /** Promotion description */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the promotion. */
  id: Scalars['String']['output'];
  /** The name of the promotion */
  name: Scalars['String']['output'];
  /** Promotion type */
  type?: Maybe<Scalars['String']['output']>;
};

/** Products attributes. */
export type Property = {
  __typename?: 'Property';
  /** Color code in CSS format. */
  colorCode?: Maybe<Scalars['String']['output']>;
  /** The display order of the property. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<PropertyGroup>;
  /** Is property hidden. */
  hidden: Scalars['Boolean']['output'];
  /** The unique ID of the property. */
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** Is property has multiple values. */
  multivalue: Scalars['Boolean']['output'];
  /** The name of the property. */
  name: Scalars['String']['output'];
  propertyDictionaryItems?: Maybe<PropertyDictionaryItemConnection>;
  propertyType: PropertyType;
  /** ValueType of the property. */
  propertyValueType: PropertyValueTypes;
  value?: Maybe<Scalars['PropertyValue']['output']>;
  /** The display order of the value. */
  valueDisplayOrder?: Maybe<Scalars['Int']['output']>;
  valueId?: Maybe<Scalars['String']['output']>;
};


/** Products attributes. */
export type PropertyPropertyDictionaryItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection from an object to a list of objects of type `Property`. */
export type PropertyConnection = {
  __typename?: 'PropertyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Property>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Represents property dictionary item */
export type PropertyDictionaryItem = {
  __typename?: 'PropertyDictionaryItem';
  /** Color code in CSS format. */
  colorCode: Scalars['String']['output'];
  /** The unique ID of the property dictionary item. */
  id: Scalars['String']['output'];
  /** Value order. */
  sortOrder: Scalars['Int']['output'];
  /** Value alias. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemConnection = {
  __typename?: 'PropertyDictionaryItemConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PropertyDictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PropertyDictionaryItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemEdge = {
  __typename?: 'PropertyDictionaryItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PropertyDictionaryItem>;
};

/** An edge in a connection from an object to another object of type `Property`. */
export type PropertyEdge = {
  __typename?: 'PropertyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Property>;
};

/** Property group. */
export type PropertyGroup = {
  __typename?: 'PropertyGroup';
  /** The localized description of the property group. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display order of the property group. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the property group. */
  id: Scalars['String']['output'];
  /** The localized name of the property group. */
  name?: Maybe<Scalars['String']['output']>;
};

/** The type of catalog property. */
export enum PropertyType {
  Catalog = 'CATALOG',
  Category = 'CATEGORY',
  Product = 'PRODUCT',
  Variation = 'VARIATION'
}

/** The type of catalog property value. */
export enum PropertyValueTypes {
  Boolean = 'BOOLEAN',
  Color = 'COLOR',
  DateTime = 'DATE_TIME',
  GeoPoint = 'GEO_POINT',
  Html = 'HTML',
  Integer = 'INTEGER',
  LongText = 'LONG_TEXT',
  Measure = 'MEASURE',
  Number = 'NUMBER',
  ShortText = 'SHORT_TEXT'
}

/** A connection from an object to a list of objects of type `PushMessage`. */
export type PushMessageConnection = {
  __typename?: 'PushMessageConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PushMessageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PushMessageType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `PushMessage`. */
export type PushMessageEdge = {
  __typename?: 'PushMessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PushMessageType>;
};

export type PushMessageType = {
  __typename?: 'PushMessageType';
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isHidden: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  shortMessage: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<BrandType>;
  brands?: Maybe<BrandConnection>;
  builderPage?: Maybe<BuilderPageItemType>;
  canLeaveFeedback?: Maybe<Scalars['Boolean']['output']>;
  cart?: Maybe<CartType>;
  carts?: Maybe<CartConnection>;
  categories?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  checkEmailUniqueness?: Maybe<Scalars['Boolean']['output']>;
  checkUsernameUniqueness?: Maybe<Scalars['Boolean']['output']>;
  childCategories?: Maybe<ChildCategoriesQueryResponseType>;
  complaintReasons?: Maybe<ComplaintReasonConnection>;
  configurationItems?: Maybe<ConfigurationItemsResponseType>;
  confirmPhoneNumber?: Maybe<CustomIdentityResultType>;
  contact?: Maybe<ContactTypeExtend>;
  contacts?: Maybe<ContactTypeExtendConnection>;
  contract?: Maybe<ContractType>;
  countries: Array<CountryType>;
  customerComplaint?: Maybe<CustomerComplaintConnection>;
  customerReviews?: Maybe<CustomerReviewConnection>;
  dynamicProperties?: Maybe<DynamicPropertyConnection>;
  dynamicProperty?: Maybe<DynamicPropertyType>;
  evaluateDynamicContent?: Maybe<EvaluateDynamicContentResultType>;
  fcmSettings?: Maybe<FcmSettingsType>;
  fileUploadOptions?: Maybe<FileUploadScopeOptionsType>;
  fulfillmentCenter?: Maybe<FulfillmentCenterType>;
  fulfillmentCenters?: Maybe<FulfillmentCenterConnection>;
  getReturns?: Maybe<Array<Maybe<ReturnQuery>>>;
  getSavedForLater?: Maybe<CartType>;
  lookup?: Maybe<LookupType>;
  lookups?: Maybe<LookupConnection>;
  me?: Maybe<UserType>;
  menu?: Maybe<MenuLinkListTypeExtend>;
  menus: Array<MenuLinkListType>;
  newsArticle?: Maybe<NewsArticleContent>;
  newsArticleAuthor?: Maybe<NewsArticleAuthor>;
  newsArticleTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  newsArticles?: Maybe<NewsArticleContentConnection>;
  order?: Maybe<CustomerOrderTypeExtend>;
  orderLineItemStatuses?: Maybe<LocalizedSettingResponseType>;
  orderStatuses?: Maybe<LocalizedSettingResponseType>;
  orders?: Maybe<CustomerOrderTypeExtendConnection>;
  organization?: Maybe<Organization>;
  organizationContracts?: Maybe<ContractConnection>;
  organizationOrders?: Maybe<CustomerOrderTypeExtendConnection>;
  organizations?: Maybe<OrganizationConnection>;
  page?: Maybe<PageType>;
  pageDocument?: Maybe<PageDocumentType>;
  pageDocuments?: Maybe<PageDocumentConnection>;
  pages?: Maybe<PageConnection>;
  paymentStatuses?: Maybe<LocalizedSettingResponseType>;
  payments?: Maybe<PaymentInConnection>;
  pickupLocations?: Maybe<PickupLocationConnection>;
  pricesSum?: Maybe<PricesSumType>;
  product?: Maybe<Product>;
  productConfiguration?: Maybe<ConfigurationQueryResponseType>;
  productSuggestions?: Maybe<ProductSuggestionsQueryResponseType>;
  products?: Maybe<ProductTypeExtensionConnection>;
  properties?: Maybe<PropertyConnection>;
  property?: Maybe<Property>;
  pushMessages?: Maybe<PushMessageConnection>;
  recentlyBrowsed?: Maybe<GetRecentlyBrowsedResponseType>;
  recommendations?: Maybe<GetRecommendationsResponseType>;
  regions: Array<CountryRegionType>;
  /** @deprecated Deprecated. Use sendPasswordResetEmail command. */
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<RoleType>;
  searchHistory?: Maybe<SearchHistoryResultType>;
  sendVerifyPhoneNumber?: Maybe<Scalars['Boolean']['output']>;
  sharedWishlist?: Maybe<WishlistType>;
  shipmentStatuses?: Maybe<LocalizedSettingResponseType>;
  slugInfo?: Maybe<SlugInfoResponseType>;
  store?: Maybe<StoreResponseTypeExtend>;
  translation?: Maybe<TranslationType>;
  translations?: Maybe<TranslationConnection>;
  user?: Maybe<UserType>;
  validateCoupon?: Maybe<Scalars['Boolean']['output']>;
  validateOTP?: Maybe<CustomIdentityResultType>;
  validatePassword?: Maybe<CustomIdentityResultType>;
  vendor?: Maybe<Vendor>;
  wishlist?: Maybe<WishlistType>;
  wishlists?: Maybe<WishlistConnection>;
};


export type QueryBrandArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBuilderPageArgs = {
  pageId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryCanLeaveFeedbackArgs = {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryCartArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckEmailUniquenessArgs = {
  email: Scalars['String']['input'];
};


export type QueryCheckUsernameUniquenessArgs = {
  username: Scalars['String']['input'];
};


export type QueryChildCategoriesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  maxLevel?: InputMaybe<Scalars['Int']['input']>;
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productFilter?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryComplaintReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryConfigurationItemsArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryConfirmPhoneNumberArgs = {
  command?: InputMaybe<InputConfirmPhoneNumberType>;
};


export type QueryContactArgs = {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContractArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomerComplaintArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryCustomerReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
};


export type QueryDynamicPropertiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  objectType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDynamicPropertyArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  idOrName: Scalars['String']['input'];
  objectType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEvaluateDynamicContentArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  placeName?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFileUploadOptionsArgs = {
  scope?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFulfillmentCenterArgs = {
  id: Scalars['String']['input'];
};


export type QueryFulfillmentCentersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fulfillmentCenterIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetReturnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderId: Scalars['String']['input'];
  returnId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSavedForLaterArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryLookupArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLookupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMeArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuArgs = {
  cultureName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryMenusArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
};


export type QueryNewsArticleArgs = {
  id: Scalars['String']['input'];
  languageCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryNewsArticleAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type QueryNewsArticleTagsArgs = {
  languageCode: Scalars['String']['input'];
};


export type QueryNewsArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  languageCode: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderLineItemStatusesArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderStatusesArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationContractsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryPageDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryPageDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryPaymentStatusesArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPickupLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPricesSumArgs = {
  cartId: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductConfigurationArgs = {
  configurableProductId: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductSuggestionsArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  preserveUserQuery?: InputMaybe<Scalars['Boolean']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  query?: InputMaybe<Scalars['String']['input']>;
  selectedAddress?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPropertiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  types?: InputMaybe<Array<InputMaybe<PropertyType>>>;
};


export type QueryPropertyArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPushMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  unreadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  withHidden?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecentlyBrowsedArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  maxProducts?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
};


export type QueryRecommendationsArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  fallbackProductsFilter?: InputMaybe<Scalars['String']['input']>;
  maxRecommendations?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRegionsArgs = {
  countryId: Scalars['String']['input'];
};


export type QueryRequestPasswordResetArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  loginOrEmail: Scalars['String']['input'];
  storeId?: InputMaybe<Scalars['String']['input']>;
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRoleArgs = {
  roleName: Scalars['String']['input'];
};


export type QuerySearchHistoryArgs = {
  maxCount: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
};


export type QuerySendVerifyPhoneNumberArgs = {
  command?: InputMaybe<InputSendVerifyPhoneNumberType>;
};


export type QuerySharedWishlistArgs = {
  sharingKey: Scalars['String']['input'];
};


export type QueryShipmentStatusesArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySlugInfoArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoreArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslationArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  culture?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lookupKey?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  culture?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lookupKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginProvider?: InputMaybe<Scalars['String']['input']>;
  providerKey?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryValidateCouponArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  coupon: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryValidateOtpArgs = {
  command?: InputMaybe<InputOtpValidation>;
};


export type QueryValidatePasswordArgs = {
  password: Scalars['String']['input'];
};


export type QueryVendorArgs = {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWishlistArgs = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  listId: Scalars['String']['input'];
};


export type QueryWishlistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type RangeFacet = Facet & {
  __typename?: 'RangeFacet';
  /** The three types of facets. Terms, Range, Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
  /** Ranges */
  ranges: Array<FacetRangeType>;
  /** Statistics for the facet, such as min and max values across ranges. */
  statistics?: Maybe<RangeFacetStatistics>;
};

export type RangeFacetStatistics = {
  __typename?: 'RangeFacetStatistics';
  /** The maximum value in the range or across ranges. */
  max?: Maybe<Scalars['Float']['output']>;
  /** The minimum value in the range or across ranges. */
  min?: Maybe<Scalars['Float']['output']>;
};

export type Rating = {
  __typename?: 'Rating';
  /** Total count of customer reviews */
  reviewCount: Scalars['Int']['output'];
  /** Average rating */
  value: Scalars['Decimal']['output'];
};

/** Represents the share of reviews for a specific rating value. */
export type RatingStatistic = {
  __typename?: 'RatingStatistic';
  /** Percentage of reviews for the rating. */
  percentage: Scalars['Decimal']['output'];
  /** Rating value. */
  rating: Scalars['Int']['output'];
};

export type RefreshCartType = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type RegisterAccountType = {
  __typename?: 'RegisterAccountType';
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type RegisterContactType = {
  __typename?: 'RegisterContactType';
  about?: Maybe<Scalars['String']['output']>;
  address?: Maybe<MemberAddressTypeExtend>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type RegisterOrganizationType = {
  __typename?: 'RegisterOrganizationType';
  /**
   * Returns first organization address.
   * @deprecated Use addresses field instead.
   */
  address?: Maybe<MemberAddressTypeExtend>;
  /** Organization's addresses */
  addresses?: Maybe<Array<Maybe<MemberAddressTypeExtend>>>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type RegistrationErrorType = {
  __typename?: 'RegistrationErrorType';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  parameter?: Maybe<Scalars['String']['output']>;
};

export type RemoveAddressFromFavoritesCommandType = {
  addressId: Scalars['String']['input'];
};

export type RequestPasswordResetOtpInput = {
  /** Culture name ("en-US"). */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Email or phone number of the user requesting password reset. */
  loginOrEmail: Scalars['String']['input'];
  /** Store Id. */
  storeId: Scalars['String']['input'];
};

export type RequestRegistrationType = {
  __typename?: 'RequestRegistrationType';
  /** Contact's account */
  account?: Maybe<RegisterAccountType>;
  /** Created contact */
  contact?: Maybe<RegisterContactType>;
  /** Created company */
  organization?: Maybe<RegisterOrganizationType>;
  /** Account creation result */
  result?: Maybe<AccountCreationResultType>;
};

export type ResetPasswordByOtpInput = {
  /** The new password to set. */
  newPassword: Scalars['String']['input'];
  /** The OTP code received via SMS or email. */
  otp: Scalars['String']['input'];
  /** UserName (email or phone) of the user. */
  userName: Scalars['String']['input'];
};

export type Return = {
  __typename?: 'Return';
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Order */
  order: CustomerOrderType;
  /** Order Id */
  orderId?: Maybe<Scalars['String']['output']>;
  /** Resolution */
  resolution?: Maybe<Scalars['String']['output']>;
  /** ReturnLineItems */
  returnLineItems: Array<Maybe<ReturnLineItem>>;
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};

export type ReturnLineItem = {
  __typename?: 'ReturnLineItem';
  /** AvailableQuantity */
  availableQuantity?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Order Line Item Id */
  orderLineItemId?: Maybe<Scalars['String']['output']>;
  /** Price */
  price?: Maybe<Scalars['Decimal']['output']>;
  /** Quantity */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Reason */
  reason?: Maybe<Scalars['String']['output']>;
  /** Return Id */
  returnId?: Maybe<Scalars['String']['output']>;
};

export type ReturnLineItemQuery = {
  __typename?: 'ReturnLineItemQuery';
  lineItemId: Scalars['String']['output'];
  /** Quantity */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Reason */
  reason?: Maybe<Scalars['String']['output']>;
};

export type ReturnQuery = {
  __typename?: 'ReturnQuery';
  id: Scalars['String']['output'];
  /** ReturnLineItems */
  returnLineItems: Array<Maybe<ReturnLineItemQuery>>;
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};

export type ReviewValidationErrorType = {
  __typename?: 'ReviewValidationErrorType';
  /** Error code */
  errorCode?: Maybe<Scalars['String']['output']>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
};

export type RoleType = {
  __typename?: 'RoleType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  /** Permissions in Role */
  permissions: Array<Maybe<Scalars['String']['output']>>;
};

export type SearchHistoryResultType = {
  __typename?: 'SearchHistoryResultType';
  queries?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Represents a range value in a product search filter */
export type SearchProductFilterRangeValue = {
  __typename?: 'SearchProductFilterRangeValue';
  /** Indicates if the starting bound is included in the range */
  includeLowerBound: Scalars['Boolean']['output'];
  /** Indicates if the ending bound is included in the range */
  includeUpperBound: Scalars['Boolean']['output'];
  /** The starting value of the range */
  lower?: Maybe<Scalars['String']['output']>;
  /** The ending value of the range */
  upper?: Maybe<Scalars['String']['output']>;
};

/** Represents a filter result for product search */
export type SearchProductFilterResult = {
  __typename?: 'SearchProductFilterResult';
  /** The type of the filter, e.g., 'term' or 'range' */
  filterType: Scalars['String']['output'];
  /** Indicates whether the filter was generated automatically */
  isGenerated: Scalars['Boolean']['output'];
  /** Localized name of the filter (if available) */
  label?: Maybe<Scalars['String']['output']>;
  /** The name of the filter */
  name: Scalars['String']['output'];
  /** List of range values in the filter */
  rangeValues?: Maybe<Array<Maybe<SearchProductFilterRangeValue>>>;
  /** List of term values in the filter */
  termValues?: Maybe<Array<Maybe<SearchProductFilterValue>>>;
};

/** Represents a term value in a product search filter */
export type SearchProductFilterValue = {
  __typename?: 'SearchProductFilterValue';
  /** The label of the term in the filter, used for display purposes */
  label?: Maybe<Scalars['String']['output']>;
  /** The value of the term in the filter */
  value: Scalars['String']['output'];
};

export type SendPasswordResetEmailCommandType = {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  loginOrEmail: Scalars['String']['input'];
  storeId?: InputMaybe<Scalars['String']['input']>;
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
};

export type SeoInfo = {
  __typename?: 'SeoInfo';
  id: Scalars['String']['output'];
  imageAltDescription?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectId: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  outline?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  semanticUrl: Scalars['String']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
};

export type SharingSettingType = {
  __typename?: 'SharingSettingType';
  /** Access (read or write) */
  access?: Maybe<WishlistAccessType>;
  /** Id (sharing key) */
  id: Scalars['String']['output'];
  /** Created by current user */
  isOwner: Scalars['Boolean']['output'];
  /** Scope (private, organization, etc.) */
  scope?: Maybe<WishlistScopeType>;
};

export type ShipmentType = {
  __typename?: 'ShipmentType';
  /** Text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency: CurrencyType;
  /** Delivery address */
  deliveryAddress?: Maybe<CartAddressTypeExtend>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  /** Discounts */
  discounts: Array<DiscountType>;
  /** Cart shipment dynamic property values */
  dynamicProperties: Array<DynamicPropertyValueType>;
  /** Fee */
  fee: MoneyType;
  /** Fee with tax */
  feeWithTax: MoneyType;
  /** Fulfillment center id */
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  /** Value of height */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** Shipment Id */
  id: Scalars['String']['output'];
  /** Items */
  items: Array<CartShipmentItemType>;
  /** Value of length */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** Value of measurement units */
  measureUnit?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<PickupLocationType>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Shipment method code */
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  /** Shipment method option */
  shipmentMethodOption?: Maybe<Scalars['String']['output']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Tax details */
  taxDetails: Array<TaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: MoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
  vendor?: Maybe<CommonVendor>;
  /** Value of volumetric weight */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** Value of weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Value of weight unit */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Value of width */
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type ShippingMethodType = {
  __typename?: 'ShippingMethodType';
  /** Value of shipping gateway code */
  code: Scalars['String']['output'];
  /** Currency */
  currency: CurrencyType;
  /** Shipping method description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount */
  discountAmount: MoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: MoneyType;
  id: Scalars['String']['output'];
  /** Value of shipping method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Shipping method name */
  name?: Maybe<Scalars['String']['output']>;
  /** Value of shipping method option description */
  optionDescription?: Maybe<Scalars['String']['output']>;
  /** Value of shipping method option name */
  optionName?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Value of shipping method priority */
  priority: Scalars['Int']['output'];
  /** Total */
  total: MoneyType;
  /** Total with tax */
  totalWithTax: MoneyType;
};

export type SlugInfoResponseType = {
  __typename?: 'SlugInfoResponseType';
  /** SEO info */
  entityInfo?: Maybe<SeoInfo>;
  /** Target URL when SEO is null */
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

/** A connection from an object to a list of objects of type `StatusChange`. */
export type StatusChangeConnection = {
  __typename?: 'StatusChangeConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<StatusChangeEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<StatusChangeType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `StatusChange`. */
export type StatusChangeEdge = {
  __typename?: 'StatusChangeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StatusChangeType>;
};

export type StatusChangeType = {
  __typename?: 'StatusChangeType';
  /** Id */
  id: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  /** Status date */
  statusDate: Scalars['DateTime']['output'];
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
};

export type StoreResponseTypeExtend = {
  __typename?: 'StoreResponseTypeExtend';
  /** Available currencies */
  availableCurrencies: Array<CurrencyType>;
  /** Available languages */
  availableLanguages: Array<LanguageType>;
  /** Store catalog ID */
  catalogId: Scalars['String']['output'];
  /** Currency */
  defaultCurrency: CurrencyType;
  /** Language */
  defaultLanguage: LanguageType;
  /** Store dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** GraphQL settings */
  graphQLSettings: GraphQlSettingsType;
  /** Indicates if the store is open */
  isClosed: Scalars['Boolean']['output'];
  /** Store settings */
  settings: StoreSettingsType;
  /** Store ID */
  storeId: Scalars['String']['output'];
  /** Store name */
  storeName: Scalars['String']['output'];
  /** Store URL */
  storeUrl?: Maybe<Scalars['String']['output']>;
};

export type StoreSettingsType = {
  __typename?: 'StoreSettingsType';
  /** Allow anonymous users to visit the store  */
  anonymousUsersAllowed: Scalars['Boolean']['output'];
  authenticationTypes: Array<Maybe<Scalars['String']['output']>>;
  /**
   * Allow anonymous users to create orders (XAPI)
   * @deprecated Use XOrder.CreateAnonymousOrderEnabled public property instead.
   */
  createAnonymousOrderEnabled: Scalars['Boolean']['output'];
  /**
   * Default "Selected for checkout" state for new line items and gifts
   * @deprecated Use XPurchase.IsSelectedForCheckout public property instead.
   */
  defaultSelectedForCheckout: Scalars['Boolean']['output'];
  /** Email address verification enabled */
  emailVerificationEnabled: Scalars['Boolean']['output'];
  /** Email address verification required */
  emailVerificationRequired: Scalars['Boolean']['output'];
  /** Environment name */
  environmentName: Scalars['String']['output'];
  /**
   * SPA
   * @deprecated Client application should use own business logic for SPA detection.
   */
  isSpa: Scalars['Boolean']['output'];
  modules: Array<ModuleSettingsType>;
  /** Password requirements */
  passwordRequirements?: Maybe<PasswordOptionsType>;
  /**
   * Quotes enabled
   * @deprecated Use Quotes.EnableQuotes public property instead.
   */
  quotesEnabled: Scalars['Boolean']['output'];
  /** SEO links */
  seoLinkType: Scalars['String']['output'];
  /**
   * Subscription enabled
   * @deprecated Use Subscription.EnableSubscriptions public property instead.
   */
  subscriptionEnabled: Scalars['Boolean']['output'];
  /** Tax calculation enabled */
  taxCalculationEnabled: Scalars['Boolean']['output'];
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  ping?: Maybe<Scalars['String']['output']>;
  pushMessageCreated: PushMessageType;
};

export type TaxDetailType = {
  __typename?: 'TaxDetailType';
  /** Amount */
  amount: MoneyType;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: MoneyType;
  /** Rate */
  rate: MoneyType;
};

export type TermFacet = Facet & {
  __typename?: 'TermFacet';
  /** Three facet types: Terms, Range, and Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
  /** Terms */
  terms: Array<FacetTermType>;
};

export type TierPriceType = {
  __typename?: 'TierPriceType';
  /** Price */
  price: MoneyType;
  /** Price with tax */
  priceWithTax: MoneyType;
  /** Quantity */
  quantity: Scalars['Long']['output'];
};

/** A connection from an object to a list of objects of type `Translation`. */
export type TranslationConnection = {
  __typename?: 'TranslationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<TranslationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<TranslationType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Translation`. */
export type TranslationEdge = {
  __typename?: 'TranslationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TranslationType>;
};

export type TranslationType = {
  __typename?: 'TranslationType';
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  culture: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** The lookup that this translation belongs to */
  lookup?: Maybe<LookupType>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  accessFailedCount: Scalars['Int']['output'];
  /** The associated contact info */
  contact?: Maybe<ContactTypeExtend>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  /** Make this user change their password when they sign in next time */
  forcePasswordChange?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  isAdministrator: Scalars['Boolean']['output'];
  /** Account locked state */
  lockedState?: Maybe<Scalars['Boolean']['output']>;
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<UserType>;
  passwordExpired: Scalars['Boolean']['output'];
  /** Password expiry in days */
  passwordExpiryInDays?: Maybe<Scalars['Int']['output']>;
  /** Account permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
  securityStamp: Scalars['String']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  userName: Scalars['String']['output'];
  userType?: Maybe<Scalars['String']['output']>;
};

export type ValidationErrorType = {
  __typename?: 'ValidationErrorType';
  /** Error code */
  errorCode?: Maybe<Scalars['String']['output']>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorParameters?: Maybe<Array<Maybe<ErrorParameterType>>>;
  /** Object id */
  objectId?: Maybe<Scalars['String']['output']>;
  /** Object type */
  objectType?: Maybe<Scalars['String']['output']>;
};

export type VariationType = {
  __typename?: 'VariationType';
  /** Assets */
  assets: Array<Asset>;
  /** Availability data */
  availabilityData: AvailabilityData;
  /** SKU of variation. */
  code: Scalars['String']['output'];
  /** Id of variation. */
  id: Scalars['String']['output'];
  /** Product images */
  images: Array<ImageType>;
  /** Max. quantity. */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Min. quantity. */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** Name of variation. */
  name: Scalars['String']['output'];
  /** Outlines */
  outlines?: Maybe<Array<OutlineType>>;
  /** Defines the number of items in a package. Quantity step for your product's. */
  packSize?: Maybe<Scalars['Int']['output']>;
  /** Product price */
  price: PriceType;
  /** Product prices */
  prices: Array<PriceType>;
  /** The type of product */
  productType?: Maybe<Scalars['String']['output']>;
  properties: Array<Property>;
  /** Product rating */
  rating?: Maybe<Rating>;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']['output']>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
};

/** Vendor Info */
export type Vendor = {
  __typename?: 'Vendor';
  /** About vendor */
  about?: Maybe<Scalars['String']['output']>;
  addresses?: Maybe<MemberAddressTypeExtendConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressTypeExtend>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  /** Icon URL */
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Vendor rating */
  rating?: Maybe<Rating>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Site URL */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};


/** Vendor Info */
export type VendorAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** Vendor Info */
export type VendorRatingArgs = {
  storeId?: InputMaybe<Scalars['String']['input']>;
};


/** Vendor Info */
export type VendorSeoInfoArgs = {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

/** A connection from an object to a list of objects of type `Video`. */
export type VideoConnection = {
  __typename?: 'VideoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<VideoEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<VideoType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Video`. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideoType>;
};

export type VideoType = {
  __typename?: 'VideoType';
  /** Video URL */
  contentUrl: Scalars['String']['output'];
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** Video description */
  description: Scalars['String']['output'];
  /** Video duration */
  duration?: Maybe<Scalars['String']['output']>;
  /** Embedded video URL */
  embedUrl?: Maybe<Scalars['String']['output']>;
  /** Video name */
  name: Scalars['String']['output'];
  /** ID of the object video is attached to */
  ownerId: Scalars['String']['output'];
  /** Type of the object video is attached to (Product, Category) */
  ownerType: Scalars['String']['output'];
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** Video thumbnail URL */
  thumbnailUrl: Scalars['String']['output'];
  /** Video upload date */
  uploadDate?: Maybe<Scalars['DateTime']['output']>;
};

export enum WishlistAccessType {
  /** Readonly access */
  Read = 'Read',
  /** Write access */
  Write = 'Write'
}

/** A connection from an object to a list of objects of type `Wishlist`. */
export type WishlistConnection = {
  __typename?: 'WishlistConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<WishlistEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<WishlistType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection from an object to another object of type `Wishlist`. */
export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WishlistType>;
};

export enum WishlistScopeType {
  /** Anyone (anonymous) scope */
  AnyoneAnonymous = 'AnyoneAnonymous',
  /** Anyone (authorized) scope */
  AnyoneAuthorized = 'AnyoneAuthorized',
  /** Organization scope */
  Organization = 'Organization',
  /** Private scope */
  Private = 'Private',
  /** User scope */
  User = 'User'
}

export type WishlistType = {
  __typename?: 'WishlistType';
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Shopping cart user ID */
  customerId?: Maybe<Scalars['String']['output']>;
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']['output']>;
  /** Wishlist description */
  description?: Maybe<Scalars['String']['output']>;
  /** Shopping cart ID */
  id: Scalars['String']['output'];
  /** Items */
  items?: Maybe<Array<Maybe<LineItemType>>>;
  /** Item count */
  itemsCount?: Maybe<Scalars['Int']['output']>;
  /** Wishlist modified date */
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Shopping cart name */
  name: Scalars['String']['output'];
  /**
   * Wishlist scope
   * @deprecated Use SharingSetting.Scope instead
   */
  scope?: Maybe<WishlistScopeType>;
  /** Sharing settings */
  sharingSetting?: Maybe<SharingSettingType>;
  /** Shopping cart store ID */
  storeId?: Maybe<Scalars['String']['output']>;
  /** Wishlist subtotal */
  subTotal: MoneyType;
};

export type MemberAddressFieldsFragment = { __typename?: 'MemberAddressTypeExtend', id?: string | null, key?: string | null, name?: string | null, firstName?: string | null, middleName?: string | null, lastName?: string | null, line1?: string | null, city?: string | null, governorate?: string | null, countryCode?: string | null, countryName?: string | null, postalCode?: string, zip?: string | null, isDefault: boolean, phone?: string | null, email?: string | null, description?: string | null, addressType?: number | null, buildingNumber?: number | null, floorNumber?: number | null, apartmentNumber?: number | null, regionName?: string | null, latitude?: string | null, longitude?: string | null, outerId?: string | null };

export type RequestRegistrationMutationVariables = Exact<{
  command: InputRequestRegistrationType;
}>;


export type RequestRegistrationMutation = { __typename?: 'Mutations', requestRegistration?: { __typename?: 'RequestRegistrationType', account?: { __typename?: 'RegisterAccountType', id: string, email: string } | null, organization?: { __typename?: 'RegisterOrganizationType', id: string } | null, contact?: { __typename?: 'RegisterContactType', id: string } | null, result?: { __typename?: 'AccountCreationResultType', succeeded: boolean, requireEmailVerification: boolean, errors?: Array<{ __typename?: 'RegistrationErrorType', code?: string | null, description?: string | null, parameter?: string | null } | null> | null } | null } | null };

export type ResetPasswordByOtpMutationVariables = Exact<{
  command: ResetPasswordByOtpInput;
}>;


export type ResetPasswordByOtpMutation = { __typename?: 'Mutations', resetPasswordByOtp?: { __typename?: 'IdentityResultResponse', succeeded: boolean } | null };

export type UpdatePersonalDataMutationVariables = Exact<{
  command: InputUpdatePersonalDataTypeExtend;
}>;


export type UpdatePersonalDataMutation = { __typename?: 'Mutations', updatePersonalData?: { __typename?: 'IdentityResultType', succeeded: boolean, errors?: Array<{ __typename?: 'IdentityErrorType', code?: string | null, description?: string | null } | null> | null } | null };

export type EvaluateDynamicContentQueryVariables = Exact<{
  storeId: Scalars['String']['input'];
  cultureName: Scalars['String']['input'];
  placeName?: InputMaybe<Scalars['String']['input']>;
}>;


export type EvaluateDynamicContentQuery = { __typename?: 'Query', evaluateDynamicContent?: { __typename?: 'EvaluateDynamicContentResultType', items?: Array<{ __typename?: 'DynamicContentItemType', id: string, contentType: string, name: string, description: string, priority: number, dynamicProperties?: Array<{ __typename?: 'DynamicPropertyValueType', name?: string | null, valueType: string, dynamicPropertyValueType: DynamicPropertyValueTypes, value?: any | null } | null> | null } | null> | null } | null };

export type MeQueryVariables = Exact<{
  withPostalCode?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserType', id: string, memberId?: string | null, photoUrl?: string | null, userName: string, email?: string | null, emailConfirmed: boolean, phoneNumber?: string | null, phoneNumberConfirmed: boolean, contact?: { __typename?: 'ContactTypeExtend', id: string, outerId?: string | null, phones: Array<string | null>, firstName: string, lastName: string, fullName: string, gender?: string | null, birthDate?: any | null, addresses?: { __typename?: 'MemberAddressTypeExtendConnection', totalCount?: number | null, items?: Array<{ __typename?: 'MemberAddressTypeExtend', id?: string | null, key?: string | null, name?: string | null, firstName?: string | null, middleName?: string | null, lastName?: string | null, line1?: string | null, city?: string | null, governorate?: string | null, countryCode?: string | null, countryName?: string | null, postalCode?: string, zip?: string | null, isDefault: boolean, phone?: string | null, email?: string | null, description?: string | null, addressType?: number | null, buildingNumber?: number | null, floorNumber?: number | null, apartmentNumber?: number | null, regionName?: string | null, latitude?: string | null, longitude?: string | null, outerId?: string | null } | null> | null } | null } | null } | null };

export type RequestPasswordResetQueryVariables = Exact<{
  loginOrEmail: Scalars['String']['input'];
}>;


export type RequestPasswordResetQuery = { __typename?: 'Query', requestPasswordReset?: boolean | null };

export type SendVerifyPhoneNumberQueryVariables = Exact<{
  command: InputSendVerifyPhoneNumberType;
}>;


export type SendVerifyPhoneNumberQuery = { __typename?: 'Query', sendVerifyPhoneNumber?: boolean | null };

export type SlugInfoQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
}>;


export type SlugInfoQuery = { __typename?: 'Query', slugInfo?: { __typename?: 'SlugInfoResponseType', entityInfo?: { __typename?: 'SeoInfo', id: string, name?: string | null, semanticUrl: string, pageTitle?: string | null, metaDescription?: string | null, imageAltDescription?: string | null, metaKeywords?: string | null, storeId?: string | null, objectId: string, objectType: string, isActive: boolean, languageCode?: string | null } | null } | null };

export type ValidateOtpQueryVariables = Exact<{
  username: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type ValidateOtpQuery = { __typename?: 'Query', validateOTP?: { __typename?: 'CustomIdentityResultType', succeeded: boolean } | null };

export const MemberAddressFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"memberAddressFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MemberAddressTypeExtend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"governorate"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withPostalCode"}}}]}]},{"kind":"Field","name":{"kind":"Name","value":"zip"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"addressType"}},{"kind":"Field","name":{"kind":"Name","value":"buildingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"floorNumber"}},{"kind":"Field","name":{"kind":"Name","value":"apartmentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"regionName"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"outerId"}}]}}]} as unknown as DocumentNode<MemberAddressFieldsFragment, unknown>;
export const RequestRegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestRegistration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"command"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InputRequestRegistrationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestRegistration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"Variable","name":{"kind":"Name","value":"command"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"succeeded"}},{"kind":"Field","name":{"kind":"Name","value":"requireEmailVerification"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parameter"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RequestRegistrationMutation, RequestRegistrationMutationVariables>;
export const ResetPasswordByOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPasswordByOTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"command"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordByOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"Variable","name":{"kind":"Name","value":"command"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"succeeded"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByOtpMutation, ResetPasswordByOtpMutationVariables>;
export const UpdatePersonalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePersonalData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"command"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InputUpdatePersonalDataTypeExtend"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonalData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"Variable","name":{"kind":"Name","value":"command"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"succeeded"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePersonalDataMutation, UpdatePersonalDataMutationVariables>;
export const EvaluateDynamicContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"evaluateDynamicContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cultureName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"evaluateDynamicContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"cultureName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cultureName"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"dynamicProperties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cultureName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cultureName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}},{"kind":"Field","name":{"kind":"Name","value":"dynamicPropertyValueType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EvaluateDynamicContentQuery, EvaluateDynamicContentQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withPostalCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"outerId"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"memberAddressFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"memberAddressFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MemberAddressTypeExtend"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"line1"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"governorate"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"countryName"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withPostalCode"}}}]}]},{"kind":"Field","name":{"kind":"Name","value":"zip"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"addressType"}},{"kind":"Field","name":{"kind":"Name","value":"buildingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"floorNumber"}},{"kind":"Field","name":{"kind":"Name","value":"apartmentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"regionName"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"outerId"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"requestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginOrEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginOrEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginOrEmail"}}}]}]}}]} as unknown as DocumentNode<RequestPasswordResetQuery, RequestPasswordResetQueryVariables>;
export const SendVerifyPhoneNumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sendVerifyPhoneNumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"command"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InputSendVerifyPhoneNumberType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendVerifyPhoneNumber"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"Variable","name":{"kind":"Name","value":"command"}}}]}]}}]} as unknown as DocumentNode<SendVerifyPhoneNumberQuery, SendVerifyPhoneNumberQueryVariables>;
export const SlugInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"slugInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cultureName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permalink"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slugInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"storeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"cultureName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cultureName"}}},{"kind":"Argument","name":{"kind":"Name","value":"permalink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permalink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"semanticUrl"}},{"kind":"Field","name":{"kind":"Name","value":"pageTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAltDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaKeywords"}},{"kind":"Field","name":{"kind":"Name","value":"storeId"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}}]}}]}}]}}]} as unknown as DocumentNode<SlugInfoQuery, SlugInfoQueryVariables>;
export const ValidateOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"validateOTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateOTP"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"command"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"succeeded"}}]}}]}}]} as unknown as DocumentNode<ValidateOtpQuery, ValidateOtpQueryVariables>;