import { Data } from "./Data";

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class='Sidebar'>
        <Data />
        <Data />
        <Data />
      </div>
    );
  }
}

export default Sidebar;
