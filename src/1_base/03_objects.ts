
// Интерфейс используется для типизации ообъектов
interface Car {
    wheels: number; // Обязательное свойство
    brand: string;
    type: string;
    
    isNew?: boolean; // Необязательное свойство
    name?: string;

    [key: string]: unknown; // Позволяет добавлять любое свойство
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
}
