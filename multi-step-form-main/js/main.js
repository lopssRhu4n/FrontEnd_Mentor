import { Validator } from "./formValidation.js";
import { UIState } from "./UIState.js";

const validator = new Validator()

const state = new UIState(validator)

state.addEvents()