import { NewStateInput, State, StateModel } from '../schema/state.schema';


export default class StateService {

    async findStates():Promise<State[]> {
      return StateModel.find().lean();
    }
  
    async addState(input: NewStateInput):Promise<State> {
      return StateModel.create(input);
    }
  
    async removeById(id: string): Promise<boolean> {
      try {
        let result = await StateModel.findByIdAndDelete(id);
        if (result?.errors) return false;
        return true;
      } catch (err) {
        return false;
      }
    }
  
  }