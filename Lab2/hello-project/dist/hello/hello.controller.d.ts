import { HelloService } from './hello.service';
import { PersonDto } from './dto/person.dto';
export declare class HelloController {
    private readonly helloService;
    constructor(helloService: HelloService);
    sayWelcome(PersonDto: PersonDto): Promise<{
        data: string;
    }>;
    sayWelcome2(iName: any, iYear: any): Promise<{
        data: String;
    }>;
}
