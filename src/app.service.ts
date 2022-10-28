import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly httpService: HttpService
  ){

  }

  async getProducts(search: string, precio: string, filter?: string): Promise<any> {
    let more ='';
    if(filter){
      
      more = `&${filter}`;
      console.log('URL', `https://api.mercadolibre.com/sites/MLA/search?q=${search}${more}`)

    }
   const { data } = await firstValueFrom(
      this.httpService.get<any>(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&sort=${precio}${more}`).pipe(
        catchError((error: any) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
