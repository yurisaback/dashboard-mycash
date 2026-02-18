import svgPaths from "./svg-tl4lcv1ewm";
import imgMembers from "figma:asset/fe5ea0dee337e6dfc2f8afea9ae4d945b9013911.png";
import imgMembers1 from "figma:asset/808a8a1aa727210c384eb11e17d14c316e1d4c78.png";
import imgMembers2 from "figma:asset/42e2159a1dced47b613e845b526db1a172ac870b.png";
import imgNubankLogo from "figma:asset/104735c9164e2efb4290fa655bd47ea2b28be0e7.png";
import imgBankLogo from "figma:asset/26d52142a70858c0b396955ffc0a8d5d4f15c755.png";
import imgInterIconJpeg from "figma:asset/9947ddd88ee4489faa5d8ed9b00e21de304ef2db.png";
import imgMembers3 from "figma:asset/4d09af56607c6ca3b3e4c6dee24946b053b0a085.png";

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

function LogoMenu() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-name="logo-menu">
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

function NameEmail() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[#080b12] tracking-[0.3px] w-full whitespace-pre-wrap" data-name="name-email">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Yuri Saback</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">yurisaback@gmail.com</p>
    </div>
  );
}

function InfoUser() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="info-user">
      <Members />
      <NameEmail />
    </div>
  );
}

function CloseSidebar() {
  return (
    <div className="absolute right-[-16px] size-[32px] top-[16px]" data-name="close-sidebar">
      <div className="absolute inset-[0_-12.5%_-25%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g filter="url(#filter0_d_1_2171)" id="close-sidebar">
            <rect fill="var(--fill-0, white)" height="32" rx="16" width="32" x="4" />
            <path d={svgPaths.p9668900} fill="var(--fill-0, #080B12)" id="icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_d_1_2171" width="40" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2171" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2171" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between p-[32px] relative self-stretch shrink-0 w-[300px]" data-name="side-bar">
      <LogoMenu />
      <InfoUser />
      <CloseSidebar />
    </div>
  );
}

function FiRrSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1310)" id="fi-rr-search">
          <path d={svgPaths.p13196500} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1310">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="search">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrSearch />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Pesquisar</p>
    </div>
  );
}

function FiRrSettingsSliders() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-settings-sliders">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2038)" id="fi-rr-settings-sliders">
          <g id="icon">
            <path d={svgPaths.p142c2d00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p359f5e00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1b70a880} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2038">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name="filter">
      <FiRrSettingsSliders />
    </div>
  );
}

function FiRrCalendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2569)" id="fi-rr-calendar">
          <g id="icon">
            <path d={svgPaths.p9a62f80} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1e96d300} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p6e1b280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p3c82ed00} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2569">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SelectDate() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="select-date">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrCalendar />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">{`01 Jan - 31 Jan 2026 `}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Search />
      <Filter />
      <SelectDate />
    </div>
  );
}

function Members2() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="44" src={imgMembers1} width="44" />
    </div>
  );
}

function Members3() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="44" src={imgMembers2} width="44" />
    </div>
  );
}

function FiRrPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1906)" id="fi-rr-plus">
          <path d={svgPaths.p3742d400} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1906">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AddAvatar() {
  return (
    <div className="bg-[#d1d5db] content-stretch flex items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[44px]" data-name="add-avatar">
      <FiRrPlus />
    </div>
  );
}

function Members4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="members">
      <AddAvatar />
    </div>
  );
}

function Members1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="members">
      <Members2 />
      <Members3 />
      <Members4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0">
      <Frame9 />
      <Members1 />
    </div>
  );
}

function FiRrPlus1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1972)" id="fi-rr-plus">
          <path d={svgPaths.p3742d400} fill="var(--fill-0, white)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1972">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnNavbar() {
  return (
    <div className="bg-[#080b12] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="btn-navbar">
      <FiRrPlus1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-white tracking-[0.3px]">Nova transação</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="navbar">
      <Frame10 />
      <BtnNavbar />
    </div>
  );
}

function Graph1() {
  return (
    <div className="absolute left-0 size-[72px] top-0" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="graph">
          <path d={svgPaths.pe31eb00} fill="var(--fill-0, #E7E8E9)" id="fundo-grafico" />
          <path d={svgPaths.pb22c800} fill="var(--fill-0, #9EB426)" id="resultado-grafico" />
        </g>
      </svg>
    </div>
  );
}

function Graph() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[26px] relative shrink-0 w-[72px]" data-name="graph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content] whitespace-pre-wrap">30%</p>
      <Graph1 />
    </div>
  );
}

