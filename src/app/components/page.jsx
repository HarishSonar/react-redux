import React from 'react';
import ReactDOM from 'react-dom';
import BoxComp from './boxComp';
import Menubar from './menuBar';
import {connect} from 'react-redux';
import {bindActionCreators} from'redux';
import {addItem} from '../actions/sampleAction.js';



class Page extends React.Component{
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        const x= ReactDOM.findDOMNode(this.refs.item).value
        const y= ReactDOM.findDOMNode(this.refs.opt).value
        this.props.addItemNew(x,y,this.props.data);
        ReactDOM.findDOMNode(this.refs.item).value ='';
    }


    render(){
        console.log(this.props);
        return(
            <div>
            <div className= 'head'></div>
            <Menubar menuList={this.props.data.menu}/>
            <div className= 'actionBar'>
                <input type='text' ref='item'/>
                <select style={{marginLeft:'10px'}} ref='opt'>
                    <option>Fruits</option>    
                    <option>Cities</option>   
                    <option>Countries</option>   
                </select>
                <button className= 'btnAddItem' onClick={this.addItem}>Add Item</button>
            </div>
            <div>    
                <BoxComp type={'Fruits'} list={this.props.data.itemList.Fruits} />
                <BoxComp type={'Cities'} list={this.props.data.itemList.Cities} />
                <BoxComp type={'Countries'} list={this.props.data.itemList.Countries} />
            </div>
            </div>    
        )
    }
}


function mapStatesToProps(state){
    return {data:state.data}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addItemNew:addItem},dispatch);
    // return {addItemNew:addItem};
}

export default connect(mapStatesToProps, mapDispatchToProps)(Page);
//export default Page;