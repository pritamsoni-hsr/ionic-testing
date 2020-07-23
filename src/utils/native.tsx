import { Plugins, StatusBarStyle } from "@capacitor/core";
import { isPlatform } from "@ionic/react";

const isIOS = isPlatform("ios");

const { StatusBar } = Plugins;

export const toDark = () => {
  if (isIOS)
    StatusBar.setStyle({ style: StatusBarStyle.Dark }).catch((e) => null);
};
export const toLight = () => {
  if (isIOS)
    StatusBar.setStyle({ style: StatusBarStyle.Light }).catch((e) => null);
};
