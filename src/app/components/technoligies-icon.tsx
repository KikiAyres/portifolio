type TechnologieIconProps = {
  text: string
  icon: React.ReactNode
}

export function TechnologieIcon({ text, icon }: TechnologieIconProps) {
  return (
    <span
      className="flex justify-center items-center rounded-full bg-white text-purple-500 px-2 py-1
    transition duration-300 ease-in-out transform hover:bg-pink-100 hover:text-pink-500 hover:scale-110"
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </span>
  )
}
