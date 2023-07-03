interface IAnyObj {
    [key: string]: unknown,
}

export async function request<T = IAnyObj>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();   
}

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

const data = request<ITodo[]>('')