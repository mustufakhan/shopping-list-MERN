import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Modal,ModalHeader, Form,FormGroup, Label, ModalBody,Input } from 'reactstrap';
import {connect} from 'react-redux'
import {addItems} from './actions/itemActions'
import {v4 as uuid} from 'uuid';
 
class Itemmodal extends Component {
    state={
        modal:false,
        name:''
    }
    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()

        const newItems={
            id: uuid(),
            name:this.state.name
        }
        this.props.addItems(newItems)
        this.toggle()
    }
    render() { 
        return (
            <div>
                <Button
                color="dark"
                style={{marginBottom:'2em',marginTop:'2em'}}
                onClick={this.toggle}
                >
                    Add on list
                </Button>
                <Modal toggle={this.toggle} isOpen={this.state.modal}>
                 <ModalHeader  toggle={this.toggle} >Add to Shopping list</ModalHeader>
                 <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                          <Label for="items">Hello,God bless you
                          </Label>
                          <Input 
                          type="text"
                          name="name"
                          id="items"
                          placeholder="Add Your Pendings"
                          onChange={this.onChange}
                          />
                          <Button color="dark" style={{marginTop:'2em'}} block>
                              ADD ON LIST
                          </Button>
                      </FormGroup>
                     </Form>
                 </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps=state=>({
    item:state.item
})
 
export default connect(mapStateToProps,{addItems})(Itemmodal);