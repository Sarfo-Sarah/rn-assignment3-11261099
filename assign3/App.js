import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";

const flatListItems = [
  {
    firstActivity: "Exercise",
    activityNumber: "12 Tasks",
    image1: require("./assets/learner.png"),
    id: "1",
    secondActivity: "Study",
    activityNumber2: "12 Tasks",
    image2: require("./assets/learner.png"),
  },
];

const profile = require('./assets/profile.png')

const sectionItems = [
  {
    sectionData: "Mobile App Development",
    id: "3",
  },
  {
    sectionData: "Web Development",
    id: "4",
  },
  {
    sectionData: "Push Ups",
    id: "5",
  },
  {
    sectionData: "Eating",
    id: "6",
  },
  {
    sectionData: "Coding",
    id: "7",
  },
  {
    sectionData: "Remote Work",
    id: "8",
  },
  {
    sectionData: "Drive",
    id: "9",
  },
  {
    sectionData: "Sit up",
    id: "10",
  },
  {
    sectionData: "Sing",
    id: "11",
  },
  {
    sectionData: "Wash",
    id: "12",
  },
  {
    sectionData: "Relax",
    id: "13",
  },
  {
    sectionData: "Walk",
    id: "14",
  },
  {
    sectionData: "Push Ups",
    id: "15",
  },
  {
    sectionData: "Laugh",
    id: "16",
  },
];

const Index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fef3c7" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.headerContent}>
          <View style={styles.flexDirectionColumn}>
            <Text style={styles.headerStyle}>Hello, Devs</Text>
            <Text>14 Tasks today</Text>
          </View>
          <Image source={profile} style={styles.profileImage} />
        </View>

        <View>
          <View style={[{ backgroundColor: "#fef3c7" }, { borderRadius: 10 }]}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={"#000000"}
              style={{
                borderWidth: 1,
                borderColor: "black",
                padding: 8,
                margin: 10,
              }}
            />
          </View>
        </View>

        <View>
          <View>
            <FlatList
              data={flatListItems}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => (
                <View style={styles.containerView}>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>{item.firstActivity}</Text>
                      <Text>{item.activityNumber}</Text>
                    </View>
                    <Image source={item.image1} style={styles.imageSize} />
                  </View>

                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                  <View style={{ backgroundColor: "#fef3c7" }}>
                    <View style={styles.microContainer}>
                      <Text style={styles.multiSize}>
                        {item.secondActivity}
                      </Text>
                      <Text>{item.activityNumber2}</Text>
                    </View>
                    <Image source={item.image2} style={styles.imageSize} />
                  </View>
                </View>
              )}
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: 700, lineHeight: 24 }}>
                  Categories
                </Text>
              }
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 24,
                marginTop: 20,
              }}
            >
              Ongoing Tasks
            </Text>
            <View style={styles.centerList}>
              <FlatList
                data={sectionItems}
                keyExtractor={(items) => items.id}
                renderItem={({ item }) => (
                  <View style={styles.listContainer}>
                    <Text style={[styles.multiSize, styles.textLeft]}>
                      {item.sectionItem}
                    </Text>
                  </View>
                )}
              ></FlatList>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  listContainer: {
    width: 354,
    height: 128,
    borderRadius: 15,
    borderWidth: 1,
    left: 10,
    justifyContent: "center",
    gap: 10,
  },

  textLeft: {
    left: 50,
    fontSize: 23,
  },
  centerList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },

  boldFont: {
    fontFamily: "Roboto-Bold",
  },

  containerView: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    flexWrap: "wrap",
    left: 1,
    top: 10,
  },

  microContainer: {
    display: "flex",
    flexDirection: "column",
    width: 80,
    height: 35,
    left: 20,
  },

  imageSize: {
    width: 151,
    height: 132,
    left: 41,
  },

  headerStyle: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 38.4,
  },

  multiSize: {
    fontSize: 17,
    fontWeight: "bold",
  },

  flexDirectionColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#fffbeb",
    borderRadius: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    borderRadius: 10,
  },

  flatListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },

  ongoingTasksTitle: {
    fontSize: 20,
  },
  ongoingTasksList: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  ongoingTasksItem: {
    fontSize: 15,
  },
  profileImage: {
    width: 46,
    height: 45,
    borderRadius: 306,
  },
});
