export default function HeaderIcon({Icon,title}) {
  return (
    <div className="mx-4 flex flex-col hover:cursor-pointer hover:text-white active:text-red-400 lg:mx-6">
        <Icon className="h-8"></Icon>
        <p className="my-2">{title}</p>
    </div>
  )
}
