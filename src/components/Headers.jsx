import React, { Component } from 'react'
import { Header, Button, Menu, Card, Icon, Container } from 'semantic-ui-react'

export default class Headers extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    const left = {
      "textAlign":"left"
    }
    return (
      <Card fluid >
        <Menu text>
          <Menu.Item header>Datamedis.id</Menu.Item>
          <Menu.Item name='menu' active={activeItem === 'menu'} onClick={this.handleItemClick}>
            <Icon name='content' size='large' />
          </Menu.Item>
          <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
          <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick} />
          <Menu.Item name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick} />

          <Menu.Menu position='right'>
            <Menu.Item name='notif' active={activeItem === 'notif'} onClick={this.handleItemClick}>
              <Icon name='bell outline' size='large' />
            </Menu.Item>
            <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick}>
              <Icon name='list ul' size='large' />
            </Menu.Item>
            <Menu.Item name='pin' active={activeItem === 'pin'} onClick={this.handleItemClick}>
              <Icon name='marker' size='large' />
            </Menu.Item>
            <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
              <Icon name='user circle outline' size='large' />
            </Menu.Item>
            <Menu.Item name='menu2' active={activeItem === 'menu2'} onClick={this.handleItemClick}>
              <Icon name='content' size='large' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div style={left}>Home / Chart</div>
      </Card>
    )
  }
}
