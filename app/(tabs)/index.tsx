import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <Center className="flex-1 ">
      <Button>
        <ButtonText>Home</ButtonText>
      </Button>
    </Center>
  );
}
