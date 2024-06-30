import { ReactNode } from "react"

interface IProps {
    children: ReactNode;
    className?: string;
    width?: 'w-full' | 'w-fit';
}

function Button({children,className,width='w-full',...rest}: IProps) {
  return (
    <button className={`${className} ${width} p-2 rounded-md text-white`} {...rest}>{children}</button>
  )
}

export default Button
