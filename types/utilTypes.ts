import { DocumentNode } from "graphql";

export type WithGraphQLErrors<T> = {data: T} & {
  errors?: Array<{
    message: string;
    locations: Array<{ line: number; column: number }>;
    path: Array<string>;
    extensions: { code: string; codes: Array<string>; details: string };
  }>;
};

export type PageBlockResult = {
  titleName?: string;
  titleValue?: string;
  urlName?: string;
  urlValue?: string;
  urlTextName?: string;
  urlTextValue?: string;
  subTitleName?: string;
  subTitleValue?: string;
  imageUrl?: string;
  contentTypeValue?: string;
  categoryValue?: string;
  productValue?: string;
}

export type QueryObject = {
  document: DocumentNode;
  variables?: Record<string, any>;
  alias?: string;
}

export type MultiQueryInput = {
  queries: {
    document: DocumentNode;
    variables?: Record<string, any>;
    alias?: string;
  }[];
}
