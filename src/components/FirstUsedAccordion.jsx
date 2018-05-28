import React, { Component } from 'react'
import { Accordion, Icon, Popup, Segment, Grid } from 'semantic-ui-react'
import {Line} from 'react-chartjs-2'

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
            <Grid>
              <Grid.Column>
                <Popup
                  trigger={<span>Hemogoblin</span>}
                  content="informasi default hemogoblin"
                  basic />
              </Grid.Column>
              <Grid.Column>
                ntar di isi bar
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Popup
                  trigger={<span>LED</span>}
                  content="informasi default LED"
                  basic />
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column>
                <Popup
            trigger={<span>Lecosit</span>}
            content="informasi default Lecosit"
            basic/>
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
            </Grid>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}
