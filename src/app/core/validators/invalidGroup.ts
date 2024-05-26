import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { groups } from "../../data/data";

export const invalidGroupValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value
        const group: string[] = [...groups]

        if(!group.includes(value)){
            return {invalidGroup: true}
        }

        return null
    }
}