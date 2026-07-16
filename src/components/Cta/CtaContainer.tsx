import './styles.css'

export const CtaContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='flex gap-3 justify-center'>{children}</div>
}
