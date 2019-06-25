import IMealState from "../../Models/MealState";
import MealActionType from "./MealActionType";

export interface IAddMealAction {
  type: MealActionType.ADDMEAL;
  mealState: IMealState;
}
