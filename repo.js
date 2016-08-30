import { PageRepository } from './pages/pages'
import React, { Component } from 'react'

export default class Repo extends Component {
  state = {
    isLoading: true,
    stargazers: []
  }

  async componentWillMount() {
    const { organisation, repo } = this.props

    const res = await fetch(`https://api.github.com/repos/${organisation}/${repo}/stargazers`)
    const stargazers = await res.json()

    this.setState({
      isLoading: false,
      stargazers: stargazers.map(s => ({
        name: s.login
      }))
    })
  }

  render() {
    const { isLoading, stargazers } = this.state
    const { organisation, repo } = this.props

    return (
      <PageRepository
        isLoading={isLoading}
        organisation={organisation}
        repo={repo}
        stargazers={stargazers}
      />
    )
  }
}
