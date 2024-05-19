import { Image, ScrollView, Text, View } from "react-native"
import { Link, router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"

import { images } from "@/constants"
import CustomButton from "@/components/CustomButton"

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Tükeniksiz syyahat{" "}
              <Text className="text-secondary-200">Tm-tube</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[14px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            ></Image>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Döredijilik täzeliklere laýyk gelýän ýerinde: çäksiz syýahata başlaň
            Tm-tube bilen gözleg
          </Text>
          <CustomButton
            title="Email bilen girmek"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            textStyles={""}
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
