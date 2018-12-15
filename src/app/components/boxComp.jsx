import React from 'react';
import ReactDOM from 'react-dom';


class BoxComp extends React.Component{
     constructor(props) {
        super(props);
    }
    render(){
        const temp =this.props.list;
        const result = temp.map((x,i)=><li key={i}>{x}</li>);
        return(
            <div className ='simpleDiv'>
            <h1 style={{margin:'5px 15px'}}>{this.props.type}</h1>
            <ul style={{color:'yellow',fontSize:'20px', fontWeight:'800'}}>
                {result}
            </ul>
            </div>
        )
    }
}

export default BoxComp;