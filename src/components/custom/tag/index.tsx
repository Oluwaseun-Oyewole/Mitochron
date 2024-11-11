const Tag = ({ text }: { text: string }) => {
  return (
    <div className="bg-green-100 text-black text-sm lg:text-small py-2 px-3 rounded-lg">
      {text}
    </div>
  )
}

export default Tag
