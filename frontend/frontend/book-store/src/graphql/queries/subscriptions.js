/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onBidAddedForSeller = /* GraphQL */ `
  subscription OnBidAddedForSeller($sellerId: String!) {
    onBidAddedForSeller(sellerId: $sellerId) {
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
export const onBidUpdateForUser = /* GraphQL */ `
  subscription OnBidUpdateForUser($userId: String!) {
    onBidUpdateForUser(userId: $userId) {
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
