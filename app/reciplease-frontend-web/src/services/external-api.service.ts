import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

const API_BASE = import.meta.env.VITE_API_SERVER_URL;

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

export function useWeatherService() {
  const { getAccessTokenSilently } = useAuth0();

  const getWeather = async (): Promise<WeatherForecast[]> => {
    const token = await getAccessTokenSilently();
    const res = await axios.get(`${API_BASE}/WeatherForecast`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(res.data);
    return res.data as WeatherForecast[];
  };

  return { getWeather };
}
