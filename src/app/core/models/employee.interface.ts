export interface IEmployee{
    id: string
    username: string
    firstName: string
    lastName: string
    email: string
    birthDate: string
    basicSalary: number
    status: string
    group: string
    description: string
    [key: string]: any
}

export interface IEmployees{
    employees: IEmployee[]
    total?: number
    page?: number
    perPage?: number
    totalPages?: number
}