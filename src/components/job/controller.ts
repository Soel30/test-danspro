import { Request, Response } from "express";
import apiResponse from "@utils/response";
import Axios from 'axios'


export default class JobController {
  public async getAllList(req: Request, res: Response): Promise<void> {
    try {
      const limit = 10
      const page: any = req.query.page || 1
      const totalData = await Axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      const response = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}`)
      const totalPage = Math.ceil(totalData.data.length / limit)
      const hasNextPage = page < totalPage
      const hasPrevPage = page > 1
      const currentPage = page
      const data = {
        totalData: totalData.data.length,
        totalPage,
        hasNextPage,
        hasPrevPage,
        currentPage,
        data: response.data
      }
      apiResponse(res, 200, "Success Get All Job List", data)
    } catch (error) {
      apiResponse(res, 500, "Internal Server Error", error)
    }
  }

  public async getDetail(req: Request, res: Response): Promise<void> {
    try {
      const response = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${req.params.id}`)
      apiResponse(res, 200, "Success Get Job Detail", response.data)
    } catch (error) {
      apiResponse(res, 500, "Internal Server Error", error)
    }
  }

  public async search(req: Request, res: Response): Promise<void> {
    try {
      const full_time: boolean = req.query.full_time === "true" ? true : false
      const description = req.query.description || ""
      const location = req.query.region || ""
      const page: any = req.query.page || 1
      const limit = 10


      const totalData = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&full_time=${full_time}`)
      const response = await Axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&full_time=${full_time}&page=${page}`)
      const totalPage = Math.ceil(totalData.data.length / limit)
      const hasNextPage = page < totalPage
      const hasPrevPage = page > 1
      const currentPage = page
      const data = {
        totalData: totalData.data.length,
        totalPage,
        hasNextPage,
        hasPrevPage,
        currentPage,
        data: response.data
      }
      apiResponse(res, 200, "Success Search Job", data)
    } catch (error) {
      apiResponse(res, 500, "Internal Server Error", error)
    }
  }
}