function Dados() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.3px] w-[min-content] whitespace-pre-wrap">Aluguel</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px]">R$ 4.000,00</p>
    </div>
  );
}

function CardDespesas() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="card-despesas">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Graph />
          <Dados />
        </div>
      </div>
    </div>
  );
}

function Graph3() {
  return (
    <div className="absolute left-0 size-[72px] top-0" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="graph">
          <path d={svgPaths.pe31eb00} fill="var(--fill-0, #E7E8E9)" id="fundo-grafico" />
          <path d={svgPaths.p22309970} fill="var(--fill-0, #9EB426)" id="resultado-grafico" />
        </g>
      </svg>
    </div>
  );
}

function Graph2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[26px] relative shrink-0 w-[72px]" data-name="graph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content] whitespace-pre-wrap">20%</p>
      <Graph3 />
    </div>
  );
}

function Dados1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.3px] w-[min-content] whitespace-pre-wrap">Alimentação</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px]">R$ 2.000,00</p>
    </div>
  );
}

function CardDespesas1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="card-despesas">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Graph2 />
          <Dados1 />
        </div>
      </div>
    </div>
  );
}

function Graph5() {
  return (
    <div className="absolute left-0 size-[72px] top-0" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="graph">
          <path d={svgPaths.pe31eb00} fill="var(--fill-0, #E7E8E9)" id="fundo-grafico" />
          <path d={svgPaths.p3e03c900} fill="var(--fill-0, #9EB426)" id="resultado-grafico" />
        </g>
      </svg>
    </div>
  );
}

function Graph4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[26px] relative shrink-0 w-[72px]" data-name="graph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content] whitespace-pre-wrap">5%</p>
      <Graph5 />
    </div>
  );
}

function Dados2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.3px] w-[min-content] whitespace-pre-wrap">Mercado</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px]">R$ 1.500,00</p>
    </div>
  );
}

function CardDespesas2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="card-despesas">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Graph4 />
          <Dados2 />
        </div>
      </div>
    </div>
  );
}

function Graph7() {
  return (
    <div className="absolute left-0 size-[72px] top-0" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="graph">
          <path d={svgPaths.pe31eb00} fill="var(--fill-0, #E7E8E9)" id="fundo-grafico" />
          <path d={svgPaths.p3bfd7d80} fill="var(--fill-0, #9EB426)" id="resultado-grafico" />
        </g>
      </svg>
    </div>
  );
}

function Graph6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[14px] py-[26px] relative shrink-0 w-[72px]" data-name="graph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content] whitespace-pre-wrap">3%</p>
      <Graph7 />
    </div>
  );
}

function Dados3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] tracking-[0.3px] w-[min-content] whitespace-pre-wrap">Academia</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px]">R$ 1.200,00</p>
    </div>
  );
}

function CardDespesas3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="card-despesas">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Graph6 />
          <Dados3 />
        </div>
      </div>
    </div>
  );
}

function Gastos() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="gastos">
      <CardDespesas />
      <CardDespesas1 />
      <CardDespesas2 />
      <CardDespesas3 />
    </div>
  );
}

function FiRrDollar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1707)" id="fi-rr-dollar">
          <path d={svgPaths.p15620200} fill="var(--fill-0, #3070E7)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1707">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dados4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-[#080b12] whitespace-pre-wrap" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] tracking-[0.3px] w-full">Saldo total</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] w-full">R$ 2.000,00</p>
    </div>
  );
}

function ResumoSaldo() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <FiRrDollar />
          <Dados4 />
        </div>
      </div>
    </div>
  );
}

function FiRrArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1641)" id="fi-rr-arrow-down">
          <path d={svgPaths.p571da00} fill="var(--fill-0, #38BB82)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1641">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dados5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-[#080b12] whitespace-pre-wrap" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] tracking-[0.3px] w-full">Receitas</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] w-full">R$ 12.000,00</p>
    </div>
  );
}

function ResumoSaldo1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <FiRrArrowDown />
          <Dados5 />
        </div>
      </div>
    </div>
  );
}

function FiRrArrowUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1509)" id="fi-rr-arrow-up">
          <path d={svgPaths.p61f9800} fill="var(--fill-0, #D85E6D)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1509">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dados6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-[#080b12] whitespace-pre-wrap" data-name="dados">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] tracking-[0.3px] w-full">Despesas</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[28px] w-full">R$ 10.000,00</p>
    </div>
  );
}

