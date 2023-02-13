import { useParams } from "react-router-dom";

function Channel() {
  const { id } = useParams();
  return <div>Channel id: {id}</div>;
}

export default Channel;
