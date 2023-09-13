import MainLayout from "@/components/Layout/MainLayout";
import Link from "next/link";


const MazowieckieMain = () => {
	return (
		<>
			<MainLayout>
				<div className="regions">
					<h1 className="regions__h1">MAZOWIECKIE</h1>
					<h2 className="regions__h2">POZNAJ NAJLEPSZE LUMPY:</h2>
					<ul className="regions__lump-list">
						<li className="regions__lump-item">
							<Link className="regions__lump-link"  href="/regions/mazowieckie/zajelump1"> ZajeLump1 </Link>
						</li>
						<li className="regions__lump-item">
							<Link className="regions__lump-link"  href="/regions/mazowieckie/zajelump2"> ZajeLump2 </Link>
						</li>
						<li className="regions__lump-item">
							<Link className="regions__lump-link"  href="/regions/mazowieckie/zajelump3"> ZajeLump3 </Link>
						</li>
					
					</ul>
				</div>
			</MainLayout>
		</>
	);
};
export default MazowieckieMain;
