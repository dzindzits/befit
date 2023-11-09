export default function Icon({ children, size = '2xl', fill = false }: {children: React.ReactNode, size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '4xl', fill?: boolean}) {
    const sizes = {
        xs: '!text-xs',
        sm: '!text-sm',
        base: '!text-base',
        lg: '!text-lg',
        xl: '!text-xl',
        '2xl': '!text-2xl',
        '4xl': '!text-4xl',
    }
    return (
        <span className={`material-symbols-rounded ${fill ? 'filled' : ''} select-none !leading-none ${sizes[size]}`}>
            {children}
        </span>
    )
}