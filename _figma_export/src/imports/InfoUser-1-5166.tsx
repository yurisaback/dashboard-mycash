import imgMembers from "figma:asset/fe5ea0dee337e6dfc2f8afea9ae4d945b9013911.png";

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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Yuri Saback</p>
    </div>
  );
}

export default function InfoUser() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="info-user">
      <Members />
      <NameEmail />
    </div>
  );
}