import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItems} from './actions/itemActions'
 
class Shoppinglist extends Component {
componentDidMount(){
  this.props.getItems()
}

ondelete=(id)=>{
  this.props.deleteItems(id)
}
    render() { 
        const {items} = this.props.item
        return (
           <Container><br></br>
               <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.ondelete.bind(this,_id)}
                  >
                    &times;
                  </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
           </Container>
        );
    }
}
const mapStateToProps =(state)=>({
  item:state.item
})
 
export default connect(mapStateToProps, {getItems, deleteItems})(Shoppinglist);