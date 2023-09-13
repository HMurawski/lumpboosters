import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
const MainLayout = (props) => {
	return (
		<>
			<div className="main-layout">
				
				<Header />

				<section className="content-container">{props.children}</section>
				<Footer />
			</div>
		</>
	);
};
export default MainLayout;
