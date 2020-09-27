import { PortfolioInitial } from "../state/portfolio_reducer";
import { ResumeInitial } from "../state/resume_reducer";
import { OptionsInitial } from "../state/options_reducer";
import { MainInitial } from "../state/main_reducer";
import { BurgerInitial } from "../state/burger_reducer";
import { NavigationInitial } from "../state/navigation_reducer";

export type State= {
  main: MainInitial
  options: OptionsInitial
  portfolio: PortfolioInitial
  resume: ResumeInitial
  burger: BurgerInitial
  navigation: NavigationInitial
}
