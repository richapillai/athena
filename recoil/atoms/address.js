import { atom } from "recoil";

const getAddress = async () => {
	const address = "SpaceSuitMan";
	return address;
};

const addressState = {
	key: "addressState",
	default: getAddress(),
};

export default addressState;
