import axios from 'axios';
import queryString from 'query-string';
import { DelegateInterface, DelegateGetQueryInterface } from 'interfaces/delegate';
import { GetQueryInterface } from '../../interfaces';

export const getDelegates = async (query?: DelegateGetQueryInterface) => {
  const response = await axios.get(`/api/delegates${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDelegate = async (delegate: DelegateInterface) => {
  const response = await axios.post('/api/delegates', delegate);
  return response.data;
};

export const updateDelegateById = async (id: string, delegate: DelegateInterface) => {
  const response = await axios.put(`/api/delegates/${id}`, delegate);
  return response.data;
};

export const getDelegateById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/delegates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDelegateById = async (id: string) => {
  const response = await axios.delete(`/api/delegates/${id}`);
  return response.data;
};
