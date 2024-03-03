import { Carousel } from "@material-tailwind/react";
import { MdBloodtype } from "react-icons/md";

 function CarouselDefault() {
  return (
    <div className="my-4 h-100">
    <Carousel className="rounded-xl flex" autoplay={true} autoplayDelay={2000} loop={true} >
      <div className="bg-red-100 flex justify-center items-center font-bold h-[400px]">
        <div className="text-red-500">
        <MdBloodtype size={80}/>
        </div>
        <div>
        <span className="text-red-500 text-2xl"> Find Nearby Centers</span> <br />
        <p>Easily Locate Blood Donation Centers</p>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-center items-center font-bold h-[400px]">
        <div className="text-red-500">
        <MdBloodtype size={80}/>
        </div>
        <div>
        <span className="text-red-500 text-2xl"> Schedule Appointments</span> <br />
        <p>Seamlessly Book Donation Slots</p>
        </div>
      </div>
      <div className="bg-red-100 flex justify-center items-center font-bold h-[400px]">
        <div className="text-red-500">
        <MdBloodtype size={80}/>
        </div>
        <div>
        <span className="text-red-500 text-2xl"> Stay Updated</span> <br />
        <p>Receive Alerts on Urgent Blood Needs</p>
        </div>
      </div>
    </Carousel>
    </div>
  );
}
export default CarouselDefault