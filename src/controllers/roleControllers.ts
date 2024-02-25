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

export const updateRole = (req:Request, res:Response) => {
const roleid=req.params.id
    // RECUPERAR PARAMETROS DE LA RUTA
    console.log(req.params.id);
    
    res.status(200).json(
        {
            success:true,
            message: `Role with id ${roleid} updated`
        }
    )
}

export const deleteRole= (req:Request, res: Response)=> {
    res.status(200).json (
        {
            success: true,
            message: 'Role deleted'
        }
    )
}

