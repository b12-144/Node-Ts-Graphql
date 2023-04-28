import { Country, NewCountryInput } from "@schema/country.schema";
import CountryService from "@service/country.service";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class CountryResolver {
  constructor(private countryService: CountryService) {
    this.countryService = new CountryService();
  }

  @Query(() => [Country])
  @Authorized()
  countries() {
    return this.countryService.findCountries();
  }

  @Mutation(() => Country)
  @Authorized()
  addCountry(@Arg("input") input: NewCountryInput):Promise<Country> {
    return this.countryService.addCountry(input);
  }

  @Mutation(returns => Boolean)
  @Authorized()
  removeCountry(@Arg("id") id: string):Promise<boolean> {
    return this.countryService.removeById(id);    
  }
}