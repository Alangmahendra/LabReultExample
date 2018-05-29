import React, { Component } from 'react'
import { Card, Container, Icon, Grid, Segment, Button } from 'semantic-ui-react'

export default class Summary extends Component {
  render() {
    const height = {
      "height": "100px"
    }
    const separator={
      "marginTop":"30px"
    }
    const aligntext = {
      "textAlign":"left",
      "fontFamily":"Times New Roman",
      "background":"#39ac73",
      "color":"white",
      "fontSize":"28px"
    }
    const text = {
      "textAlign":"left",
      "fontFamily":"Times New Roman",
      "height":"175px"
    }
    const margining = {
      "marginLeft":"30px"
    }
    return (
      <Card fluid style={height}>
        <Icon style={margining} name="arrow left" >
        </Icon>
        <Container style={separator}>
          <Grid columns='equal'>
            <Grid.Column>
              <Segment style={aligntext}>
               <p>
                 HASIL PEMERIKSAAN LABORATORIUM
               </p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={11}>
              <Segment style={text}>
                <table>
                  <tr> 
                    <td>Nama Lab</td>
                    <td>: Pramita Lab</td>
                  </tr>
                  <tr> 
                    <td>Tempat/Tgl Lahir</td>
                    <td>: Jakarta,01 Apr 1980</td>
                  </tr>
                  <tr> 
                    <td>Jenis Specimen</td>
                    <td>: Darah</td>
                  </tr>
                  <tr> 
                    <td>Dokter</td>
                    <td>: Dr.Felix</td>
                  </tr>
                  <tr> 
                    <td>Jam/Tgl Periksa</td>
                    <td>: 21:08/23-07-2015</td>
                  </tr>
                </table>
                <div>
                <Button floated='right' circular color='green'>
                  <Icon name='file text outline'/>
                  Lihat Scan Copy
                </Button>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Card>
    )
  }
}
