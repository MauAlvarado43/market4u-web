const GQL_CART_ = {
    destiny: "",
    purchases: [ { id: 1} ],
    user:  { id: 1},
    payment:  { id: 1},
}
export const GQL_CART = {
    cart: GQL_CART_
}
export const GQL_CARTS = {
    carts: [ GQL_CART_ ]
}
export const GQL_CART_PAGINATION = {
    cartPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        carts: [ GQL_CART_ ]
    }
}

export const API_CART = {
    destiny: "",
    purchase_ids: [1],
    user_id:  1,
    payment_id:  1,
}
export const API_CARTS = [API_CART]

const GQL_CATEGORY_ = {
    name: "",
    products: [ { id: 1} ],
}
export const GQL_CATEGORY = {
    category: GQL_CATEGORY_
}
export const GQL_CATEGORIES = {
    categories: [ GQL_CATEGORY_ ]
}
export const GQL_CATEGORY_PAGINATION = {
    categoryPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        categories: [ GQL_CATEGORY_ ]
    }
}

export const API_CATEGORY = {
    name: "",
    product_ids: [1],
}
export const API_CATEGORIES = [API_CATEGORY]

const GQL_COMPANY_ = {
    name: "",
    commonName: "",
    rfc: "",
    address: "",
    phone: "",
    email: "",
    active: false,
    photo: { url: "" },
    users: [ { id: 1} ],
}
export const GQL_COMPANY = {
    company: GQL_COMPANY_
}
export const GQL_COMPANIES = {
    companies: [ GQL_COMPANY_ ]
}
export const GQL_COMPANY_PAGINATION = {
    companyPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        companies: [ GQL_COMPANY_ ]
    }
}

export const API_COMPANY = {
    name: "",
    common_name: "",
    rfc: "",
    address: "",
    phone: "",
    email: "",
    active: false,
    photo_id: 1,
    user_ids: [1],
}
export const API_COMPANIES = [API_COMPANY]

const GQL_MESSAGE_ = {
    content: "",
    sender:  { id: 1},
    target:  { id: 1},
}
export const GQL_MESSAGE = {
    message: GQL_MESSAGE_
}
export const GQL_MESSAGES = {
    messages: [ GQL_MESSAGE_ ]
}
export const GQL_MESSAGE_PAGINATION = {
    messagePagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        messages: [ GQL_MESSAGE_ ]
    }
}

export const API_MESSAGE = {
    content: "",
    sender_id:  1,
    target_id:  1,
}
export const API_MESSAGES = [API_MESSAGE]

const GQL_OPINION_ = {
    title: "",
    description: "",
    rate: 128,
    product:  { id: 1},
    user:  { id: 1},
}
export const GQL_OPINION = {
    opinion: GQL_OPINION_
}
export const GQL_OPINIONS = {
    opinions: [ GQL_OPINION_ ]
}
export const GQL_OPINION_PAGINATION = {
    opinionPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        opinions: [ GQL_OPINION_ ]
    }
}

export const API_OPINION = {
    title: "",
    description: "",
    rate: 128,
    product_id:  1,
    user_id:  1,
}
export const API_OPINIONS = [API_OPINION]

const GQL_PAYMENT_ = {
    cardNumber: "",
    expireDate: "",
    type: "DEBIT",
    user:  { id: 1},
    address: "",
}
export const GQL_PAYMENT = {
    payment: GQL_PAYMENT_
}
export const GQL_PAYMENTS = {
    payments: [ GQL_PAYMENT_ ]
}
export const GQL_PAYMENT_PAGINATION = {
    paymentPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        payments: [ GQL_PAYMENT_ ]
    }
}

export const API_PAYMENT = {
    card_number: "",
    expire_date: "",
    type: "DEBIT",
    user_id:  1,
    address: "",
}
export const API_PAYMENTS = [API_PAYMENT]

const GQL_PRODUCT_ = {
    name: "",
    shortDescription: "",
    description: "",
    price: 128.0,
    stock: 128,
    user:  { id: 1},
    opinions: [ { id: 1} ],
    sales: [ { id: 1} ],
    category:  { id: 1},
    photos: [{ url: "" }],
}
export const GQL_PRODUCT = {
    product: GQL_PRODUCT_
}
export const GQL_PRODUCTS = {
    products: [ GQL_PRODUCT_ ]
}
export const GQL_PRODUCT_PAGINATION = {
    productPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        products: [ GQL_PRODUCT_ ]
    }
}

export const API_PRODUCT = {
    name: "",
    short_description: "",
    description: "",
    price: 128.0,
    stock: 128,
    user_id:  1,
    opinion_ids: [1],
    sale_ids: [1],
    category_id:  1,
    photo_ids: [1],
}
export const API_PRODUCTS = [API_PRODUCT]

const GQL_PURCHASE_ = {
    amount: 128,
    product: "{}",
    sale: "{}",
    cart:  { id: 1},
}
export const GQL_PURCHASE = {
    purchase: GQL_PURCHASE_
}
export const GQL_PURCHASES = {
    purchases: [ GQL_PURCHASE_ ]
}
export const GQL_PURCHASE_PAGINATION = {
    purchasePagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        purchases: [ GQL_PURCHASE_ ]
    }
}

export const API_PURCHASE = {
    amount: 128,
    product: "{}",
    sale: "{}",
    cart_id:  1,
}
export const API_PURCHASES = [API_PURCHASE]

const GQL_SALE_ = {
    disscount: 128.0,
    startDate: "2020-01-01T12:00:00+00:00",
    endDate: "2020-01-01T12:00:00+00:00",
    product:  { id: 1},
    user:  { id: 1},
}
export const GQL_SALE = {
    sale: GQL_SALE_
}
export const GQL_SALES = {
    sales: [ GQL_SALE_ ]
}
export const GQL_SALE_PAGINATION = {
    salePagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        sales: [ GQL_SALE_ ]
    }
}

export const API_SALE = {
    disscount: 128.0,
    start_date: "2020-01-01T12:00:00+00:00",
    end_date: "2020-01-01T12:00:00+00:00",
    product_id:  1,
    user_id:  1,
}
export const API_SALES = [API_SALE]

const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    active: false,
    type: "SUPERADMIN",
    photo: { url: "" },
    company:  { id: 1},
    carts: [ { id: 1} ],
    products: [ { id: 1} ],
    whishlist: [ { id: 1} ],
    sales: [ { id: 1} ],
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    active: false,
    type: "SUPERADMIN",
    photo_id: 1,
    company_id:  1,
    cart_ids: [1],
    product_ids: [1],
    whishlist_ids: [1],
    sale_ids: [1],
}
export const API_USERS = [API_USER]