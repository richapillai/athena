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
import S3 from "aws-sdk/clients/s3";

// const [file, setFile] = useState();
// const [srcUrl, setSrcUrl] = useState('');
// const [file, setFile] = '';
// const [srcUrl, setSrcUrl] = '';


function CreatorParameters({ following }) {

	const [file, setFile] = useState();
	const [srcUrl, setSrcUrl] = useState('');

	const handleFile= async (fileToHandle) =>{

		console.log('starting')
	
		// initialize the form data
		const formData = new FormData()
	
		// append the file form data to 
		formData.append("file", fileToHandle)
	
		const accessKeyId = "jwk4qg377eklif6b4ka3n53qowsq";
		const secretAccessKey = "j2pcviurnwp3ogut6xkoi6fhrmverhvpwy4sdigltzx4fe2kxirqu";
		const endpoint = "https://gateway.storjshare.io";
	
		const s3 = new S3({
		  accessKeyId,
		  secretAccessKey,
		  endpoint,
		  s3ForcePathStyle: true,
		  signatureVersion: "v4",
		  connectTimeout: 0,
		  httpOptions: { timeout: 0 }
		});
	
		(async () => {
	
		  const { Buckets } = await s3.listBuckets({}).promise();
		  
		  console.log(Buckets);
		
		}
		)();
	
		(async () => {
	
		  // `file` can be a readable stream in node or a `Blob` in the browser
		
		  const params = {
			Bucket: "cakes",
			Key: accessKeyId,
			Body: fileToHandle
		  };
		
		  await s3.upload(params, {
			partSize: 64 * 1024 * 1024
		  }).promise();
		  
		}
		)();
	
		const params = {
		  Bucket: "cakes",
		  Key: accessKeyId
		}
	
		// get the url
		const s3_url = s3.getSignedUrl("getObject", params);
		setSrcUrl(s3_url)
	  
	}

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
				mb = '1rem'
				color={THEME.secondaryLight}>
				Subscription NFT Parameters
			</Text>
			<Flex
				height='100%'
				gap='1rem'
				justify='space-evenly'
				flexDir='column'>
				<FormControl display='flex' gap='1rem' flexDir='column'>
					<InputGroup>
						<InputLeftAddon bg={THEME.primary} color='white'>
							<Text>Price</Text>
						</InputLeftAddon>
						<Input
							color='black'
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
							color='black'
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
				<Text
					height='7.5%'
					fontWeight='bold'
					fontSize='1rem'
					// mb = '1rem'
					color={THEME.secondaryLight}>
					Create a Post
				</Text>
				<Flex gap='1rem' w='20rem'>
					{/* <Button
						bg={THEME.tertiary}
						whiteSpace='initial'
						w='100%'
						height='8rem'>
						Upload Content
					</Button> */}
					<input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
					<button onClick={()=>handleFile(file)}
						color = '#808080'>
						Upload!
					</button>
				</Flex>
				<FormControl display='flex' gap='2rem' flexDir='column'>
					<InputGroup>
						<InputLeftAddon bg={THEME.primary} color='white'>
							<Text>Caption</Text>
						</InputLeftAddon>
						<Input
							color='black'
							name='caption'
							type='string'
							placeholder='Insert caption...'
						/>
					</InputGroup>
				</FormControl>
			</Flex>
		</GridItem>
	);
}

export default CreatorParameters;
