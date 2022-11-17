import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';


const PAGE_WIDTH = Dimensions.get('screen').width;
const colors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
];

function Index() {
    const [isVertical, setIsVertical] = React.useState(false);
    const [autoPlay, setAutoPlay] = React.useState(true);
    const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
    const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
    const progressValue = useSharedValue<number>(0);
    const baseOptions = isVertical
        ? ({
            vertical: true,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH * 0.6,
        } as const)
        : ({
            vertical: false,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH * 0.6,
        } as const);

    return (
        <View
            style={{
                alignItems: 'center',
            }}
        >
            <Carousel
                {...baseOptions}
                loop
                pagingEnabled={pagingEnabled}
                snapEnabled={snapEnabled}
                autoPlay={autoPlay}
                autoPlayInterval={1500}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                // data={colors}
                // renderItem={({ index }) => <SBItem index={index} />}
                data={[...new Array(6).keys()]}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
            {!!progressValue && (
                <View
                    style={
                        isVertical
                            ? {
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width: 10,
                                alignSelf: 'center',
                                position: 'absolute',
                                right: 5,
                                top: 40,
                            }
                            : {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 100,
                                alignSelf: 'center',
                            }
                    }
                >
                    {colors.map((backgroundColor, index) => {
                        return (
                            <PaginationItem
                                backgroundColor={backgroundColor}
                                animValue={progressValue}
                                index={index}
                                key={index}
                                isRotate={isVertical}
                                length={colors.length}
                            />
                        );
                    })}
                </View>
            )}
            {/* <SButton
                onPress={() => setAutoPlay(!autoPlay)}
            >{`${ElementsText.AUTOPLAY}:${autoPlay}`}</SButton>
            <SButton
                onPress={() => {
                    setIsVertical(!isVertical);
                }}
            >
                {isVertical ? 'Set horizontal' : 'Set Vertical'}
            </SButton>
            <SButton
                onPress={() => {
                    setPagingEnabled(!pagingEnabled);
                }}
            >
                {`pagingEnabled:${pagingEnabled}`}
            </SButton>
            <SButton
                onPress={() => {
                    setSnapEnabled(!snapEnabled);
                }}
            >
                {`snapEnabled:${snapEnabled}`}
            </SButton> */}
        </View>
    );
}

const PaginationItem: React.FC<{
    index: number;
    backgroundColor: string;
    length: number;
    animValue: Animated.SharedValue<number>;
    isRotate?: boolean;
}> = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return (
        <View
            style={{
                backgroundColor: 'white',
                width,
                height: width,
                borderRadius: 50,
                overflow: 'hidden',
                transform: [
                    {
                        rotateZ: isRotate ? '90deg' : '0deg',
                    },
                ],
            }}
        >
            <Animated.View
                style={[
                    {
                        borderRadius: 50,
                        backgroundColor,
                        flex: 1,
                    },
                    animStyle,
                ]}
            />
        </View>
    );
};

export default Index;
