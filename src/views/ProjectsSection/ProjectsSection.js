import React from "react"
import useMediaQuery from "react-responsive";
import "./ProjectsSection.css";
import { Box } from "grommet";
import { data } from "../../Components/Projects/data";
import Projects from "../../Components/Projects/Projects";

const ProjectsSection = ({data = []}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
	const faqTitle = isMobile ? 'faqTitle-mobile' : 'faqTitle-desktop'
  	const displayStyle = isMobile ? 'displayStyle-mobile' : 'displayStyle-desktop';
	const acadItemList = isMobile ? 'acad-item-list-mobile' : 'acad-item-list-desktop'
    function handleOnClick(item) {}
	return (
		<section id="faq">
			<Box margin="medium">
				<h2 className={faqTitle} id="PROJECTS">PROJECTS</h2>
				<div className={displayStyle}>
					{data.map(item =>(
						<div className={acadItemList}>
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