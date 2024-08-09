classDiagram
direction BT
class AbstractAuditable {
    Date  createdDate
    Date  lastModifiedDate
}
class AbstractPersistable {
    PK  id
}
class Address {
    Long  id
    String  city
    String  country
    LocalDateTime  createdAt
    String  houseNumber
    String  name
    String  postalCode
    String  state
    String  street
    String  streetNumber
    LocalDateTime  updatedAt
}
class AddressType {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  name
    LocalDateTime  updatedAt
}
class Admin {
    Long  id
    Integer  accessLevel
    LocalDateTime  createdAt
    Boolean  isSuperAdmin
    String  role
    LocalDateTime  updatedAt
}
class BlogCategory {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  mainImage
    String  metaDescription
    String  metaKeywords
    String  metaTitle
    String  slug
    String  status
    String  title
    LocalDateTime  updatedAt
}
class BlogPost {
    Long  id
    String  content
    LocalDateTime  createdAt
    Boolean  isPublished
    String  metaDescription
    String  metaKeywords
    String  seoDescription
    String  seoTitle
    String  slug
    String  title
    LocalDateTime  updatedAt
}
class Brand {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  logo
    String  name
    LocalDateTime  updatedAt
    String  website
}
class CartItem {
    Long  id
    LocalDateTime  createdAt
    BigDecimal  price
    Integer  quantity
    BigDecimal  totalPrice
    LocalDateTime  updatedAt
}
class Collection {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  mainImageUrl
    String  name
    String  seoDescription
    String  seoTitle
    LocalDateTime  updatedAt
}
class ContentPage {
    Long  id
    String  content
    LocalDateTime  createdAt
    String  metaDescription
    String  metaKeywords
    String  metaTitle
    String  seoDescription
    String  seoTitle
    String  slug
    String  status
    String  title
    LocalDateTime  updatedAt
}
class CoreProduct {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  modelNumber
    String  name
    LocalDateTime  updatedAt
}
class CustomerGroup {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  name
    LocalDateTime  updatedAt
}
class Discount {
    Long  id
    String  conditions
    String  discountType
    Double  value
}
class Inventory {
    Long  id
    BigDecimal  costPrice
    LocalDateTime  createdAt
    String  currency
    BigDecimal  discountPrice
    Boolean  inventoryTracking
    Integer  maxOrderQuantity
    Integer  minOrderQuantity
    BigDecimal  price
    Integer  reOrderLevel
    Integer  stockQuantity
    String  stockStatus
    LocalDateTime  updatedAt
}
class Log {
    Long  id
    BigDecimal  appliedValue
    LocalDateTime  createdAt
}
class Media {
    Long  id
    LocalDateTime  createdAt
    Boolean  isApproved
    String  mediaType
    String  mediaUrl
    LocalDateTime  updatedAt
}
class Order {
    Long  id
    LocalDateTime  orderDate
    String  orderNumber
    String  orderStatus
    BigDecimal  totalAmount
    LocalDateTime  updatedAt
}
class OrderItem {
    Long  id
    LocalDateTime  createdAt
    String  currency
    BigDecimal  price
    Integer  quantity
    LocalDateTime  updatedAt
}
class Payment {
    Long  id
    BigDecimal  amount
    String  currency
    LocalDateTime  paymentDate
}
class PaymentMethod {
    Long  id
    LocalDateTime  createdAt
    String  description
    Boolean  isActive
    String  name
    String  provider
    LocalDateTime  updatedAt
}
class PaymentStatus {
    Long  id
    LocalDateTime  createdAt
    String  description
    Boolean  isDefault
    String  status
    LocalDateTime  updatedAt
}
class People {
    Long  id
    LocalDateTime  createdAt
    LocalDate  dateOfBirth
    String  email
    String  firstName
    String  hashedPassword
    boolean  isDeleted
    String  lastName
    String  middleName
    String  phoneNumber
    String  profilePicture
    String  suffix
    LocalDateTime  updatedAt
}
class ProductMedia {
    Long  id
    LocalDateTime  createdAt
    String  imageType
    String  imageUrl
    LocalDateTime  updatedAt
}
class ProductShipping {
    Long  id
    LocalDateTime  createdAt
    Double  depth
    Double  height
    Boolean  isFragile
    LocalDateTime  updatedAt
    Double  weight
    Double  width
}
class ProductType {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  name
    LocalDateTime  updatedAt
}
class ProductVariant {
    Long  id
    String  barCode
    LocalDateTime  createdAt
    String  imageUrl
    String  sku
    String  thumbnailImageUrl
    LocalDateTime  updatedAt
}
class Promotion {
    Long  id
    LocalDateTime  createdAt
    String  description
    LocalDateTime  endDate
    Boolean  isActive
    String  name
    String  promoCode
    LocalDateTime  startDate
    LocalDateTime  updatedAt
}
class PromotionCategory {
    Long  id
    LocalDateTime  createdAt
    LocalDateTime  updatedAt
}
class PromotionCondition {
    Long  id
    String  conditionType
    String  conditionValue
    LocalDateTime  createdAt
    LocalDateTime  updatedAt
}
class PromotionCustomerGroup {
    Long  id
    LocalDateTime  createdAt
    LocalDateTime  updatedAt
}
class Review {
    Long  id
    LocalDateTime  createdAt
    String  description
    Boolean  isApproved
    Integer  rating
    String  title
    LocalDateTime  updatedAt
}
class ReviewMedia {
    Long  id
    LocalDateTime  createdAt
    Boolean  isApproved
    String  mediaType
    String  mediaUrl
    LocalDateTime  updatedAt
}
class Setting {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  key
    Boolean  status
    String  type
    LocalDateTime  updatedAt
    String  value
}
class Shipping {
    Long  id
    LocalDateTime  deliveryDate
    String  shippingAddress
    LocalDateTime  shippingDate
    String  shippingStatus
    String  trackingNumber
}
class ShippingMethod {
    Long  id
    LocalDateTime  createdAt
    String  description
    Boolean  isActive
    String  logoUrl
    String  name
    String  provider
    String  supportEmail
    String  supportPhone
    String  trackingUrl
    LocalDateTime  updatedAt
    String  website
}
class ShoppingCart {
    Long  id
    String  cartStatus
    LocalDateTime  createdAt
    BigDecimal  discountAmount
    String  discountCode
    LocalDateTime  lastActivity
    LocalDateTime  updatedAt
}
class User {
    Long  id
    LocalDateTime  createdAt
    Boolean  isDeleted
    LocalDateTime  lastLoginAt
    LocalDateTime  updatedAt
    Long  wishListId
}
class VariantGroup {
    Long  id
    LocalDateTime  createdAt
    String  description
    String  name
    LocalDateTime  updatedAt
}
class VariantOption {
    Long  id
    LocalDateTime  createdAt
    String  description
    LocalDateTime  updatedAt
    String  value
}
class Wishlist {
    Long  id
    LocalDateTime  createdAt
    LocalDateTime  updatedAt
}
class WishlistItem {
    Long  id
    Integer  quantity
}

