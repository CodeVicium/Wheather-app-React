import React,{Component} from 'react';

class Watch extends Component {
render(){
    const t = new Date();
    return(
       <div>{t.getHours()}</div>
    )
}
}
export default Watch;