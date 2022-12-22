const Description: React.FC = (props) => {
  return (
    <div className="flex text-[14px] leading-[22px] text-[#535D77] ml-[44px] md:text-[16px] md:leading-[26px]">
      {props.children}
    </div>
  )
}

export default Description
