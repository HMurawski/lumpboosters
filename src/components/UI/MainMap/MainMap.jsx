import Image from "next/image";
import Link from "next/link";
const MainMap = () => {
	return (
		<>
			<div className="main-map">
				
				<Image
					className="main-map__map"
					src="/mapa.png"
					width={800} // szerokość obrazu
					height={600} // wysokość obrazu
                    alt='mapa polski'
				/>
                <Link href="/regions/zachodnio-pomorskie/main" className="main-map__layer main-map__layer-1" ></Link>



                <Link href="/regions/pomorskie/main" className="main-map__layer main-map__layer-2"></Link>



                <Link href="/regions/warminsko-mazurskie/main" className="main-map__layer main-map__layer-3"></Link>



                <Link href="/regions/podlaskie/main" className="main-map__layer main-map__layer-4"></Link>


                <Link href="/regions/lubuskie/main" className="main-map__layer main-map__layer-5"></Link>


                <Link href="/regions/wielkopolskie/main" className="main-map__layer main-map__layer-6"></Link>


                <Link href="/regions/mazowieckie/main" className="main-map__layer main-map__layer-7"></Link>


                <Link href="/regions/kujawsko-pomorskie/main" className="main-map__layer main-map__layer-8"></Link>


                <Link href="/regions/dolnoslaskie/main" className="main-map__layer main-map__layer-9"></Link>


                <Link href="/regions/opolskie/main/" className="main-map__layer main-map__layer-10"></Link>


                <Link href="/regions/slaskie/main" className="main-map__layer main-map__layer-11"></Link>


                <Link href="/regions/malopolskie/main" className="main-map__layer main-map__layer-12"></Link>


                <Link href="/regions/podkarpackie/main" className="main-map__layer main-map__layer-13"></Link>


                <Link href="/regions/swietokrzyskie/main" className="main-map__layer main-map__layer-14"></Link>


                <Link href="/regions/lubelskie/main" className="main-map__layer main-map__layer-15"></Link>


                <Link href="/regions/lodzkie/main" className="main-map__layer main-map__layer-16"></Link>


			</div>
		</>
	);
};
export default MainMap;
