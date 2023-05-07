import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import CourseList from './CourseList'

const HomeScreen = () => {
  return (
    <ScrollView>
   

        <View style={{
          backgroundColor: "#FFF",
          flex: 1
        }}>
          <View style={{
            backgroundColor: "#00a46c",
            height: "16%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20
          }}>
            <Image
              source={require('./images/1.png')}
              style={{
                height: 10,
                width: 20,
                marginTop: 50
              }}
            />
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
              width: "100%"
            }}>
              <View style={{ width: "50%" }}>
                <Text style={{
                  fontSize: 24,
                  color: "#FFF",
                  fontWeight: "bold"
                }}>MedAI</Text>
                <Text style={{
                  fontSize: 14,
                  color: "#FFF",
                  fontWeight: "bold"
                }}>All your health neends in one app</Text>
              </View>
              <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Image
                  source={require('./images/logo.png')}
                  style={{ height: 60, width: 60, }}
                />
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
              left: 0,
              right: 0,
              height: 90,
              marginTop: -45
            }}
          >
            <View style={{
              backgroundColor: "#FFF",
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center"
            }}>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#b1e5d3"
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  width: 260
                }}
              />
              <Image
                source={require('./images/3.png')}
                style={{ height: 20, width: 20 }}
              />
            </View>
          </LinearGradient>


          <View style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center"
          }}>
            <View style={{ width: "50%" }}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61"
              }}>Recommended</Text>
              <View style={{
                height: 4,
                backgroundColor: "#b1e5d3",
                width: 115,
                marginTop: -5
              }}>

              </View>

            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <View style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15
              }}>
                <Text style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  color: "#FFF"
                }}>More</Text>
              </View>
            </View>
          </View>



          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 400 }}
          >
            <LinearGradient
              colors={["rgba(0,164,109,0.09)", "transparent"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: 100,
                marginTop: 220,
                top: 0
              }}
            />
            <TouchableOpacity
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160
              }}
            >
              <Image
                source={require('./images/detection.jpg')}
              />
              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
              }}>
                <Text style={{
                  fontWeight: "bold"
                }}>DETECTION</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 32,
                  fontSize: 13,
                }}>5 min</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3
              }}>
                By Admin
              </Text>
            </TouchableOpacity>

            <View
              // onPress={()=>navigation.navigate("Detail")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160
              }}
            >
              <Image
                source={require('./images/P.png')}
              />
              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
              }}>
                <Text style={{
                  fontWeight: "bold"
                }}>PREVENTION</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 23
                }}>3 min</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3
              }}>
                By Admin
              </Text>
            </View>

            <View
              // onPress={()=>navigation.navigate("Detail")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160,
                marginHorizontal: 20,

              }}
            >
              <Image
                source={require('./images/cure.jpg')}
              />
              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,

              }}>
                <Text style={{
                  fontWeight: "bold"
                }}>CURE</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 65
                }}>3 min</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#b1e5d3",
                paddingTop: 3
              }}>
                By Admin
              </Text>
            </View>

          </ScrollView>


          <View style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: -100,
          }}>

          </View>


          <ScrollView>

            <View style={{ marginBottom: 50 }}>


              <View style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFF",
                padding: 10,
                borderRadius: 12,
                marginHorizontal: 20,
                marginTop: 20
              }}>

              </View>
              <View style={{
                flexDirection: "row",
                backgroundColor: "#00a46c",
                marginTop: 15,
                marginHorizontal: 20,
                borderRadius: 20,
                paddingVertical: 30,
                paddingLeft: 30
              }}>
                <View>
                  <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    width: 250,
                    paddingRight: 100,
                    fontWeight: 500,
                  }}>
                    How Aware are you?
                  </Text>
                  <Text style={{ color: "#fff" }}>Give a Quiz</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Cources')}
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#000",
                      alignItems: "center",
                      marginTop: 20,
                      width: 65,
                      paddingVertical: 10,
                      borderRadius: 14,
                      paddingHorizontal: 10
                    }}
                  >
                    <Text style={{
                      color: "#FFF",
                      fontWeight: "bold",
                      fontSize: 12
                    }}>Let's Go</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('./images/quiz2.png')}
                  style={{ marginLeft: -100, marginTop: 25, height: 150, width: 150 }}
                />

              </View>
              <Text style={{
                color: "#345c74",
                fontWeight: "bold",
                fontSize: 20,
                paddingHorizontal: 20,
                marginTop: 20,
                marginBottom: 10
              }}>Check Our Features</Text>

              <CourseList
                img={require('./images/aii.png')}
                title="Disease detection"
                bg="#fdddf3"
                sub="Detect desease by Chest X-ray"
              />
              <CourseList
                img={require('./images/report.png')}
                title="Report Generator"
                bg="#fef8e3"
                sub="Generate a health report (AI) "

              />
              <CourseList
                img={require('./images/chat.png')}
                title="Health BOT"
                bg="#fcf2ff"
                sub="Get health sugge -stions (AI)"

              />

            </View>
          </ScrollView>

        </View>

    </ScrollView>

  )
}
export default HomeScreen;
