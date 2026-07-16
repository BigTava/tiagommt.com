import { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'

import { TInputSelectProps, TOption } from './InputSelect.types'

interface Option {
  name: string
  avatar: string
}

export const InputSelect: React.FC<TInputSelectProps> = function InputSelect({
  label,
  options,
  initialOption,
  onChange,
}) {
  const [selected, setSelected] = useState<Option>(initialOption || (options[0] as Option))

  const handleChange = (option: Option) => {
    setSelected(option)
    onChange?.(option)
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <div>
          {label && (
            <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
              {label}
            </Listbox.Label>
          )}
          <div className='relative'>
            <Listbox.Button
              className={
                'relative w-40 h-14 cursor-default rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm sm:text-sm sm:leading-6 bg-white text-bg ring-1 ring-inset ring-bg hover:outline-none hover:ring-inset hover:ring-primary hover:ring-1 hover:cursor-pointer transition-all duration-400 ease-in-out'
              }
            >
              <span className='flex items-center'>
                <img
                  src={selected.avatar}
                  style={{ color: 'white' }}
                  alt=''
                  className='h-5 w-5 object-fill rounded-full'
                />
                <span className='ml-3 block truncate'>{selected.name}</span>
              </span>

              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronUpDownIcon className='h-5 w-5 text-blue' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 py-1 max-h-56 w-full overflow-auto rounded-md shadow-lg sm:text-sm ring-1 ring-bg bg-white text-bg focus:outline-none '>
                {options.map((option: TOption) => (
                  <Listbox.Option
                    key={option.name}
                    className={({ active }) =>
                      classNames({
                        'bg-primary text-white py-2 pl-3': active,
                        'relative cursor-pointer select-none py-2 pl-3': !active,
                      })
                    }
                    value={option}
                  >
                    {({ selected, active }) => {
                      return (
                        <div className='flex w-full items-center justify-between'>
                          <div className='flex items-center'>
                            <img
                              src={option.avatar}
                              alt=''
                              className='h-5 w-5 object-fill rounded-full'
                            />
                            <span
                              className={classNames({
                                'font-semibold ': selected,
                                'font-normal': !selected,
                                'ml-3 block truncate': true,
                              })}
                            >
                              {option.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames({
                                'text-white ': active,
                                'text-primary': !active,
                                'items-center pr-4': true,
                              })}
                            >
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </div>
                      )
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}
