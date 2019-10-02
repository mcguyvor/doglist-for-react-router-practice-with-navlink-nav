import React, { Component } from 'react';
import '../style/DogDetail.css';
import {Link} from 'react-router-dom';
class DogDetail extends Component{
    render(){
        return(
            <div className='container'>
                <div className='DogDetail row justify-content-center mt-5 ml-auto mr-auto'>
                    <div className='col-11 col-lg-6'>
                        <div className='DogDetail-card card DogShadow'>
                            <img className='card-img-top' src ={this.props.dog.src} alt={this.props.dog.name}></img>
                                <div className='card-body'>
                                    <h1 className='card-title'>{this.props.dog.name}</h1>
                                    <h4 className='card-subtitle text-muted'>{this.props.dog.age} years old</h4>
                                </div>
                                    <ul className='list-group list-group-flush'>
                                        {this.props.dog.facts.map(idx=> 
                                        <li className='list-group-item' key={idx}>{idx}</li>
                                        )}
                                    </ul>
                                    <div className ='card-body'>
                                        <Link to='/dogs' className='btn btn-info'>Go back</Link>
                                    </div>
                        </div>
                    </div>
               
                </div>
            </div>
            
        );
    }
}
export default DogDetail;