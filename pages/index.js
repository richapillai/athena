import { userData } from "../data";
import { Home } from "./Home";

export default function Main() {
	return <Home currentUser={userData} />;
}
