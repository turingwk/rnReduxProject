import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';  
import {doLogin, loginSuccess} from '../actions/Login';
import {getAgree} from '../actions/GetAgreement';

class MainPage extends Component {
    render() {
        let tips;
        let name = 'wk';
        let age = '13';
        if (this.props.user != null){
            name = this.props.user.name;
            age = this.props.user.age;
        }
        if (this.props.status === 'init')
        {
            tips = '请点击登录';
        } else if (this.props.status === 'doing') {
            tips = '正在登录...';
        } else if (this.props.status === 'done' && !this.props.isSuccess)
        {
            tips = '登录失败,请重新登录';
        }
        return (
            <View style={{flex:1,flexDirection:'column',alignItems: 'center', justifyContent:'center'}}>
            <Text>{'姓名：' + name + '\n年龄' + age}</Text>
            <Text>{tips}</Text>
            <TouchableOpacity style={{backgroundColor:'#FF0000'}} onPress={this.props.actions.doLogin.bind(this)}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:100,height:50}}>
            <Text style={{color:'#FFFFFF', fontSize:20}}>登录</Text>
            </View>
            </TouchableOpacity>
            <Text>{'================='}</Text>
            <TouchableOpacity style={{backgroundColor:'#00FF00'}} onPress={this.props.actions.getAgree.bind(this)} >
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center',width:100,height:50}}>
            <Text style={{color:'#FFFFFF', fontSize:20}}>测试</Text>
            </View>
            </TouchableOpacity>
            <Text>{this.props.content}</Text>
            </View>
        );
    }
    // handleLogin() {
    //     this.props.dispatch(doLogin());
    // }
}

function select(state) {
    return {
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
        content: state.getAgreement.content,        
    }
}

function mapDispatchProps(dispatch){
    return {
        // agreementAction:()=>dispatch(getAgree()),                
        // loginAction:()=>dispatch(doLogin()),
        // loginSuccess:()=>dispatch(loginSuccess()),        
        actions:bindActionCreators({doLogin, loginSuccess, getAgree}, dispatch)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});

export default connect(select, mapDispatchProps)(MainPage);