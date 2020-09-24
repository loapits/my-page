import { portfolioInitialTypes } from "../state/portfolio_reducer";
import { resumeInitialTypes } from "../state/resume_reducer";
import { optionsInitialTypes } from "../state/options_reducer";
import { mainInitialTypes } from "../state/main_reducer";
import { burgerInitialTypes } from "../state/burger_reducer";
import { navigationInitialTypes } from "../state/navigation_reducer";

export type stateType= {
  main: mainInitialTypes
  options: optionsInitialTypes
  portfolio: portfolioInitialTypes
  resume: resumeInitialTypes
  burger: burgerInitialTypes
  navigation: navigationInitialTypes
}
