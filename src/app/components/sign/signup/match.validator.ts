import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function Match(controlName:string ,matchControlName:string) : ValidatorFn {

    return ((group : AbstractControl) : ValidationErrors | null => {
        const control = group.get(controlName);
        const matchControl = group.get(matchControlName);

        if(!control || !matchControl) {
            return {controlNotFound : false};
        }

        const error = control.value === matchControl.value ? null : {noMatch : true};

        matchControl.setErrors(error);
        return error;
    })
}