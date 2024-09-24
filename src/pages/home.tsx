import { Link } from "react-router-dom";

import "../App.css";
import Layout from "../components/layout";
import notificationIcon from "../assets/notification_icon.png";
import profileIcon from "../assets/profile_icon.png";
import arrowIcon from "../assets/arrow_icon.png";
import doctorIcon from "../assets/doctor_avatar.png";
import syptomCheckerIcon from "../assets/symptom_checker_avatar.png";
import teleHealthIcon from "../assets/telehealth_avatar.png";
import facilitySearchIcon from "../assets/facility_search_avatar.svg";
import medicineDeliveryIcon from "../assets/medicine_delivery_avatar.png";
import insuranceIcon from "../assets/insurance_avatar.png";
import lockIcon from "../assets/lock_icon.png";

interface MedicalServicesItemProps {
  image: string;
  title?: string;
  link?: string;
  imageClassName?: string;
}

interface InsuranceServicesItemProps extends MedicalServicesItemProps {
  description: string;
}

const Header = () => {
  return (
    <div className="flex justify-end gap-2">
      <img src={notificationIcon} className="w-8 h-8" />
      <img src={profileIcon} className="w-8 h-8" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="pt-[25px] pl-[13px] pb-4 bg-primary rounded-lg shadow mt-[20px] relative">
      <h1 className="font-bold text-2xl text-[#FFFFFF]">Our Network</h1>
      <p className="mt-2 text-sm max-w-[200px] text-[#FFFFFF] leading-[20px]">
        Navigate within our network of healthcare provide
      </p>
      <button className="mt-[14px] flex justify-center items-center gap-3 bg-[#FFFBFD] text-xs font-bold pt-2 pb-[9px] pl-4 pr-[9px] rounded-3xl">
        Search Network <img src={arrowIcon} className="w-4" />
      </button>
      <img className="absolute bottom-0 right-0 w-20" src={doctorIcon} />
    </div>
  );
};

const MedicalServicesItem = ({
  image,
  title,
  link = "#",
  imageClassName,
}: MedicalServicesItemProps) => {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-center items-center w-[162px] h-[129px] bg-[#E0F1F4] rounded-lg">
        <img src={image} className={`w-16 ${imageClassName}`} />
        {title && (
          <div className="font-extrabold text-xs text-[#484848]">{title}</div>
        )}
      </div>
    </Link>
  );
};

const MedicalServices = () => {
  return (
    <div className="mt-[30px]">
      <div className="font-bold text-xl text-[#484848]">Medical Services</div>
      <div className="mt-[10px] flex flex-wrap gap-2">
        <MedicalServicesItem
          image={syptomCheckerIcon}
          title="Symptom Checker"
          link="/symptom-checker"
        />
        <MedicalServicesItem image={teleHealthIcon} title="Telehealth" />
        <MedicalServicesItem
          image={facilitySearchIcon}
          imageClassName="w-full"
        />
        <MedicalServicesItem
          image={medicineDeliveryIcon}
          title="Medicine Delivery"
        />
      </div>
    </div>
  );
};

const InsuranceServicesItem = ({
  image,
  title,
  description,
  link = "#",
}: InsuranceServicesItemProps) => {
  return (
    <Link to={link} className="w-full">
      <div className="flex items-center gap-5 pt-[17px] pb-[17px] pl-[19px] h-[68px] bg-[#E0F1F4] rounded-lg relative">
        <img src={image} className="w-10" />
        <div className="flex flex-col">
          <div className="font-bold text-[15px] text-[#484848]">{title}</div>
          <div className="font-normal text-xs text-[#484848]">
            {description}
          </div>
        </div>
        <img className="absolute top-2 right-2 w-2" src={lockIcon} />
      </div>
    </Link>
  );
};

const InsuranceServices = () => {
  return (
    <div className="mt-[30px]">
      <div className="font-bold text-xl text-[#484848]">Insurance Service</div>
      <div className="mt-[10px] flex flex-wrap gap-2">
        <InsuranceServicesItem
          image={insuranceIcon}
          title="Insurance Coverage"
          description="Check your benefits and coverage"
        />
        <InsuranceServicesItem
          image={insuranceIcon}
          title="Insurance Coverage"
          description="Check your benefits and coverage"
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Layout>
      <div className="p-5">
        <Header />
        <HeroSection />
        <MedicalServices />
        <InsuranceServices />
      </div>
    </Layout>
  );
};

export default HomePage;
