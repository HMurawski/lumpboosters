import Link from "next/link";
const Header = () => {
	return (
		<>
			<header className="main-header">
				<ul className="main-header__nav">
					<li className="main-header__item">
						<Link className="main-header__link" href="/">
							LumpBusters
						</Link>
					</li>
					<li className="main-header__item">
						<Link className="main-header__link" href="/">Znajdź Lumpa</Link>
					</li>
					<li className="main-header__item">
						<Link className="main-header__link" href="/">Sprzedaj Ciuch</Link>
					</li>
					<li className="main-header__item">
						<Link className="main-header__link" href="/">Ściągnij Apke</Link>
					</li>
					<li className="main-header__item">
						<Link className="main-header__link" href="/">Blog</Link>
					</li>
				</ul>
			</header>
		</>
	);
};
export default Header;
