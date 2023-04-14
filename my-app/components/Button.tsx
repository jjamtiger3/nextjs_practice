import { IButton } from "@/interfaces/IButton";

export default function Button({ ...props }: IButton) {
  return (
    <button className={`${props.theme ? props.theme : ''}`} style={{...props.style}}>
        {
            props.icon && <span className={`icon ${props.icon}`}></span>
        }
        {props.label}
    </button>
  )
}
