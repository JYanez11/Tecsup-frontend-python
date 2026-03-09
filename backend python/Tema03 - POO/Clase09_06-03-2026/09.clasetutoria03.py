

# Clase padre
class Animal:
     def __init__(self, nombre):
      self.nombre = nombre

     def comer(self):
         print(f"{self.nombre} está comiendo")

     def hacer_sonido(self):
         print("Sonido genérico")


# # Clases hijas
class Perro(Animal):
     def __init__(self, nombre, raza, color):
         # Aqui usamos el metodo super para llamar
         # al constructor de la clase padre
         super().__init__(nombre)
         # Nuevos atributos de la clase hija
         self.raza = raza
         self.color = color

     def hacer_sonido(self):
         print(f"{self.nombre} dice: ¡Guau!")

     def buscar_pelota(self):
         print(f"{self.nombre} busca la pelota")

     def dar_la_pata(self):
         print(f"{self.nombre} da la pata")

firulais = Perro("Firulais", 'salchicha', 'negro')
firulais.hacer_sonido()

