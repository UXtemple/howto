// Edit at https://howto.usepages.com/~
import { Panel, snapY } from 'panels-ui';
import React, { Component, PropTypes } from 'react';
import { Input, Knocking, Text, Horizontal, Vertical } from 'usepages-blocks';

export default class PageIndex extends Component {
  render() {
    const { props } = this;

    return (
      <Panel
        _ref={$e => { this.$panel = $e }}
        style={{
          backgroundColor: "#FFFFFF",
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "400",
          height: "100%",
          width: 360
        }}
      >
        <Input
          _ref={props.nameRef}
          data-block={0}
          disabled={props.isLoading}
          onEnter={props.search}
          placeholder={"Write GitHub handle"}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 25,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10
          }}
          type={"text"}
        />
        {props.isLoading && (
          <Knocking
            data-block={1}
            size={20}
            style={{
              color: "#323232",
              marginLeft: 40,
              marginTop: 10
            }}
          />
        )}
        {!props.isLoading && (
          <Vertical
            data-block={4}
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          >
            {props.results && props.results.map((item, i) => (
              <Horizontal
                data-block={3}
                key={i}
                style={{
                  border: "1px solid #323232",
                  borderRadius: 5,
                  color: "#323232",
                  marginTop: 5,
                  padding: 10,
                  textDecoration: "none"
                }}
                styleActive={{
                  backgroundColor: "#323232",
                  color: "#ffffff"
                }}
                styleHover={{
                  backgroundColor: "#323232",
                  color: "#ffffff"
                }}
                teleportTo={item.teleportTo}
              >
                <Text
                  data-block={2}
                  style={{
                    marginLeft: 10
                  }}
                  text={item.name}
                />
              </Horizontal>
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
PageIndex.childContextTypes = {
  scrollTo: PropTypes.func
}