import React, { Component } from 'react';
import { Accordion } from "react-bootstrap";

import { sidebarUtils } from './utils';

import SidebarCategory from './SidebarCategory';

export default class Sidebar extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.setState(sidebarUtils.getFilterState());
  }

  render () {
    const categories = this.getCategories();

    return (
      <Accordion
        defaultActiveKey="0"
        style={{
          // height: '100%', /*TODO: REMOVE*/
          width:'100%',
          border: '1px solid lightgray',
          overflowY: 'auto',
          background: '#FFFFFF'
        }}>
        {categories}
      </Accordion>
    )
  }

  getCategories = () => {
    return this.state.categories.map((category) => (
      <SidebarCategory
        category={category}
      />
    ))
  }
}