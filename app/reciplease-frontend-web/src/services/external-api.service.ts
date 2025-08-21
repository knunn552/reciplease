import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

const API_BASE = import.meta.env.VITE_API_SERVER_URL;
const AUDIENCE = "https://reciplease-api";

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

export function useWeatherService() {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const getWeather = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: AUDIENCE }
      });

      if (token.split(".").length !== 3) {
        throw new Error("Expected a 3-part JWT access token");
      }

      const res = await axios.get(`${API_BASE}/WeatherForecast`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    } catch (e: any) {
      const err = e?.error || e?.message || "";
      if (
        err.includes("consent_required") ||
        err.includes("login_required") ||
        err.includes("interaction_required")
      ) {
        await loginWithRedirect({
          authorizationParams: { audience: AUDIENCE, scope: "openid profile email" }
        });
        return; // the app will redirect; next call will succeed
      }
      throw e;
    }
  };

  return { getWeather };
}
