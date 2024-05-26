import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const invalidDateValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: number = control.value;

        const date = Date.now()
        if(value > date) {
         return {invalidDate: true}
        }

        return null
    }
}