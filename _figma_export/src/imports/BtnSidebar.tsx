import svgPaths from "./svg-tovgsefvr3";

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

export default function BtnSidebar() {
  return (
    <div className="bg-[#dffe35] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[100px] size-full" data-name="btn-sidebar">
      <FiRrHome />
    </div>
  );
}