function ResumoSaldo2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <FiRrArrowUp />
          <Dados6 />
        </div>
      </div>
    </div>
  );
}

function CardsResumo() {
  return (
    <div className="content-stretch flex gap-[24px] h-[188px] items-center relative shrink-0 w-full" data-name="cards-resumo">
      <ResumoSaldo />
      <ResumoSaldo1 />
      <ResumoSaldo2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <Gastos />
      <CardsResumo />
    </div>
  );
}

function FiRrCreditCard1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-credit-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2701)" id="fi-rr-credit-card">
          <g id="icon">
            <path d={svgPaths.p612700} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pfe8c900} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2701">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-title">
      <FiRrCreditCard1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#080b12] text-[20px] text-center">{`Cards & Contas`}</p>
    </div>
  );
}

function FiRrPlusSmall() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fi-rr-plus-small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fi-rr-plus-small">
          <path d={svgPaths.p1657e380} stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p34023800} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function FiRrArrowSmallRight() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fi-rr-arrow-small-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fi-rr-arrow-small-right">
          <path d={svgPaths.p1657e380} stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p2d367980} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <FiRrPlusSmall />
      <FiRrArrowSmallRight />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <IconTitle />
      <Frame />
    </div>
  );
}

function BankLogo() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="bank-logo">
      <div className="absolute inset-0 rounded-[2px]" data-name="nubank-logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgNubankLogo} />
      </div>
    </div>
  );
}

function Banco() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="banco">
      <BankLogo />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Nubank</p>
    </div>
  );
}

function Vencimento() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-full" data-name="vencimento">
      <p className="relative shrink-0">Vence dia</p>
      <p className="relative shrink-0">10</p>
    </div>
  );
}

function BancoValores() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <Banco />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#080b12] text-[28px]">R$ 5.245,00</p>
      <Vencimento />
    </div>
  );
}

function CardsBanco() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">****9999</p>
    </div>
  );
}

function BankLogo1() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="bank-logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgBankLogo} />
      <div className="absolute inset-0 rounded-[2px]" data-name="inter_icon.jpeg">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgInterIconJpeg} />
      </div>
    </div>
  );
}

function Banco1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="banco">
      <BankLogo1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Inter</p>
    </div>
  );
}

function Vencimento1() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-full" data-name="vencimento">
      <p className="relative shrink-0">Vence dia</p>
      <p className="relative shrink-0">21</p>
    </div>
  );
}

function BancoValores1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <Banco1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#080b12] text-[28px]">R$ 2.300,00</p>
      <Vencimento1 />
    </div>
  );
}

function CardsBanco1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">****9999</p>
    </div>
  );
}

function BankLogo2() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="bank-logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgBankLogo} />
      <div className="absolute inset-0 rounded-[2px]" data-name="picpay_icon.jpeg">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgBankLogo} />
      </div>
    </div>
  );
}

function Banco2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="banco">
      <BankLogo2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Picpay</p>
    </div>
  );
}

function Vencimento2() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-full" data-name="vencimento">
      <p className="relative shrink-0">Vence dia</p>
      <p className="relative shrink-0">12</p>
    </div>
  );
}

function BancoValores2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <Banco2 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#080b12] text-[28px]">R$ 17.000,00</p>
      <Vencimento2 />
    </div>
  );
}

function CardsBanco2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">****9999</p>
    </div>
  );
}

function CardBancos() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-full items-start p-[32px] relative rounded-[20px] shrink-0 w-[440px]" data-name="card-bancos">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Title />
      <CardsBanco />
      <CardsBanco1 />
      <CardsBanco2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame21 />
      <div className="flex flex-row items-center self-stretch">
        <CardBancos />
      </div>
    </div>
  );
}

function FiRrChartHistogram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-chart-histogram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1575)" id="fi-rr-chart-histogram">
          <g id="icon">
            <path d={svgPaths.p2dd48280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pa309900} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p11aa7280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pbed3e00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1d5bb530} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p10d91980} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1575">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-title">
      <FiRrChartHistogram />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#080b12] text-[20px] text-center">Fluxo financeiro</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #38BB82)" id="Ellipse 6" r="8" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Receitas</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #D85E6D)" id="Ellipse 6" r="8" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Despesas</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="title">
      <IconTitle1 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[22.773px] items-start leading-[26.569px] not-italic relative shrink-0 text-[#080b12] text-[17.08px] tracking-[0.2847px]">
      <p className="relative shrink-0">R$ 17.500</p>
      <p className="relative shrink-0">R$ 15.000</p>
      <p className="relative shrink-0">R$ 12.500</p>
      <p className="relative shrink-0">R$ 10.000</p>
      <p className="relative shrink-0">R$ 7.500</p>
      <p className="relative shrink-0">R$ 5.000</p>
      <p className="relative shrink-0">R$ 2.500</p>
      <p className="relative shrink-0">R$ 0</p>
    </div>
  );
}

