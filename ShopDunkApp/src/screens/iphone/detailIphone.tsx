import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Pressable,
} from 'react-native';
import { colors } from '../../assets/colors/color';
import { listDataIphone } from '../../assets/dataIphone/listPhone';
// import { listDetailIphone } from '../../assets/dataIphone/detailIphone';
import Carosel from '../ipad/Carosel';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const DetailIPhone = ({ route, navigation }: any) => {
    const [click, setClick] = useState<number>(0);
    const [currentCapacity, setCurrentCapacity] = useState(false);
    const { id, name, price } = route.params;
    console.log("id ne:", id);

    const renderText = () => {
        if (click === 0) {
            return (

                <Text style={{ color: 'black' }}>iPhone 13 Pro Một nâng cấp hệ thống camera chuyên nghiệp hoành tráng chưa từng có của Apple.
                    Màn hình Super Retina XDR với ProMotion cho cảm giác nhanh nhạy hơn. Chip A15 Bionic thần tốc.
                    Mạng 5G siêu nhanh. Thiết kế bền bỉ và thời lượng pin tăng vọt. {'\n'}

                    • Màn hình Super Retina XDR 6.1 inch với ProMotion cho cảm giác nhanh nhạy hơn{'\n'}
                    • Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video{'\n'}
                    • Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x;
                    chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes,3 HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K{'\n'}
                    • Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K{'\n'}
                    • Chip A15 Bionic cho hiệu năng thần tốc{'\n'}
                    • Thời gian xem video lên đến 22 giờ{'\n'}
                    • Thiết kế bền bỉ với Ceramic Shield{'\n'}
                    • Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường{'\n'}
                    • Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao{'\n'}
                    • iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone{'\n'}{'\n'}

                    Các thông tin Apple đảm bảo ( Pháp lý){'\n'}

                    Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và được cung cấp qua một số nhà mạng.
                    Tốc độ có thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G,
                    vui lòng liên hệ nhà mạng và truy cập apple.com/iphone/cellular.
                    Màn hình có các góc bo tròn theo đường cong tuyệt đẹp và nằm gọn theo một hình chữ nhật chuẩn.
                    Khi tính theo hình chữ nhật chuẩn, kích thước màn hình là 6.06 inch theo đường chéo.
                    Diện tích hiển thị thực tế nhỏ hơn. Sắp ra mắt. Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình.
                    Truy cập apple.com/batteries để biết thêm thông tin. iPhone 13 Pro có khả năng chống nước, chống tia nước và chống bụi.
                    Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529.
                    Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn.
                    Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt.
                    Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy.
                    Không bảo hành sản phẩm bị hỏng do thấm chất lỏng. Một số tính năng không khả dụng tại một số quốc gia hoặc khu vực.
                </Text>
            );
        }
        if (click === 1) {
            return (

                <Text style={{ color: 'black' }}>Chọn Dung lượng
                    128GB{'\n'}

                    Màn hình
                    6.7″Super Retina XDR display{'\n'}

                    Độ phân giải màn hình
                    2796 ‑ x 1290 pixel ở 460 ppi{'\n'}

                    Camera sau
                    Chính: khẩu độ ƒ / 1,78, Chụp xa: khẩu độ ƒ / 2.8, Hệ thống camera chuyên nghiệp (48MP chính, 12MP siêu rộng và 12MP tele), Siêu rộng: khẩu độ ƒ / 2.2{'\n'}

                    Camera trước
                    12MP, khẩu độ ƒ / 1.9{'\n'}

                    Pin
                    Phát video lên tới 29 giờ (theo Apple){'\n'}

                    Sạc
                    Sạc không dây MagSafe và Qi{'\n'}

                    Kết nối mạng
                    Hỗ trợ eSIM kép, Không tương thích với thẻ SIM vật lý{'\n'}

                    Chọn Chip
                    Chip A16 Bionic,CPU 6 nhân, GPU 5 lõi, 16-core Neural Engine{'\n'}

                    Chọn RAM
                    6GB{'\n'}

                    Bảo mật
                    Face ID, Được kích hoạt bởi camera trước TrueDepth để nhận dạng khuôn mặt{'\n'}

                    Chống nước
                    IP68 (độ sâu tối đa 6 mét trong tối đa 30 phút) theo tiêu chuẩn IEC 60529{'\n'}

                    Chất liệu
                    Đang cập nhật{'\n'}

                    Thương hiệu
                    Apple
                </Text>

            );
        }
        if (click === 2) {
            return (
                <Text style={{ color: 'black' }}>Text 3</Text>
            );
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={{ marginBottom: 30 }}>

                <Carosel data={listDataIphone[id].listImage} />
                <Text style={styles.titleName}>{name}</Text>
                <View
                    style={{
                        marginHorizontal: 10,
                        marginVertical: 8,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <Text style={styles.titlePrice}>{price}</Text>

                <Text style={styles.textCapacity}>Chọn dung lượng</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                    marginVertical: 5,
                }}>
                    <TouchableOpacity style={styles.buttonChooseCapacity}>
                        <Text style={styles.textCapacityGB}>128GB</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonChooseCapacityMiddle}>
                        <Text style={styles.textCapacityGB}>256B</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonChooseCapacityMiddle}>
                        <Text style={styles.textCapacityGB}>512GB</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonChooseCapacity}>
                        <Text style={styles.textCapacityGB}>1TB</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textCapacity}>Chọn màu: </Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '100%',
                    marginVertical: 5,
                }}>
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        backgroundColor: '#2f6010',
                        borderColor: 'blue',
                        borderWidth: 1,
                        marginHorizontal: 15,

                    }} />
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        backgroundColor: '#2276bf',
                        borderColor: 'blue',
                        borderWidth: 1,
                    }} />
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        backgroundColor: '#5e5e59',
                        borderColor: 'blue',
                        borderWidth: 1,
                        marginHorizontal: 15,
                    }} />
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        backgroundColor: '#e3e5e3',
                        borderColor: 'blue',
                        borderWidth: 1,
                    }} />
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        borderRadius: 50,
                        backgroundColor: '#fcebd3',
                        borderColor: 'blue',
                        borderWidth: 1,
                        marginHorizontal: 15,
                    }} />
                </View>

                <TouchableOpacity style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: colors.textBlueColor,
                    height: 45,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>MUA NGAY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    height: 45,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: colors.textBlueColor,
                    borderWidth: 1,
                }}>
                    <Text style={{ color: colors.textBlueColor, fontWeight: 'bold' }}>TÍNH TOÁN TRẢ GÓP</Text>
                </TouchableOpacity>

                <View style={{
                    backgroundColor: 'white',
                    marginTop: 8,
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    height: '2.2%',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        tintColor: colors.textBlueColor,
                        marginStart: 5,
                    }} source={require('../../assets/images/gift-box-with-a-bow.png')} />
                    <Text style={{ color: colors.textBlueColor, fontWeight: 'bold', marginStart: 8 }}>Thông tin khuyến mại</Text>
                </View>

                <View style={{
                    backgroundColor: 'white',
                    marginTop: 1,
                    marginHorizontal: 10,
                    paddingVertical: 10,
                    alignContent: 'center',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}>

                    <Text style={{ marginVertical: 3, marginHorizontal: 8, color: 'black' }}>
                        ⍟Ưu đãi thanh toán:
                        1. Giảm 1.000.000đ khi thanh toán qua ví Moca {'\n'}
                        – Thanh toán Online nhập mã : SHOPDUNKIP14 {'\n'}
                        – Thanh toán quét mã QR tại cửa hàng. Nhập mã : IP14SDMOCA {'\n'}
                        2. Giảm ngay 1.000.000đ khi thanh toán qua VNPAY {'\n'}
                        khách hàng áp mã khi thanh toán tại cửa hàng : HMQR1TR {'\n'}
                        3. Trả góp 0% qua thẻ tín dụng ( GD thực hiện qua POS của Payoo áp dụng cho 27 ngân hàng ) {'\n'}
                        Lưu ý : {'\n'}
                        – Không áp dụng cộng gộp các CTKM giảm giá, CTKM qua cổng thanh toán {'\n'}
                        – Số lượng khuyến mại có hạn, chương trình kết thúc ngay sau khi hết khuyến mại {'\n'}
                        ⍟Ưu đãi mua kèm: {'\n'}
                        1. Giảm 100.000đ khi mua AirPods 2 {'\n'}
                        2. Giảm 200.000đ khi mua AirPods Pro {'\n'}
                        ⍟Ưu đãi đặc quyền: {'\n'}
                        1. Trợ giá 1.000.000đ cho khách hàng thu cũ đổi mới lên iPhone 14 Pro Max
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 8,
                }}>
                    <TouchableOpacity onPress={() => {
                        setClick(0);
                    }}>
                        <Text style={{
                            color: click === 0 ? colors.textBlueColor : colors.textCapacity,
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}>Mô tả</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setClick(1);
                    }}>
                        <Text style={{
                            color: click === 1 ? colors.textBlueColor : colors.textCapacity,
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}>Thông số kỹ thuật</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setClick(2);
                    }}>
                        <Text style={{
                            color: click === 2 ? colors.textBlueColor : colors.textCapacity,
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}>Chi tiết sản phẩm</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: 'white',
                    marginTop: 5,
                    marginHorizontal: 10,
                    padding: 5,
                    alignContent: 'center',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}>
                    {renderText()}
                </View>
                <View>
                    <Text style={{ color: 'black', marginBottom: 30 }}>Bình luận</Text>
                </View>


            </SafeAreaView>
        </ScrollView >

    );
};

export default DetailIPhone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgoundColor,
    },
    titleName: {
        fontSize: 20,
        marginLeft: 15,
        color: colors.textBlackColor,
        fontWeight: 'bold',
    },
    titlePrice: {
        fontSize: 18,
        marginLeft: 15,
        color: colors.textDetailPrice,
        fontWeight: 'bold',
    },
    textCapacity: {
        fontSize: 16,
        marginLeft: 15,
        color: colors.textCapacity,
        fontWeight: 'bold',
    },
    textCapacityGB: {
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.textDetailPrice,
        alignSelf: 'center',
        marginTop: 3,
    },
    buttonChooseCapacity: {
        borderRadius: 15,
        backgroundColor: '#fff',
        height: 30,
        width: '20%',
        borderColor: 'blue',
        borderWidth: 1,
        alignItems: 'center',

    },
    buttonChooseCapacityMiddle: {
        borderRadius: 15,
        backgroundColor: '#fff',
        height: 30,
        width: '20%',
        borderColor: 'blue',
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonChooseColor: {
        borderRadius: 50,
        backgroundColor: '#fff',
        height: 35,
        width: 35,
        borderColor: 'blue',
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
});