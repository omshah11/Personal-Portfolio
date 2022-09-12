import React, {useState} from "react";
import {Box, Button, Collapsible} from 'grommet';
import { Add } from "grommet-icons";

const Certifications = ({certification,description}) => {
    const [open, setOpen] = useState(false);

    return(
        <div className="container">
			<Box
				background="#E5E4E2"
				round="medium"
				width="100%"
				pad="small"
				margin={{ bottom: "small" }}
				className="faq-container"
			>
				<Box direction="row" justify="between" align="center">
					<Box margin={{ left: "small" }}>
						<div className="qn">{certification}</div>
					</Box>
					<Button onClick={() => setOpen(!open)} icon={<Add />} />
				</Box>

				<Collapsible className="acad-collapsible" open={open}>
					<Box
						margin={{ top: "small" }}
						align="start"
						justify="center"
                       
					>
						<Box margin={{ left: "small" }}>
							<div className="ans">{description}</div>
						</Box>
					</Box>
				</Collapsible>
			</Box>
		</div>
    )
}

export default Certifications;