import { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

class PaginationBar extends Component {
    active = 2;
    items = [];
    render(){
        return(
            <Pagination>{items}</Pagination>
        )
    }
}


export default PaginationBar;