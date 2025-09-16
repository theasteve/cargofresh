import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M6 6h20v20H6V6z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
      <g className={invert ? 'fill-white' : 'fill-neutral-950'}>
        <path d="M12 13c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v-1.5h-1V15h1v-2h-1zm8 0v6h1.5v-3c0-.8.7-1.5 1.5-1.5v-1.5c-.8 0-1.5.7-1.5 1.5v-1.5H20z"/>
      </g>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 200 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="44"
        y="20"
        fontSize="14"
        fontWeight="600"
        className={clsx(
          'font-sans',
          invert ? 'fill-white' : 'fill-neutral-950'
        )}
      >
        CargoFresh Logistics
      </text>
    </svg>
  )
}
