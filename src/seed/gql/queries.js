/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const CART = `
{
  cart {
    id
    buyer {
      id
    }
    payment {
      id
    }
  }
}
`;

export const SET_CART = `
mutation Set(
  $id: Int!,
  $buyer: Int,
  $payment: Int,
)
{
  setCart(
    id: $id,
    buyer: $buyer,
    payment: $payment,
  ) {
    cart {
      id
      buyer {
        id
      }
      payment {
        id
      }
    }
  }
}
`;

export const SAVE_CART = `
mutation Save(
  $buyer: Int!,
  $payment: Int!,
)
{
  saveCart(
    buyer: $buyer,
    payment: $payment,
  ) {
    cart {
      id
    }
  }
}
`;

export const DELETE_CART = `
mutation Delete($id: Int!)
{
  deleteCart(id: $id)
  {
    id
  }
}
`;

export const CATEGORY = `
{
  category {
    id
    name
  }
}
`;

export const SET_CATEGORY = `
mutation Set(
  $id: Int!,
  $name: String,
)
{
  setCategory(
    id: $id,
    name: $name,
  ) {
    category {
      id
      name
    }
  }
}
`;

export const SAVE_CATEGORY = `
mutation Save(
  $name: String!,
)
{
  saveCategory(
    name: $name,
  ) {
    category {
      id
    }
  }
}
`;

export const DELETE_CATEGORY = `
mutation Delete($id: Int!)
{
  deleteCategory(id: $id)
  {
    id
  }
}
`;

export const COMPANY = `
{
  company {
    id
    name
    commonName
    rfc
    cp
    phone
    email
    active
    municipality
    state
    cologn
    website
    street
    city
    photo {
      id
    }
  }
}
`;

export const SET_COMPANY = `
mutation Set(
  $id: Int!,
  $name: String,
  $commonName: String,
  $rfc: String,
  $cp: Int,
  $phone: String,
  $email: String,
  $active: Boolean,
  $photo: Int,
  $municipality: String,
  $state: String,
  $cologn: String,
  $website: String,
  $street: String,
  $city: String,
)
{
  setCompany(
    id: $id,
    name: $name,
    commonName: $commonName,
    rfc: $rfc,
    cp: $cp,
    phone: $phone,
    email: $email,
    active: $active,
    photo: $photo,
    municipality: $municipality,
    state: $state,
    cologn: $cologn,
    website: $website,
    street: $street,
    city: $city,
  ) {
    company {
      id
      name
      commonName
      rfc
      cp
      phone
      email
      active
      municipality
      state
      cologn
      website
      street
      city
      photo {
        id
      }
    }
  }
}
`;

export const SAVE_COMPANY = `
mutation Save(
  $name: String!,
  $commonName: String!,
  $rfc: String!,
  $cp: Int!,
  $phone: String!,
  $email: String!,
  $active: Boolean!,
  $photo: Int!,
  $municipality: String!,
  $state: String!,
  $cologn: String!,
  $website: String!,
  $street: String!,
  $city: String!,
)
{
  saveCompany(
    name: $name,
    commonName: $commonName,
    rfc: $rfc,
    cp: $cp,
    phone: $phone,
    email: $email,
    active: $active,
    photo: $photo,
    municipality: $municipality,
    state: $state,
    cologn: $cologn,
    website: $website,
    street: $street,
    city: $city,
  ) {
    company {
      id
    }
  }
}
`;

export const DELETE_COMPANY = `
mutation Delete($id: Int!)
{
  deleteCompany(id: $id)
  {
    id
  }
}
`;

export const MESSAGE = `
{
  message {
    id
    content
    sender {
      id
    }
    target {
      id
    }
  }
}
`;

export const SET_MESSAGE = `
mutation Set(
  $id: Int!,
  $content: String,
  $sender: Int,
  $target: Int,
)
{
  setMessage(
    id: $id,
    content: $content,
    sender: $sender,
    target: $target,
  ) {
    message {
      id
      content
      sender {
        id
      }
      target {
        id
      }
    }
  }
}
`;

