import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exercisesName}>{item.name}</Text>
      <Text style={styles.exerciseSubTitle}>
        {item.muscle.charAt(0).toUpperCase() + item.muscle.slice(1)} |{" "}
        {item.equipment.charAt(0).toUpperCase() + item.equipment.slice(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exercisesName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubTitle: {
    color: "dimgray",
  },
});
