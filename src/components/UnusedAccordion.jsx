import React, { Component } from 'react'
import {Accordion,Segment,Icon} from 'semantic-ui-react'

export default class UnusedAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return (
     <Segment>
       <Accordion>
         <Accordion.Title  active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.title}
         </Accordion.Title>
         <Accordion.Content active={activeIndex === 1}>
            <h1>tak tau mau isi apa</h1>
         </Accordion.Content>
       </Accordion>
     </Segment>
    )
  }
}
