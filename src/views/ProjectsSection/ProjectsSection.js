import React from "react"
import "./ProjectsSection.css";
import { Box } from "grommet";
import { data } from "../../Components/Projects/data";
import Projects from "../../Components/Projects/Projects";

const ProjectsSection = ({data = []}) => {
    function handleOnClick(item) {}
	return (
		<section id="faq">
			<Box margin="medium">
				<h2 className="projectsTitle" id="PROJECTS">PROJECTS</h2>
				<div>
					{data.map(item =>(
						<div className="acad-item-list">
							<Projects
								key={item.id}
								project = {item.project}
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

export default ProjectsSection;