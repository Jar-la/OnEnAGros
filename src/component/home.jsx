import { Board } from "./Board";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class='home'>
        <board data={this.props.data} />
      </div>
    );
  }
}

export default Home;
