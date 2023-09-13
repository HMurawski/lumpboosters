import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";
import MainMap from "@/components/UI/MainMap/MainMap";

export default function Home() {
	return (
		<>
			<Head>
				<title>LumpBusters - kilo gaci dla braci</title>
				<meta
					name="description"
					content="Created by the one and only mf LumpBoosters team"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			
			<MainLayout>
			<MainMap />


			</MainLayout>
		</>
	);
}
