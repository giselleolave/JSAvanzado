//Creación de clases

export class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }
    get nombre() {
        return this.#nombre;
    }
    get edad() {
        return this.#edad;
    }
    get img() {
        return this.#img;
    }
    get comentarios() {
        return this.#comentarios;
    }
    get sonido() {
        return this.#sonido;
    }

};

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    setRugir(valor) {
        this.sonido = valor;
    }
};
export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    setAullido(valor) {
        this.sonido = valor;
    }
};
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    setGruñido(valor) {
        this.sonido = valor;
    }
};
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    setSiseo(valor) {
        this.sonido = valor;
    }
};
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    setChillido(valor) {
        this.sonido = valor;
    }
};