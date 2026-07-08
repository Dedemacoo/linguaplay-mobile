import { API_BASE_URL } from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@backend_token';

export class BackendService {
  static async getToken(): Promise<string | null> {
    return AsyncStorage.getItem(TOKEN_KEY);
  }

  static async register(payload: {
    email: string;
    password: string;
    name: string;
    username: string;
    avatar: string;
  }): Promise<{ token: string; user: any }> {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Kayıt başarısız');
    await AsyncStorage.setItem(TOKEN_KEY, data.token);
    return data;
  }

  static async login(payload: {
    emailOrUsername: string;
    password: string;
  }): Promise<{ token: string; user: any }> {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Giriş başarısız');
    await AsyncStorage.setItem(TOKEN_KEY, data.token);
    return data;
  }

  static async syncProgress(progress: object): Promise<void> {
    const token = await this.getToken();
    if (!token) return;
    try {
      await fetch(`${API_BASE_URL}/user/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ progress }),
      });
    } catch (e) {
      console.warn('[BackendService] syncProgress failed:', e);
    }
  }

  static async getProfile(): Promise<any> {
    const token = await this.getToken();
    if (!token) return null;
    const res = await fetch(`${API_BASE_URL}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return res.json();
  }

  static async logout(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN_KEY);
  }
}
