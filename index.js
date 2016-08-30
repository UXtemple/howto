import { wrap } from 'panels-ui'
import Home from './home'
import Repo from './repo'

export const panels = {
  '/': {
    type: 'Home'
  },
  '/:organisation--:repo': {
    type: 'Repo'
  }
}

export const lookup = [
  '/:organisation--:repo'
]

export const types = {
  Home: wrap(Home),
  Repo: wrap(Repo)
}
