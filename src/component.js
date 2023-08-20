import React from "react";
import {
	Grid,
	Column,
	Row,
	TextInput,
	Checkbox,
	TextArea,
	Button
} from "carbon-components-react";
import "./component.scss";

export const FragmentComponent = ({ state, setState }) => {
	const handleInputChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<>
			<Grid>
				<Row>
					<Column>
						<span className="title">Form title</span>
					</Column>
				</Row>
				<Row>
					<Column>
						<TextInput
							labelText="Title"
							name="title-input"
							helperText="Enter a title"
							placeholder="Example form title"
							value={state["title-input"]}
							onChange={handleInputChange}
						/>
						<Checkbox
							labelText="Accept"
							name="accept-checkbox"
							id="accept-checkbox"
							checked={state["accept-checkbox"]?.checked}
							onChange={(checked) =>
								handleInputChange({
									target: {
										name: "accept-checkbox",
										value: checked
									}
								})
							}
						/>
					</Column>
					<Column>
						<TextArea
							labelText="Description"
							name="description-text-area"
							helperText="Enter a description"
							placeholder="In a sentence or two, this is about..."
							value={state["description-text-area"]}
							onChange={handleInputChange}
						/>
					</Column>
				</Row>
				<Row>
					<Column>
						<Button kind="primary" undefined>
							Submit
						</Button>
						<Button kind="secondary" undefined>
							Cancel
						</Button>
					</Column>
				</Row>
			</Grid>
		</>
	);
};
