# Programacion Orientada a Objetos
# ES una pardigma de programacion 
# (es una forma de trabjaar o programar)
# Se trabaja usando clases y objetos

class Persona:
     # Constructor => Es el metodo especial
     # Donde detallamos las caracteristicas
     # atributos de nuestra clase
     def __init__(self, nombre, edad, apellido):
         self.nombre = nombre
         self.edad = edad
         self.apellido = apellido

     def saludar(self):
         print(f"Hola, soy {self.nombre} y tengo {self.edad} años")
   
     def despedida(self):
         print(f"Adios, soy {self.nombre}")


# # Crear objetos
p2 = Persona("Ramon", 30, "Perez")
p3 = Persona("Maria", 25, "Gomez")

p2.despedida()

p3.saludar()

