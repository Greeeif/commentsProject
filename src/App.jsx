import { comments } from "./commentData";
import Card from "./Card";

const commentItems = comments.map((comment, index) => (
  <Card key={index} commentObject={comment} />
));

function App(props) {
  return <div>{commentItems}</div>;
}

export default App;