import React, { Component } from 'react'
import { Accordion, Icon, Popup, Segment, Grid, Container } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2'
import SecondBar from './SecondBar'

const Imunoserologi = [
  {
    title: 'Protein Spesifik', content: [<Grid columns="equal">
      <Grid.Column>
        <Popup
          trigger={<span>CRP Kuantitatif</span>}
          content="informasi default CRP Kuantitatif"
          basic />
      </Grid.Column>
      <Grid.Column width={12}>
        <SecondBar bar1="20%" bar2="80%" message="Normal" popContent="5.0" title="CRP Kuantitatif" left="120" top="-1"/>
      </Grid.Column>
    </Grid>]
  },
  { title: 'Infeksi Lain', content: 'entahlah apa isinya' }
]

const accordionNested = (
  <Accordion.Accordion panels={Imunoserologi} />
)

const rootPanel = [{ title: 'Imunoserologi', content: { content: accordionNested, key: 'content-1' } }]


const SecondUsedAccordion = () => (
  <Segment>
    <Accordion defaultActiveIndex={0} panels={rootPanel} />
  </Segment>
)

export default SecondUsedAccordion