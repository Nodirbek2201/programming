import React, {Component} from 'react';
import ReactDom from 'react-dom'


const a = 21
const b = 23
class Index extends Component {

    mult=()=>{
        console.log(a*b)
    }
    divition=()=>{
        console.log(a/b)
    }
    render() {
        return (
            <div className={'container col-md-4 mt-4'}>
                <button className={'btn btn-dark mx-3'} onClick={this.mult}>a*b</button>
                <button className={'btn btn-dark mx-3'} onClick={this.divition}>a/b</button>
            </div>
        );
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('root')
)