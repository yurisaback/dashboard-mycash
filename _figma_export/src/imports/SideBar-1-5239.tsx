import svgPaths from "./svg-i2a2eejqi9";
import imgMembers from "figma:asset/fe5ea0dee337e6dfc2f8afea9ae4d945b9013911.png";

function Mycash() {
  return (
    <div className="h-[45.192px] relative shrink-0 w-[48.327px]" data-name="Mycash+">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.3267 45.1915">
        <g id="Mycash+">
          <path d={svgPaths.p1baab440} fill="var(--fill-0, #070A10)" id="Vector" />
          <path d={svgPaths.pb9093f0} fill="var(--fill-0, #070A10)" id="Vector_2" />
          <path d={svgPaths.p37dc6280} fill="var(--fill-0, #070A10)" id="Vector_3" />
          <path d={svgPaths.p8526000} fill="var(--fill-0, #070A10)" id="Vector_4" />
          <path d={svgPaths.pb92e680} fill="var(--fill-0, #070A10)" id="Vector_5" />
          <path d={svgPaths.p1211680} fill="var(--fill-0, #070A10)" id="Vector_6" />
          <path d={svgPaths.pbb75a40} fill="var(--fill-0, #070A10)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="logo">
      <Mycash />
    </div>
  );
}

function FiRrHome() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_4080)" id="fi-rr-home">
          <path d={svgPaths.pf7ed600} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_4080">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar() {
  return (
    <div className="bg-[#dffe35] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="btn-sidebar">
      <FiRrHome />
    </div>
  );
}

function FiRrCreditCard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-credit-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_4210)" id="fi-rr-credit-card">
          <g id="icon">
            <path d={svgPaths.p320ad300} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p2e706500} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_4210">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="btn-sidebar">
      <FiRrCreditCard />
    </div>
  );
}

function MenuSidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="menu-sidebar">
      <BtnSidebar />
      <BtnSidebar1 />
    </div>
  );
}

function LogoMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0" data-name="logo-menu">
      <Logo />
      <MenuSidebar />
    </div>
  );
}

function Members() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers} width="24" />
    </div>
  );
}

function InfoUser() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="info-user">
      <Members />
    </div>
  );
}

function CloseSidebar() {
  return (
    <div className="relative size-[32px]" data-name="close-sidebar">
      <div className="absolute inset-[0_-12.5%_-25%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g filter="url(#filter0_d_1_5512)" id="close-sidebar">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" x="4" />
            <path d={svgPaths.p9668900} fill="var(--fill-0, #080B12)" id="icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_d_1_5512" width="40" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_5512" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_5512" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function SideBar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-between p-[32px] relative size-full" data-name="side-bar">
      <LogoMenu />
      <InfoUser />
      <div className="absolute flex items-center justify-center right-[-16px] size-[32px] top-[16px]">
        <div className="flex-none rotate-180">
          <CloseSidebar />
        </div>
      </div>
    </div>
  );
}