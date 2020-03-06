import React from 'react'

class BaseballCard extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <section className="baseball-card">
                <img className="profile-pic" src={`https://avatars.dicebear.com/v2/${this.props.gender}/:${Math.floor(Math.random()*10000) + 15}.svg`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>Age: {Math.floor(Math.random()*65) + 15}</p>
                    <p>gender: {this.props.gender}</p>
                    <p>region: {this.props.region}</p>
                </div>
            </section>
        )
    }
}

export default BaseballCard