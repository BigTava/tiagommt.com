export interface TOption {
  name: string
  avatar: string
}

export interface TInputSelectProps {
  label?: string
  options: TOption[]
  initialOption?: TOption
  onChange?: (option: TOption) => void
  className?: string
}
