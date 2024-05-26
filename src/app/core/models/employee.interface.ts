export interface IEmployee{
    id: string
    username: string
    firstName: string
    lastName: string
    email: string
    birthDate: string
    basicSalary: string
    status: boolean
    group: string
    description: string
}

export interface IEmployees{
    employees: IEmployee[]
    total: number
    page: number
    perPage: number
    totalPages: number
}