class MiAplicacionError(Exception):
    pass

class UsuarioNoEncontradoError(MiAplicacionError):
    pass

class PermisoDenegadoError(MiAplicacionError):
    pass

def buscarUsuario(nombre,):
    if(nombre!='admin'):
        raise UsuarioNoEncontradoError('Usuarios no encontrado-no usa')

def validarPerfil(perfil):
    if(perfil!='admin'):
        raise PermisoDenegadoError('permiso denegado-no usa')

try:
    usuario = input('Nombre Usuario: ')
    buscarUsuario(usuario)
    perfil = input('Perfil Usuario: ')
    validarPerfil(perfil)
except UsuarioNoEncontradoError:
    print('El usuario no existe')
except PermisoDenegadoError:
    print('No tiene permisos')
except MiAplicacionError:
    print('Error general de la aplicación')