function Graph8() {
  return (
    <div className="flex-[1_0_0] h-[281.819px] min-h-px min-w-px relative" data-name="graph">
      <div className="absolute inset-[-0.51%_0_-0.48%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 726.295 284.589">
          <g id="graph">
            <path d={svgPaths.p1c4444f0} id="verde-stroke" stroke="var(--stroke-0, #38BB82)" strokeWidth="2.84666" />
            <path d={svgPaths.p2cdae430} fill="url(#paint0_linear_1_1111)" fillOpacity="0.8" id="green-fundo" />
            <path d={svgPaths.p29e58e00} id="red-stroke" stroke="var(--stroke-0, #D85E6D)" strokeWidth="2.84666" />
            <path d={svgPaths.p5241500} fill="url(#paint1_linear_1_1111)" fillOpacity="0.5" id="red-fundo" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1111" x1="363.476" x2="363.476" y1="-90.6187" y2="283.242">
              <stop stopColor="#15BE78" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1111" x1="364.04" x2="364.04" y1="8.53988" y2="283.242">
              <stop stopColor="#D85E6D" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[30.364px] items-end relative shrink-0 w-full">
      <Frame1 />
      <Graph8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] items-start justify-end leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px] w-full whitespace-pre-wrap">
      <p className="relative shrink-0 w-[35px]">JAN</p>
      <p className="relative shrink-0 w-[34px]">FEV</p>
      <p className="relative shrink-0 w-[39px]">MAR</p>
      <p className="relative shrink-0 w-[36px]">ABR</p>
      <p className="relative shrink-0 w-[33px]">MAI</p>
      <p className="relative shrink-0 w-[36px]">JUN</p>
      <p className="relative shrink-0 w-[32px]">JUL</p>
      <p className="relative shrink-0 w-[37px]">AGO</p>
      <p className="relative shrink-0 w-[34px]">SET</p>
      <p className="relative shrink-0 w-[36px]">OUT</p>
      <p className="relative shrink-0 w-[39px]">NOV</p>
      <p className="relative shrink-0 w-[35px]">DEZ</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[20px] shrink-0 w-[904px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Title1 />
      <Frame6 />
      <Frame2 />
    </div>
  );
}

function FiRrCreditCard2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-credit-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2701)" id="fi-rr-credit-card">
          <g id="icon">
            <path d={svgPaths.p612700} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pfe8c900} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2701">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-title">
      <FiRrCreditCard2 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#080b12] text-[20px] text-center">Próximas despesas</p>
    </div>
  );
}

function FiRrPlusSmall1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fi-rr-plus-small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fi-rr-plus-small">
          <path d={svgPaths.p1657e380} stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p34023800} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <FiRrPlusSmall1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <IconTitle2 />
      <Frame8 />
    </div>
  );
}

function Banco3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="banco">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function BancoValores3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Conta de luz</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Vence dia 21/01</p>
      <Banco3 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_1_2502" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_2502)">
            <path d={svgPaths.p1cdb8180} fill="var(--fill-0, #38BB82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="check">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[inherit] size-full">
        <Check1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check />
    </div>
  );
}

function CardsBanco3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores3 />
      <Frame11 />
    </div>
  );
}

function Banco4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="banco">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function BancoValores4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Conta de luz</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Vence dia 21/01</p>
      <Banco4 />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_1_2502" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_2502)">
            <path d={svgPaths.p1cdb8180} fill="var(--fill-0, #38BB82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="check">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[inherit] size-full">
        <Check3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check2 />
    </div>
  );
}

function CardsBanco4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores4 />
      <Frame12 />
    </div>
  );
}

function Banco5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="banco">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function BancoValores5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Conta de luz</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Vence dia 21/01</p>
      <Banco5 />
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_1_2502" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_2502)">
            <path d={svgPaths.p1cdb8180} fill="var(--fill-0, #38BB82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="check">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[inherit] size-full">
        <Check5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check4 />
    </div>
  );
}

function CardsBanco5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores5 />
      <Frame13 />
    </div>
  );
}

