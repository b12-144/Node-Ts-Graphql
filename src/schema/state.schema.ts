import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";
import { Length, MaxLength, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class State {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop()
  countryID: string;

  @Field(() => String)
  @prop()
  code: string;

  @Field(() => String)
  @prop()
  name: string;

  @Field(() => String)
  @prop()
  asciiName: string;
}

//================================INPUTS BELOW==========================================================
@InputType()
export class NewStateInput {
  @Field({description:'Country Id of the state' })
  countryID: string;

  @Field(() => String, {defaultValue:null, description:'Abreviated State code'})
  @Length(2)
  code?: string;

  @Field({description:'State name' })
  name:string

  @Field({defaultValue:null,description:'Ascii name of the state' })
  @Length(2)
  asciiName?:string
}

//================================QUERY HELPERS AND MODEL BELOW===========================================
interface QueryHelpers {
    //findByEmail: AsQueryMethod<typeof findByEmail>;
  }
  
  export const StateModel = getModelForClass<typeof State, QueryHelpers>(State);