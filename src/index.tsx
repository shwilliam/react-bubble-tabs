import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactNode,
  ReactNodeArray,
  createContext,
  FormEvent,
  useContext,
} from 'react'

export interface BubbleTabsProps extends HTMLAttributes<HTMLElement> {
  activeIndex: number
  children?: ReactNode | ReactNodeArray
}

interface BubbleTabsContext {
  activeIndex: number
  onChange: (event: FormEvent<HTMLElement>) => void
}

const BubbleTabsContext = createContext({activeIndex: 0, onChange: console.log})

export const BubbleTabs: FC<BubbleTabsProps> = ({
  activeIndex = 0,
  onChange = e => console.log(e),
  children,
}) => {
  return (
    <BubbleTabsContext.Provider value={{activeIndex, onChange}}>
      <nav data-bubble-tabs>{children}</nav>
    </BubbleTabsContext.Provider>
  )
}

export interface BubbleTabProps extends HTMLAttributes<HTMLElement> {
  index: number
  children: ReactChild | string
}

export const BubbleTab: FC<BubbleTabProps> = ({index, children}) => {
  const {activeIndex, onChange} = useContext(BubbleTabsContext)
  const handleClick = () => onChange(index)

  return (
    <div
      data-bubble-tab
      {...(activeIndex === index ? {'data-bubble-tab-active': true} : null)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
