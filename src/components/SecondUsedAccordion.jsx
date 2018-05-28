import React, { Component } from 'react'
import { Accordion, Icon, Popup, Segment, Grid, Container } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2'

const Imunoserologi = [
  {title:'Protein Spesifik', content:'CRP Kuantitatif'},
  {title:'Infeksi Lain',content:'entahlah apa isinya'}
]

const accordionNested = (
    <Accordion.Accordion panels={Imunoserologi}/>
)

const rootPanel = [{title : 'Imunoserologi',content:{content: accordionNested,key:'content-1'}}]


const SecondUsedAccordion = () => (
  <Segment>
    <Accordion defaultActiveIndex={0} panels={rootPanel} />
  </Segment>
)

export default SecondUsedAccordion