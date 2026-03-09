



class Empleado:
    def __init__(self, nombre, sueldo):
        self.nombre = nombre
        self.sueldo = sueldo

    def mostrar_info(self):
        print(f"Nombre: {self.nombre} | Sueldo: {self.sueldo}")


class Gerente(Empleado):
    def __init__(self, nombre, sueldo, departamento):
        super().__init__(nombre, sueldo)    # llama al constructor del padre
        self.departamento = departamento

    def mostrar_info(self):
        print(f"Nombre: {self.nombre} | Depto: {self.departamento} | Sueldo: {self.sueldo}")


e = Empleado("Juan", 3000)

# Polimorfismo => Es una clase con multiples formas
e1 = Empleado("Miguel", 4000)
e2 = Empleado("Maria", 5000)
e3 = Empleado("Raquel", 8000)

g1 = Gerente("Carlos", 8000, "Tecnología")


e1.mostrar_info()
e2.mostrar_info()
e3.mostrar_info()
g1.mostrar_info()