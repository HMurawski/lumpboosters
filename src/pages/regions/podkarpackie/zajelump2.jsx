import MainLayout from "@/components/Layout/MainLayout";
const DUMMY_LUMPS = [
	{ name: "ZajeLump", address: "ZajeUlica 6/9", openingHours: "8-18" },
	{ name: "ZajeLump2", address: "ZajeUlica 2/9", openingHours: "8-18" },
	{ name: "ZajeLump3", address: "ZajeUlica 3/9", openingHours: "8-18" },
	{ name: "ZajeLump4", address: "ZajeUlica 4/9", openingHours: "8-18" },
	{ name: "ZajeLump5", address: "ZajeUlica 5/9", openingHours: "8-18" },
	{ name: "ZajeLump6", address: "ZajeUlica 6/9", openingHours: "8-18" },
	{ name: "ZajeLump7", address: "ZajeUlica 7/9", openingHours: "8-18" },
	{ name: "ZajeLump8", address: "ZajeUlica 8/9", openingHours: "8-18" },
];

const ZajeLump2 = () => {
	return (
		<>
			<MainLayout>
				<div className="lumps">
					<h2> {DUMMY_LUMPS[1].name} </h2>
					<h3> Adres: {DUMMY_LUMPS[1].address} </h3>
					<h3> Godziny Otwarcia: {DUMMY_LUMPS[1].openingHours} </h3>
				</div>
			</MainLayout>
		</>
	);
};
export default ZajeLump2;
