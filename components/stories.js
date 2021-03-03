import Component from './index.js'

export default {
  title: 'Atoms/OpenClosed',
  component: Component,
}

const Template = (args) => <Component {...args} />

export const Closed = Template.bind({})
Closed.args = {}

export const Open = Template.bind({})
Open.args = { open: true }