import React, { Component } from 'react'
import { Accordion, Icon, Popup, Segment, Grid, Container } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2'
import SecondBar from './SecondBar'

export default class FirstAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    const margining = {
      "marginTop": "150px"
    }
    return (
      <Segment style={margining}>
        <Accordion>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Hematologi
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
              <Grid columns='equal'>
                <Grid.Column>
                  <Popup
                    trigger={<span>Hemogoblin</span>}
                    content="informasi default hemogoblin"
                    basic />
                </Grid.Column>
                <Grid.Column width={12}>
                  <SecondBar bar1="40%" bar2="20%" bar3="40%" message="Normal" popContent="12.0" left="10000" top="30"/>
                </Grid.Column>
              </Grid>
              <Grid columns='equal'>
                <Grid.Column>
                  <Popup
                    trigger={<span>LED</span>}
                    content="informasi default LED"
                    basic />
                </Grid.Column>
                <Grid.Column width={12}>
                <SecondBar bar1="55%" bar2="45%" message="Normal" popContent="18.0" left="200" top="30"/>
                </Grid.Column>
              </Grid>
              <Grid columns='equal'>
                <Grid.Column>
                  <Popup
                    trigger={<span>Lecosit</span>}
                    content="informasi default Lecosit"
                    basic />
                </Grid.Column>
                <Grid.Column width={12}>
                <SecondBar bar1="10%" bar2="20%" bar3="70%" message="Normal" popContent="7.30" left="200" top="30"/>
                </Grid.Column>
              </Grid>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}
