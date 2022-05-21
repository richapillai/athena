import { atom } from "recoil";

const getExplore = async () => {
	const address = "SpaceSuitMan";
	return address;
};

const exploreState = atom({
	key: "exploreState",
	default: getExplore(),
});

export default exploreState;
