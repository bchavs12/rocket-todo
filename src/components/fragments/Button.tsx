type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...props }: Props) {
  return (
    <button
        {...props}
    >
      {children}
    </button>
  )
}