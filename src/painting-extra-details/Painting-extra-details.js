import React from "react";
import './Painting-extra-details.scss';

class PaintingExtraDetails extends React.Component {

    render() {
		console.log("props is:")
		console.log(this.props.location.state)
		return (this.Paint());
		// return(<p>test</p>)
    }

    Paint() {
        return (
			<div className="paint">
				<img className="img" src={this.props.location.state.img} alt=""/>

				<div className="middle-card">
					<h2>{this.props.location.state.title}</h2>
					<h5>Artist:</h5>
					<p>{this.props.location.state.artist}</p>
					<h5>Description:</h5>
					<p>{this.props.location.state.description}</p>
					<h5>Price:</h5>
					<p>{this.props.location.state.price}</p>
					<br/>
					<button className="btn btn-info">Buy Now</button>
				</div>
			</div>
        )
    }
}

export default PaintingExtraDetails
