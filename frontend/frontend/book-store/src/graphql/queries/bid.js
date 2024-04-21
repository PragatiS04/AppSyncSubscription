export const onBidAddedForSeller = 
    subscription MyQuery {
        onBidAddedForSeller(sellerId: "1234") {
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