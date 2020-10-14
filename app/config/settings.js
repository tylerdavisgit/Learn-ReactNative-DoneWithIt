import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.182:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.182:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.1.182:9000/api",
  },
};

const getCurrentSetting = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChanngel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSetting();
