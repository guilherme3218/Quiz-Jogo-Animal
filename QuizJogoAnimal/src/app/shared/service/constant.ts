import {environment} from '../../../environments/environment';

const ApiUrl = {
  GET_ANIMALS: `${environment.baseUrl}/animals`,
  SAVE_CONDITION: `${environment.baseUrl}/condition`,
  SAVE_ANIMAL: `${environment.baseUrl}/animals`,
};
export default ApiUrl;
