import { Controller, Get, Param } from '@nestjs/common';
import { Header, Query } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller('mercado')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Header('Content-Type', 'application/json')
  @Get()
   async getProducts(
    @Query('search') search: string,
    @Query('precio') precio: string,
    @Query('filter') filter?: string
    ): Promise<any> {
    console.log('Busqueda',search);
    if(filter){
      
      const data =  await this.appService.getProducts(search, precio, filter);
      return data;
    }else {
      const data =  await this.appService.getProducts(search, precio);
      return data;
    }
    }
    
}
