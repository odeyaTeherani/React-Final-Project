import React from "react";
import './Paintings.scss';
import '.././painting-extra-details/Painting-extra-details.js'
// import PaintingExtraDetails from "../painting-extra-details/Painting-extra-details";
import {string} from "prop-types";
import { Link } from "react-router-dom";
import {db} from '../service/firebase';
import Dropdown from "react-bootstrap/Dropdown";

class Paintings extends React.Component {

    constructor(){
        super();
        this.state = {
        flag: false,
            sorted:"title", //artist,category,price,title
            direction:"asc",//desc ,asc
            extra_details_paint: {
            artist: string,
            category: string,
            description: string,
            img: string,
            price: string,
            title: string,
        }
    };
        this.sortBy.bind(this);
        this.sortDirection.bind(this);

}
    sortDirection(event) {
        this.setState({direction: event});
        this.componentDidMount()

    }

    sortBy(event) {
        this.setState({sorted:event});
        this.componentDidMount()

    }

    async componentDidUpdate(prevProps) {
        const collection = await db.collection('paintings')
            .orderBy(this.state.sorted, this.state.direction)
            .get()
        const paintingsList = [];
        collection.forEach(doc => {
            const data = doc.data();
            if (data)
                paintingsList.push(data)
        });
        let i;
        for (i=0;i<paintingsList.length;i++)
        {
            if(paintingsList[i].title!=this.state.paintings[i].title)
            {
                this.setState({paintings: paintingsList});
                return
            }
        }



    }
        async componentDidMount() {
            const collection = await db.collection('paintings')
                .orderBy(this.state.sorted, this.state.direction)
                .get()
            const paintingsList = [];
            collection.forEach(doc => {
                const data = doc.data();
                if (data)
                    paintingsList.push(data)
            });
            this.setState({paintings: paintingsList});
    }



    render() {
        return (
            this.List()
          //this.state.flag === true ? <PaintingExtraDetails data={this.state.extra_details_paint}/> : this.List()
        );
    }

    List() {
        if (this.state.paintings) {
            return (
				<div className="gallery">
                    <Dropdown>
                        <form>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">Sort by: {this.state.sorted}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.sortBy("artist")}>artist</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.sortBy("category")}>category</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.sortBy("price")}>price</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.sortBy("title")}>title</Dropdown.Item>
                                </Dropdown.Menu>
                        </form>
                    </Dropdown>
                    
                    <Dropdown>
                        <form>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">Direction: {this.state.direction}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.sortDirection("asc")}>ascending</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.sortDirection("desc")}>descending</Dropdown.Item>
                                </Dropdown.Menu>
                        </form>
                    </Dropdown>
                    <br></br>
                    <br></br>
					{this.state.paintings.map((paint) => (
                        this.Card(paint)
                    )
                )}
				</div>
            )
        } else {
            return (<p>DB Empty</p>)
        }
    }

    Card(paint) {

        let sub_description = paint.description;
        if (sub_description.length > 45) {
            sub_description = sub_description.substr(0, 45) + '...';
        }
        return (
            <div className="Card">
				<div className="top">
					<img className="card-img-top" src={paint.img} alt=""/>
                    <h4>{paint.title}</h4>
				</div>
				<div className="text-below-image">
					<p className="text"><b>Artist:</b> {paint.artist}</p>
					<p className="text"><b>Description:</b> {sub_description}</p>
					<br/>
				</div>

                <Link to={{
                    pathname:`/PaintingExtraDetails/${paint.title}`,
                    state: paint }}>
                    <button className="btn btn-info">More Details</button>
                </Link>
            </div>
        );
    }
}

export default Paintings;
