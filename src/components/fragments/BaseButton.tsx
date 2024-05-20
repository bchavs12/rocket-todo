type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function BaseButton({ children, ...props }: Props) {
  return (
    <button
        {...props}
    >
      {children}
    </button>
  )
}