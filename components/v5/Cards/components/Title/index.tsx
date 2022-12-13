import React from 'react'

const Title: React.FC = (props) => {
  return (
    <div className="flex mb-[20px] text-[28px] leading-[34px] text-[#0E1E46] font-bold md:mb-[40px] md:text-[48px] md:leading-[62px]">
      {props.children}
    </div>
  )
}

export default Title
