import { Controller, Get } from '@nestjs/common';

@Controller('inicio')
export class InicioControllerController {
  
  @Get('bienvenida')
  getBienvenida() {
    return {
      mensaje: 'Bienvenido al sistema de gestión',
      sistema: 'Gestion API',
      version: '1.0.0',
      autor: 'luciana sanchez'
    };
  }
}
