import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Basic extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    birth: PropTypes.number.isRequired,
    lang: PropTypes.string,
  };

  static defaultProps = {
    lang: 'Javascript',
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  state = {
    hidden: false,
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true / false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  onClickButton = () => {
    this.setState({ hidden: true });
    this.refs.hide.disabled = true;
  }

  render() {
    return (
      <div>
        <span>저는 {this.props.lang} 전문 {this.props.name}입니다!</span>
        {!this.state.hidden && <span>{this.props.birth}년에 태어났습니다.</span>}
        <button onClick={this.onClickButton} ref="hide">숨기기</button>
        <button onClick={this.context.router.goBack}>뒤로</button>
      </div>
    );
  }
}