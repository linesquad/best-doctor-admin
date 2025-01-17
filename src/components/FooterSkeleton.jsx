import { supportData } from "../lib/supportData"


function FooterSkeleton() {
  return (
    <div>
  <div className="bg-gray-200 h-4 w-3/4 mb-[1rem] rounded"></div>
  {supportData.map((item) => (
    <div key={item.id} className="mb-[1rem] lg:flex lg:gap-4">
      <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
      <div className="bg-gray-200 h-4 w-full rounded mt-2 lg:mt-0"></div>
    </div>
  ))}
</div>

  )
}

export default FooterSkeleton