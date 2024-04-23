/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addBid = /* GraphQL */ `
  mutation AddBid($input: AddBidInput!) {
    addBid(input: $input) {
      bidId
      userId
      sellerId
      productId
      price
      bidPrice
      timeOfBid
      quotedPrice
      productName
      brandName
      productImages
      timeOfQuote
      quantity
      ttl
      status
      message
      __typename
    }
  }
`;
export const updateBid = /* GraphQL */ `
  mutation UpdateBid($input: UpdateBidInput!) {
    updateBid(input: $input) {
      bidId
      userId
      sellerId
      productId
      price
      bidPrice
      timeOfBid
      quotedPrice
      productName
      brandName
      productImages
      timeOfQuote
      quantity
      ttl
      status
      message
      __typename
    }
  }
`;
