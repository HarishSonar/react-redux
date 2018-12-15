import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class Menubar extends React.Component{
     constructor(props) {
        super(props);
    }
    render(){
        const temp = this.props.menuList;
        const result = temp.map(function(p,i){ return(<li key={i}>{p}</li>)})
        return(
            <div className = 'menubar'>
                <ul>
                    {result}
                </ul>
            </div>
        )
    }
}

function mapStatesToProps(state){
    return {data:state.data}
}

export default connect(mapStatesToProps)(Menubar);
// export default Menubar;