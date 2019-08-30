import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


import SidebarFilter from './SidebarFilter';

const SidebarCategory = ({category}) => {
  const filters = getFilters(category.items);

  return (
    <Card
      style={{
        textAlign: 'left',
      }}
    >
      <Accordion.Toggle as={Card.Header} eventKey={category.id}>
        {category.label}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={category.id}>
        <Card.Body>
          {filters}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
};

const getFilters = (items = [], index) => {
  return items.map(item => (
    <SidebarFilter
      item={item}
      key={`filter-${index}`}
    />
  ))
};

export default SidebarCategory;