import HomeButton from "../../../components/SmallComponents/HomeButton";

export default function PartSix() {
  return (
    <div className="Home-part6">
      <div className="text-div1">
        <h1 className="header-text6">A Price To Suit Everyone</h1>
        <p className="text6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
      </div>
      <div className="price-div">
        <h1 className="price-header">$40</h1>
        <p className="UI-text">UI Design Kit</p>
      </div>
      <div>
        <p className="last-text">See, One price. Simple.</p>
        <HomeButton buttonText={"Purchase Now"} />
      </div>
    </div>
  );
}
