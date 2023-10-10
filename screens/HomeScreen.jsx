import {
  View,
  Text,
  Pressable,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

export default function HomeScreen({ navigation }) {
  const width = Dimensions.get("window").width;

  const handleChange = () => { };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 30 }}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                    }}
                  />
                  {index}
                </Text>
              </View>
            )}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={{ flex: 0.1 }} />
            <View style={{ backgroundColor: "red", flex: 2, padding: 10 }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae nobis laborum, sint vero amet laboriosam accusantium
                atque soluta necessitatibus ea, ullam omnis! Deleniti nihil
                dolorum ea doloribus vero ducimus.
              </Text>
              <Button
                onPress={() => navigation.navigate("ProductDetail")}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>

        {/* <View>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("About")}
          />
          <Button
            title="Go to Details Profile"
            onPress={() => navigation.navigate("DetailsProfile")}
          />
          <Button
            title="ProductDetail page"
            onPress={() => navigation.navigate("ProductDetail")}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    padding: 5,
    flexDirection: "row",
    columnGap: "10px",
    // justifyContent: "space-around",
    // alignItems: 'stretch',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
