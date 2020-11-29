import React from "react";
import github from "../../assets/images/githubsmaller.jpg";
import Card from "./card";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [
        {
          id: 0,
          mainTitle: "Matthew Hiatt",
          scdTitle: "Github Account",
          // href: "src/assets/images/github.jpg",
          imgSrc: github,
          link: "https://github.com/matthiatt",
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id) => {
    let itemsArray = [...this.state.itemsArray];

    itemsArray[id].selected = itemsArray[id].selected ? false : true;

    itemsArray.forEach((objectItem) => {
      if (objectItem.id !== id) {
        objectItem.selected = false;
      }
    });
  };
  handleCardClick = (id) => {
    let itemsArray = [...this.state.itemsArray];

    itemsArray[id].selected = itemsArray[id].selected ? false : true;

    itemsArray.forEach((objectItem) => {
      if (objectItem.id !== id) {
        objectItem.selected = false;
      }
    });

    this.setState({
      itemsArray,
    });
  };

  makeItems = (itemsArray) => {
    return itemsArray.map((objectItem) => {
      return (
        <Card
          objectItem={objectItem}
          click={(e) => this.handleCardClick(objectItem.id, e)}
          key={objectItem.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <h1>Click the card here for my Github!</h1>
        <Col md="10" md={{ size: 6, offset: 4 }}>
          {this.makeItems(this.state.itemsArray)}
        </Col>
      </Container>
    );
  }
}

export default Carousel;
