import { atom } from "recoil";
import { getItemAsync } from "expo-secure-store";

import { STORAGE_KEYS } from "../../constants";

const getWallet = async () => {
	const address = await getItemAsync(STORAGE_KEYS.activeAddress);
	if (address) {
		return JSON.parse(address);
	}
	return "";
};

const addressState =
	atom <
	string >
	{
		key: "addressState",
		default: getAddress(),
	};

export default addressState;
