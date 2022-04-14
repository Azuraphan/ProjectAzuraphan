import react, {Component} from "react"
import {Text,View, Image, TouchableOpacity} from 'react-native'
import styles from "./Homestyle"

class Popup extends Component{
constructor(props){
    super(props)
    this.state={

    }
}
render (){
   return (
        <View style={styles.selectedView}>
        <View style={styles.contentSelectedView}>
            <Image style={styles.imageSelectedView} source={{uri: this.props.item?.image}}/>
            <View style = {{justifyContent:'center', alignItems:'center'}}>
            <Text style = {styles.txtmax}>{'Ban dang chon:' + this.props.item?.city}</Text>
            </View>
        </View>
        <TouchableOpacity style={[styles.selectedView, styles.overlaySelectedView]}
            onPress={this.props.onPress}/>
    </View>
   ) 
}
}
export default Popup