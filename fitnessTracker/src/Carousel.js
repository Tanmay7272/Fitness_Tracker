import { View, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useState } from "react";


export default function Carousel() {

    const flatlistRef = useRef();
    const screenWidth = Dimensions.get("window").width
    const [activeIndex, setActiveIndex] = useState(0)

    //auto scroll
    useEffect(() => {
        let interval = setInterval(() => {
          if (Data.length === 0) {
            // No need to scroll if there's no data
            return;
          }
      
          const nextIndex = (activeIndex + 1) % Data.length;
          flatlistRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }, 2000);
      
        return () => clearInterval(interval);
      }, [activeIndex]);
      
   const getItemLayout = (data, index)=>({
    length: screenWidth,
    offset:screenWidth * index,
    index : index
   })

    const Data = [
        {
            id: 1,
            img: require("../assets/f1.jpeg")
        },

        {
            id: 2,
            img: require("../assets/f2.jpg")
        },
        {
            id: 3,
            img: require("../assets/f3.jpg")
        }
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Image source={item.img} style={{ height: 250, width: screenWidth }} />
            </View>
        )

    }
    //handle scroll
    const handleScroll = (event) => {

        const scrollPosition = event.nativeEvent.contentOffset.x
        const index = scrollPosition / screenWidth;
        setActiveIndex(index);
    }
    //render dot Indicators
    const renderDotIndicators = () => {
        return Data.map((dot, index) => {

            if (activeIndex === index) {

                return (
                    <View
                    key={index}
                        style={{
                            
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6

                        }}
                    ></View>
                );
            } else {

                return (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "#fff",
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6
                        }}>

                    </View>
                )
            }



        })


    }


    return (
        <View style={{ marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            
            overflow: 'hidden',}}>

            <FlatList 
                data={Data}
                keyExtractor={(item) => item.id}
                ref={flatlistRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />

            <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 8 }}>
                {renderDotIndicators()}

            </View>
        </View>
    )
}