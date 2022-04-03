import { Box } from "grommet";
import "./AcademicsSection.css";
import Academics from "../../Components/Academics/index";
import { data } from "../../Components/Academics/data";

const FaqSection = ({data = []}) => {
    function handleOnClick(item) {}
	return (
		<section id="faq">
			<Box margin="medium">
				<h2 className="faqTitle">ACADEMICS</h2>
				<div>
					{data.map(item =>(
						<div className="acad-item-list">
							<Academics
								key={item.id}
								subject = {item.subject}
                                description = {item.description}
								className="faqBox"
							></Academics>
                        </div>
					))};

				</div>
			</Box>
		</section>
	);
};

export default FaqSection;