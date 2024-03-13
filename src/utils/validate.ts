export const fnIsRequired = () => {
    let message = ''

    return {
        message,
        validate: () => [
            (val:any) => {        
                message = 'Msg 1'    
                return (val && val.length > 0)
            },
                (val: any) => {
                message = 'Msg 2'
                return (val.length >= 3)
            },
        ],
    }
};

export class IsRequired {
    text = ''
    validate(){
        
       return [
            (val:any) => {            
                this.text= 'Please type something'
                return (val && val.length > 0)
            },
                (val: any) => {
                this.text= 'Please use minimun 3 characters.'
                return (val.length >= 3)
            },
        ] 
    }
    
    message(){
        return this.text
    }
}