import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, Text, View } from "react-native"

const HomeSrceen = ({ route }) => {
    const navigation = useNavigation();
    const data = route.params;

    return <View style={{ width: '100%', gap: 15, padding: 15 }}>
        <View style={{ height: 300 }}>
            <Image resizeMode="contain" source={require(`./../assets/${data?.image ? data.image : 'vs_blue.png'}`)} style={{ width: null, height: 300 }} />
        </View>
        <View>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                {Array(5).fill(0).map(item => {
                    return <Image source={require('./../assets/star.png')} style={{ width: 25, height: 25 }} />
                })}
            </View>

            <Text style={{ fontSize: 14, fontWeight: 600 }}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 600 }}>1.790.000 đ</Text>
            <Text style={{ fontSize: 18, color: 'grey', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
        </View>

        <View>
            <Text style={{ textTransform: 'uppercase', color: 'red', fontWeight: 600 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>

        <View style={{ marginTop: 10}}>
            <Pressable onPress={() => { navigation.navigate('DetailScreen') }} style={{ paddingVertical: 15, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 50, flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{ textTransform: 'uppercase', fontSize: 18, textAlign: 'center', paddingLeft:"30%"}}>
                    4 Màu-chọn màu
                </Text>
                <Image source={require('./../assets/Vector.png')} style={{ width: 25, height: 25, alignItems:"flex-end"}} />
            </Pressable>
        </View>

        <View style={{ marginTop: 10 }}>
            <Pressable style={{ backgroundColor: 'red', paddingVertical: 15, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 50 }}>
                <Text style={{ textTransform: 'uppercase', fontSize: 18, textAlign: 'center', color: 'white' }}>
                    Chọn mua
                </Text>
            </Pressable>
        </View>
    </View>
}

export default HomeSrceen;