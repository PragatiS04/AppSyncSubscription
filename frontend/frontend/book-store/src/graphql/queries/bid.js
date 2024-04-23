export const onBidAddedForSeller = `
subscription mySubscription($sellerId: String!) {
  onBidAddedForSeller(sellerId: $sellerId) {
    bidId
    message
    price
    productImage
    bidPrice
    productName
    productId
    quantity
    quotedPrice
    sellerId
    status
    timeOfBid
    ttl
    userId
    timeOfQuote
  }
}
`
