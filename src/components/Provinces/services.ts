import { IProvince, Province } from "./model";

export default class ProvinceService {
  public findMany = async (
    filter: object = {},
    select?: string,
    options?: any
  ): Promise<IProvince[]> => {
    try {
      return await Province.find(filter, select, options).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public findOne = async (
    conditions: Object,
    select?: Object | String | Array<String>,
    options?: Object
  ): Promise<IProvince | null> => {
    try {
      return await Province.findOne(conditions, select, options).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  public create = async (body: IProvince): Promise<IProvince> => {
    try {
      return await Province.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };
}
