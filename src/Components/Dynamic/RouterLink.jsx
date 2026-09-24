import { NavLink } from 'react-router'

export default function RouterLink({children , to ,  ...props }) {
  return (
    <NavLink {...props} to={to} className={({ isActive}) =>
        `px-4 py-2 text-xl font-bold rounded-lg transition-all duration-300
        ${
          isActive
            ? "text-(--primary) font-semibold"
            : "text-white hover:text-(--primary)"
        }`
      }>
        {children}
    </NavLink>
  )
}
