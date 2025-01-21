type QuickLinksProps = {
  link: string
  icon: React.ReactNode
  title: string
}

export default function QuickLinks({ link, icon, title }: QuickLinksProps) {
  return (
    <div className="relative group">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="transition duration-300 ease-in-out transform hover:scale-125">
          {icon}
        </div>
      </a>

      <span className="absolute left-1/2 -translate-x-1/2 -bottom-9 bg-purple-500 text-white text-xs font-medium rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        {title}
      </span>
    </div>
  )
}
