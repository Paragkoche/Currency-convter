import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
export interface Response {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
}
@Injectable()
export class RestService {
  private URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY!}/pair/`;

  async fromTo(from: string, to: string, value: number) {
    const data = axios.get<Response>(`${this.URL}${from}/${to}/${value}`);
    return data
      .then((data) => {
        return {
          conversion: data.data.conversion_result,
          from: data.data.base_code,
          to: data.data.target_code,
        };
      })
      .catch((error: AxiosError) => {
        throw new UnprocessableEntityException(error.message);
      });
  }
}
