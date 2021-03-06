import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List } from 'antd-mobile'
export default class AvatarSelector extends React.Component{
    static PropTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
        .split(',')
        .map(v=>({
            icon:require(`../img/${v}.png`),
            text:v
        }))

        const gridHeader = this.state.text
        ? (<div><span>{'已选择头像!'}</span><img src={this.state.icon} style={{width: 32, height: 32}} alt='avatar'></img></div>)
        : (<div>{'请选择头像'}</div>)


        return (
        <div>
            <List renderHeader={()=> gridHeader}>
                <Grid data={avatarList} columnNum={5} onClick={elm => {
                    console.log(elm)
                    this.setState(elm)
                    this.props.selectAvatar(elm.text)
                }} />
            </List>
        </div>)
    }
}
