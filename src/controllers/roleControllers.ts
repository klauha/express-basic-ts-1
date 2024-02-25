import { Request, Response } from "express"

export const createRole = (req: Request, res: Response) => {
    res.status(201).json(
        {
            succes: true,
            message: 'Role created'
        }
    )
}

export const getRole = (req: Request, res: Response) => {
    res.status(200).json(
        {
            succes: true,
            message: 'Role retrieved successfully'
        }
    )
}