export const SAVE_MESSAGE = `
mutation Save(
  $content: String!,
  $sender: Int!,
  $target: Int!,
)
{
  saveMessage(
    content: $content,
    sender: $sender,
    target: $target,
  ) {
    message {
      id
    }
  }
}
`;

export const DELETE_MESSAGE = `
mutation Delete($id: Int!)
{
  deleteMessage(id: $id)
  {
    id
  }
}
`;

export const OPINION = `
{
  opinion {
    id
    title
    description
    rate
    product {
      id
    }
    user {
      id
    }
  }
}
`;

export const SET_OPINION = `
mutation Set(
  $id: Int!,
  $title: String,
  $description: String,
  $rate: Int,
  $product: Int,
  $user: Int,
)
{
  setOpinion(
    id: $id,
    title: $title,
    description: $description,
    rate: $rate,
    product: $product,
    user: $user,
  ) {
    opinion {
      id
      title
      description
      rate
      product {
        id
      }
      user {
        id
      }
    }
  }
}
`;

export const SAVE_OPINION = `
mutation Save(
  $title: String!,
  $description: String!,
  $rate: Int!,
  $product: Int!,
  $user: Int!,
)
{
  saveOpinion(
    title: $title,
    description: $description,
    rate: $rate,
    product: $product,
    user: $user,
  ) {
    opinion {
      id
    }
  }
}
`;

export const DELETE_OPINION = `
mutation Delete($id: Int!)
{
  deleteOpinion(id: $id)
  {
    id
  }
}
`;

export const PAYMENT = `
{
  payment {
    id
    cardNumber
    expireDate
    type
    address
    bank
    user {
      id
    }
  }
}
`;

export const SET_PAYMENT = `
mutation Set(
  $id: Int!,
  $cardNumber: String,
  $expireDate: String,
  $type: String,
  $address: String,
  $bank: String,
  $user: Int,
)
{
  setPayment(
    id: $id,
    cardNumber: $cardNumber,
    expireDate: $expireDate,
    type: $type,
    user: $user,
    address: $address,
    bank: $bank,
  ) {
    payment {
      id
      cardNumber
      expireDate
      type
      address
      bank
      user {
        id
      }
    }
  }
}
`;

export const SAVE_PAYMENT = `
mutation Save(
  $cardNumber: String!,
  $expireDate: String!,
  $type: String!,
  $address: String!,
  $bank: String!,
  $user: Int!,
)
{
  savePayment(
    cardNumber: $cardNumber,
    expireDate: $expireDate,
    type: $type,
    user: $user,
    address: $address,
    bank: $bank,
  ) {
    payment {
      id
    }
  }
}
`;

export const DELETE_PAYMENT = `
mutation Delete($id: Int!)
{
  deletePayment(id: $id)
  {
    id
  }
}
`;

export const PRODUCT = `
{
  product {
    id
    name
    shortDescription
    description
    company {
      id
    }
    sale {
      id
    }
    category {
      id
    }
  }
}
`;

export const SET_PRODUCT = `
mutation Set(
  $id: Int!,
  $name: String,
  $shortDescription: String,
  $description: String,
  $company: Int,
  $sale: Int,
  $category: Int,
)
{
  setProduct(
    id: $id,
    name: $name,
    shortDescription: $shortDescription,
    description: $description,
    company: $company,
    sale: $sale,
    category: $category,
  ) {
    product {
      id
      name
      shortDescription
      description
      company {
        id
      }
      sale {
        id
      }
      category {
        id
      }
    }
  }
}
`;

