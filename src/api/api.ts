import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://georgiy-kartashov-server.herokuapp.com/api'
  // baseURL: 'http://localhost:5000/api'
})

export const burgerApi = {
  getBurger() {
    return instance.get(`/burger/getBurger`)
    .then(res => res.data) 
  }
}

export const mainApi = {
  getMain() {
    return instance.get(`/main/getMain`)
    .then(res => res.data)
  }
}

export const navigationApi = {
  getNavigation() {
    return instance.get(`/navigation/getNavigation`)
    .then(res => res.data)
  }
}

export const optionsApi = {
  getOptions() {
    return instance.get(`/options/getOptions`)
    .then(res => res.data)
  }
}

export const porfolioApi = {
  getPortfolio() {
    return instance.get(`/portfolio/getPortfolio`)
    .then(res => res.data)
  }
}

export const resumeApi = {
  getResume() {
    return instance.get(`/resume/getResume`)
    .then(res => res.data)
  }
}