import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const burgerApi = {
  getBurger() {
    return instance.get(`/burger/getBurger`)
    .then(res => res) 
  }
}
export const mainApi = {
  getMain() {
    return instance.get(`/main/getMain`)
    .then(res => res)
  }
}
export const navigationApi = {
  getNavigationItems() {
    return instance.get(`/navigation/getNavigationItems`)
    .then(res => res)
  }
}
export const optionsApi = {
  getOptions() {
    return instance.get(`/options/getOptions`)
    .then(res => res)
  }
}
export const porfolioApi = {
  getPortfolio() {
    return instance.get(`/portfolio/getPortfolio`)
    .then(res => res)
  }
}
export const resumeApi = {
  getResume() {
    return instance.get(`/resume/getResume`)
    .then(res => res)
  }
}