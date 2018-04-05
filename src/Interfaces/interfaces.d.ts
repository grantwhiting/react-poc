import { AxiosResponse } from "axios";

// add all global interfaces here

export interface IApiGetAction {
    type: string;
    payload: AxiosResponse;
}