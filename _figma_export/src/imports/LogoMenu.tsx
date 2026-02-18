import svgPaths from "./svg-7rh5bio4w2";

function Mycash() {
  return (
    <div className="h-[29.828px] relative shrink-0 w-[139.648px]" data-name="Mycash+">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.648 29.8285">
        <g id="Mycash+">
          <path d={svgPaths.p2ce6fd00} fill="var(--fill-0, #070A10)" id="Vector" />
          <path d={svgPaths.p120da380} fill="var(--fill-0, #070A10)" id="Vector_2" />
          <path d={svgPaths.p32cb9200} fill="var(--fill-0, #070A10)" id="Vector_3" />
          <path d={svgPaths.p30fa5d80} fill="var(--fill-0, #070A10)" id="Vector_4" />
          <path d={svgPaths.p3d412000} fill="var(--fill-0, #070A10)" id="Vector_5" />
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
        <g clipPath="url(#clip0_1_2436)" id="fi-rr-home">
          <path d={svgPaths.pf7ed600} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_2436">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar() {
  return (
    <div className="bg-[#dffe35] relative rounded-[100px] shrink-0 w-full" data-name="btn-sidebar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <FiRrHome />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Home</p>
        </div>
      </div>
    </div>
  );
}

function FiRrCreditCard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-credit-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2237)" id="fi-rr-credit-card">
          <g id="icon">
            <path d={svgPaths.p320ad300} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p2e706500} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2237">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar1() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="btn-sidebar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <FiRrCreditCard />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Cartões</p>
        </div>
      </div>
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

export default function LogoMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full" data-name="logo-menu">
      <Logo />
      <MenuSidebar />
    </div>
  );
}