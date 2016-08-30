// Edit at https://howto.usepages.com/repository/~
import { Panel, snapY } from 'panels-ui';
import React, { Component, PropTypes } from 'react';
import { Text, Knocking, Vertical } from 'usepages-blocks';

export default class PageRepository extends Component {
  render() {
    const { props } = this;

    return (
      <Panel
        _ref={$e => { this.$panel = $e }}
        style={{
          backgroundColor: "#fafafa",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "400",
          height: "100%",
          width: 360
        }}
      >
        <Text
          data-block={0}
          style={{
            marginLeft: 20,
            marginTop: 35
          }}
          text={`${props.organisation}/${props.repo}`}
        />
        {props.isLoading && (
          <Knocking
            data-block={1}
            size={20}
            style={{
              color: "#323232",
              marginLeft: 20,
              marginTop: 10
            }}
          />
        )}
        {!props.isLoading && (
          <Vertical
            data-block={3}
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          >
            {props.stargazers && props.stargazers.map((item, i) => (
              <Text
                data-block={2}
                key={i}
                style={{
                  marginTop: 5
                }}
                text={item.name}
              />
            ))}
          </Vertical>
        )}
      </Panel>
    );
  }

  getChildContext = () => ({ scrollTo: this.scrollTo })

  scrollTo = (y, animate) => {
    animate ?
      snapY(this.$panel, y, typeof animate === 'boolean' ? {} : animate) :
      this.$panel.scrollTop = y;
  }
}
PageRepository.childContextTypes = {
  scrollTo: PropTypes.func
}