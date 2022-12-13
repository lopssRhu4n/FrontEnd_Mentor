import { Validator } from "./Validator.js";
import { UIState } from "./UIState.js";
import { priceCalculator } from "./priceCalculator.js";

const calculator = new priceCalculator()
const validator = new Validator()

const state = new UIState(validator, calculator)

state.addEvents()