import CountryRepository from "../rest/repositories/country.repository";
import { Country, CountryModel, NewCountryInput } from "../schema/country.schema";

export default class CountryService {

  async findCountries():Promise<Country[]> {
    return CountryModel.find().lean();
  }

  async addCountry(input: NewCountryInput):Promise<Country> {
    return CountryModel.create(input);
  }

  async removeById(id: string): Promise<boolean> {
    try {
      let result = await CountryModel.findByIdAndDelete(id);
      if (result?.errors) return false;
      return true;
    } catch (err) {
      return false;
    }
  }

}