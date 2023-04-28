import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";
import { Length, MaxLength, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Country {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  ccode: string;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @prop()
  ptBr: string;

  @prop()
  usShort: string;
}

//================================INPUTS BELOW==========================================================
@InputType()
export class NewCountryInput {
  @Field({description:'Country code' })
  @Length(2)
  ccode?: string;

  @Field(() => String, {description:'Country name'})
  @MaxLength(50)
  name: string;

  @Field({defaultValue:null, description:'Brazilian Portuguese country name' })
  @MaxLength(50)
  ptBr?:string

  @Field({defaultValue:null,description:'US English abreviated country name' })
  @Length(2)
  usShort?:string
}

//================================QUERY HELPERS AND MODEL BELOW===========================================
interface QueryHelpers {
  //findByEmail: AsQueryMethod<typeof findByEmail>;
}

export const CountryModel = getModelForClass<typeof Country, QueryHelpers>(Country);