export const SAVE_PRODUCT = `
mutation Save(
  $name: String!,
  $shortDescription: String!,
  $description: String!,
  $company: Int!,
  $sale: Int,
  $category: Int!,
)
{
  saveProduct(
    name: $name,
    shortDescription: $shortDescription,
    description: $description,
    company: $company,
    sale: $sale,
    category: $category,
  ) {
    product {
      id
    }
  }
}
`;

export const DELETE_PRODUCT = `
mutation Delete($id: Int!)
{
  deleteProduct(id: $id)
  {
    id
  }
}
`;

export const PURCHASE = `
{
  purchase {
    id
    amount
    product
    sale
    shipping {
      id
    }
  }
}
`;

export const SET_PURCHASE = `
mutation Set(
  $id: Int!,
  $amount: Int,
  $product: GenericScalar,
  $sale: GenericScalar,
  $shipping: Int,
)
{
  setPurchase(
    id: $id,
    amount: $amount,
    product: $product,
    sale: $sale,
    shipping: $shipping,
  ) {
    purchase {
      id
      amount
      product
      sale
      shipping {
        id
      }
    }
  }
}
`;

export const SAVE_PURCHASE = `
mutation Save(
  $amount: Int!,
  $product: GenericScalar!,
  $sale: GenericScalar!,
  $shipping: Int!,
)
{
  savePurchase(
    amount: $amount,
    product: $product,
    sale: $sale,
    shipping: $shipping,
  ) {
    purchase {
      id
    }
  }
}
`;

export const DELETE_PURCHASE = `
mutation Delete($id: Int!)
{
  deletePurchase(id: $id)
  {
    id
  }
}
`;

export const SALE = `
{
  sale {
    id
    name
    disscount
    startDate
    endDate
    company {
      id
    }
    banner {
      id
    }
  }
}
`;

export const SET_SALE = `
mutation Set(
  $id: Int!,
  $name: String,
  $disscount: Float,
  $startDate: DateTime,
  $endDate: DateTime,
  $banner: Int,
  $company: Int,
)
{
  setSale(
    id: $id,
    name: $name,
    disscount: $disscount,
    startDate: $startDate,
    endDate: $endDate,
    company: $company,
    banner: $banner,
  ) {
    sale {
      id
      name
      disscount
      startDate
      endDate
      company {
        id
      }
      banner {
        id
      }
    }
  }
}
`;

export const SAVE_SALE = `
mutation Save(
  $name: String!,
  $disscount: Float!,
  $startDate: DateTime!,
  $endDate: DateTime!,
  $banner: Int,
  $company: Int!,
)
{
  saveSale(
    name: $name,
    disscount: $disscount,
    startDate: $startDate,
    endDate: $endDate,
    company: $company,
    banner: $banner,
  ) {
    sale {
      id
    }
  }
}
`;

export const DELETE_SALE = `
mutation Delete($id: Int!)
{
  deleteSale(id: $id)
  {
    id
  }
}
`;

export const SHIPPING = `
{
  shipping {
    id
    info
    folio
    address
    status
    seller {
      id
    }
    cart {
      id
    }
  }
}
`;

export const SET_SHIPPING = `
mutation Set(
  $id: Int!,
  $info: String,
  $folio: String,
  $address: String,
  $status: String,
  $seller: Int,
  $cart: Int,
)
{
  setShipping(
    id: $id,
    info: $info,
    folio: $folio,
    address: $address,
    status: $status,
    seller: $seller,
    cart: $cart,
  ) {
    shipping {
      id
      info
      folio
      address
      status
      seller {
        id
      }
      cart {
        id
      }
    }
  }
}
`;

export const SAVE_SHIPPING = `
mutation Save(
  $info: String!,
  $folio: String!,
  $address: String!,
  $status: String!,
  $seller: Int!,
  $cart: Int!,
)
{
  saveShipping(
    info: $info,
    folio: $folio,
    address: $address,
    status: $status,
    seller: $seller,
    cart: $cart,
  ) {
    shipping {
      id
    }
  }
}
`;