AbstractAuditable  --|>  AbstractPersistable 
Address "0..*" --> "0..1" AddressType 
Admin "0..*" --> "0..1" People 
BlogPost "0..*" --> "0..1" Admin 
BlogPost "0..*" <--> "0..*" BlogCategory 
BlogPost "0..1" <--> "0..*" Media 
CartItem "0..*" --> "0..1" ProductVariant 
CartItem "0..*" --> "0..1" ShoppingCart 
CoreProduct "0..*" --> "0..1" Brand 
CoreProduct "0..*" --> "0..1" Collection 
CoreProduct "0..1" <--> "0..*" Inventory 
CoreProduct "0..*" --> "0..1" ProductType 
CoreProduct "0..1" <--> "0..*" ProductVariant 
Log "0..*" --> "0..1" Discount 
Log "0..*" --> "0..1" Order 
Log "0..*" --> "0..1" Promotion 
Order "0..1" <--> "0..1" Payment 
Order "0..1" <--> "0..1" Shipping 
Order "0..*" --> "0..1" User 
OrderItem "0..*" <--> "0..1" Order 
OrderItem "0..*" --> "0..1" ProductVariant 
Payment "0..*" --> "0..1" PaymentMethod 
Payment "0..*" --> "0..1" PaymentStatus 
People "0..1" <--> "0..*" Address 
ProductMedia "0..*" --> "0..1" ProductVariant 
ProductShipping "0..*" --> "0..1" ProductVariant 
ProductVariant "0..*" --> "0..1" VariantOption 
Promotion "0..1" <--> "0..*" Discount 
PromotionCategory "0..*" --> "0..1" Collection 
PromotionCategory "0..*" --> "0..1" Promotion 
PromotionCondition "0..*" --> "0..1" Promotion 
PromotionCustomerGroup "0..*" --> "0..1" CustomerGroup 
PromotionCustomerGroup "0..*" --> "0..1" Promotion 
Review "0..*" --> "0..1" CoreProduct 
Review "0..1" <--> "0..*" ReviewMedia 
Review "0..*" --> "0..1" User 
Shipping "0..*" --> "0..1" ShippingMethod 
ShoppingCart "0..*" --> "0..1" User 
User "0..*" --> "0..1" CustomerGroup 
User "0..*" --> "0..1" People 
VariantOption "0..*" <--> "0..1" VariantGroup 
Wishlist "0..*" --> "0..1" User 
Wishlist "0..1" <--> "0..*" WishlistItem 
WishlistItem "0..*" --> "0..1" CoreProduct 
