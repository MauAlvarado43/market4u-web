/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const CART = `
{
  cart {
    id
    destiny
    user {
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
  $destiny: String,
  $user: Int,
  $payment: Int,
)
{
  setCart(
    id: $id,
    destiny: $destiny,
    user: $user,
    payment: $payment,
  ) {
    cart {
      id
      destiny
      user {
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
  $destiny: String!,
  $user: Int!,
  $payment: Int!,
)
{
  saveCart(
    destiny: $destiny,
    user: $user,
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
    address
    phone
    email
    active
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
  $address: String,
  $phone: String,
  $email: String,
  $active: Boolean,
  $photo: Int,
)
{
  setCompany(
    id: $id,
    name: $name,
    commonName: $commonName,
    rfc: $rfc,
    address: $address,
    phone: $phone,
    email: $email,
    active: $active,
    photo: $photo,
  ) {
    company {
      id
      name
      commonName
      rfc
      address
      phone
      email
      active
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
  $address: String!,
  $phone: String!,
  $email: String!,
  $active: Boolean!,
  $photo: Int!,
)
{
  saveCompany(
    name: $name,
    commonName: $commonName,
    rfc: $rfc,
    address: $address,
    phone: $phone,
    email: $email,
    active: $active,
    photo: $photo,
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
  ) {
    payment {
      id
      cardNumber
      expireDate
      type
      address
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
  $user: Int!,
)
{
  savePayment(
    cardNumber: $cardNumber,
    expireDate: $expireDate,
    type: $type,
    user: $user,
    address: $address,
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
    price
    stock
    user {
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
  $price: Float,
  $stock: Int,
  $user: Int,
  $category: Int,
)
{
  setProduct(
    id: $id,
    name: $name,
    shortDescription: $shortDescription,
    description: $description,
    price: $price,
    stock: $stock,
    user: $user,
    category: $category,
  ) {
    product {
      id
      name
      shortDescription
      description
      price
      stock
      user {
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
  $price: Float!,
  $stock: Int!,
  $user: Int!,
  $category: Int!,
)
{
  saveProduct(
    name: $name,
    shortDescription: $shortDescription,
    description: $description,
    price: $price,
    stock: $stock,
    user: $user,
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
    cart {
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
  $cart: Int,
)
{
  setPurchase(
    id: $id,
    amount: $amount,
    product: $product,
    sale: $sale,
    cart: $cart,
  ) {
    purchase {
      id
      amount
      product
      sale
      cart {
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
  $cart: Int!,
)
{
  savePurchase(
    amount: $amount,
    product: $product,
    sale: $sale,
    cart: $cart,
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
    disscount
    startDate
    endDate
    product {
      id
    }
    user {
      id
    }
  }
}
`;

export const SET_SALE = `
mutation Set(
  $id: Int!,
  $disscount: Float,
  $startDate: DateTime,
  $endDate: DateTime,
  $product: Int,
  $user: Int,
)
{
  setSale(
    id: $id,
    disscount: $disscount,
    startDate: $startDate,
    endDate: $endDate,
    product: $product,
    user: $user,
  ) {
    sale {
      id
      disscount
      startDate
      endDate
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

export const SAVE_SALE = `
mutation Save(
  $disscount: Float!,
  $startDate: DateTime!,
  $endDate: DateTime!,
  $product: Int!,
  $user: Int!,
)
{
  saveSale(
    disscount: $disscount,
    startDate: $startDate,
    endDate: $endDate,
    product: $product,
    user: $user,
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

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
    username
    password
    email
    firstName
    lastName
    address
    active
    type
    photo {
      id
    }
    company {
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
  $username: String,
  $password: String,
  $email: String,
  $firstName: String,
  $lastName: String,
  $address: String,
  $active: Boolean,
  $type: String,
  $photo: Int,
  $company: Int,
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
    username: $username,
    password: $password,
    email: $email,
    firstName: $firstName,
    lastName: $lastName,
    address: $address,
    active: $active,
    type: $type,
    photo: $photo,
    company: $company,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      username
      password
      email
      firstName
      lastName
      address
      active
      type
      photo {
        id
      }
      company {
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
  $username: String!,
  $password: String!,
  $email: String!,
  $firstName: String!,
  $lastName: String!,
  $address: String!,
  $active: Boolean!,
  $type: String!,
  $photo: Int!,
  $company: Int,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    username: $username,
    password: $password,
    email: $email,
    firstName: $firstName,
    lastName: $lastName,
    address: $address,
    active: $active,
    type: $type,
    photo: $photo,
    company: $company,
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