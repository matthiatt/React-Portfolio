import github from "../assets/github";
import resume from "../assets/resume";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Resume",
          subTitle: "My Resume",
          imgSrc: resume,
          link:
            "https://drive.google.com/drive/folders/1QmLrAIGDnjdX7Wrnn6QzQhv9yMFFPIn1?usp=sharing",
          selected: false,
        },
        {
          id: 1,
          title: "Matthew Hiatt",
          subTitle: "Github Account",
          imgSrc: github,
          link: "https://github.com/matthiatt",
          selected: false,
        },
      ],
    };
  }
}
