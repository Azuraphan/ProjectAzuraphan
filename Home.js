import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"
import styles from "./Homestyle"
import Popup from "./popup"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        city: '',
        image: '',
        isSelected: false
    }

    _renderItemView = (item) => {
        return (
            <TouchableOpacity style={styles.shadowViewitem}>
            <TouchableOpacity
                style={styles.childView}
                onPress={() => {
                    this.setState({
                        city: item.name,
                        image: item.image,
                        isSelected: !this.state.isSelected
                    })
                }}>
                <Image 
                    style={{width: 24, height: 24, resizeMode: 'cover', borderRadius: 12, marginHorizontal: 10, alignItems:'center', justifyContent:'center'}} 
                    source={{uri: item.image}}/>
                <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
            </TouchableOpacity>
        )
    }
    _renderItemshadowView = (item) => {
        // const {city, image, isSelected} = this.state
        return (
            <TouchableOpacity
            style={styles.shadowViewitem}
             >
    
            </TouchableOpacity>
            
        )
    }


    _renderColumnView = (column) => {
        return (
            <View style={{flex: 1}}>
                {
                    data.map((item, index) => {
                        if (index % 1 === column) {
                            return (
                                // this._renderItemshadowView(item)
                              
                                // ,
                                this._renderItemView(item)
                            )
                        }
                    })
                }
            </View>
        )
    }


    _renderSelectedView = (item) => (
        <Popup item = {item}
        onPress={() => {this.setState ({isSelected:!this.state.isSelected})}}/>
    )
    _renderSelectedViewtext = (item) => (
        <View style={styles.selectedViewtest}>
            <View style={styles.contentSelectedView}>
                <Text style={styles.txt}>{item.name}</Text> 
            </View>
            <TouchableOpacity style={[styles.selectedViewtest, styles.overlaySelectedView]}
                onPress={() => {this.setState({isSelected: !this.state.isSelected})}}/>
        </View>
    )

    render() {
        const {city, image, isSelected} = this.state

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 44}}>
                        <Text>Danh Sach Cac Thanh Pho</Text>
                        {[0].map(item => this._renderColumnView(item))}
                        
                    </View>
                </ScrollView>
                {
                   
                    isSelected && this._renderSelectedView({image: image, city: city}) 
                }
            </View>

        )
    }
}

const data = [
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'TP Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ca Mau',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Binh Dinh',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Buon Me Thuot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Cao Bang',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Son La',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Ninh Binh',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Da Nang',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Quang Nam',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Phu Yen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Qui Nhon',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Ninh Thuan',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Da Lat',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Binh Thuan',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Dong  Nai',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Long An',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Tien Giang',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hau Giang',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Ben Tre',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Dong Thap',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Thai Binh',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'Quang Ninh',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
]

export default Home