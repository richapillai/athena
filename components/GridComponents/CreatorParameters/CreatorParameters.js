import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	GridItem,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { THEME } from "../../../theme/colors";

function CreatorParameters({ following }) {
	const [formData, setFormData] = useState({ price: 0, quantity: 0 });
	const handleChange = (e) => {
		if (e.target.name === "price") {
			setFormData({ ...formData, price: e.target.value });
		} else {
			setFormData({ ...formData, quantity: e.target.value });
		}
	};

	const [formError, setFormError] = useState({ price: "", quantity: "" });
	const setErrors = () => {
		setFormError({ price: "", quantity: "" });

		if (formData.price < 0) {
			setFormData({
				...formData,
				price: "The price must be a positive number",
			});
		}

		if (formData.quantity <= 0) {
			setFormData({
				...formData,
				quantity: "The quantity must be greater than 0.",
			});
		}

		if (formData.quantity % 1 !== 0) {
			setFormData({
				...formData,
				quantity: "The mint quantity must be an integer",
			});
		}
	};

	return (
		<GridItem h='100%' rowSpan={2} colSpan={1}>
			<Text
				height='7.5%'
				fontWeight='bold'
				fontSize='1rem'
				color={THEME.secondaryLight}>
				Subscription NFT Parameters
			</Text>
			<Flex
				height='92.5%'
				gap='1rem'
				justify='space-evenly'
				flexDir='column'>
				<FormControl display='flex' gap='2rem' flexDir='column'>
					<InputGroup>
						<InputLeftAddon bg={THEME.primary} color='white'>
							<Text>Price</Text>
						</InputLeftAddon>
						<Input
							color='white'
							name='price'
							type='number'
							placeholder='0.00'
						/>
						{formError.price.length > 0 && (
							<FormErrorMessage>
								{formError.price}
							</FormErrorMessage>
						)}
					</InputGroup>
					<InputGroup>
						<InputLeftAddon bg={THEME.primary} color='white'>
							<Text>Quantity</Text>
						</InputLeftAddon>
						<Input
							color='white'
							name='quantity'
							type='number'
							placeholder='0'
						/>
						{formError.quantity.length > 0 && (
							<FormErrorMessage>
								{formError.quantity}
							</FormErrorMessage>
						)}
					</InputGroup>
				</FormControl>
				<Flex gap='2rem' w='20rem'>
					<Button
						bg={THEME.tertiary}
						whiteSpace='initial'
						w='50%'
						height='8rem'>
						Upload Content
					</Button>
					<Button
						bg={THEME.tertiary}
						whiteSpace='initial'
						w='50%'
						height='8rem'>
						Upload Content
					</Button>
				</Flex>
			</Flex>
		</GridItem>
	);
}

export default CreatorParameters;