export const DELETE_SHIPPING = `
mutation Delete($id: Int!)
{
  deleteShipping(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
    active
    type
    street
    city
    cp
    municipality
    state
    cologn
    telephone
    token
    tokenVerified
    code
    photo {
      id
    }
    company {
      id
    }
    wishlist {
      id
    }
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
  $active: Boolean,
  $photo: Int,
  $type: String,
  $street: String,
  $city: String,
  $cp: Int,
  $municipality: String,
  $state: String,
  $cologn: String,
  $telephone: String,
  $token: String,
  $tokenVerified: Boolean,
  $code: Int,
  $company: Int,
  $wishlist: [Int],
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    active: $active,
    photo: $photo,
    type: $type,
    company: $company,
    street: $street,
    city: $city,
    cp: $cp,
    municipality: $municipality,
    state: $state,
    cologn: $cologn,
    telephone: $telephone,
    wishlist: $wishlist,
    token: $token,
    tokenVerified: $tokenVerified,
    code: $code,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      active
      type
      street
      city
      cp
      municipality
      state
      cologn
      telephone
      token
      tokenVerified
      code
      photo {
        id
      }
      company {
        id
      }
      wishlist {
        id
      }
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $active: Boolean!,
  $photo: Int,
  $type: String!,
  $street: String!,
  $city: String!,
  $cp: Int!,
  $municipality: String!,
  $state: String!,
  $cologn: String!,
  $telephone: String!,
  $token: String!,
  $tokenVerified: Boolean!,
  $code: Int!,
  $company: Int,
  $wishlist: [Int],
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    active: $active,
    photo: $photo,
    type: $type,
    company: $company,
    street: $street,
    city: $city,
    cp: $cp,
    municipality: $municipality,
    state: $state,
    cologn: $cologn,
    telephone: $telephone,
    wishlist: $wishlist,
    token: $token,
    tokenVerified: $tokenVerified,
    code: $code,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;

export const VARIANT = `
{
  variant {
    id
    price
    stock
    shipment
    product {
      id
    }
  }
}
`;

export const SET_VARIANT = `
mutation Set(
  $id: Int!,
  $price: Float,
  $stock: Int,
  $shipment: Float,
  $product: Int,
)
{
  setVariant(
    id: $id,
    product: $product,
    price: $price,
    stock: $stock,
    shipment: $shipment,
  ) {
    variant {
      id
      price
      stock
      shipment
      product {
        id
      }
    }
  }
}
`;

export const SAVE_VARIANT = `
mutation Save(
  $price: Float!,
  $stock: Int!,
  $shipment: Float!,
  $product: Int!,
)
{
  saveVariant(
    product: $product,
    price: $price,
    stock: $stock,
    shipment: $shipment,
  ) {
    variant {
      id
    }
  }
}
`;

export const DELETE_VARIANT = `
mutation Delete($id: Int!)
{
  deleteVariant(id: $id)
  {
    id
  }
}
`;

export const VARIANTOPTION = `
{
  variantoption {
    id
    title
    value
    variant {
      id
    }
  }
}
`;

export const SET_VARIANTOPTION = `
mutation Set(
  $id: Int!,
  $title: String,
  $value: String,
  $variant: Int,
)
{
  setVariantoption(
    id: $id,
    title: $title,
    value: $value,
    variant: $variant,
  ) {
    variantoption {
      id
      title
      value
      variant {
        id
      }
    }
  }
}
`;

export const SAVE_VARIANTOPTION = `
mutation Save(
  $title: String!,
  $value: String!,
  $variant: Int!,
)
{
  saveVariantoption(
    title: $title,
    value: $value,
    variant: $variant,
  ) {
    variantoption {
      id
    }
  }
}
`;

export const DELETE_VARIANTOPTION = `
mutation Delete($id: Int!)
{
  deleteVariantoption(id: $id)
  {
    id
  }
}
`;