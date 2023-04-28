import UserResolver from "./user.resolver";
import ProductResolver from "./product.resolver";
import CountryResolver from "./country.resolver";

export const resolvers = [
    UserResolver, 
    ProductResolver,
    CountryResolver
] as const;
