
import WhiteButton from "../../../components/SmallComponents/WhiteButton";
import HomeButton from "../../../components/SmallComponents/HomeButton";
import image1 from "../../../assets/SVG/image1.svg";
export default function PartOne() {
  return (
    <div className="Home-part1">
      <div className="left-half">
        <div>
          <h1 className="header-text">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="details-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>

        <div className="button-div">
          <HomeButton buttonText={"Purchase UI Kit"} />
          <WhiteButton buttonText={"Learn more"} />
        </div>
      </div>
      <div className="right-half">
        <img src={image1} className="my-svg" alt="" />
      </div>
    </div>
  );
}
