import Link from "next/link";
import Container from "../components/Container";
import DexSelection from "../components/DexSelection";

const HomeNav = () => {
  return (
    <div className="py-3 bg-red-600 shadow sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/"><h1 className="font-bold text-2xl text-white">Pokédex</h1></Link>
          <DexSelection />
        </div>
      </Container>
    </div>
  );
};

export default HomeNav;
