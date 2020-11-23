import github from "../assets/github";
import resume from "../assets/resume";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [
        {
          id: 0,
          mainTitle: "Resume",
          scdTitle: "My Resume",
          imgSrc: resume,
          link:
            "https://drive.google.com/drive/folders/1QmLrAIGDnjdX7Wrnn6QzQhv9yMFFPIn1?usp=sharing",
          selected: false,
        },
        {
          id: 1,
          mainTitle: "Matthew Hiatt",
          scdTitle: "Github Account",
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
}

export default Carousel;
