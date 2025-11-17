 
interface IntButton {
    children:React.ReactNode,
    onClick?:()=> void ,
    className?: string,
    type?:'button'| 'submit'|'reset',
    disabled?: boolean
}

 
 

const Button = ({children, onClick, className ,disabled = false, type = "button"}:IntButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#2398E7] text-white font-normal text-base px-3 py-2 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
 

 