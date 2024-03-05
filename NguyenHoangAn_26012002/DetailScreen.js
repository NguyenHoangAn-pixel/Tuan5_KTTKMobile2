import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Image, Pressable, Text, View } from "react-native"

const DetailHome = () => {
    const [image, setImage] = useState('vs_red.png')
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 5, gap: 15 }}>
            <View style={{ height: 160, flexDirection: 'row', gap: 10 }}>
                <View style={{ width: '35%' }}>
                    <Image source={require(`./../assets/${image}`)} style={{ height: 160 }} />
                </View>
                <View style={{ paddingRight: 50, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                        Điện Thoại Vsmart Joy 3
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                        Hàng chính hãng
                    </Text>
                </View>
            </View>

            <View style={{ height: '100%', backgroundColor: 'gray', padding: 10 }}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    {Array('silver', 'red', 'black', 'blue').map(item => {
                        return <Pressable onPress={() => setImage(`vs_${item}.png`)}>
                            <View style={{ height: 70, width: 70, backgroundColor: item }}></View>
                        </Pressable>
                    })}
                </View>
                <Pressable onPress={() => navigation.navigate("HomeScreen", { image })} style={{ padding: 15, backgroundColor: 'blue', borderRadius: 20 }}>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', color: '#fff', fontWeight: 600, fontSize: 18 }}>Xong</Text>
                </Pressable>
            </View>


        </View >)
}

export default DetailHome;