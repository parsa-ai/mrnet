import React from 'react'

function Title({children , className}: {children: React.ReactNode , className?: string}) {
  return (
    <h4 className={`text-2xl lg:text-4xl tracking-wider font-normal uppercase ${className? className:""}`}>{children}</h4>
  )
}

export default Title