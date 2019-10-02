import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style/Doglist.css';
class DogList extends Component{
    render(){
        return(
            <div className='DogList'>
                <h1 className='display-1 text-center' style={{color:'white'}}>Dog list</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dogs.map(idx => {return (
                        <div className='Dog col-lg-4 col-md-6 text-center mt-3' key={idx.name}>
                            <img src={idx.src} alt={idx.name}/>
                            <Link className='underline' to={`/dogs/${idx.name}`}><h3 className='title  mt-4'>{idx.name}</h3></Link>
                            <h4>{`Age : ${idx.age}`}</h4>
                        </div>
                        );
                        }
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default DogList;