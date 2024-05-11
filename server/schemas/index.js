const typeDefs = `#graphql

type BrandLocal {
    id: String!,
    name: String,
    image: String,
    category: String,
    rate: String,
    time: String,
    location: String,
    promostion: String,
    menu: Menu
}

type Menu {
    id: String!,
    navProduct: String,
    itemProduct: ItemProduct
}

type ItemProduct {
    id: String!,
    nameProduct: String,
    imageProduct: String,
    description: String,
    price: String
}

type NavFood {
    id: String!,
    name: String
}

type TagBrand {
    id: String!,
    imageFood: String,
    nameTag: String
}

type Query {
    brandLocals: [BrandLocal],
    brandLocal(brandLocalId: String!): BrandLocal,
    menus: [Menu],
    menu(menuId: String!): Menu,
    itemProducts: [String],
    itemProduct(itemProductId: String!): ItemProduct,
    navFoods: [NavFood],
    navFood(navFoodId: String!): NavFood,
    tagBrands: [TagBrand],
    tagBrand(tagBrandId: String!): TagBrand
  }

`;