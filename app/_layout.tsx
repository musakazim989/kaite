import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

export const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};
