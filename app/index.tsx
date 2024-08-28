import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className=" text-3xl font-bold">Kaite</Text>
      <Link href="/Profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
