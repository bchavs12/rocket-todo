export const BaseInput = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      required
      {...props}
    />
  )
}
