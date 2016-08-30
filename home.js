import { PageIndex } from './pages/pages'
import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    isLoading: false,
    results: []
  }

  search = async () => {
    this.setState({
      isLoading: true
    })

    const organisation = this.$name.value
    const res = await fetch(`https://api.github.com/users/${organisation}/repos`)
    const results = await res.json()

    this.setState({
      isLoading: false,
      results: results.map(r => ({
        ...r,
        teleportTo: `${organisation}--${r.name}`
      }))
    })
  }

  render() {
    const { isLoading, results } = this.state

    return (
      <PageIndex
        isLoading={isLoading}
        nameRef={$e => { this.$name = $e }}
        results={results}
        search={this.search}
      />
    )
  }
}
