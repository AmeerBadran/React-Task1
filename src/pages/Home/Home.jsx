import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PartOne from "./HomeParts/PartOne";
import PartTwo from "./HomeParts/PartTwo";
import PartThree from "./HomeParts/PartThree";
import PartFive from "./HomeParts/PartFive";
import PartFour from "./HomeParts/PartFour";
import PartSix from "./HomeParts/PartSix";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f1f3fa" }}>
      <Navbar />
      <div className="top-parts">
        <PartOne />
        <PartTwo />
        <PartThree />
        <PartFour />
        <PartFive />
      </div>
      <PartSix />
      <Footer />
    </div>
  );
}
