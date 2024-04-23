/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBid = /* GraphQL */ `
  query GetBid($input: GetBidInput!) {
    getBid(input: $input) {
      bids {
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
      message
      __typename
    }
  }
`;
export const getBidbySellerId = /* GraphQL */ `
  query GetBidbySellerId($input: GetBidbySellerIdInput!) {
    getBidbySellerId(input: $input) {
      bids {
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
      message
      __typename
    }
  }
`;
export const getBidbyUserId = /* GraphQL */ `
  query GetBidbyUserId($input: GetBidbyUserIdInput!) {
    getBidbyUserId(input: $input) {
      bids {
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
      message
      __typename
    }
  }
`;
