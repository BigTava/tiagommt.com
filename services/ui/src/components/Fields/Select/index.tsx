// Core
import { Fragment, useState } from 'react'

// Components
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// Utils
import { classNames } from 'utils/styles'

interface Option {
  id: number
  name: string
  avatar: string
}

interface SelectProps {
  label?: string
  options: Option[]
  initialOption?: Option
  onChange?: (option: Option) => void
  className?: string
}

export default function Select(props: SelectProps) {
  const [selected, setSelected] = useState<Option>(props.options[0] as Option)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div>
          {props.label && (
            <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
              {props.label}
            </Listbox.Label>
          )}
          <div className='relative'>
            <Listbox.Button
              className={`relative w-40 cursor-default rounded-md py-1.5 pl-3 pr-10 text-left shadow-sm  sm:text-sm sm:leading-6 ${props.className}`}
            >
              <span className='flex items-center'>
                <img src={selected.avatar} alt='' className='h-5 w-5 object-fill rounded-full' />
                <span className='ml-3 block truncate'>{selected.name}</span>
              </span>

              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md ring-primary py-1 text-primary shadow-lg ring-1 focus:outline-none sm:text-sm'>
                {props.options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-white text-bg' : 'text-primary',
                        'relative cursor-pointer select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <img
                            src={option.avatar}
                            alt=''
                            className='h-5 w-5 object-fill rounded-full'
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {option.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-bg' : 'text-primary',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
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
