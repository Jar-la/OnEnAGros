import { Header } from "./Header";
import { Center } from "./Center";
import { Sidebar } from "./Sidebar";

class board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class='Board'>
        <Header />
        <Sidebar />
        <Center />
        <Sidebar />
      </div>
    );
  }
}

export default Board;
