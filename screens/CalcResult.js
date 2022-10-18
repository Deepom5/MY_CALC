import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

export default function CalcResult({route,navigation: { goBack },navigation}) {
    const { res, que } = route.params;
   // console.log("the result and question", res,"and", que);
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>The result of the following calculation </Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{que}</Text>
      </View>
      <View style={styles.result}>
      <Text style={styles.answerText}>= {res}</Text>
      </View>
      <View style={styles.row}>
      <Button
  onPress={() => goBack()}
  
  title="Continue"
  color="#4D5656"
  accessibilityLabel="to continue into same calculation"
/>
<Button
  onPress={() => navigation.replace('Home')}
  
  title="New Calc"
  color="#424949"
  accessibilityLabel="to start new calculation"
/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 30,
    color: "white",
    alignSelf:"center"
  },
  calculationText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf:"center"
  },
  answerText: {
    fontSize: 60,
    color: "green",
    fontWeight: "bold",
    alignSelf:"center"
  },

  calculation: {
    flex: 1,
    backgroundColor: "#d6d6c2",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  
 
  row: {
    backgroundColor: "grey",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
 
  
});