function Banco6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="banco">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function BancoValores6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Conta de luz</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Vence dia 21/01</p>
      <Banco6 />
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_1_2502" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_2502)">
            <path d={svgPaths.p1cdb8180} fill="var(--fill-0, #38BB82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="check">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[inherit] size-full">
        <Check7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check6 />
    </div>
  );
}

function CardsBanco6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores6 />
      <Frame14 />
    </div>
  );
}

function Banco7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="banco">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function BancoValores7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="banco-valores">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Conta de luz</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Vence dia 21/01</p>
      <Banco7 />
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_1_2502" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_2502)">
            <path d={svgPaths.p1cdb8180} fill="var(--fill-0, #38BB82)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[24px]" data-name="check">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[4px] py-[6px] relative rounded-[inherit] size-full">
        <Check9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check8 />
    </div>
  );
}

function CardsBanco7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="cards-banco">
      <BancoValores7 />
      <Frame15 />
    </div>
  );
}

function Contas() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full" data-name="contas">
      <CardsBanco3 />
      <CardsBanco4 />
      <CardsBanco5 />
      <CardsBanco6 />
      <CardsBanco7 />
    </div>
  );
}

function CardBancos1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[547px] min-h-px min-w-px relative rounded-[20px]" data-name="card-bancos">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Title2 />
        <Contas />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame7 />
      <CardBancos1 />
    </div>
  );
}

function FiRrGolf() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi-rr-golf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1045)" id="fi-rr-golf">
          <path d={svgPaths.pe022700} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1045">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconTitle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-title">
      <FiRrGolf />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#080b12] text-[20px] text-center">Extrato detalhado</p>
    </div>
  );
}

function FiRrSearch1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1310)" id="fi-rr-search">
          <path d={svgPaths.p13196500} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1310">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="search">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrSearch1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Buscar lançamentos</p>
    </div>
  );
}

function FiRrAngleSmallDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-angle-small-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-angle-small-down">
          <path d={svgPaths.p3b130280} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Despesas</p>
      <FiRrAngleSmallDown />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Search1 />
      <Frame17 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="title">
      <IconTitle3 />
      <Frame16 />
    </div>
  );
}

function Members5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers} width="24" />
    </div>
  );
}

function Members6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers} width="24" />
    </div>
  );
}

function Members7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers3} width="24" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
      <Members5 />
      <Members6 />
      <Members7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Membro</p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">17/01/2026</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">17/01/2026</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">17/01/2026</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#080b12] tracking-[0.3px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px]">Datas</p>
      <Frame27 />
    </div>
  );
}

function FiRrArrowSmallUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #D85E6D)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <FiRrArrowSmallUp />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[24px]">Conta de água</p>
      </div>
    </div>
  );
}

function FiRrArrowSmallUp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #D85E6D)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <FiRrArrowSmallUp1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[24px]">Conta de luz</p>
      </div>
    </div>
  );
}

function FiRrArrowSmallUp2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #D85E6D)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <FiRrArrowSmallUp2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[24px]">Passeio no parque</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Descrição</p>
      <Frame30 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Manutenção</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Manutenção</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Lazer</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#080b12] tracking-[0.3px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px]">Categorias</p>
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Conta corrente</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Conta corrente</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">Cartão XP</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#080b12] tracking-[0.3px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px]">Conta/cartão</p>
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">-</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">-</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">1/1</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#080b12] tracking-[0.3px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px]">Parcelas</p>
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">R$ 100,00</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">R$ 150,00</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">R$ 750,00</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#080b12] tracking-[0.3px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px]">Valor</p>
      <Frame41 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame20 />
      <Frame26 />
      <Frame29 />
      <Frame34 />
      <Frame36 />
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function FiRrArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_913)" id="fi-rr-arrow-left">
          <path d={svgPaths.p398e2e70} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_913">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FiRrArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2370)" id="fi-rr-arrow-right">
          <path d={svgPaths.p1c127c00} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_2370">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="pagination">
      <FiRrArrowLeft />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">1</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">2</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">3</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">4</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">5</p>
      <FiRrArrowRight />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Mostrando 1 a 5 de 17</p>
      <Pagination />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Title3 />
        <Frame18 />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame19 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start py-[12px] relative shrink-0 w-[1368px]">
      <Navbar />
      <Frame24 />
    </div>
  );
}

export default function HomeDashboardResponsivo() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative size-full" data-name="Home-dashboard-responsivo">
      <SideBar />
      <Frame28 />
    </div>
  );
}