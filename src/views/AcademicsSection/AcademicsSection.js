import { Box } from "grommet";
import useMediaQuery from "react-responsive";
import "./AcademicsSection.css";
import Academics from "../../Components/Academics/index";
import { data } from "../../Components/Academics/data";

const FaqSection = ({data = []}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
	const faqTitle = isMobile ? 'faqTitle-mobile' : 'faqTitle-desktop'
  	const displayStyle = isMobile ? 'displayStyle-mobile' : 'displayStyle-desktop';
	const acadItemList = isMobile ? 'acad-item-list-mobile' : 'acad-item-list-desktop'
    function handleOnClick(item) {}
	return (
		<section id="faq">
			<Box margin="medium">
				<h2 className={faqTitle} id="ACADEMICS">ACADEMICS</h2>
				<div className={displayStyle}>
					{data.map(item =>(
						<div className={acadItemList}>
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