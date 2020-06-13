import {action} from '@storybook/addon-actions'
import {number, text, withKnobs} from '@storybook/addon-knobs'
import React from 'react'
import {BubbleTab, BubbleTabs, BubbleTabsProps} from '../src'
import '../src/styles.css'

export default {
  title: 'Default',
  decorators: [withKnobs],
}

export const Default = (props?: Partial<BubbleTabsProps>) => (
  <BubbleTabs
    onChange={action('onChange')}
    activeIndex={number('Active index', 0, {min: 0, max: 3, step: 1})}
    {...(props as BubbleTabsProps)}
  >
    <BubbleTab index={0}>{text('Label 1', 'Home')}</BubbleTab>
    <BubbleTab index={1}>{text('Label 2', 'Recent')}</BubbleTab>
    <BubbleTab index={2}>{text('Label 3', 'All')}</BubbleTab>
    <BubbleTab index={3}>{text('Label 4', 'Settings')}</BubbleTab>
  </BubbleTabs>
)
