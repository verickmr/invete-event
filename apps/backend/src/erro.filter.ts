import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

@Catch(Error)
export default class ErrorFilter implements ExceptionFilter => {
    catch(excepition: Error, host: ArgumentsHost){
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
        

        const status = (excepition as any).getStatus ? (excepition as any).getStatus() : 500
        
    }
}