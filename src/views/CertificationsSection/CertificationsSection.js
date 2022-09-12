import React from "react"
import "./CertificationsSection.css";
import { Box } from "grommet";
import { data } from "../../Components/Projects/data";
import Projects from "../../Components/Projects/Projects";

const CertificationsSection = ({data = []}) => {
    function handleOnClick(item) {}
	return (
		<section id="faq">
			<Box margin="medium">
				<h2 className="certificationTitle">CERTIFICATIONS</h2>
				<div>
					{data.map(item =>(
						<div className="acad-item-list">
							<Projects
								key={item.id}
								project = {item.certification}
                                description = {item.description}
								className="faqBox"
							></Projects>
                        </div>
					))};

				</div>
			</Box>
		</section>
	);
};

export default CertificationsSection;