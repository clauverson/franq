import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        'bg-teal-600 text-white p-2 rounded-lg w-full font-semibold cursor-pointer',
        'hover:bg-teal-700 focus:ring-4 focus:ring-teal-100 outline-0',
        className
      )}
      {...props}
    />
  )
}
