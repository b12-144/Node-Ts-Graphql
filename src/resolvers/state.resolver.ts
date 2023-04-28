import { State } from "@schema/state.schema";
import { Country, NewCountryInput } from "@schema/country.schema";
import StateService from "@service/state.service";
import StateServie from "@service/state.service";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class StateResolver {
  constructor(private stateService: StateService) {
    this.stateService = new StateService();
  }

  @Query(() => [State])
  @Authorized()
  states() {
    return this.stateService.findStates();
  }

  // @Mutation(() => Country)
  // @Authorized()
  // addCountry(@Arg("input") input: NewCountryInput):Promise<Country> {
  //   return this.stateService.addCountry(input);
  // }

  @Mutation(returns => Boolean)
  @Authorized()
  removeState(@Arg("id") id: string):Promise<boolean> {
    return this.stateService.removeById(id);    
  }
}