import Button from "../button";
import NavBar from "../nav/navbar";
import Video from "./video";

export default function HeroSection() {
  return (
    <div className="flex py-20 pl-28 bg-[#161616]  max-[1434px]:mb-10 max-[1434px]:pl-0 max-[1434px]:pt-7  max-[1434px]:pb-0">
      <div className="w-full">
        <header className="max-[815px]:hidden">
          <NavBar />
        </header>
        <div className="hero-section-container flex ">
          <div className="w-3/6 flex flex-col pb-20 max-[1434px]:order-2 max-[1434px]:w-full max-[1434px]:px-7 max-[1434px]:pb-5 max-[768px]:pb-[40px]">
            <div className="pr-10 mt-auto mb-auto max-[1434px]:flex max-[1434px]:flex-col max-[1434px]:items-center max-[1434px]:pr-0">
              <p className="text-2xl mb-2 max-[1434px]:text-center ">
                Hi, I'm Teja
              </p>
              <h2 className="text-5xl mb-4 max-[1434px]:text-center font-bold heading">
                I Do Video Editing
              </h2>
              <p className="text-2xl mb-10  max-[1434px]:text-center max-[480px]:text-lg w-9/12 max-[480px]:w-full">
                Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
                has been the industry standard dummy text ever.
              </p>
              <Button name="Let's Talk" />
            </div>
          </div>
          <div className="w-3/6 max-[1434px]:mb-10 max-[1434px]:w-full">
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}
