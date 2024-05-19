import { ImageSourcePropType } from "react-native"

export interface ITabIcon {
  icon: ImageSourcePropType | undefined
  color: string
  name: string
  focused: boolean
}

export interface ICustomButton {
  title: string
  containerStyles: string
  handlePress: () => void
  textStyles: string
  isLoading: boolean
}
