import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={twMerge(
        'bg-slate-200 p-2 rounded outline-0 px-4 w-full',
        'focus:ring-2 focus:ring-teal-600',
        className
      )}
      {...props}
    />
  )
}
