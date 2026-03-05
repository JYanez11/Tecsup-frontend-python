class MiAplicacionError(Exception):
    pass

class UsuarioNoEncontradoError(MiAplicacionError):
    pass

class PermisoDenegadoError(MiAplicacionError):
    pass

def buscarUsuario(nombre,):
    if(nombre!='admin'):
        raise UsuarioNoEncontradoError('Usuario no encontrado')

def validarPerfil(perfil):
    if(perfil!='admin'):
        raise PermisoDenegadoError('permiso denegado')

try:
    usuario = input('Nombre Usuario: ')
    buscarUsuario(usuario)
    perfil = input('Perfil Usuario: ')
    validarPerfil(perfil)
except UsuarioNoEncontradoError as e :
    print('Error:', e)
except PermisoDenegadoError as e :
    print('Error:', e)
except MiAplicacionError as e :
   print('Error:', e)
