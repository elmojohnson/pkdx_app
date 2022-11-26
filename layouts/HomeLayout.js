import Container from "../components/Container";
import HomeNav from "./HomeNav";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative bg-neutral-100 h-screen overflow-y-scroll">
      <HomeNav />
      <main className="py-4">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default HomeLayout;
