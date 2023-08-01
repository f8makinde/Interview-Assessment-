import React from 'react'

export default function Switch() {
  return (
    <div className="w-[663px] h-[369px] px-5 py-[15px] bg-white rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="self-stretch h-[339px] flex-col justify-start items-start gap-9 flex">
      <div className="self-stretch justify-between items-center gap-[290px] inline-flex">
        <div className="justify-start items-center gap-[21px] flex">
          <div className="text-zinc-700 text-base font-medium">Summary</div>
          <div className="w-[99px] h-[30px] relative bg-indigo-500 bg-opacity-10 rounded-lg">
            <div className="left-[12px] top-[5px] absolute justify-start items-center gap-5 inline-flex">
              <div className="text-indigo-500 text-sm font-normal">Sales</div>
              <div className="w-5 h-5 relative" />
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-[7px] flex">
          <div className="text-zinc-900 text-xs font-normal">Last 7 Days</div>
          <div className="w-4 h-4 relative" />
        </div>
      </div>
      <div className="self-stretch justify-between items-start gap-[45px] inline-flex">
        <div className="flex-col justify-start items-end gap-[37px] inline-flex">
          <div className="text-gray-400 text-[11px] font-normal">100k</div>
          <div className="text-right text-gray-400 text-[11px] font-normal">80k</div>
          <div className="text-right text-gray-400 text-[11px] font-normal">60k</div>
          <div className="text-right text-gray-400 text-[11px] font-normal">40k</div>
          <div className="text-right text-gray-400 text-[11px] font-normal">20k</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[211px] left-0 top-[30px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 10</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[84px] left-0 top-[157px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 11</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[154px] left-0 top-[87px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 12</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[51px] left-0 top-[190px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 13</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[196px] left-0 top-[45px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 14</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[106px] left-0 top-[135px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 15</div>
        </div>
        <div className="flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="w-[13px] h-[241px] relative">
            <div className="w-[13px] h-[241px] left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
            <div className="w-[13px] h-[196px] left-0 top-[45px] absolute bg-indigo-500 rounded-[50px]" />
          </div>
          <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 16</div>
        </div>
      </div>
    </div>
  </div>
  )
}
