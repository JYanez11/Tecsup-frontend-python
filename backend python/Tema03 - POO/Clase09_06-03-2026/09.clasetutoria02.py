


### 🏦 Banco
## Crear una clase de un Banco para sus cuentas bancarias
#  con las siguientes caracteristicas:
#  Titular
#  Saldo

class CuentaBancaria:

    def __init__(self, titular, saldo, comision):
       self.titular = titular
       self.saldo = saldo
       self.comision = comision

#    # Metodo => funcion => accion
#    # Metodo para depositar - retirar - consultar el saldo
    def consultar_saldo(self):
       print(f"Tu saldo es {self.saldo}")

    def depositar(self, cantidad_ingresada):
       self.saldo = self.saldo + cantidad_ingresada

    def retirar(self, cantidad_retirar):
#       # Validacion => No podemos retirar si el monto es mayor
#       # al saldo
       if cantidad_retirar > self.saldo:
          print("No puedes retirar")
       else:
          self.saldo = (self.saldo - cantidad_retirar) - self.comision
 # Instanciar => Crear un objeto => Pasar la masa por el molde

c1 = CuentaBancaria("Ramon", 2500, 1)
c1.consultar_saldo()

c1.depositar(300)
c1.consultar_saldo()

c1.retirar(5000)
c1.consultar_saldo()