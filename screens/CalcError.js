import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

export default function CalcError({route,navigation: { goBack },navigation}) {
    const { que } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>The syntax for following calculation is incorrect</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{que}</Text>
      </View>
      <View style={styles.result}>
      <Text style={styles.answerText}>NOTE:   May we suggest re-checking the calculation , it cannot end with an operator. to continue with the same calculation press "CONTINUE" and for new calculation press "NEW CALC".</Text>
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
    fontSize: 18,
    color: "rgb(138, 0, 0)",
    fontWeight: "400",
    textAlign:"center"
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