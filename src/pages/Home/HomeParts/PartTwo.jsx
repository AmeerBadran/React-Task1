import image2 from "../../../assets/SVG/image2.svg";
import icon1 from "../../../assets/SVG/icon1.svg";
export default function PartTwo() {
  return (
    <div className="Home-part2">
      <div className="left-half2">
        <div>
          <h1 className="header-text2">Light, Fast & Powerful</h1>
          <p className="details-text2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            <br />
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>

        <div className="goes-div">
          <div className="left-goes">
            <img src={icon1} className="" alt="" />
            <div className="goes-text">
              <h4>Title Goes Here</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div className="right-goes">
            <img src={icon1} className="" alt="" />
            <div className="goes-text">
              <h4>Title Goes Here</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-half2">
        <img src={image2} className="my-svg2" alt="" />
      </div>
    </div>
  );
}
